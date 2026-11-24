#!/usr/bin/env node
/* Valida el banco de ejercicios sin dependencias.
   Uso: npm run validate */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const MATERIAS = {
  'mates-ii': ['probabilidad', 'matrices', 'sistemas', 'complejos', 'limites', 'derivadas', 'integrales', 'optimizacion', 'vectores', 'rectas-planos', 'geometria'],
  'ccss-ii': ['probabilidad', 'estadistica', 'inferencia', 'matrices', 'sistemas', 'sucesiones', 'programacion-lineal', 'funciones', 'limites', 'derivadas', 'integrales'],
  'mates-i': ['algebra', 'numeros-reales', 'sucesiones', 'trigonometria', 'conicas', 'vectores', 'funciones', 'limites', 'derivadas'],
  'ccss-i': ['numerico', 'algebra', 'sucesiones', 'estadistica', 'funciones', 'probabilidad']
};
const TIPOS = ['opcion'];
const ERRORES = [];
const AVISOS = [];
const archivos = [];

for (const materia of Object.keys(MATERIAS)) {
  const dir = path.join(ROOT, 'js', 'data', materia);
  if (!fs.existsSync(dir)) {
    ERRORES.push(`Falta la carpeta js/data/${materia}`);
    continue;
  }
  for (const archivo of fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort()) {
    archivos.push({ materia, archivo, ruta: path.join(dir, archivo) });
  }
}

const contexto = { window: {} };
vm.createContext(contexto);
for (const item of archivos) {
  try {
    vm.runInContext(fs.readFileSync(item.ruta, 'utf8'), contexto, { filename: item.ruta });
  } catch (error) {
    ERRORES.push(`${item.ruta}: no se puede ejecutar (${error.message})`);
  }
}

const ejercicios = contexto.window.PAU_DATA ? contexto.window.PAU_DATA.ejercicios : [];
if (!ejercicios.length) {
  ERRORES.push('No se ha cargado ningún ejercicio');
}

const ids = new Set();
const control = /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/;

function texto(valor, campo, id) {
  if (typeof valor !== 'string' || !valor.trim()) {
    ERRORES.push(`${id}: «${campo}» debe ser un texto no vacío`);
    return;
  }
  if (control.test(valor)) {
    ERRORES.push(`${id}: «${campo}» contiene caracteres de control (revisa los backslashes de LaTeX)`);
  }
}

for (const ej of ejercicios) {
  const id = ej.id || '(sin id)';
  if (!ej.id || typeof ej.id !== 'string') {
    ERRORES.push(`${id}: falta el id`);
  } else if (ids.has(ej.id)) {
    ERRORES.push(`${id}: id duplicado`);
  } else {
    ids.add(ej.id);
  }
  if (!MATERIAS[ej.materia]) {
    ERRORES.push(`${id}: materia desconocida «${ej.materia}»`);
  } else if (!MATERIAS[ej.materia].includes(ej.bloque)) {
    ERRORES.push(`${id}: bloque «${ej.bloque}» no válido para ${ej.materia}`);
  }
  if (![1, 2, 3].includes(ej.nivel)) {
    ERRORES.push(`${id}: nivel debe ser 1, 2 o 3`);
  }
  if (!TIPOS.includes(ej.tipo)) {
    ERRORES.push(`${id}: tipo «${ej.tipo}» no válido`);
  }
  texto(ej.titulo, 'titulo', id);
  texto(ej.fuente, 'fuente', id);
  texto(ej.enunciado, 'enunciado', id);
  texto(ej.pista, 'pista', id);
  texto(ej.truco, 'truco', id);
  texto(ej.errorTipico, 'errorTipico', id);

  if (!Array.isArray(ej.solucion) || ej.solucion.length < 2 || ej.solucion.length > 6) {
    ERRORES.push(`${id}: solucion debe tener entre 2 y 6 pasos`);
  } else {
    ej.solucion.forEach((paso, i) => {
      texto(paso.t, `solucion[${i}].t`, id);
      texto(paso.d, `solucion[${i}].d`, id);
    });
  }

  if (ej.tipo === 'opcion' && Array.isArray(ej.partes)) {
    if (ej.partes.length < 1 || ej.partes.length > 4) {
      ERRORES.push(`${id}: partes debe tener entre 1 y 4 apartados`);
    }
    ej.partes.forEach((parte, i) => {
      texto(parte.etiqueta, `partes[${i}].etiqueta`, id);
      if ('respuesta' in parte || 'tolerancia' in parte) {
        ERRORES.push(`${id}: partes[${i}] es de opción y no debe tener respuesta ni tolerancia`);
      }
      if (!Array.isArray(parte.opciones) || parte.opciones.length !== 4) {
        ERRORES.push(`${id}: partes[${i}].opciones debe tener 4 elementos`);
      } else {
        parte.opciones.forEach((opcion, j) => texto(opcion, `partes[${i}].opciones[${j}]`, id));
        if (new Set(parte.opciones).size !== parte.opciones.length) {
          ERRORES.push(`${id}: partes[${i}].opciones tiene opciones duplicadas`);
        }
      }
      if (!Number.isInteger(parte.correcta) || !Array.isArray(parte.opciones) || parte.correcta < 0 || parte.correcta >= parte.opciones.length) {
        ERRORES.push(`${id}: partes[${i}].correcta debe ser un índice válido de opciones`);
      }
    });
  } else if (ej.tipo === 'opcion') {
    if (!Array.isArray(ej.opciones) || ej.opciones.length !== 4) {
      ERRORES.push(`${id}: opciones debe tener 4 elementos`);
    } else if (new Set(ej.opciones).size !== ej.opciones.length) {
      ERRORES.push(`${id}: opciones tiene opciones duplicadas`);
    }
    if (!Number.isInteger(ej.correcta) || !Array.isArray(ej.opciones) || ej.correcta < 0 || ej.correcta >= ej.opciones.length) {
      ERRORES.push(`${id}: correcta debe ser un índice válido de opciones`);
    }
    if (Array.isArray(ej.opciones)) {
      ej.opciones.forEach((opcion, i) => texto(opcion, `opciones[${i}]`, id));
    }
  }

  if (!archivosEstanBien(ej, id)) {
    /* los errores ya se han añadido */
  }
}

