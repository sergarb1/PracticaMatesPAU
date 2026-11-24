#!/usr/bin/env node
/* Regenera los distractores numéricos de los apartados de opción múltiple.
   - No cambia la opción correcta ni su índice.
   - Iguala la precisión decimal y acota la magnitud según el dominio.
   - Usa respuestas de otros apartados y errores típicos como candidatos.
   Uso: node scripts/mejorar-distractores.mjs [--dry]
   No forma parte del flujo normal de la app. */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const DRY = process.argv.includes('--dry');
const MATERIAS = ['mates-ii', 'ccss-ii', 'mates-i', 'ccss-i'];
const ARCHIVOS = [];

for (const materia of MATERIAS) {
  const dir = path.join(ROOT, 'js', 'data', materia);
  for (const archivo of fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort()) {
    ARCHIVOS.push({ materia, archivo, ruta: path.join(dir, archivo) });
  }
}

const MENOS = '\u2212';

function parsear(texto) {
  if (typeof texto !== 'string') return null;
  const limpio = texto.replace(/\s|\u00a0/g, '').replace(/\u2212/g, '-').replace(',', '.');
  if (!/^-?\d+(\.\d+)?$/.test(limpio)) return null;
  const valor = Number(limpio);
  return Number.isFinite(valor) ? valor : null;
}

function decimalesDe(texto) {
  const limpio = String(texto).replace(/\u2212/g, '-');
  const coma = limpio.indexOf(',');
  return coma === -1 ? 0 : limpio.length - coma - 1;
}

function formatear(valor, decimales) {
  let texto = valor.toFixed(decimales);
  if (Number(texto) === 0) texto = (0).toFixed(decimales);
  return texto.replace('-', MENOS).replace('.', ',');
}

function redondear(valor, decimales) {
  return Number(valor.toFixed(decimales));
}

