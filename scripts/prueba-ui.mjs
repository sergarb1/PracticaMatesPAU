/* Prueba de humo temporal de la UI con Chrome DevTools Protocol. */

const BASE = 'http://127.0.0.1:' + (process.env.PUERTO_CDP || '9333');
const APP = 'http://localhost:8099';
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function objetivo() {
  for (let i = 0; i < 50; i += 1) {
    try {
      const lista = await (await fetch(BASE + '/json/list')).json();
      const pagina = lista.find((t) => t.type === 'page');
      if (pagina) return pagina;
    } catch (error) { /* Chrome aún arrancando */ }
    await esperar(200);
  }
  throw new Error('No se encontró la pestaña de la app');
}

const pagina = await objetivo();
const ws = new WebSocket(pagina.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true });
  ws.addEventListener('error', reject, { once: true });
});

let siguienteId = 0;
const pendientes = new Map();
const excepciones = [];

ws.addEventListener('message', (evento) => {
  const mensaje = JSON.parse(evento.data);
  if (mensaje.id && pendientes.has(mensaje.id)) {
    const { resolve, reject } = pendientes.get(mensaje.id);
    pendientes.delete(mensaje.id);
    if (mensaje.error) reject(new Error(mensaje.error.message));
    else resolve(mensaje.result);
    return;
  }
  if (mensaje.method === 'Runtime.exceptionThrown') {
    excepciones.push(mensaje.params.exceptionDetails.text + ': ' + (mensaje.params.exceptionDetails.exception?.description || ''));
  }
});

function enviar(method, params) {
  const id = ++siguienteId;
  ws.send(JSON.stringify({ id, method, params: params || {} }));
  return new Promise((resolve, reject) => pendientes.set(id, { resolve, reject }));
}

async function evaluar(expresion) {
  const resultado = await enviar('Runtime.evaluate', { expression: expresion, returnByValue: true, awaitPromise: true });
  if (resultado.exceptionDetails) {
    const detalle = resultado.exceptionDetails;
    throw new Error((detalle.exception && detalle.exception.description) || detalle.text || 'Error en la evaluación');
  }
  return resultado.result.value;
}

async function esperarSelector(selector) {
  for (let i = 0; i < 60; i += 1) {
    if (await evaluar(`!!document.querySelector(${JSON.stringify(selector)})`)) return;
    await esperar(200);
  }
  throw new Error('No apareció ' + selector);
}

await enviar('Runtime.enable');
await enviar('Page.enable');
await enviar('Page.navigate', { url: APP + '/#/entrenar' });
await esperarSelector('#practica .opcion');
await esperarSelector('.titulo-ejercicio');
await esperar(600);

const inicial = await evaluar(`({
  titulo: document.querySelector('.titulo-ejercicio').textContent.trim(),
  grupos: document.querySelectorAll('.campo-opcion').length,
  opciones: document.querySelectorAll('.opcion').length,
  camposTexto: document.querySelectorAll('#practica input[type="text"]').length
})`);

const selector = await evaluar(`({
  opciones: document.querySelectorAll('#selector-ejercicio option[value]:not([value=""])').length,
  actual: document.querySelector('#selector-ejercicio').value
})`);

await evaluar(`document.querySelector('[data-accion="bloque"]:not([data-valor="todos"])').click(); true`);
await esperar(400);
const filtroActivo = await evaluar(`document.querySelector('[data-accion="bloque"].activo').dataset.valor`);

await evaluar(`
  const sel = document.querySelector('#selector-ejercicio');
  const objetivo = [...sel.options].filter((o) => o.value).pop();
  sel.value = objetivo.value;
  sel.dispatchEvent(new Event('change', { bubbles: true }));
  true
`);
await esperar(600);

const seleccionado = await evaluar(`({
  id: document.querySelector('#selector-ejercicio').value,
  tituloId: document.querySelector('.titulo-ejercicio') ? document.querySelector('.titulo-ejercicio').id : '',
  titulo: document.querySelector('.titulo-ejercicio') ? document.querySelector('.titulo-ejercicio').textContent.trim() : '',
  filtro: document.querySelector('[data-accion="bloque"].activo').dataset.valor
})`);
if (seleccionado.tituloId !== 'titulo-' + seleccionado.id) {
  throw new Error('El selector no abrió el ejercicio elegido: ' + JSON.stringify(seleccionado));
}
if (filtroActivo !== 'todos' && seleccionado.filtro !== 'todos') {
  throw new Error('El selector no limpió el filtro al elegir otro bloque: ' + JSON.stringify({ filtroActivo, seleccionado }));
}

let avances = 0;
while (avances < 10 && (await evaluar(`document.querySelectorAll('.campo-opcion').length`)) < 2) {
  await evaluar(`document.querySelector('[data-accion="siguiente"]').click(); true`);
  await esperar(500);
  avances += 1;
}

const apartados = await evaluar(`({
  titulo: document.querySelector('.titulo-ejercicio').textContent.trim(),
  partes: [...document.querySelectorAll('.campo-opcion')].map((grupo) => ({
    etiqueta: grupo.querySelector('.etiqueta-parte').textContent.trim(),
    opciones: grupo.querySelectorAll('.opcion').length
  })),
  camposTexto: document.querySelectorAll('#practica input[type="text"]').length
})`);

await evaluar(`
  document.querySelectorAll('.campo-opcion').forEach((grupo) => grupo.querySelector('.opcion').click());
  document.querySelector('[data-accion="comprobar"]').click();
  true
`);
await esperar(400);

