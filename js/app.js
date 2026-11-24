/* PAU Mates CV · motor de la aplicación
   Sin framework, sin build. Estado en localStorage, contenido en window.PAU_DATA. */
(function () {
  'use strict';

  const DATA = (window.PAU_DATA && window.PAU_DATA.ejercicios) || [];
  const FORMULAS = window.PAU_FORMULAS || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const L = String.raw;

  const MATERIAS = {
    'mates-ii': {
      nombre: 'Matemáticas II',
      corto: 'Mates II',
      curso: 2,
      rama: 'Ciencias',
      pau: true,
      desc: 'Álgebra, análisis, geometría y probabilidad. La materia de la PAU de Ciencias.',
      bloques: ['probabilidad', 'matrices', 'sistemas', 'complejos', 'limites', 'derivadas', 'integrales', 'optimizacion', 'vectores', 'rectas-planos', 'geometria']
    },
    'ccss-ii': {
      nombre: 'Matemáticas Aplicadas a las CCSS II',
      corto: 'CCSS II',
      curso: 2,
      rama: 'Sociales',
      pau: true,
      desc: 'Matrices, programación lineal, funciones, probabilidad y estadística.',
      bloques: ['probabilidad', 'estadistica', 'inferencia', 'matrices', 'sistemas', 'sucesiones', 'programacion-lineal', 'funciones', 'limites', 'derivadas', 'integrales']
    },
    'mates-i': {
      nombre: 'Matemáticas I',
      corto: 'Mates I',
      curso: 1,
      rama: 'Ciencias',
      pau: false,
      desc: 'Álgebra, trigonometría, vectores y cálculo. La base de Matemáticas II.',
      bloques: ['algebra', 'numeros-reales', 'sucesiones', 'trigonometria', 'conicas', 'vectores', 'funciones', 'limites', 'derivadas']
    },
    'ccss-i': {
      nombre: 'Matemáticas Aplicadas a las CCSS I',
      corto: 'CCSS I',
      curso: 1,
      rama: 'Sociales',
      pau: false,
      desc: 'Porcentajes, estadística, funciones y probabilidad para empezar con fuerza.',
      bloques: ['numerico', 'algebra', 'sucesiones', 'estadistica', 'funciones', 'probabilidad']
    }
  };

  const BLOQUES = {
    probabilidad: { nombre: 'Probabilidad', icono: '🎲' },
    estadistica: { nombre: 'Estadística', icono: '📊' },
    numerico: { nombre: 'Números', icono: '🧮' },
    algebra: { nombre: 'Álgebra', icono: '🔢' },
    matrices: { nombre: 'Matrices', icono: '🔳' },
    sistemas: { nombre: 'Sistemas', icono: '🧩' },
    'programacion-lineal': { nombre: 'Programación lineal', icono: '🗺️' },
    funciones: { nombre: 'Funciones', icono: '📈' },
    limites: { nombre: 'Límites y continuidad', icono: '♾️' },
    derivadas: { nombre: 'Derivadas', icono: '📉' },
    integrales: { nombre: 'Integrales', icono: '∫' },
    vectores: { nombre: 'Vectores', icono: '🧭' },
    geometria: { nombre: 'Geometría', icono: '📐' },
    'rectas-planos': { nombre: 'Rectas y planos', icono: '🛣️' },
    trigonometria: { nombre: 'Trigonometría', icono: '📏' },
    complejos: { nombre: 'Complejos', icono: 'ℂ' },
    optimizacion: { nombre: 'Optimización', icono: '🎯' },
    sucesiones: { nombre: 'Sucesiones', icono: '🔗' },
    inferencia: { nombre: 'Inferencia', icono: '🎚️' },
    'numeros-reales': { nombre: 'Números reales', icono: '√' },
    conicas: { nombre: 'Cónicas', icono: '◯' }
  };

  const NIVELES = { 1: 'Básico', 2: 'Medio', 3: 'Nivel PAU' };
  const STORAGE = 'paumates.progreso.v1';
  const VISTAS = ['entrenar', 'pasos', 'simulacro', 'formulario', 'guia', 'progreso'];

  /* ------------------------------ progreso ------------------------------ */

  function cargarProgreso() {
    const base = {
      version: 1,
      ejercicios: {},
      marcados: [],
      historial: [],
      racha: { dias: 0, ultimo: null },
      simulacros: []
    };
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE) || 'null');
      if (!raw || typeof raw !== 'object') return base;
      return Object.assign(base, raw, {
        racha: Object.assign({}, base.racha, raw.racha || {}),
        ejercicios: raw.ejercicios || {},
        marcados: Array.isArray(raw.marcados) ? raw.marcados : [],
        historial: Array.isArray(raw.historial) ? raw.historial : [],
        simulacros: Array.isArray(raw.simulacros) ? raw.simulacros : []
      });
    } catch (error) {
      return base;
    }
  }

  const Store = {
    data: cargarProgreso(),
    guardar() {
      try {
        localStorage.setItem(STORAGE, JSON.stringify(this.data));
      } catch (error) {
        /* modo privado o cuota llena: la app sigue funcionando en memoria */
      }
      actualizarCabecera();
    },
    diaClave(fecha) {
      const d = fecha || new Date();
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    },
    marcarDia() {
      const hoy = this.diaClave();
      if (this.data.racha.ultimo === hoy) return;
      const ayer = new Date();
      ayer.setDate(ayer.getDate() - 1);
      this.data.racha.dias = this.data.racha.ultimo === this.diaClave(ayer) ? (this.data.racha.dias || 0) + 1 : 1;
      this.data.racha.ultimo = hoy;
    },
    registrar(id, acierto) {
      const registro = this.data.ejercicios[id] || { n: 0, ok: 0 };
      registro.n += 1;
      if (acierto) registro.ok += 1;
      registro.ultimo = Date.now();
      registro.estado = acierto ? 'acertado' : 'fallado';
      this.data.ejercicios[id] = registro;
      this.marcarDia();
      this.data.historial.unshift({ id: id, ok: !!acierto, fecha: Date.now() });
      this.data.historial = this.data.historial.slice(0, 80);
      this.guardar();
    },
    marcado(id) {
      return this.data.marcados.indexOf(id) !== -1;
    },
    alternarMarcado(id) {
      const i = this.data.marcados.indexOf(id);
      if (i === -1) this.data.marcados.push(id);
      else this.data.marcados.splice(i, 1);
      this.guardar();
      return this.marcado(id);
    },
    registrarSimulacro(entrada) {
      this.data.simulacros.unshift(entrada);
      this.data.simulacros = this.data.simulacros.slice(0, 20);
      this.guardar();
    },
    reiniciar() {
      this.data = {
        version: 1,
        ejercicios: {},
        marcados: [],
        historial: [],
        racha: { dias: 0, ultimo: null },
        simulacros: []
      };
      this.guardar();
    }
  };

  /* ------------------------------- estado ------------------------------- */

  const state = {
    vista: 'entrenar',
    materia: MATERIAS[localStorage.getItem('paumates.materia')] ? localStorage.getItem('paumates.materia') : 'mates-ii',
    bloque: 'todos',
    nivel: 'todos',
    soloMarcados: false,
    semilla: null,
    lista: [],
    idx: 0,
    firma: '',
    comprobado: false,
    registrado: false,
    pista: false,
    solucion: false,
    pasos: null,
    sim: null,
    timer: null
  };

  /* ------------------------------ utilidades ----------------------------- */

  function escapar(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function math(raiz) {
    if (!raiz || !window.renderMathInElement) return;
    try {
      window.renderMathInElement(raiz, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false,
        strict: false,
        errorColor: '#e11d48'
      });
    } catch (error) {
      /* si KaTeX falla, se muestra el texto original */
    }
  }

  function numero(valor, decimales) {
    const n = Number(valor);
    if (!isFinite(n)) return '—';
    return n.toFixed(decimales == null ? 2 : decimales).replace('.', ',');
  }

  function parsearNumero(texto) {
    if (typeof texto !== 'string') return null;
    let t = texto.trim().replace(/\u00a0/g, '').replace(/\s+/g, '').replace(',', '.');
    if (!t) return null;
    if (t.indexOf('/') !== -1) {
      const partes = t.split('/');
      if (partes.length !== 2) return null;
      const a = Number(partes[0]);
      const b = Number(partes[1]);
      if (!isFinite(a) || !isFinite(b) || b === 0) return null;
      return a / b;
    }
    const n = Number(t);
    return isFinite(n) ? n : null;
  }

  function hash(texto) {
    let h = 2166136261;
    for (let i = 0; i < texto.length; i += 1) {
      h ^= texto.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mezclar(lista) {
    const copia = lista.slice();
    for (let i = copia.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function elegirAlAzar(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }

  function progresoMateria(materia) {
    const lista = DATA.filter((e) => e.materia === materia);
    const hechos = lista.filter((e) => {
      const r = Store.data.ejercicios[e.id];
      return r && r.estado === 'acertado';
    }).length;
    return {
      total: lista.length,
      hechos: hechos,
      pct: lista.length ? Math.round((hechos / lista.length) * 100) : 0
    };
  }

  function resumenGlobal() {
    const ids = new Set(DATA.map((e) => e.id));
    let dominados = 0;
    let intentos = 0;
    let aciertos = 0;
    Object.keys(Store.data.ejercicios).forEach((id) => {
      if (!ids.has(id)) return;
      const r = Store.data.ejercicios[id];
      if (r.estado === 'acertado') dominados += 1;
      intentos += r.n || 0;
      aciertos += r.ok || 0;
    });
    return {
      total: DATA.length,
      dominados: dominados,
      intentos: intentos,
      aciertos: aciertos,
      precision: intentos ? Math.round((aciertos / intentos) * 100) : 0
    };
  }

  function actualizarCabecera() {
    const racha = $('#hdr-racha');
    const resueltos = $('#hdr-resueltos');
    if (racha) racha.textContent = Store.data.racha.dias || 0;
    if (resueltos) resueltos.textContent = resumenGlobal().dominados;
    $$('.nav-link').forEach((a) => {
      const activo = a.dataset.vista === state.vista;
      a.classList.toggle('activo', activo);
      if (activo) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function toast(mensaje, tono) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = mensaje;
    el.className = 'toast visible' + (tono ? ' toast-' + tono : '');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
      el.className = 'toast';
    }, 3600);
  }

  /* -------------------------------- router ------------------------------ */

  function rutaActual() {
    const v = (location.hash || '').replace(/^#\/?/, '').split('?')[0];
    return VISTAS.indexOf(v) !== -1 ? v : 'entrenar';
  }

  function ir(vista) {
    if (rutaActual() === vista) {
      state.vista = vista;
      render();
    } else {
      location.hash = '#/' + vista;
    }
  }

  function alCambiarRuta() {
    const vista = rutaActual();
    const cambio = vista !== state.vista;
    state.vista = vista;
    if (cambio) window.scrollTo({ top: 0, behavior: 'auto' });
    render();
  }

  function render() {
    actualizarCabecera();
    if (state.vista !== 'simulacro') pararTimer();
    const vista = $('#vista');
    if (!vista) return;
    if (state.vista === 'entrenar') renderEntrenar(vista);
    else if (state.vista === 'pasos') renderPasos(vista);
    else if (state.vista === 'simulacro') renderSimulacro(vista);
    else if (state.vista === 'formulario') renderFormulario(vista);
    else if (state.vista === 'guia') renderGuia(vista);
    else if (state.vista === 'progreso') renderProgreso(vista);
    math(vista);
  }

  /* ------------------------------- práctico ----------------------------- */

  function ejerciciosDe(materia) {
    return DATA.filter((e) => e.materia === materia);
  }

  function filtrarPractica() {
    let lista = ejerciciosDe(state.materia).filter((e) => {
      if (state.bloque !== 'todos' && e.bloque !== state.bloque) return false;
      if (state.nivel !== 'todos' && e.nivel !== Number(state.nivel)) return false;
      if (state.soloMarcados && !Store.marcado(e.id)) return false;
      return true;
    });
    if (state.semilla == null) lista.sort((a, b) => a.id.localeCompare(b.id));
    else lista.sort((a, b) => hash(a.id + state.semilla) - hash(b.id + state.semilla));
    return lista;
  }

  function firmaLista(lista) {
    return [state.materia, state.bloque, state.nivel, state.soloMarcados, state.semilla].join('|') + ':' + lista.map((e) => e.id).join(',');
  }

  function asegurarLista() {
    const lista = filtrarPractica();
    const firma = firmaLista(lista);
    if (firma !== state.firma) {
      state.firma = firma;
      state.lista = lista;
      state.idx = 0;
      reiniciarTarjeta();
    }
    if (state.idx >= state.lista.length) state.idx = Math.max(0, state.lista.length - 1);
    return state.lista;
  }

  function reiniciarTarjeta() {
    state.comprobado = false;
    state.registrado = false;
    state.pista = false;
    state.solucion = false;
  }

  function actual() {
    return state.lista[state.idx] || null;
  }

  function estadoEjercicio(id) {
    const registro = Store.data.ejercicios[id];
    if (!registro) return '○';
    return registro.estado === 'acertado' ? '✓' : '✗';
  }

  function selectorEjercicioHTML(ej) {
    const materia = state.materia;
    const lista = ejerciciosDe(materia);
    const grupos = MATERIAS[materia].bloques.map((bloque) => {
      const items = lista
        .filter((e) => e.bloque === bloque)
        .sort((a, b) => a.nivel - b.nivel || a.id.localeCompare(b.id));
      if (!items.length) return '';
      return `<optgroup label="${BLOQUES[bloque].icono} ${BLOQUES[bloque].nombre} (${items.length})">
        ${items.map((e) => `<option value="${e.id}"${ej && e.id === ej.id ? ' selected' : ''}>${estadoEjercicio(e.id)} ${escapar(e.titulo)} · ${NIVELES[e.nivel]}</option>`).join('')}
      </optgroup>`;
    }).join('');
    return `
      <div class="selector-problema">
        <div class="selector-problema-cab">
          <label for="selector-ejercicio">Elegir problema</label>
          <span>✓ dominado · ✗ fallado · ○ pendiente</span>
        </div>
        <select id="selector-ejercicio" aria-label="Elegir un problema de ${MATERIAS[materia].nombre}">
          ${ej ? '' : '<option value="" selected disabled>Elige un problema…</option>'}
          ${grupos}
        </select>
      </div>`;
  }

  function irAEjercicio(id) {
    const ej = DATA.find((e) => e.materia === state.materia && e.id === id);
    if (!ej) return;
    let idx = state.lista.findIndex((e) => e.id === id);
    if (idx === -1) {
      state.bloque = 'todos';
      state.nivel = 'todos';
      state.soloMarcados = false;
      state.semilla = null;
      state.firma = '';
      const lista = filtrarPractica();
      state.lista = lista;
      state.firma = firmaLista(lista);
      idx = lista.findIndex((e) => e.id === id);
    }
    state.idx = idx >= 0 ? idx : 0;
    reiniciarTarjeta();
    renderEntrenar($('#vista'));
    math($('#vista'));
    const practica = $('#practica');
    if (practica) practica.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function heroHTML() {
    const resumen = resumenGlobal();
    return `
      <section class="hero">
        <div class="hero-texto">
          <p class="eyebrow"><span class="punto"></span> PAU · Comunitat Valenciana · 2026/27</p>
          <h1>Matemáticas, <span class="degradado">paso a paso</span>.</h1>
          <p class="hero-desc">Elige tus matemáticas, resuelve tests interactivos y aprende con pistas, trucos y explicaciones. Sin prisa: primero se entiende, después se aprueba.</p>
          <div class="hero-stats">
            <div class="hero-stat"><strong>${DATA.length}</strong><span>ejercicios</span></div>
            <div class="hero-stat"><strong>4</strong><span>materias</span></div>
            <div class="hero-stat"><strong>${resumen.dominados}</strong><span>dominados</span></div>
            <div class="hero-stat"><strong>${Store.data.racha.dias || 0}</strong><span>días de racha</span></div>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="formula-flotante f1">$\\int_0^2 (3x^2-2x)\\,dx$</div>
          <div class="formula-flotante f2">$A^{-1}=\\frac{1}{\\det A}(\\operatorname{adj}A)^T$</div>
          <div class="formula-flotante f3">$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$</div>
          <div class="pi-grande">π</div>
          <div class="hero-sello">2º Bach<br><span>PAU</span></div>
        </div>
      </section>`;
  }

  function tarjetaMateriaHTML(id) {
    const m = MATERIAS[id];
    const p = progresoMateria(id);
    const activa = state.materia === id;
    return `
      <button class="materia-card${activa ? ' activa' : ''}" data-accion="materia" data-materia="${id}" aria-pressed="${activa}">
        <span class="materia-fila">
          <span class="materia-curso">${m.curso}º Bachillerato · ${m.rama}</span>
          ${m.pau ? '<span class="etiqueta-pau">PAU</span>' : '<span class="etiqueta-base">Base</span>'}
        </span>
        <span class="materia-nombre">${m.nombre}</span>
        <span class="materia-desc">${m.desc}</span>
        <span class="materia-pie">
          <span class="barra" aria-hidden="true"><span style="width:${p.pct}%"></span></span>
          <span class="materia-meta">${p.hechos}/${p.total} · ${p.pct}%</span>
        </span>
      </button>`;
  }

  function selectorHTML() {
    return `
      <section class="selector" aria-labelledby="titulo-selector">
        <div class="seccion-cab">
          <div>
            <p class="eyebrow">Elige materia</p>
            <h2 id="titulo-selector">¿Qué quieres practicar hoy?</h2>
          </div>
          <p class="seccion-nota">En 2º tienes lo que se examina en la PAU. En 1º, la base que hace que 2º no duela.</p>
        </div>
        <div class="grupo-materias">
          <div class="grupo-cab"><h3>2º Bachillerato</h3><span>se examina en la PAU</span></div>
          <div class="materia-grid">
            ${tarjetaMateriaHTML('mates-ii')}
            ${tarjetaMateriaHTML('ccss-ii')}
          </div>
        </div>
        <div class="grupo-materias">
          <div class="grupo-cab"><h3>1º Bachillerato</h3><span>base para la PAU</span></div>
          <div class="materia-grid">
            ${tarjetaMateriaHTML('mates-i')}
            ${tarjetaMateriaHTML('ccss-i')}
          </div>
        </div>
      </section>`;
  }

  function filtrosHTML(materia) {
    const lista = ejerciciosDe(materia);
    const bloques = MATERIAS[materia].bloques.map((b) => ({
      id: b,
      nombre: BLOQUES[b].nombre,
      icono: BLOQUES[b].icono,
      n: lista.filter((e) => e.bloque === b).length
    }));
    const chip = (valor, texto, activo, accion) =>
      `<button class="chip${activo ? ' activo' : ''}" data-accion="${accion}" data-valor="${valor}" aria-pressed="${activo}">${texto}</button>`;
    return `
      <div class="filtros">
        <div class="filtro-grupo" role="group" aria-label="Filtrar por bloque">
          <span class="filtro-etiqueta">Bloque</span>
          <div class="chips">
            ${chip('todos', 'Todos', state.bloque === 'todos', 'bloque')}
            ${bloques.map((b) => chip(b.id, b.icono + ' ' + b.nombre, state.bloque === b.id, 'bloque')).join('')}
          </div>
        </div>
        <div class="filtro-grupo" role="group" aria-label="Filtrar por nivel">
          <span class="filtro-etiqueta">Nivel</span>
          <div class="chips">
            ${chip('todos', 'Todos', state.nivel === 'todos', 'nivel')}
            ${chip('1', 'Básico', state.nivel === '1', 'nivel')}
            ${chip('2', 'Medio', state.nivel === '2', 'nivel')}
            ${chip('3', 'Nivel PAU', state.nivel === '3', 'nivel')}
          </div>
        </div>
        <div class="filtro-acciones">
          <button class="chip chip-estrella${state.soloMarcados ? ' activo' : ''}" data-accion="solo-marcados" aria-pressed="${state.soloMarcados}">★ Mi repaso</button>
          <button class="chip" data-accion="mezclar">⤨ Mezclar</button>
        </div>
      </div>`;
  }

  function opcionesHTML(parte, accion, etiqueta, extra) {
    const atributos = extra ? ' ' + extra : '';
    return `
      <div class="opciones" role="radiogroup" aria-label="${etiqueta}">
        ${parte.opciones.map((opcion, i) => `
          <button type="button" class="opcion" data-accion="${accion}" data-opcion="${i}"${atributos} role="radio" aria-checked="false">
            <span class="letra">${'ABCD'[i] || i + 1}</span>
            <span class="texto-opcion">${opcion}</span>
          </button>`).join('')}
      </div>`;
  }

  function respuestaHTML(ej) {
    if (Array.isArray(ej.partes)) {
      return `
        <div class="respuesta-grid respuesta-opciones">
          ${ej.partes.map((parte, i) => `
            <div class="campo-opcion" data-parte="${i}">
              <p class="etiqueta-parte">${parte.etiqueta}</p>
              ${opcionesHTML(parte, 'elegir', 'Opciones del apartado ' + (i + 1))}
            </div>`).join('')}
        </div>`;
    }
    return opcionesHTML(ej, 'elegir', 'Opciones de respuesta');
  }

  function solucionHTML(ej) {
    return `
      <h4>Solución paso a paso</h4>
      <ol class="pasos-lista">
        ${ej.solucion.map((paso) => `
          <li>
            <div>
              <p class="paso-titulo">${paso.t}</p>
              <p class="paso-texto">${paso.d}</p>
            </div>
          </li>`).join('')}
      </ol>
      <div class="callout callout-truco"><span class="callout-icono">🧠</span><div><strong>Truco</strong><p>${ej.truco}</p></div></div>
      <div class="callout callout-error"><span class="callout-icono">⚠️</span><div><strong>Error típico</strong><p>${ej.errorTipico}</p></div></div>
      <p class="fuente-final">Fuente: ${ej.fuente}</p>`;
  }

  function tarjetaHTML(ej) {
    const marcado = Store.marcado(ej.id);
    return `
      <article class="tarjeta-ejercicio" aria-labelledby="titulo-${ej.id}">
        <div class="tarjeta-meta">
          <div class="badges">
            <span class="badge badge-${ej.bloque}">${BLOQUES[ej.bloque].icono} ${BLOQUES[ej.bloque].nombre}</span>
            <span class="badge badge-nivel nivel-${ej.nivel}">${NIVELES[ej.nivel]}</span>
            <span class="badge badge-tipo">Opción múltiple</span>
          </div>
          <button type="button" class="btn-estrella${marcado ? ' marcado' : ''}" data-accion="marcar" data-id="${ej.id}" aria-pressed="${marcado}" title="${marcado ? 'Quitar del repaso' : 'Añadir al repaso'}" aria-label="${marcado ? 'Quitar del repaso' : 'Añadir al repaso'}">★</button>
        </div>
        <p class="fuente">${ej.fuente}</p>
        <h3 id="titulo-${ej.id}" class="titulo-ejercicio">${ej.titulo}</h3>
        <div class="enunciado">${ej.enunciado}</div>
        ${respuestaHTML(ej)}
        <div class="acciones">
          <button type="button" class="btn btn-primario" data-accion="comprobar">Comprobar</button>
          <button type="button" class="btn btn-suave" data-accion="pista" aria-expanded="${state.pista}">${state.pista ? 'Ocultar pista' : 'Pista'}</button>
          <button type="button" class="btn btn-fantasma" data-accion="solucion" aria-expanded="${state.solucion}">${state.solucion ? 'Ocultar solución' : 'Ver solución'}</button>
        </div>
        <div class="feedback" id="feedback" role="status" aria-live="polite"></div>
        <div class="panel panel-pista" id="panel-pista" ${state.pista ? '' : 'hidden'}>
          <div class="callout callout-pista"><span class="callout-icono">💡</span><div><strong>Pista</strong><p>${ej.pista}</p></div></div>
        </div>
        <div class="panel panel-solucion" id="panel-solucion" ${state.solucion ? '' : 'hidden'}>
          ${solucionHTML(ej)}
        </div>
      </article>`;
  }

  function navegadorHTML(total) {
    return `
      <div class="navegador-ejercicios">
        <button type="button" class="btn btn-fantasma" data-accion="anterior" ${state.idx === 0 ? 'disabled' : ''}>← Anterior</button>
        <span class="contador"><strong>${state.idx + 1}</strong> / ${total}</span>
        <button type="button" class="btn btn-fantasma" data-accion="siguiente" ${state.idx >= total - 1 ? 'disabled' : ''}>Siguiente →</button>
      </div>`;
  }

  function renderEntrenar(vista) {
    const lista = asegurarLista();
    const m = MATERIAS[state.materia];
    const ej = lista[state.idx] || null;
    const p = progresoMateria(state.materia);
    let contenido = '';
    if (ej) {
      contenido = tarjetaHTML(ej);
    } else {
      contenido = `
        <div class="vacio">
          <p class="vacio-icono">🧭</p>
          <h3>No hay ejercicios con estos filtros</h3>
          <p>${state.soloMarcados ? 'Todavía no has marcado ejercicios. Pulsa la estrella de cualquier ejercicio para guardarlo en tu repaso.' : 'Prueba con otro bloque o nivel.'}</p>
          <button class="btn btn-primario" data-accion="limpiar-filtros">Quitar filtros</button>
        </div>`;
    }
    vista.innerHTML = `
      ${heroHTML()}
      ${selectorHTML()}
      <section class="practica" id="practica" aria-labelledby="titulo-practica">
        <div class="practica-cab">
          <div>
            <p class="eyebrow">Práctica guiada</p>
            <h2 id="titulo-practica">${m.nombre}</h2>
          </div>
          <div class="progreso-materia">
            <div class="progreso-texto"><span>${p.hechos} de ${p.total} dominados</span><strong>${p.pct}%</strong></div>
            <div class="barra barra-grande"><span style="width:${p.pct}%"></span></div>
          </div>
        </div>
        ${selectorEjercicioHTML(ej)}
        ${filtrosHTML(state.materia)}
        ${contenido}
        ${ej ? navegadorHTML(lista.length) : ''}
      </section>`;
  }

  function comprobarPractica() {
    const ej = actual();
    if (!ej) return;
    let acierto = false;
    let mensaje = '';
    const feedback = $('#feedback');

    if (ej.tipo === 'opcion' && Array.isArray(ej.partes)) {
      let respondidas = 0;
      let correctas = 0;
      ej.partes.forEach((parte, i) => {
        const grupo = $('.campo-opcion[data-parte="' + i + '"]');
        if (!grupo) return;
        const seleccionada = grupo.querySelector('.opcion.seleccionada');
        const elegida = seleccionada ? Number(seleccionada.dataset.opcion) : null;
        grupo.querySelectorAll('.opcion').forEach((boton, j) => {
          boton.classList.remove('correcta', 'incorrecta');
          if (j === parte.correcta) boton.classList.add('correcta');
          if (j === elegida && j !== parte.correcta) boton.classList.add('incorrecta');
          boton.setAttribute('aria-checked', String(j === elegida));
        });
        if (elegida !== null) {
          respondidas += 1;
          if (elegida === parte.correcta) correctas += 1;
        }
      });
      if (respondidas === 0) {
        toast('Elige una opción antes de comprobar.');
        return;
      }
      acierto = respondidas === ej.partes.length && correctas === ej.partes.length;
      if (respondidas < ej.partes.length) {
        mensaje = 'Completa todos los apartados. Llevas ' + correctas + ' de ' + ej.partes.length + ' correctos.';
      } else if (acierto) {
        mensaje = ej.partes.length === 1
          ? 'La opción marcada es la correcta. Puedes ver el desarrollo completo para fijar el método.'
          : 'Has acertado los ' + ej.partes.length + ' apartados. Buen trabajo.';
      } else if (ej.partes.length === 1) {
        mensaje = 'La opción marcada no es la correcta. Revisa el planteamiento o abre la solución paso a paso.';
      } else {
        mensaje = 'Has acertado ' + correctas + ' de ' + ej.partes.length + ' apartados. Revisa los marcados en rojo y prueba otra vez.';
      }
    } else if (ej.tipo === 'opcion') {
      const seleccionada = $('.opcion.seleccionada');
      if (!seleccionada) {
        toast('Elige una opción antes de comprobar.');
        return;
      }
      const elegida = Number(seleccionada.dataset.opcion);
      acierto = elegida === ej.correcta;
      $$('.opcion').forEach((boton, i) => {
        boton.classList.remove('correcta', 'incorrecta');
        if (i === ej.correcta) boton.classList.add('correcta');
        if (i === elegida && !acierto) boton.classList.add('incorrecta');
        boton.setAttribute('aria-checked', String(i === elegida));
      });
      mensaje = acierto
        ? 'La opción ' + 'ABCD'[ej.correcta] + ' es la correcta. Puedes ver el desarrollo completo para fijar el método.'
        : 'Todavía no. Revisa el planteamiento y vuelve a intentarlo, o abre la solución paso a paso.';
    } else {
      let correctas = 0;
      let respondidas = 0;
      ej.partes.forEach((parte, i) => {
        const input = $('#in-' + ej.id + '-' + i);
        const campo = input ? input.closest('.campo') : null;
        if (!input || !campo) return;
        campo.classList.remove('ok', 'mal');
        const valor = parsearNumero(input.value);
        if (valor === null) return;
        respondidas += 1;
        const tolerancia = parte.tolerancia == null ? 0.01 : parte.tolerancia;
        if (Math.abs(valor - parte.respuesta) <= tolerancia + 1e-12) {
          campo.classList.add('ok');
          correctas += 1;
        } else {
          campo.classList.add('mal');
        }
      });
      acierto = respondidas === ej.partes.length && correctas === ej.partes.length;
      if (respondidas < ej.partes.length) {
        mensaje = 'Completa todos los apartados. Llevas ' + correctas + ' de ' + ej.partes.length + ' correctos.';
      } else if (acierto) {
        mensaje = ej.partes.length === 1 ? 'Resultado correcto. Buen trabajo.' : 'Has acertado los ' + ej.partes.length + ' apartados. Buen trabajo.';
      } else {
        mensaje = 'Has acertado ' + correctas + ' de ' + ej.partes.length + ' apartados. Revisa los marcados en rojo y prueba otra vez.';
      }
    }

    state.comprobado = true;
    if (feedback) {
      feedback.className = 'feedback ' + (acierto ? 'feedback-ok' : 'feedback-mal');
      feedback.innerHTML = '<strong>' + (acierto ? '¡Correcto!' : 'Casi') + '</strong> ' + mensaje;
    }
    if (!state.registrado) {
      state.registrado = true;
      Store.registrar(ej.id, acierto);
    }
    if (acierto) {
      state.solucion = true;
      const panel = $('#panel-solucion');
      if (panel) panel.hidden = false;
      const boton = $('[data-accion="solucion"]');
      if (boton) {
        boton.textContent = 'Ocultar solución';
        boton.setAttribute('aria-expanded', 'true');
      }
    }
  }

  function irAIndice(nuevo) {
    if (nuevo < 0 || nuevo >= state.lista.length) return;
    state.idx = nuevo;
    reiniciarTarjeta();
    renderEntrenar($('#vista'));
    math($('#vista'));
    const practica = $('#practica');
    if (practica) practica.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* -------------------------------- pasos ------------------------------- */

  function ejerciciosPasos(materia) {
    return DATA.filter((e) => e.materia === materia && e.solucion && e.solucion.length >= 3);
  }

  function nuevoPasos() {
    const pool = ejerciciosPasos(state.materia);
    if (!pool.length) {
      state.pasos = null;
      return;
    }
    let ej = elegirAlAzar(pool);
    if (state.pasos && pool.length > 1) {
      let intentos = 0;
      while (ej.id === state.pasos.ej.id && intentos < 12) {
        ej = elegirAlAzar(pool);
        intentos += 1;
      }
    }
    const disponibles = mezclar(ej.solucion.map((paso, i) => ({ paso: paso, orden: i })));
    state.pasos = {
      ej: ej,
      disponibles: disponibles,
      colocados: [],
      comprobado: false,
      registrado: false,
      pista: false,
      acierto: false
    };
  }

  function renderPasos(vista) {
    if (!state.pasos || state.pasos.ej.materia !== state.materia) nuevoPasos();
    const m = MATERIAS[state.materia];
    const p = state.pasos;
    vista.innerHTML = `
      <section class="vista-cab">
        <p class="eyebrow">Modo pasos</p>
        <h1>Reconstruye la solución</h1>
        <p class="vista-desc">Coloca los pasos en el orden lógico. No hace falta calcular: primero se aprende a pensar como el examen.</p>
      </section>
      ${chipsMateriaHTML()}
      ${!p ? `<div class="vacio"><p class="vacio-icono">🧩</p><h3>No hay soluciones para ordenar en ${m.nombre}</h3></div>` : `
      <section class="pasos-juego" aria-labelledby="pasos-titulo">
        <div class="pasos-cab">
          <div class="badges">
            <span class="badge badge-${p.ej.bloque}">${BLOQUES[p.ej.bloque].icono} ${BLOQUES[p.ej.bloque].nombre}</span>
            <span class="badge badge-nivel nivel-${p.ej.nivel}">${NIVELES[p.ej.nivel]}</span>
          </div>
          <p class="fuente">${p.ej.fuente}</p>
          <h2 id="pasos-titulo">${p.ej.titulo}</h2>
          <div class="enunciado">${p.ej.enunciado}</div>
        </div>
        <div class="pasos-columnas">
          <div class="pasos-columna">
            <h3>Pasos disponibles <span>${p.disponibles.length}</span></h3>
            <div class="pasos-disponibles">
              ${p.disponibles.length ? p.disponibles.map((item) => `
                <button type="button" class="paso-carta" data-accion="pasos-usar" data-orden="${item.orden}">
                  <span class="paso-punto"></span>
                  <span><strong>${item.paso.t}</strong><small>${item.paso.d}</small></span>
                </button>`).join('') : '<p class="pasos-vacio">Todos los pasos están colocados. Comprueba el orden.</p>'}
            </div>
          </div>
          <div class="pasos-columna">
            <h3>Tu solución <span>${p.colocados.length}/${p.ej.solucion.length}</span></h3>
            <div class="pasos-colocados ${p.colocados.length ? '' : 'vacio-zona'}">
              ${p.colocados.length ? p.colocados.map((item, i) => `
                <button type="button" class="paso-colocado${p.comprobado ? (item.orden === i ? ' en-sitio' : ' fuera') : ''}" data-accion="pasos-quitar" data-pos="${i}" title="Quitar paso">
                  <span class="numero-paso">${i + 1}</span>
                  <span><strong>${item.paso.t}</strong><small>${item.paso.d}</small></span>
                  <span class="quitar">×</span>
                </button>`).join('') : '<p>Haz clic en los pasos de la izquierda en el orden que creas correcto.</p>'}
            </div>
          </div>
        </div>
        <div class="acciones acciones-pasos">
          <button type="button" class="btn btn-primario" data-accion="pasos-comprobar" ${p.comprobado ? 'disabled' : ''}>Comprobar orden</button>
          <button type="button" class="btn btn-suave" data-accion="pasos-pista" aria-expanded="${p.pista}">${p.pista ? 'Ocultar pista' : 'Pista'}</button>
          <button type="button" class="btn btn-fantasma" data-accion="pasos-reiniciar">Reiniciar</button>
          <button type="button" class="btn btn-fantasma" data-accion="pasos-siguiente">Otro ejercicio →</button>
        </div>
        <div class="feedback" id="feedback-pasos" role="status" aria-live="polite"></div>
        ${p.pista ? `<div class="panel"><div class="callout callout-pista"><span class="callout-icono">💡</span><div><strong>Empieza por aquí</strong><p>El primer paso es: «${p.ej.solucion[0].t}». A partir de ahí, piensa qué necesitas justo después.</p></div></div></div>` : ''}
        ${p.comprobado && p.acierto ? `<div class="panel panel-solucion"><h4>Solución completa</h4>${solucionHTML(p.ej)}</div>` : ''}
      </section>`}
    `;
  }

  function comprobarPasos() {
    const p = state.pasos;
    if (!p) return;
    const feedback = $('#feedback-pasos');
    if (p.colocados.length !== p.ej.solucion.length) {
      if (feedback) {
        feedback.className = 'feedback feedback-mal';
        feedback.innerHTML = '<strong>Faltan pasos.</strong> Coloca los ' + p.ej.solucion.length + ' antes de comprobar.';
      }
      return;
    }
    const aciertos = p.colocados.reduce((total, item, i) => total + (item.orden === i ? 1 : 0), 0);
    p.acierto = aciertos === p.ej.solucion.length;
    p.comprobado = true;
    if (!p.registrado) {
      p.registrado = true;
      Store.registrar(p.ej.id, p.acierto);
    }
    renderPasos($('#vista'));
    math($('#vista'));
    const nuevoFeedback = $('#feedback-pasos');
    if (nuevoFeedback) {
      nuevoFeedback.className = 'feedback ' + (p.acierto ? 'feedback-ok' : 'feedback-mal');
      nuevoFeedback.innerHTML = p.acierto
        ? '<strong>¡Orden perfecto!</strong> Ya tienes la secuencia completa. Lee el desarrollo y quédate con el método.'
        : '<strong>' + aciertos + ' de ' + p.ej.solucion.length + '</strong> pasos están en su sitio. Los marcados en rojo no van ahí: piensa qué necesitas antes de usarlos.';
    }
  }

  /* ------------------------------ simulacro ----------------------------- */

  function pararTimer() {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
  }

  function definicionesSimulacro(materia) {
    if (materia === 'mates-ii') {
      return [
        { bloques: ['probabilidad'], puntos: 2.5, titulo: 'Probabilidad y Estadística', nota: 'Obligatoria y competencial' },
        { bloques: ['matrices', 'sistemas', 'complejos'], puntos: 2.5, titulo: 'Álgebra', nota: 'En el examen real eliges opción A o B' },
        { bloques: ['limites', 'derivadas', 'integrales', 'optimizacion'], puntos: 2.5, titulo: 'Análisis', nota: 'En el examen real eliges opción A o B' },
        { bloques: ['vectores', 'rectas-planos', 'geometria'], puntos: 2.5, titulo: 'Geometría', nota: 'En el examen real eliges opción A o B' }
      ];
    }
    return [
      { bloques: ['probabilidad', 'estadistica', 'inferencia'], puntos: 3, titulo: 'Sentido estocástico', nota: 'Obligatoria y competencial' },
      { bloques: ['matrices', 'sistemas', 'programacion-lineal', 'sucesiones'], puntos: 3.5, titulo: 'Numérico y algebraico', nota: 'En el examen real eliges uno de dos problemas' },
      { bloques: ['funciones', 'limites', 'derivadas', 'integrales'], puntos: 3.5, titulo: 'Sentido funcional', nota: 'En el examen real eliges uno de dos problemas' }
    ];
  }

  function construirSimulacro(materia) {
    const usados = {};
    const secciones = definicionesSimulacro(materia).map((def, i) => {
      let pool = DATA.filter((e) => e.materia === materia && def.bloques.includes(e.bloque) && !usados[e.id] && e.solucion && e.solucion.length);
      const preferidos = pool.filter((e) => e.nivel >= 2);
      if (preferidos.length) pool = preferidos;
      const ej = elegirAlAzar(pool);
      usados[ej.id] = true;
      return Object.assign({}, def, {
        numero: i + 1,
        ejercicio: ej,
        respuesta: { partes: [], opcion: null }
      });
    });
    return {
      materia: materia,
      secciones: secciones,
      inicio: Date.now(),
      fin: Date.now() + 90 * 60 * 1000,
      enviado: false,
      detalle: null,
      nota: 0
    };
  }

  function empezarSimulacro(materia) {
    state.sim = construirSimulacro(materia);
    state.vista = 'simulacro';
    render();
    iniciarTimer();
  }

  function iniciarTimer() {
    pararTimer();
    const reloj = $('#reloj');
    if (!reloj || !state.sim || state.sim.enviado) return;
    const actualizar = () => {
      const restante = Math.max(0, Math.floor((state.sim.fin - Date.now()) / 1000));
      const mm = String(Math.floor(restante / 60)).padStart(2, '0');
      const ss = String(restante % 60).padStart(2, '0');
      reloj.textContent = mm + ':' + ss;
      reloj.classList.toggle('reloj-urgente', restante <= 300);
      if (restante <= 0) {
        pararTimer();
        entregarSimulacro(true);
      }
    };
    actualizar();
    state.timer = setInterval(actualizar, 1000);
  }

  function renderSimulacro(vista) {
    if (state.sim && state.sim.enviado) {
      renderResultadosSimulacro(vista);
      return;
    }
    if (state.sim && !state.sim.enviado) {
      renderExamenSimulacro(vista);
      iniciarTimer();
      return;
    }
    const m2 = progresoMateria('mates-ii');
    const cs2 = progresoMateria('ccss-ii');
    vista.innerHTML = `
      <section class="vista-cab">
        <p class="eyebrow">Simulacro</p>
        <h1>Practica como el día del examen</h1>
        <p class="vista-desc">90 minutos, preguntas por bloque y corrección al entregar. Elige una materia de 2º: es la que tiene PAU.</p>
      </section>
      <div class="sim-grid">
        <article class="sim-card">
          <div class="sim-card-top"><span class="badge badge-algebra">🔢 Ciencias</span><span class="sim-tiempo">90 min</span></div>
          <h2>Matemáticas II</h2>
          <p>Cuatro preguntas de 2,5 puntos: probabilidad obligatoria, álgebra, análisis y geometría.</p>
          <ul class="sim-lista">
            <li><span>1</span> Probabilidad y Estadística <strong>2,5</strong></li>
            <li><span>2</span> Álgebra <strong>2,5</strong></li>
            <li><span>3</span> Análisis <strong>2,5</strong></li>
            <li><span>4</span> Geometría <strong>2,5</strong></li>
          </ul>
          <div class="sim-progreso"><span>${m2.hechos}/${m2.total} dominados</span><strong>${m2.pct}%</strong></div>
          <div class="barra"><span style="width:${m2.pct}%"></span></div>
          <button class="btn btn-primario btn-ancho" data-accion="sim-empezar" data-materia="mates-ii">Empezar simulacro</button>
        </article>
        <article class="sim-card sim-card-sociales">
          <div class="sim-card-top"><span class="badge badge-funciones">📊 Sociales</span><span class="sim-tiempo">90 min</span></div>
          <h2>Matemáticas CCSS II</h2>
          <p>Tres preguntas: estocástica de 3 puntos y dos bloques de 3,5 puntos con opción.</p>
          <ul class="sim-lista">
            <li><span>1</span> Probabilidad y estadística <strong>3</strong></li>
            <li><span>2</span> Numérico y algebraico <strong>3,5</strong></li>
            <li><span>3</span> Sentido funcional <strong>3,5</strong></li>
          </ul>
          <div class="sim-progreso"><span>${cs2.hechos}/${cs2.total} dominados</span><strong>${cs2.pct}%</strong></div>
          <div class="barra"><span style="width:${cs2.pct}%"></span></div>
          <button class="btn btn-primario btn-ancho" data-accion="sim-empezar" data-materia="ccss-ii">Empezar simulacro</button>
        </article>
      </div>
      <div class="aviso">
        <strong>¿Estás en 1º?</strong> La PAU se hace en 2º, pero la base se construye ahora. Practica Matemáticas I o CCSS I en <a href="#/entrenar">Entrenar</a>.
      </div>
      <div class="nota-pie">El simulacro elige un ejercicio por sección. En el examen real, Matemáticas II ofrece opción A/B en las preguntas 2–4 y CCSS II ofrece dos problemas en las preguntas 2–3. Aquí entrenas el tiempo y la selección de estrategia.</div>`;
  }

  function respuestaSimulacroHTML(ej, seccion, indice) {
    if (Array.isArray(ej.partes)) {
      return `
        <div class="respuesta-grid respuesta-opciones">
          ${ej.partes.map((parte, i) => `
            <div class="campo-opcion" data-parte="${i}">
              <p class="etiqueta-parte">${parte.etiqueta}</p>
              ${opcionesHTML(parte, 'sim-elegir', 'Opciones del apartado ' + (i + 1), 'data-seccion="' + indice + '" data-parte="' + i + '"')}
            </div>`).join('')}
        </div>`;
    }
    return opcionesHTML(ej, 'sim-elegir', 'Opciones de la pregunta ' + (indice + 1), 'data-seccion="' + indice + '"');
  }

  function renderExamenSimulacro(vista) {
    const sim = state.sim;
    const m = MATERIAS[sim.materia];
    const puntos = sim.secciones.reduce((total, s) => total + s.puntos, 0);
    vista.innerHTML = `
      <section class="examen">
        <div class="examen-barra">
          <div>
            <p class="eyebrow">Simulacro · ${m.nombre}</p>
            <strong>${sim.secciones.length} preguntas · ${numero(puntos, 1)} puntos</strong>
          </div>
          <div class="examen-reloj" aria-label="Tiempo restante">
            <span id="reloj">90:00</span>
            <small>tiempo restante</small>
          </div>
          <button class="btn btn-primario" data-accion="sim-entregar">Entregar</button>
        </div>
        <div class="examen-instrucciones">
          <p>Responde en el orden que quieras. Cuando entregues, se corrige lo que has marcado y podrás leer todas las soluciones. No hay pistas durante el examen.</p>
        </div>
        <div class="examen-preguntas">
          ${sim.secciones.map((seccion, i) => `
            <article class="pregunta-examen" id="pregunta-${i + 1}" aria-labelledby="pregunta-titulo-${i + 1}">
              <div class="pregunta-cab">
                <div class="pregunta-numero">${i + 1}</div>
                <div>
                  <h3 id="pregunta-titulo-${i + 1}">${seccion.titulo}</h3>
                  <p class="pregunta-meta">${seccion.nota} · ${numero(seccion.puntos, 1)} puntos</p>
                </div>
                <span class="pregunta-puntos">${numero(seccion.puntos, 1)} pts</span>
              </div>
              <div class="pregunta-cuerpo">
                <p class="fuente">${seccion.ejercicio.fuente}</p>
                <h4>${seccion.ejercicio.titulo}</h4>
                <div class="enunciado">${seccion.ejercicio.enunciado}</div>
                ${respuestaSimulacroHTML(seccion.ejercicio, null, i)}
              </div>
            </article>`).join('')}
        </div>
        <div class="examen-pie">
          <button class="btn btn-primario" data-accion="sim-entregar">Entregar y corregir</button>
          <p>Si el tiempo llega a cero, el simulacro se entrega solo.</p>
        </div>
      </section>`;
  }

  function entregarSimulacro(automatico) {
    const sim = state.sim;
    if (!sim || sim.enviado) return;
    let nota = 0;
    const detalle = sim.secciones.map((seccion, i) => {
      const ej = seccion.ejercicio;
      let obtenidos = 0;
      if (ej.tipo === 'opcion' && Array.isArray(ej.partes)) {
        let correctas = 0;
        ej.partes.forEach((parte, j) => {
          const grupo = $('#pregunta-' + (i + 1) + ' .campo-opcion[data-parte="' + j + '"]');
          const seleccionada = grupo ? grupo.querySelector('.opcion.seleccionada') : null;
          if (seleccionada && Number(seleccionada.dataset.opcion) === parte.correcta) correctas += 1;
        });
        obtenidos = (correctas / ej.partes.length) * seccion.puntos;
      } else if (ej.tipo === 'opcion') {
        const seleccionada = $('#pregunta-' + (i + 1) + ' .opcion.seleccionada');
        const elegida = seleccionada ? Number(seleccionada.dataset.opcion) : null;
        if (elegida === ej.correcta) obtenidos = seccion.puntos;
      } else {
        let correctas = 0;
        ej.partes.forEach((parte, j) => {
          const input = $('#sim-' + ej.id + '-' + j);
          const valor = input ? parsearNumero(input.value) : null;
          const tolerancia = parte.tolerancia == null ? 0.01 : parte.tolerancia;
          if (valor !== null && Math.abs(valor - parte.respuesta) <= tolerancia + 1e-12) correctas += 1;
        });
        obtenidos = (correctas / ej.partes.length) * seccion.puntos;
      }
      obtenidos = Math.round(obtenidos * 100) / 100;
      nota += obtenidos;
      Store.registrar(ej.id, obtenidos >= seccion.puntos - 1e-9);
      return {
        seccion: seccion,
        puntos: obtenidos,
        max: seccion.puntos,
        completo: obtenidos >= seccion.puntos - 1e-9
      };
    });
    sim.enviado = true;
    sim.nota = Math.round(nota * 100) / 100;
    sim.detalle = detalle;
    sim.entregado = Date.now();
    pararTimer();
    Store.registrarSimulacro({
      fecha: Date.now(),
      materia: sim.materia,
      nota: sim.nota,
      preguntas: detalle.length
    });
    render();
    if (automatico) toast('Tiempo agotado. Simulacro entregado.', 'aviso');
  }

  function renderResultadosSimulacro(vista) {
    const sim = state.sim;
    const m = MATERIAS[sim.materia];
    const total = sim.secciones.reduce((s, x) => s + x.puntos, 0);
    const pct = Math.round((sim.nota / total) * 100);
    const color = sim.nota >= 5 ? 'ok' : 'mal';
    vista.innerHTML = `
      <section class="resultados">
        <div class="resultado-cab">
          <div>
            <p class="eyebrow">Simulacro corregido · ${m.nombre}</p>
            <h1>${sim.nota >= 5 ? 'Buen trabajo.' : 'Toca repasar.'}</h1>
            <p class="vista-desc">${sim.nota >= 5 ? 'Has llegado al aprobado. Ahora mira los fallos: ahí están los puntos que se escapan en la PAU.' : 'No pasa nada: el simulacro sirve para detectar bloques flojos. Lee cada solución y vuelve a intentarlo.'}</p>
          </div>
          <div class="nota-circulo ${color}" style="--pct:${pct}%">
            <strong>${numero(sim.nota, 2)}</strong>
            <span>de ${numero(total, 1)}</span>
          </div>
        </div>
        <div class="resultado-resumen">
          ${sim.detalle.map((d, i) => `
            <div class="resultado-fila ${d.completo ? 'bien' : 'parcial'}">
              <span class="resultado-icono">${d.completo ? '✓' : '◐'}</span>
              <span>${i + 1}. ${d.seccion.titulo}</span>
              <strong>${numero(d.puntos, 2)} / ${numero(d.max, 1)}</strong>
            </div>`).join('')}
        </div>
        <div class="acciones-resultados">
          <button class="btn btn-primario" data-accion="sim-nuevo" data-materia="${sim.materia}">Nuevo simulacro</button>
          <button class="btn btn-fantasma" data-accion="sim-cerrar">Volver a simulacros</button>
        </div>
      </section>
      <section class="repaso-simulacro">
        <h2>Revisión pregunta a pregunta</h2>
        ${sim.detalle.map((d, i) => `
          <article class="repaso-pregunta">
            <div class="repaso-cab">
              <span class="pregunta-numero">${i + 1}</span>
              <div>
                <h3>${d.seccion.titulo} · ${d.seccion.ejercicio.titulo}</h3>
                <p class="fuente">${d.seccion.ejercicio.fuente}</p>
              </div>
              <span class="repaso-puntos ${d.completo ? 'bien' : 'parcial'}">${numero(d.puntos, 2)} / ${numero(d.max, 1)}</span>
            </div>
            <div class="enunciado">${d.seccion.ejercicio.enunciado}</div>
            <details class="solucion-detalle">
              <summary>Ver solución paso a paso</summary>
              ${solucionHTML(d.seccion.ejercicio)}
            </details>
          </article>`).join('')}
      </section>`;
  }

  /* -------------------------------- HTML -------------------------------- */

  function chipsMateriaHTML() {
    return `
      <div class="chips chips-materia" role="group" aria-label="Elegir materia">
        ${Object.keys(MATERIAS).map((id) => {
          const m = MATERIAS[id];
          return `<button class="chip${state.materia === id ? ' activo' : ''}" data-accion="materia" data-materia="${id}" aria-pressed="${state.materia === id}"><span class="chip-curso">${m.curso}º</span> ${m.corto}</button>`;
        }).join('')}
      </div>`;
  }

  function renderFormulario(vista) {
    const grupos = FORMULAS[state.materia] || [];
    vista.innerHTML = `
      <section class="vista-cab vista-cab-fila">
        <div>
          <p class="eyebrow">Formulario</p>
          <h1>Todo lo que necesitas, a mano</h1>
          <p class="vista-desc">Fórmulas por bloque, sin ruido. Úsalo para comprobar un paso, no para sustituir el razonamiento.</p>
        </div>
        <button class="btn btn-fantasma" data-accion="imprimir">Imprimir / PDF</button>
      </section>
      ${chipsMateriaHTML()}
      ${grupos.length ? grupos.map((grupo) => `
        <section class="formula-grupo">
          <div class="formula-cab">
            <span class="formula-icono">${BLOQUES[grupo.bloque] ? BLOQUES[grupo.bloque].icono : '∑'}</span>
            <h2>${grupo.titulo}</h2>
          </div>
          <div class="formula-grid">
            ${grupo.items.map((item) => `
              <div class="formula-card">
                <p class="formula-nombre">${item.n}</p>
                <div class="formula-math">$$${item.f}$$</div>
              </div>`).join('')}
          </div>
        </section>`).join('') : '<div class="vacio">No hay formulario para esta materia.</div>'}
      <p class="nota-pie">Las fórmulas están escritas con notación de la PAU. Comprueba siempre las hipótesis antes de aplicarlas.</p>`;
  }

  function renderGuia(vista) {
    vista.innerHTML = `
      <section class="vista-cab">
        <p class="eyebrow">Guía PAU · Comunitat Valenciana</p>
        <h1>Cómo es el examen y cómo entrenarlo</h1>
        <p class="vista-desc">Lo importante, resumido. Estructura de 2026/27, criterios de corrección y cómo usar la app sin perder tiempo.</p>
      </section>

      <section class="guia-bloque">
        <div class="guia-titulo"><span>01</span><h2>Matemáticas II</h2></div>
        <p>Examen único de <strong>90 minutos</strong> y <strong>4 preguntas de 2,5 puntos</strong>. La primera es obligatoria y competencial; las otras tres corresponden a Álgebra, Análisis y Geometría, cada una con opción A/B.</p>
        <div class="tabla-envoltorio">
          <table class="tabla">
            <thead><tr><th>Pregunta</th><th>Bloque</th><th>Valor</th><th>Opcionalidad</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Probabilidad y Estadística</td><td>2,5</td><td>Obligatoria, sin apartados opcionales</td></tr>
              <tr><td>2</td><td>Álgebra: matrices, determinantes, sistemas</td><td>2,5</td><td>Opción A o B</td></tr>
              <tr><td>3</td><td>Análisis: límites, derivadas, integrales, áreas</td><td>2,5</td><td>Opción A o B</td></tr>
              <tr><td>4</td><td>Geometría: rectas, planos, distancias, ángulos</td><td>2,5</td><td>Opción A o B</td></tr>
            </tbody>
          </table>
        </div>
        <div class="guia-columnas">
          <div class="guia-card"><h3>PAU 2027</h3><p>Se mantiene este modelo y el temario. La tabla que te dan pasa a ser la binomial de probabilidad puntual <strong>P(X = x)</strong>: si necesitas una acumulada, suma los valores. La distribución normal no entra hasta 2028.</p></div>
          <div class="guia-card"><h3>Qué se valora</h3><p>Desarrollo ordenado y justificado, coherencia de los resultados y presentación clara. No basta el resultado: hay que enseñar el método. También se penalizan las faltas de ortografía.</p></div>
        </div>
      </section>

      <section class="guia-bloque">
        <div class="guia-titulo"><span>02</span><h2>Matemáticas Aplicadas a las CCSS II</h2></div>
        <p>Examen único de <strong>90 minutos</strong> y <strong>3 preguntas</strong> que suman 10 puntos. La estocástica es obligatoria; en las otras dos, el examen real ofrece dos problemas y eliges uno.</p>
        <div class="tabla-envoltorio">
          <table class="tabla">
            <thead><tr><th>Pregunta</th><th>Bloque</th><th>Valor</th><th>Opcionalidad</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Sentido estocástico: probabilidad y estadística</td><td>3</td><td>Obligatoria y competencial</td></tr>
              <tr><td>2</td><td>Numérico y algebraico: matrices, sistemas, programación lineal</td><td>3,5</td><td>Eliges uno de dos problemas</td></tr>
              <tr><td>3</td><td>Sentido funcional: funciones, derivadas, integrales</td><td>3,5</td><td>Eliges uno de dos problemas</td></tr>
            </tbody>
          </table>
        </div>
        <p>Entran la binomial, la normal y la aproximación de la binomial a la normal. En el examen tendrás las tablas de probabilidad; a partir de 2027 se entregan siempre las dos.</p>
      </section>

      <section class="guia-bloque">
        <div class="guia-titulo"><span>03</span><h2>Cómo usar esta app</h2></div>
        <div class="guia-pasos">
          <div><span>1</span><h3>Elige materia</h3><p>2º Bachillerato si vas a la PAU; 1º si estás construyendo la base. Ciencias o Sociales.</p></div>
          <div><span>2</span><h3>Entrena por bloques</h3><p>Empieza en Básico o Medio, usa la pista antes que la solución y lee el error típico aunque aciertes.</p></div>
          <div><span>3</span><h3>Ordena pasos</h3><p>El modo Pasos entrena el orden del razonamiento, que es donde más puntos se pierden por presentación.</p></div>
          <div><span>4</span><h3>Haz simulacros</h3><p>90 minutos, sin pistas. Al entregar verás la corrección y podrás leer todas las soluciones.</p></div>
        </div>
      </section>

      <section class="guia-bloque">
        <div class="guia-titulo"><span>04</span><h2>Calculadora, tablas y detalles</h2></div>
        <div class="guia-columnas">
          <div class="guia-card"><h3>Calculadora</h3><p>Se permite calculadora no gráfica, no programable y sin cálculo simbólico, ni capacidad de resolver ecuaciones, matrices, derivadas o integrales. Lleva la tuya probada y sin fundas con fórmulas.</p></div>
          <div class="guia-card"><h3>Tablas</h3><p>En Matemáticas II (2027) te dan la tabla binomial puntual P(X = x). En CCSS te dan binomial y normal. Aun así, saber calcular P(X = 0) o tipificar a mano te salva si el ejercicio pide justificar.</p></div>
        </div>
        <div class="aviso"><strong>Consejo de examen:</strong> antes de calcular, escribe qué te piden y qué fórmula vas a usar. En la PAU se corrige el proceso: una respuesta correcta sin justificación puede perder la mitad del apartado.</div>
      </section>

      <section class="guia-bloque">
        <div class="guia-titulo"><span>05</span><h2>Instalar la app</h2></div>
        <div class="guia-columnas">
          <div class="guia-card"><h3>Android / escritorio</h3><p>Abre la web en Chrome o Edge y pulsa el botón <strong>Instalar</strong> de la cabecera, o usa el menú del navegador → «Instalar aplicación». Queda como una app más y funciona sin conexión.</p></div>
          <div class="guia-card"><h3>iPhone / iPad</h3><p>En Safari, toca <strong>Compartir</strong> → «Añadir a pantalla de inicio». Se abre a pantalla completa y guarda tu progreso en el dispositivo.</p></div>
        </div>
        <p class="nota-pie">El progreso se guarda solo en este navegador (localStorage). No hay cuentas, no se envía nada a ningún servidor.</p>
      </section>

      <section class="guia-bloque fuentes">
        <div class="guia-titulo"><span>06</span><h2>Fuentes y créditos</h2></div>
        <ul class="lista-fuentes">
          <li><a href="https://universitats.gva.es/" target="_blank" rel="noopener">Universitats · Generalitat Valenciana</a> — modelos y criterios oficiales de la PAU.</li>
          <li><a href="https://sergarb1.github.io/MatematicasPAU/" target="_blank" rel="noopener">SelectivoMates (sergarb1/MatematicasPAU)</a> — exámenes de Matemáticas II resueltos paso a paso; inspiración del enfoque didáctico.</li>
          <li><a href="https://academialallibreta.es/" target="_blank" rel="noopener">Academia La Llibreta</a> — estructura y novedades de las convocatorias.</li>
        </ul>
        <div class="guia-autora">
          <img class="guia-autora-foto" src="./img/elcirculo-mates.png" alt="El Círculo de las Mates" width="104" height="101" loading="lazy">
          <div>
            <p class="eyebrow">Proyecto</p>
            <h3><a href="https://sergarb1.github.io/elcirculodelasmates" target="_blank" rel="noopener">El Círculo de las Mates</a></h3>
            <p>PAU Mates CV forma parte de El Círculo de las Mates. Aquí tienes el banco de ejercicios, las explicaciones y la guía didáctica para preparar las Matemáticas de Bachillerato y la PAU.</p>
            <p class="guia-autora-meta">${DATA.length} ejercicios · <a href="./tools/audit.html">Auditoría del banco</a></p>
          </div>
        </div>
        <p class="nota-pie">Los ejercicios son material propio de El Círculo de las Mates adaptado al estilo de la PAU. No son enunciados oficiales ni una guía vinculante: la convocatoria y los criterios publicados por la Comisión de Materia prevalecen. KaTeX se distribuye con licencia MIT.</p>
      </section>`;
  }

  function renderProgreso(vista) {
    const resumen = resumenGlobal();
    const marcados = DATA.filter((e) => Store.marcado(e.id));
    const historial = Store.data.historial.slice(0, 8);
    const simulacros = Store.data.simulacros.slice(0, 6);
    const porMateria = Object.keys(MATERIAS).map((id) => ({ id: id, p: progresoMateria(id) }));
    const bloques = [];
    Object.keys(MATERIAS).forEach((materia) => {
      MATERIAS[materia].bloques.forEach((bloque) => {
        const lista = DATA.filter((e) => e.materia === materia && e.bloque === bloque);
        if (!lista.length) return;
        const hechos = lista.filter((e) => {
          const r = Store.data.ejercicios[e.id];
          return r && r.estado === 'acertado';
        }).length;
        bloques.push({ materia: materia, bloque: bloque, hechos: hechos, total: lista.length });
      });
    });
    vista.innerHTML = `
      <section class="vista-cab vista-cab-fila">
        <div>
          <p class="eyebrow">Tu progreso</p>
          <h1>Lo que ya dominas</h1>
          <p class="vista-desc">Se guarda en este dispositivo. Sin cuentas, sin nube, sin excusas.</p>
        </div>
        <button class="btn btn-fantasma" data-accion="reiniciar-progreso">Reiniciar progreso</button>
      </section>
      <div class="stats-grid">
        <div class="stat-card"><span class="stat-icono">🎯</span><strong>${resumen.dominados}<small>/${resumen.total}</small></strong><span>ejercicios dominados</span></div>
        <div class="stat-card"><span class="stat-icono">✅</span><strong>${resumen.precision}%</strong><span>precisión en los intentos</span></div>
        <div class="stat-card"><span class="stat-icono">🔥</span><strong>${Store.data.racha.dias || 0}</strong><span>días de racha</span></div>
        <div class="stat-card"><span class="stat-icono">⭐</span><strong>${marcados.length}</strong><span>marcados para repaso</span></div>
      </div>
      <section class="progreso-seccion">
        <h2>Por materia</h2>
        <div class="materia-progreso-lista">
          ${porMateria.map((item) => `
            <div class="materia-progreso">
              <div class="materia-progreso-cab"><strong>${MATERIAS[item.id].nombre}</strong><span>${item.p.hechos}/${item.p.total}</span></div>
              <div class="barra"><span style="width:${item.p.pct}%"></span></div>
            </div>`).join('')}
        </div>
      </section>
      <section class="progreso-seccion">
        <h2>Por bloque</h2>
        <div class="bloques-grid">
          ${bloques.map((b) => {
            const m = MATERIAS[b.materia];
            return `<div class="bloque-progreso"><span class="bloque-nombre">${BLOQUES[b.bloque].icono} ${BLOQUES[b.bloque].nombre}</span><span class="bloque-materia">${m.corto}</span><div class="barra barra-fina"><span style="width:${Math.round((b.hechos / b.total) * 100)}%"></span></div><span class="bloque-cifra">${b.hechos}/${b.total}</span></div>`;
          }).join('')}
        </div>
      </section>
      <div class="progreso-columnas">
        <section class="progreso-seccion">
          <h2>Últimos intentos</h2>
          ${historial.length ? `<ul class="lista-historial">${historial.map((h) => {
            const ej = DATA.find((e) => e.id === h.id);
            if (!ej) return '';
            return `<li><span class="historial-icono ${h.ok ? 'ok' : 'mal'}">${h.ok ? '✓' : '✗'}</span><span class="historial-titulo">${ej.titulo}</span><span class="historial-fecha">${new Date(h.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}</span></li>`;
          }).join('')}</ul>` : '<p class="nota-pie">Aún no has hecho ningún intento. Empieza por un bloque básico.</p>'}
        </section>
        <section class="progreso-seccion">
          <h2>Simulacros</h2>
          ${simulacros.length ? `<ul class="lista-simulacros">${simulacros.map((s) => `
            <li><span>${new Date(s.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}</span><strong>${MATERIAS[s.materia] ? MATERIAS[s.materia].corto : s.materia}</strong><span class="nota-sim ${s.nota >= 5 ? 'ok' : 'mal'}">${numero(s.nota, 2)}/10</span></li>`).join('')}</ul>` : '<p class="nota-pie">Todavía no has entregado ningún simulacro.</p>'}
        </section>
      </div>
      <section class="progreso-seccion">
        <div class="seccion-cab">
          <div><h2>Tu repaso ⭐</h2><p class="nota-pie">Ejercicios que has guardado para volver a ellos.</p></div>
          ${marcados.length ? '<button class="btn btn-suave" data-accion="practicar-marcados">Practicar marcados</button>' : ''}
        </div>
        ${marcados.length ? `<ul class="lista-marcados">${marcados.map((ej) => `
          <li><span class="badge badge-${ej.bloque}">${BLOQUES[ej.bloque].nombre}</span><span class="marcado-titulo">${ej.titulo}</span><span class="marcado-materia">${MATERIAS[ej.materia].corto}</span><button class="btn-estrella marcado" data-accion="marcar" data-id="${ej.id}" aria-label="Quitar del repaso">★</button></li>`).join('')}</ul>` : '<p class="nota-pie">Pulsa la estrella de un ejercicio para añadirlo aquí.</p>'}
      </section>`;
  }

  /* ------------------------------- acciones ----------------------------- */

  function accionMateria(id, scroll) {
    if (!MATERIAS[id]) return;
    const cambio = state.materia !== id;
    state.materia = id;
    try { localStorage.setItem('paumates.materia', id); } catch (error) { /* sin persistencia */ }
    if (cambio) {
      state.bloque = 'todos';
      state.nivel = 'todos';
      state.soloMarcados = false;
      state.semilla = null;
      state.firma = '';
      state.pasos = null;
      state.idx = 0;
    }
    if (state.vista === 'pasos') nuevoPasos();
    render();
    if (scroll) {
      const el = $('#practica');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  document.addEventListener('click', (evento) => {
    const boton = evento.target.closest('[data-accion]');
    if (!boton) return;
    const accion = boton.dataset.accion;

    if (accion === 'materia') {
      accionMateria(boton.dataset.materia, state.vista === 'entrenar');
      return;
    }
    if (accion === 'bloque') {
      state.bloque = boton.dataset.valor;
      state.firma = '';
      reiniciarTarjeta();
      renderEntrenar($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'nivel') {
      state.nivel = boton.dataset.valor;
      state.firma = '';
      reiniciarTarjeta();
      renderEntrenar($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'solo-marcados') {
      state.soloMarcados = !state.soloMarcados;
      state.firma = '';
      reiniciarTarjeta();
      renderEntrenar($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'mezclar') {
      state.semilla = state.semilla == null ? String(Math.random()) : null;
      state.firma = '';
      reiniciarTarjeta();
      renderEntrenar($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'limpiar-filtros') {
      state.bloque = 'todos';
      state.nivel = 'todos';
      state.soloMarcados = false;
      state.semilla = null;
      state.firma = '';
      renderEntrenar($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'marcar') {
      const id = boton.dataset.id;
      const marcado = Store.alternarMarcado(id);
      boton.classList.toggle('marcado', marcado);
      boton.setAttribute('aria-pressed', String(marcado));
      boton.setAttribute('aria-label', marcado ? 'Quitar del repaso' : 'Añadir al repaso');
      if (state.vista === 'entrenar' && state.soloMarcados) {
        state.firma = '';
        renderEntrenar($('#vista'));
        math($('#vista'));
      }
      if (state.vista === 'progreso') renderProgreso($('#vista'));
      return;
    }
    if (accion === 'elegir') {
      const grupo = boton.parentElement;
      Array.from(grupo.children).forEach((b) => {
        b.classList.remove('seleccionada', 'correcta', 'incorrecta');
        b.setAttribute('aria-checked', 'false');
      });
      boton.classList.add('seleccionada');
      boton.setAttribute('aria-checked', 'true');
      return;
    }
    if (accion === 'sim-elegir') {
      const grupo = boton.parentElement;
      Array.from(grupo.children).forEach((b) => {
        b.classList.remove('seleccionada');
        b.setAttribute('aria-checked', 'false');
      });
      boton.classList.add('seleccionada');
      boton.setAttribute('aria-checked', 'true');
      return;
    }
    if (accion === 'comprobar') {
      comprobarPractica();
      return;
    }
    if (accion === 'pista') {
      state.pista = !state.pista;
      const panel = $('#panel-pista');
      if (panel) panel.hidden = !state.pista;
      boton.textContent = state.pista ? 'Ocultar pista' : 'Pista';
      boton.setAttribute('aria-expanded', String(state.pista));
      return;
    }
    if (accion === 'solucion') {
      state.solucion = !state.solucion;
      const panel = $('#panel-solucion');
      if (panel) panel.hidden = !state.solucion;
      boton.textContent = state.solucion ? 'Ocultar solución' : 'Ver solución';
      boton.setAttribute('aria-expanded', String(state.solucion));
      return;
    }
    if (accion === 'siguiente') {
      irAIndice(state.idx + 1);
      return;
    }
    if (accion === 'anterior') {
      irAIndice(state.idx - 1);
      return;
    }
    if (accion === 'pasos-usar') {
      const p = state.pasos;
      if (!p) return;
      const orden = Number(boton.dataset.orden);
      const indice = p.disponibles.findIndex((d) => d.orden === orden);
      if (indice === -1) return;
      p.colocados.push(p.disponibles.splice(indice, 1)[0]);
      p.comprobado = false;
      p.acierto = false;
      renderPasos($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'pasos-quitar') {
      const p = state.pasos;
      if (!p) return;
      const pos = Number(boton.dataset.pos);
      const item = p.colocados.splice(pos, 1)[0];
      if (item) p.disponibles.push(item);
      p.comprobado = false;
      p.acierto = false;
      renderPasos($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'pasos-comprobar') {
      comprobarPasos();
      return;
    }
    if (accion === 'pasos-pista') {
      if (!state.pasos) return;
      state.pasos.pista = !state.pasos.pista;
      renderPasos($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'pasos-reiniciar') {
      if (!state.pasos) return;
      state.pasos.colocados = [];
      state.pasos.disponibles = mezclar(state.pasos.ej.solucion.map((paso, i) => ({ paso: paso, orden: i })));
      state.pasos.comprobado = false;
      state.pasos.acierto = false;
      state.pasos.pista = false;
      renderPasos($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'pasos-siguiente') {
      nuevoPasos();
      renderPasos($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'sim-empezar') {
      empezarSimulacro(boton.dataset.materia);
      return;
    }
    if (accion === 'sim-entregar') {
      if (window.confirm('¿Entregar el simulacro? Se corregirá lo que tengas escrito.')) entregarSimulacro(false);
      return;
    }
    if (accion === 'sim-nuevo') {
      empezarSimulacro(boton.dataset.materia);
      return;
    }
    if (accion === 'sim-cerrar') {
      state.sim = null;
      pararTimer();
      renderSimulacro($('#vista'));
      math($('#vista'));
      return;
    }
    if (accion === 'imprimir') {
      window.print();
      return;
    }
    if (accion === 'reiniciar-progreso') {
      if (window.confirm('¿Borrar todo el progreso guardado en este dispositivo? Esta acción no se puede deshacer.')) {
        Store.reiniciar();
        estadoVacio();
        render();
        toast('Progreso borrado.');
      }
      return;
    }
    if (accion === 'practicar-marcados') {
      const primero = DATA.find((e) => Store.marcado(e.id));
      if (primero) state.materia = primero.materia;
      state.bloque = 'todos';
      state.nivel = 'todos';
      state.soloMarcados = true;
      state.semilla = null;
      state.firma = '';
      state.vista = 'entrenar';
      if (rutaActual() !== 'entrenar') location.hash = '#/entrenar';
      else {
        render();
        const el = $('#practica');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' && evento.target.matches('.campo input') && state.vista === 'entrenar') {
      evento.preventDefault();
      comprobarPractica();
    }
  });

  document.addEventListener('change', (evento) => {
    if (evento.target.id === 'selector-ejercicio') {
      irAEjercicio(evento.target.value);
      return;
    }
    if (evento.target.id === 'selector-nivel') {
      state.nivel = evento.target.value;
      state.firma = '';
      renderEntrenar($('#vista'));
      math($('#vista'));
    }
  });

  function estadoVacio() {
    state.lista = [];
    state.idx = 0;
    state.firma = '';
    state.comprobado = false;
    state.registrado = false;
    state.pista = false;
    state.solucion = false;
    state.pasos = null;
    state.sim = null;
    pararTimer();
  }

  /* --------------------------------- PWA -------------------------------- */

  let instalacion = null;

  function configurarPWA() {
    window.addEventListener('beforeinstallprompt', (evento) => {
      evento.preventDefault();
      instalacion = evento;
      const boton = $('#btn-instalar');
      if (boton) boton.hidden = false;
    });
    window.addEventListener('appinstalled', () => {
      instalacion = null;
      const boton = $('#btn-instalar');
      if (boton) boton.hidden = true;
      toast('App instalada. Ya puedes abrirla sin conexión.');
    });
    const botonInstalar = $('#btn-instalar');
    if (botonInstalar) {
      botonInstalar.addEventListener('click', async () => {
        if (!instalacion) {
          toast('Usa el menú del navegador → «Instalar aplicación» o «Añadir a pantalla de inicio».');
          return;
        }
        instalacion.prompt();
        try {
          await instalacion.userChoice;
        } catch (error) { /* el usuario puede cerrar el diálogo */ }
        instalacion = null;
        botonInstalar.hidden = true;
      });
    }
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register('./sw.js').catch(() => { /* la app funciona igual sin SW */ });
    }
    const red = $('#estado-red');
    const actualizarRed = () => {
      if (!red) return;
      red.hidden = navigator.onLine;
    };
    window.addEventListener('online', actualizarRed);
    window.addEventListener('offline', () => {
      actualizarRed();
      toast('Sin conexión. Tu progreso sigue guardado y la app sigue funcionando.');
    });
    actualizarRed();
  }

  function configurarTema() {
    const boton = $('#btn-tema');
    if (!boton) return;
    boton.addEventListener('click', () => {
      const actual = document.documentElement.dataset.tema === 'claro' ? 'claro' : 'oscuro';
      const nuevo = actual === 'claro' ? 'oscuro' : 'claro';
      document.documentElement.dataset.tema = nuevo;
      try { localStorage.setItem('paumates.tema', nuevo); } catch (error) { /* sin persistencia */ }
      boton.setAttribute('aria-label', nuevo === 'claro' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
      boton.textContent = nuevo === 'claro' ? '☾' : '☀';
    });
    boton.textContent = document.documentElement.dataset.tema === 'claro' ? '☾' : '☀';
  }

  /* -------------------------------- inicio ------------------------------ */

  function iniciar() {
    state.vista = rutaActual();
    configurarTema();
    configurarPWA();
    window.addEventListener('hashchange', alCambiarRuta);
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
