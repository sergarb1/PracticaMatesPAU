#!/usr/bin/env node
/* Reasigna el campo bloque de los ejercicios a la taxonomía fina por tema.
   Solo cambia «bloque»; no toca enunciados, opciones ni respuestas.
   Uso: node scripts/reclasificar-bloques.mjs */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const MATERIAS = ['mates-ii', 'ccss-ii', 'mates-i', 'ccss-i'];
const ARCHIVOS = [];

for (const materia of MATERIAS) {
  const dir = path.join(ROOT, 'js', 'data', materia);
  for (const archivo of fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort()) {
    ARCHIVOS.push({ materia, archivo, ruta: path.join(dir, archivo) });
  }
}

function clasificar(ejercicio) {
  const id = ejercicio.id;
  const t = (ejercicio.titulo || '').toLowerCase();

  if (ejercicio.materia === 'mates-ii') {
    if (id.startsWith('m2-prob')) return 'probabilidad';
    if (id.startsWith('m2-alg')) {
      return /matriz|matrices|inversa|determinante|matricial|potencia/.test(t) ? 'matrices' : 'sistemas';
    }
    if (id.startsWith('m2-ana')) {
      if (/límite|limite|continuidad|indeterminaci|asíntota|asintota/.test(t)) return 'limites';
      if (/integral|área entre|area entre/.test(t)) return 'integrales';
      return 'derivadas';
    }
    if (id.startsWith('m2-geo')) {
      return /producto escalar|ángulo|angulo|^vectores\b/.test(t) ? 'vectores' : 'geometria';
    }
  }

  if (ejercicio.materia === 'ccss-ii') {
    if (/media|mediana|moda|regresión|regresion|desviación|desviacion|varianza|correlación|correlacion|cuartil|tabla de frecuencias/.test(t)) {
      return 'estadistica';
    }
    if (id.startsWith('cs2-alg')) {
      if (/programación lineal|programacion lineal|región factible|coste mínimo|mesas y sillas/.test(t)) return 'programacion-lineal';
      if (/matriz|matrices|matricial|determinante/.test(t)) return 'matrices';
      return 'sistemas';
    }
    if (id.startsWith('cs2-fun')) {
      if (/integral/.test(t)) return 'integrales';
      if (/máximo|maximo|mínimo|minimo|tangente|derivada|optimiz|ingresos/.test(t)) return 'derivadas';
      return 'funciones';
    }
    return 'probabilidad';
  }

  if (ejercicio.materia === 'mates-i') {
    if (id.startsWith('m1-alg')) return 'algebra';
    if (id.startsWith('m1-tri')) return 'trigonometria';
    if (id.startsWith('m1-geo')) return 'vectores';
    if (/límite|limite/.test(t)) return 'limites';
    if (/derivada|tangente/.test(t)) return 'derivadas';
    return 'funciones';
  }

  return ejercicio.bloque;
}

const recuento = {};

for (const item of ARCHIVOS) {
  const original = fs.readFileSync(item.ruta, 'utf8');
  const contexto = { window: {} };
  vm.createContext(contexto);
  vm.runInContext(original, contexto, { filename: item.ruta });
  const ejercicios = contexto.window.PAU_DATA.ejercicios;

  ejercicios.forEach((ejercicio) => {
    ejercicio.bloque = clasificar(ejercicio);
    recuento[ejercicio.materia] = recuento[ejercicio.materia] || {};
    recuento[ejercicio.materia][ejercicio.bloque] = (recuento[ejercicio.materia][ejercicio.bloque] || 0) + 1;
  });

  const eol = original.includes('\r\n') ? '\r\n' : '\n';
  const cabecera = original.slice(0, original.indexOf('(function () {')).replace(/\s+$/, '');
  const json = JSON.stringify(ejercicios, null, 2).split('\n').map((linea) => '    ' + linea).join(eol);
  const contenido = cabecera + eol + eol +
    '(function () {' + eol +
    '  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };' + eol +
    '  window.PAU_DATA.ejercicios.push(' + eol +
    '    ...' + json + eol +
    '  );' + eol +
    '})();' + eol;
  fs.writeFileSync(item.ruta, contenido, 'utf8');
}

console.log(JSON.stringify(recuento, null, 2));
