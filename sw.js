/* PAU Mates CV · Service Worker
   Precachea el shell y el banco para funcionar sin conexión.
   Los recursos ya cacheados se sirven al instante y se actualizan en segundo plano. */

const VERSION = 'v1.10.8';
const CACHE = 'pau-mates-' + VERSION;
const RUNTIME = 'pau-mates-runtime-' + VERSION;

const APP_SHELL = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/formulas.js',
  './js/data/mates-ii/nivel-1.js',
  './js/data/mates-ii/nivel-2.js',
  './js/data/mates-ii/nivel-3.js',
  './js/data/ccss-ii/probabilidad.js',
  './js/data/ccss-ii/estadistica.js',
  './js/data/ccss-ii/inferencia.js',
  './js/data/ccss-ii/matrices.js',
  './js/data/ccss-ii/sistemas.js',
  './js/data/ccss-ii/sucesiones.js',
  './js/data/ccss-ii/programacion-lineal.js',
  './js/data/ccss-ii/funciones.js',
  './js/data/ccss-ii/limites.js',
  './js/data/ccss-ii/derivadas.js',
  './js/data/ccss-ii/integrales.js',
  './js/data/mates-i/nivel-1.js',
  './js/data/mates-i/nivel-2.js',
  './js/data/ccss-i/nivel-1.js',
  './js/data/ccss-i/nivel-2.js',
  './vendor/katex.min.css',
  './vendor/katex.min.js',
  './vendor/contrib/auto-render.min.js',
  './manifest.webmanifest',
  './img/elcirculo-mates.png',
  './tools/audit.html',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(
        claves
          .filter((clave) => clave !== CACHE && clave !== RUNTIME)
          .map((clave) => caches.delete(clave))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const peticion = event.request;
  if (peticion.method !== 'GET') return;

  const url = new URL(peticion.url);
  if (url.origin !== self.location.origin) return;

  if (peticion.mode === 'navigate') {
    event.respondWith(
      fetch(peticion)
        .then((respuesta) => {
          const copia = respuesta.clone();
          caches.open(RUNTIME).then((cache) => cache.put('./index.html', copia)).catch(() => {});
          return respuesta;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(peticion).then((cacheada) => {
      const red = fetch(peticion)
        .then((respuesta) => {
          if (respuesta && respuesta.ok) {
            const copia = respuesta.clone();
            caches.open(RUNTIME).then((cache) => cache.put(peticion, copia)).catch(() => {});
          }
          return respuesta;
        })
        .catch(() => cacheada);
      return cacheada || red;
    })
  );
});