function archivosEstanBien(ej, id) {
  const item = archivos.find((a) => ej.id && fs.readFileSync(a.ruta, 'utf8').includes(`"id": "${ej.id}"`));
  if (!item) return true;
  const base = item.archivo.replace(/\.js$/, '');
  if (/^nivel-[123]$/.test(base)) {
    if (String(ej.nivel) !== base.replace('nivel-', '')) {
      ERRORES.push(`${id}: está en ${item.archivo} pero su nivel es ${ej.nivel}`);
    }
  } else if (ej.bloque !== base) {
    ERRORES.push(`${id}: está en ${item.archivo} pero su bloque es ${ej.bloque}`);
  }
  if (ej.materia !== item.materia) {
    ERRORES.push(`${id}: está en la carpeta ${item.materia} pero su materia es ${ej.materia}`);
  }
  return true;
}

/* Revisión de recursos precacheados por el Service Worker */
const swRuta = path.join(ROOT, 'sw.js');
if (fs.existsSync(swRuta)) {
  const sw = fs.readFileSync(swRuta, 'utf8');
  const bloque = sw.match(/const APP_SHELL = \[([\s\S]*?)\];/);
  if (!bloque) {
    ERRORES.push('sw.js: no se encuentra APP_SHELL');
  } else {
    for (const coincidencia of bloque[1].matchAll(/'([^']+)'/g)) {
      const recurso = coincidencia[1];
      if (recurso === './') continue;
      const ruta = path.join(ROOT, recurso.replace(/^\.\//, ''));
      if (!fs.existsSync(ruta)) ERRORES.push(`sw.js precachea un recurso inexistente: ${recurso}`);
    }
  }
} else {
  ERRORES.push('Falta sw.js');
}

/* Recuentos */
const porMateria = {};
for (const ej of ejercicios) {
  porMateria[ej.materia] = porMateria[ej.materia] || { total: 0, niveles: {}, tipos: {} };
  porMateria[ej.materia].total += 1;
  porMateria[ej.materia].niveles[ej.nivel] = (porMateria[ej.materia].niveles[ej.nivel] || 0) + 1;
  porMateria[ej.materia].tipos[ej.tipo] = (porMateria[ej.materia].tipos[ej.tipo] || 0) + 1;
}

console.log('PAU Mates CV · validación del banco');
console.log(`Archivos: ${archivos.length} · Ejercicios: ${ejercicios.length} · IDs únicos: ${ids.size}`);
for (const [materia, datos] of Object.entries(porMateria)) {
  const niveles = Object.entries(datos.niveles).map(([n, c]) => `n${n}:${c}`).join(' ');
  const tipos = Object.entries(datos.tipos).map(([t, c]) => `${t}:${c}`).join(' ');
  console.log(`- ${materia.padEnd(9)} ${String(datos.total).padStart(2)}  ${niveles}  ${tipos}`);
}

const nivel3 = ejercicios.filter((e) => e.nivel === 3).length;
if (nivel3 < 10) AVISOS.push(`Solo hay ${nivel3} ejercicios de nivel PAU (nivel 3)`);

for (const aviso of AVISOS) console.log('Aviso: ' + aviso);
if (ERRORES.length) {
  console.error(`\n${ERRORES.length} error(es):`);
  for (const error of ERRORES) console.error(' - ' + error);
  process.exit(1);
}
console.log('\nTodo correcto.');
