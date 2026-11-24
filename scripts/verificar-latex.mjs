#!/usr/bin/env node
/* Renderiza con KaTeX todas las fórmulas del banco para detectar LaTeX roto.
   Uso: node scripts/verificar-latex.mjs */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const katex = require('../vendor/katex.min.js');
const ROOT = process.cwd();
const MATERIAS = ['mates-ii', 'ccss-ii', 'mates-i', 'ccss-i'];

const ejercicios = [];
for (const materia of MATERIAS) {
  const dir = path.join(ROOT, 'js', 'data', materia);
  for (const archivo of fs.readdirSync(dir).filter((f) => f.endsWith('.js'))) {
    const contexto = { window: {} };
    vm.createContext(contexto);
    vm.runInContext(fs.readFileSync(path.join(dir, archivo), 'utf8'), contexto, { filename: archivo });
    ejercicios.push(...contexto.window.PAU_DATA.ejercicios);
  }
}

function textos(ejercicio) {
  const salida = [];
  for (const campo of ['titulo', 'enunciado', 'pista', 'truco', 'errorTipico']) {
    if (typeof ejercicio[campo] === 'string') salida.push(ejercicio[campo]);
  }
  for (const paso of ejercicio.solucion || []) {
    if (paso.t) salida.push(paso.t);
    if (paso.d) salida.push(paso.d);
  }
  const partes = Array.isArray(ejercicio.partes) ? ejercicio.partes : [ejercicio];
  for (const parte of partes) {
    if (parte.etiqueta) salida.push(parte.etiqueta);
    const opciones = Array.isArray(parte.opciones)
      ? parte.opciones
      : (Array.isArray(ejercicio.opciones) ? ejercicio.opciones : []);
    opciones.forEach((opcion) => {
      if (typeof opcion === 'string') salida.push(opcion);
    });
  }
  return salida;
}

let formulas = 0;
const errores = [];

for (const ejercicio of ejercicios) {
  for (const texto of textos(ejercicio)) {
    const re = /\$\$([\s\S]+?)\$\$|\$([^$]+)\$/g;
    let coincidencia;
    while ((coincidencia = re.exec(texto))) {
      const tex = (coincidencia[1] || coincidencia[2]).trim();
      if (!tex) continue;
      formulas += 1;
      try {
        katex.renderToString(tex, { displayMode: !!coincidencia[1], throwOnError: true, strict: false });
      } catch (error) {
        errores.push(`${ejercicio.id} :: ${tex} :: ${String(error.message).split('\n')[0]}`);
      }
    }
  }
}

console.log(`Fórmulas comprobadas: ${formulas} · errores: ${errores.length}`);
errores.slice(0, 20).forEach((error) => console.log(' - ' + error));
process.exit(errores.length ? 1 : 0);