/* Dominio de la respuesta: decide qué valores son admisibles. */
function dominioDe(parte, ejercicio, valor) {
  const etiqueta = String(parte.etiqueta || '');
  const contexto = [etiqueta, ejercicio.titulo, ejercicio.enunciado, ejercicio.pista].join(' ');
  const esProbabilidad = /probabilidad|P\s*\(/i.test(etiqueta) || /probabilidad/i.test(ejercicio.titulo);
  if (esProbabilidad) return 'probabilidad';
  /* Ojo: «triángulo» contiene «ángulo»; exigimos que sea la palabra inicial. */
  const esAngulo = /(?:^|[^a-záéíóúü])(?:ángulo|angulo)(?:[^a-záéíóúü]|$)|grados|\^\\circ|°/i.test(etiqueta);
  if (esAngulo) {
    const rectaPlano = /recta.?\s*plano|plano.?\s*recta/i.test(etiqueta);
    return rectaPlano ? 'anguloRectaPlano' : 'angulo';
  }
  const noNegativo = /área|area|distancia|módulo|modulo|superficie|lado|altura|precio|coste|beneficio|ingreso|capital|unidades|cantidad|media|mediana|desviación|desviacion|percentil|amplitud|€|\bkg\b|\bcm\b|\bm\b/i;
  if (noNegativo.test(etiqueta) || valor >= 0 && /^[a-z]$/i.test(etiqueta)) return 'noNegativo';
  return 'general';
}

function limitesDe(dominio, valor) {
  if (dominio === 'probabilidad') return { min: 0, max: 1, cap: 1 };
  if (dominio === 'anguloRectaPlano') return { min: 0, max: 90, cap: Infinity };
  if (dominio === 'angulo') return { min: 0, max: 180, cap: Infinity };
  if (dominio === 'noNegativo') return { min: 0, max: Infinity, cap: null };
  return { min: -Infinity, max: Infinity, cap: null };
}

function candidatosDe(parte, ejercicio, valoresCorrectos) {
  const v = valoresCorrectos.correcto;
  const dec = decimalesDe(parte.opciones[parte.correcta]);
  const dominio = dominioDe(parte, ejercicio, v);
  const { min, max, cap } = limitesDe(dominio, v);
  const paso = Math.pow(10, -Math.min(dec, 2));
  const grande = Math.abs(v) >= 20;
  const candidatos = [];

  const anadir = (valor) => {
    if (typeof valor !== 'number' || !Number.isFinite(valor)) return;
    if (valor < min - 1e-9 || valor > max + 1e-9) return;
    const redondeado = redondear(Math.min(max, Math.max(min, valor)), dec);
    if (Math.abs(redondeado - v) < paso / 2) return;
    const formato = formatear(redondeado, dec);
    if (candidatos.some((c) => c.formato === formato)) return;
    candidatos.push({ valor: redondeado, formato: formato });
  };

  const otros = valoresCorrectos.otros
    .filter((otro) => otro !== null && otro !== v)
    .sort((a, b) => Math.abs(a - v) - Math.abs(b - v));

  if (dominio === 'probabilidad') {
    anadir(1 - v);
    anadir(v * 2);
    anadir(v / 2);
    otros.forEach(anadir);
    [v + 0.1, v - 0.1, v + 0.05, v - 0.05, 1 - v / 2, (1 - v) / 2].forEach(anadir);
  } else if (dominio === 'angulo' || dominio === 'anguloRectaPlano') {
    const complemento = dominio === 'anguloRectaPlano' ? 90 - v : 180 - v;
    anadir(complemento);
    anadir(90 - v);
    [10, -10, 5, -5].forEach((delta) => anadir(v + delta));
    anadir(v * 2);
    anadir(v / 2);
    otros.forEach(anadir);
  } else if (Math.abs(v) < 1e-9) {
    anadir(1);
    anadir(-1);
    anadir(2);
    anadir(-2);
    anadir(3);
  } else if (dec === 0) {
    [1, -1, 2, -2].forEach((delta) => anadir(v + delta));
    otros.forEach(anadir);
    anadir(v * 2);
    anadir(v / 2);
    if (grande) [0.9, 1.1, 0.8, 1.2].forEach((factor) => anadir(v * factor));
  } else if (/media|mediana|desviación|desviacion|varianza|moda/i.test(String(parte.etiqueta || ''))) {
    [5, -5, 10, -10].forEach((k) => anadir(v + k * paso));
    [1, -1].forEach((delta) => anadir(v + delta));
    otros.forEach(anadir);
    anadir(v * 2);
    anadir(v / 2);
  } else {
    anadir(v * 2);
    anadir(v / 2);
    otros.forEach(anadir);
    [1, -1, 2, -2, 5, -5].forEach((k) => anadir(v + k * paso));
    if (grande) [0.9, 1.1, 0.8, 1.2, 0.95, 1.05].forEach((factor) => anadir(v * factor));
    anadir(-v);
  }

  /* Reserva: valores cercanos que siguen siendo creíbles. */
  [3, -3, 4, -4, 5, -5].forEach((k) => anadir(v + k * paso));
  [0.9, 1.1, 0.75, 1.25, 0.5, 2, 1.5].forEach((factor) => anadir(v * factor));
  [2, -2, 5, -5, 10, -10].forEach((delta) => anadir(v + delta));

  const limite = Math.abs(v) < 1e-9
    ? 3
    : (cap == null ? (Math.abs(v) >= 20 ? Math.abs(v) * 0.6 : Math.abs(v)) : cap);
  const filtrados = candidatos.filter((c) => Math.abs(c.valor - v) <= limite + 1e-9);

  /* Si el dominio deja pocas opciones, se relaja la distancia pero no el dominio. */
  if (filtrados.length >= 3) return filtrados.map((c) => c.formato);
  return candidatos.map((c) => c.formato);
}

let totalPartes = 0;
let partesNumericas = 0;
let partesCambiadas = 0;
let opcionesCambiadas = 0;
let precisionAntes = 0;

for (const item of ARCHIVOS) {
  const original = fs.readFileSync(item.ruta, 'utf8');
  const contexto = { window: {} };
  vm.createContext(contexto);
  vm.runInContext(original, contexto, { filename: item.ruta });
  const ejercicios = contexto.window.PAU_DATA.ejercicios;
  let tocado = false;

  for (const ejercicio of ejercicios) {
    const partes = Array.isArray(ejercicio.partes) ? ejercicio.partes : [ejercicio];
    const valores = partes.map((parte) => {
      const valoresParte = (parte.opciones || []).map(parsear);
      return valoresParte.every((v) => v !== null) ? valoresParte : null;
    });

    partes.forEach((parte, indice) => {
      totalPartes += 1;
      const valoresParte = valores[indice];
      if (!valoresParte) return;
      if (!Number.isInteger(parte.correcta) || !parte.opciones[parte.correcta]) return;
      partesNumericas += 1;

      const dec = decimalesDe(parte.opciones[parte.correcta]);
      parte.opciones.forEach((opcion, j) => {
        if (j !== parte.correcta && decimalesDe(opcion) !== dec) precisionAntes += 1;
      });

      const correcto = valoresParte[parte.correcta];
      const otros = [];
      partes.forEach((otra, j) => {
        if (j === indice || !valores[j]) return;
        otros.push(valores[j][otra.correcta]);
      });

      const nuevos = candidatosDe(parte, ejercicio, { correcto, otros });
      if (nuevos.length < 3) {
        console.warn(`⚠ ${ejercicio.id} · apartado ${indice + 1}: solo ${nuevos.length} distractores posibles`);
        return;
      }

      const reemplazo = parte.opciones.slice();
      let cursor = 0;
      reemplazo.forEach((opcion, j) => {
        if (j === parte.correcta) return;
        reemplazo[j] = nuevos[cursor];
        cursor += 1;
      });

      const cambiadas = reemplazo.filter((opcion, j) => opcion !== parte.opciones[j]).length;
      if (cambiadas) {
        opcionesCambiadas += cambiadas;
        partesCambiadas += 1;
        parte.opciones = reemplazo;
        tocado = true;
      }
    });
  }

  if (!tocado || DRY) continue;

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

console.log(`Partes: ${totalPartes} · numéricas: ${partesNumericas} · modificadas: ${partesCambiadas} · opciones nuevas: ${opcionesCambiadas} · desajustes de precisión previos: ${precisionAntes}${DRY ? ' (simulación)' : ''}`);