const primeraCorreccion = await evaluar(`({
  feedback: document.querySelector('#feedback').textContent.trim(),
  correctas: document.querySelectorAll('.campo-opcion .opcion.correcta').length,
  incorrectas: document.querySelectorAll('.campo-opcion .opcion.incorrecta').length
})`);

await evaluar(`
  document.querySelectorAll('.campo-opcion').forEach((grupo) => grupo.querySelector('.opcion.correcta').click());
  document.querySelector('[data-accion="comprobar"]').click();
  true
`);
await esperar(400);

const correccionPerfecta = await evaluar(`({
  feedback: document.querySelector('#feedback').textContent.trim(),
  solucionVisible: !document.querySelector('#panel-solucion').hidden,
  correctas: document.querySelectorAll('.campo-opcion .opcion.correcta').length
})`);

await evaluar(`location.hash = '#/simulacro'; true`);
await esperar(600);
await evaluar(`document.querySelector('[data-accion="sim-empezar"][data-materia="mates-ii"]').click(); true`);
await esperarSelector('.pregunta-examen');
await esperar(600);

const simulacro = await evaluar(`({
  preguntas: document.querySelectorAll('.pregunta-examen').length,
  grupos: document.querySelectorAll('.pregunta-examen .campo-opcion').length,
  opciones: document.querySelectorAll('.pregunta-examen .opcion').length,
  camposTexto: document.querySelectorAll('.pregunta-examen input[type="text"]').length
})`);

await enviar('Page.navigate', { url: APP + '/#/entrenar' });
await esperarSelector('#selector-ejercicio');
await evaluar(`document.querySelector('[data-accion="materia"][data-materia="ccss-ii"]').click(); true`);
await esperar(600);
const selectorCcss = await evaluar(`({
  opciones: document.querySelectorAll('#selector-ejercicio option[value]:not([value=""])').length,
  actual: document.querySelector('#selector-ejercicio').value
})`);
if (selectorCcss.opciones !== 78) throw new Error('CCSS II debería tener 78 ejercicios en el selector: ' + JSON.stringify(selectorCcss));

await evaluar(`
  (() => {
    const sel = document.querySelector('#selector-ejercicio');
    sel.value = 'cs2-int-06';
    sel.dispatchEvent(new Event('change', { bubbles: true }));
  })();
  true
`);
await esperar(600);
const nuevoCcss = await evaluar(`({
  id: document.querySelector('#selector-ejercicio').value,
  tituloId: document.querySelector('.titulo-ejercicio') ? document.querySelector('.titulo-ejercicio').id : '',
  partes: document.querySelectorAll('.campo-opcion').length,
  opciones: document.querySelectorAll('.campo-opcion .opcion').length
})`);
if (nuevoCcss.tituloId !== 'titulo-cs2-int-06' || nuevoCcss.partes !== 3 || nuevoCcss.opciones !== 12) {
  throw new Error('El ejercicio nuevo de área entre curvas no se cargó bien: ' + JSON.stringify(nuevoCcss));
}

await enviar('Page.navigate', { url: APP + '/tools/audit.html' });
let auditoria = { done: false };
for (let i = 0; i < 160; i += 1) {
  auditoria = await evaluar(`window.__audit ? ({ done: window.__audit.done, total: window.__audit.total, errores: window.__audit.errors.length, avisos: window.__audit.warnings.length }) : ({ done: false })`);
  if (auditoria.done) break;
  await esperar(250);
}
if (!auditoria.done || auditoria.errores) throw new Error('La auditoría del banco falló: ' + JSON.stringify(auditoria));

await enviar('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 3,
  mobile: true
});
await enviar('Page.navigate', { url: APP + '/#/entrenar' });
await esperarSelector('#selector-ejercicio');
await esperar(600);
await evaluar(`document.querySelector('.selector-problema').scrollIntoView({ block: 'center' }); true`);
await esperar(400);

const movil = await evaluar(`(() => {
  const contenedor = document.querySelector('.selector-problema');
  const select = document.querySelector('#selector-ejercicio');
  const caja = contenedor.getBoundingClientRect();
  const estilo = getComputedStyle(select);
  return {
    anchoVista: window.innerWidth,
    desbordamiento: document.documentElement.scrollWidth > window.innerWidth,
    selectorDentro: caja.left >= 0 && caja.right <= window.innerWidth + 0.5,
    anchoSelector: Math.round(caja.width),
    fuenteSelect: estilo.fontSize,
    altoSelect: Math.round(select.getBoundingClientRect().height),
    disposicion: getComputedStyle(contenedor).flexDirection
  };
})()`);
if (movil.desbordamiento) throw new Error('Desbordamiento horizontal en móvil: ' + JSON.stringify(movil));
if (!movil.selectorDentro) throw new Error('El selector se sale de la pantalla: ' + JSON.stringify(movil));
if (parseFloat(movil.fuenteSelect) < 16) throw new Error('El selector provoca zoom en iOS: ' + JSON.stringify(movil));
if (movil.altoSelect < 44) throw new Error('El selector no tiene objetivo táctil suficiente: ' + JSON.stringify(movil));
if (movil.disposicion !== 'column') throw new Error('El selector no se apila en móvil: ' + JSON.stringify(movil));

if (process.env.CAPTURA) {
  const captura = await enviar('Page.captureScreenshot', { format: 'png' });
  const { writeFileSync } = await import('node:fs');
  writeFileSync(process.env.CAPTURA, Buffer.from(captura.data, 'base64'));
}

console.log(JSON.stringify({ inicial, selector, filtroActivo, seleccionado, apartados, primeraCorreccion, correccionPerfecta, simulacro, selectorCcss, nuevoCcss, auditoria, movil, excepciones }, null, 2));
ws.close();
process.exit(excepciones.length ? 1 : 0);
