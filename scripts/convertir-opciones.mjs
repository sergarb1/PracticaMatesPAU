#!/usr/bin/env node
/* Conversión puntual del banco: cada apartado numérico pasa a 4 opciones.
   Uso: node scripts/convertir-opciones.mjs
   No forma parte del flujo normal de la app. */

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

function hash(texto) {
  let h = 2166136261;
  for (let i = 0; i < texto.length; i += 1) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function generador(semilla) {
  let a = semilla >>> 0;
  return function () {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function barajar(lista, semilla) {
  const azar = generador(semilla);
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(azar() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function formatear(valor) {
  let texto = Number(valor).toFixed(4);
  texto = texto.replace(/0+$/, '').replace(/\.$/, '');
  if (texto === '-0') texto = '0';
  return texto.replace('-', '−').replace('.', ',');
}

function redondear(valor) {
  const magnitud = Math.abs(valor);
  const decimales = magnitud >= 10 ? 2 : magnitud >= 1 ? 3 : 4;
  return Number(valor.toFixed(decimales));
}

const NO_NEGATIVO = /distancia|área|area|módulo|modulo|superficie|lado|altura|capital|precio|beneficio|ingreso|coste|unidades|cantidad|media|mediana|desviación|desviacion|percentil|rango|número total|numero total|probabilidad|amplitud|frecuencia/i;
const UNIDAD = /€|kg|cm|dm\b|\(m\)|\(dm|\(cm|\(kg|m\^2|\\text\{dm\}|\\text\{cm\}/i;
function construirOpciones(parte, id, indice) {
  const v = parte.respuesta;
  const tol = parte.tolerancia == null ? 0.01 : parte.tolerancia;
  const etiqueta = parte.etiqueta || '';
  const esAngulo = /ángulo|angulo|grados|\^\\circ|°/.test(etiqueta);
  const esProbabilidad = /probabilidad|P\(/.test(etiqueta) || (v > 0 && v < 1 && !esAngulo && !UNIDAD.test(etiqueta));
  const noNegativo = esProbabilidad || NO_NEGATIVO.test(etiqueta) || UNIDAD.test(etiqueta);

  let dominio = 'general';
  if (esProbabilidad) dominio = 'probabilidad';
  else if (esAngulo) dominio = 'angulo';
  else if (noNegativo) dominio = 'noNegativo';

  const candidatos = [];
  const anadir = (x) => {
    if (typeof x !== 'number' || !Number.isFinite(x)) return;
    const redondeado = redondear(x);
    if (dominio === 'probabilidad' && (redondeado < 0 || redondeado > 1)) return;
    if (dominio === 'noNegativo' && redondeado < 0) return;
    if (dominio === 'angulo' && (redondeado < 0 || redondeado > 180)) return;
    if (Math.abs(redondeado - v) <= Math.max(tol * 3, 1e-9)) return;
    candidatos.push(redondeado);
  };

  if (dominio === 'probabilidad') {
    [1 - v, v / 2, v * 2, v + 0.1, v - 0.1, v + 0.05, v - 0.05, v + 0.2, v - 0.2,
      v + 0.25, v - 0.25, 1 - v / 2, v * 1.2, v * 0.8, v + 0.15, v - 0.15].forEach(anadir);
  } else if (dominio === 'angulo') {
    [180 - v, 90 - v, v + 10, v - 10, v + 5, v - 5, v / 2, v * 2, 180 - v / 2, 90 + v / 2].forEach(anadir);
  } else if (dominio === 'noNegativo') {
    [v * 1.1, v * 0.9, v / 2, v * 2, v + 1, v - 1, v + 10, v - 10, v * 1.2, v * 0.8,
      v + tol * 100, v - tol * 100, v + 5, v - 5].forEach(anadir);
  } else {
    [-v, v + 1, v - 1, v * 2, v / 2, v + 0.1, v - 0.1, v + 10, v - 10, v * 1.1,
      v * 0.9, v + 2, v - 2, v + 0.5, v - 0.5].forEach(anadir);
  }

  /* Reserva: garantiza tres distractores distintos incluso en casos límite. */
  [v + 2, v - 2, v + 3, v - 3, v + 5, v - 5, v + 20, v - 20, v / 3, v * 3,
    v + 0.2, v - 0.2, v + 0.01, v - 0.01, v + 0.001, v - 0.001].forEach(anadir);

  const correcta = formatear(v);
  const elegidas = [];
  for (const candidato of candidatos) {
    const texto = formatear(candidato);
    if (texto === correcta) continue;
    if (elegidas.some((opcion) => opcion.texto === texto)) continue;
    elegidas.push({ texto, valor: candidato });
    if (elegidas.length === 3) break;
  }

  if (elegidas.length !== 3) {
    throw new Error(`${id} · apartado ${indice + 1}: no se han generado 3 distractores`);
  }

  const opciones = barajar([{ texto: correcta, valor: v, correcta: true }].concat(
    elegidas.map((opcion) => ({ texto: opcion.texto, valor: opcion.valor, correcta: false }))
  ), hash(id + ':' + indice));

  return {
    etiqueta: parte.etiqueta,
    opciones: opciones.map((opcion) => opcion.texto),
    correcta: opciones.findIndex((opcion) => opcion.correcta)
  };
}

function convertirEjercicio(ej) {
  if (ej.tipo !== 'numerico') return ej;
  const partes = ej.partes.map((parte, i) => construirOpciones(parte, ej.id, i));
  return {
    id: ej.id,
    materia: ej.materia,
    bloque: ej.bloque,
    nivel: ej.nivel,
    tipo: 'opcion',
    titulo: ej.titulo,
    fuente: ej.fuente,
    enunciado: ej.enunciado,
    pista: ej.pista,
    partes,
    solucion: ej.solucion,
    truco: ej.truco,
    errorTipico: ej.errorTipico
  };
}

let total = 0;
let convertidos = 0;
let partesConvertidas = 0;

for (const item of ARCHIVOS) {
  const original = fs.readFileSync(item.ruta, 'utf8');
  const contexto = { window: {} };
  vm.createContext(contexto);
  vm.runInContext(original, contexto, { filename: item.ruta });
  const ejercicios = contexto.window.PAU_DATA.ejercicios;
  const salida = ejercicios.map((ej) => {
    total += 1;
    const nuevo = convertirEjercicio(ej);
    if (nuevo !== ej) {
      convertidos += 1;
      partesConvertidas += nuevo.partes.length;
    }
    return nuevo;
  });

  const eol = original.includes('\r\n') ? '\r\n' : '\n';
  const cabeceraOriginal = original.slice(0, original.indexOf('(function () {')).replace(/\s+$/, '');
  const cabecera = /Estilos:/.test(cabeceraOriginal)
    ? cabeceraOriginal.replace(/[ \t]*Estilos:[^\r\n]*/, 'Todas las preguntas son de opción múltiple (4 opciones por apartado).')
    : cabeceraOriginal + eol + '   Todas las preguntas son de opción múltiple (4 opciones por apartado).';
  const json = JSON.stringify(salida, null, 2).split('\n').map((linea) => '    ' + linea).join(eol);
  const contenido = cabecera + eol + eol +
    '(function () {' + eol +
    '  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };' + eol +
    '  window.PAU_DATA.ejercicios.push(' + eol +
    '    ...' + json + eol +
    '  );' + eol +
    '})();' + eol;
  fs.writeFileSync(item.ruta, contenido, 'utf8');
}

console.log(`Ejercicios: ${total} · convertidos: ${convertidos} · apartados con opciones: ${partesConvertidas}`);
