# Handoff · PAU Mates CV

Documento de traspaso técnico y de estado del proyecto. Última actualización:
23 de noviembre de 2026.

## Identidad

- **App:** PAU Mates CV · https://sergarb1.github.io/PracticaMatesPAU/
- **Repositorio:** https://github.com/sergarb1/PracticaMatesPAU
- **Proyecto:** [El Círculo de las Mates](https://sergarb1.github.io/elcirculodelasmates)
- **Fotografía:** `img/elcirculo-mates.png`, procedente de
  [El Círculo de las Mates](https://github.com/sergarb1/elcirculodelasmates).
  Se muestra con bordes redondeados mediante CSS.
- **Licencia:** MIT © 2026 El Círculo de las Mates.
- **Auditoría:** https://sergarb1.github.io/PracticaMatesPAU/tools/audit.html

## Estado actual

- App estática, sin backend, sin cuentas y sin proceso de build.
- 4 materias: Matemáticas II, CCSS II, Matemáticas I y CCSS I.
- **262 ejercicios** en 18 archivos: CCSS II en 11 archivos por bloque y el resto
  por materia y nivel:
  - Matemáticas II: 64 (10 básico, 32 medio, 22 nivel PAU).
  - CCSS II: 78 (9 básico, 37 medio, 32 nivel PAU).
  - Matemáticas I: 64 (27 básico, 37 medio).
  - CCSS I: 56 (28 básico, 28 medio).
- **21 bloques temáticos** visibles en filtros, insignias y progreso:
  - Matemáticas II: probabilidad 9, matrices 6, sistemas 4, complejos 5,
    límites 5, derivadas 5, integrales 8, optimización 8, vectores 5,
    rectas y planos 5, geometría 4.
  - CCSS II: probabilidad 10, estadística 7, inferencia 7, matrices 7,
    sistemas 8, sucesiones 6, programación lineal 6, funciones 6, límites 7,
    derivadas 7, integrales 7.
  - Matemáticas I: álgebra 10, números reales 9, sucesiones 9, trigonometría 9,
    cónicas 8, vectores 5, funciones 4, límites 6, derivadas 4.
  - CCSS I: números 10, álgebra 10, sucesiones 9, estadística 10, funciones 8,
    probabilidad 9.
- Todos los ejercicios son de opción múltiple. Los que tienen varios apartados
  muestran un grupo de 4 opciones por apartado, sin campos de escritura.
- La interfaz solo permite responder tocando opciones: no quedan campos de texto
  ni en la práctica ni en el simulacro. `npm run validate` exige `tipo: 'opcion'`
  y exactamente 4 opciones por apartado (451 apartados revisados).
- Cada ejercicio incluye enunciado, pista, solución paso a paso, truco, error
  típico y fuente.
- Modos: Entrenar (con selector directo de ejercicio), Pasos, Simulacro de 90
  minutos, Formulario, Guía PAU y Progreso.
- PWA instalable con Service Worker y funcionamiento offline. KaTeX está en
  `vendor/`, no se carga desde CDN.
- Progreso en `localStorage`; no se envía nada a ningún servidor.
- GitHub Pages publica desde `main`, carpeta raíz, sin Actions.

## Distractores

Los distractores numéricos se regeneraron con `scripts/mejorar-distractores.mjs`
(196 apartados numéricos revisados):

- Se conserva siempre la opción correcta y su índice.
- Todas las opciones de un apartado usan la misma precisión decimal.
- Se acotan magnitud y dominio: probabilidades en $[0,1]$, ángulos en rango,
  distancias, áreas y precios no negativos.
- Se usan respuestas de otros apartados y errores típicos (doble, mitad,
  complementario, ±10 %, ±1 paso) como distractores.
- Se corrigió un falso positivo que trataba «área del triángulo» como ángulo
  porque «triángulo» contiene «ángulo».

Los apartados con opciones de texto (matrices, intervalos, dominios, tipos de
sistema) se mantienen escritos a mano. Queda una revisión pedagógica fina de los
distractores de geometría y probabilidad, aunque ya no hay valores absurdos ni
mezclas de precisión.

## Bloques y simulacro

- `MATERIAS` y `BLOQUES` están en `js/app.js`; cada materia declara sus bloques.
- El simulacro agrupa bloques en las secciones oficiales:
  - Matemáticas II: probabilidad; matrices + sistemas + complejos; límites +
    derivadas + integrales + optimización; vectores + rectas y planos +
    geometría.
  - CCSS II: probabilidad + estadística + inferencia; matrices + sistemas +
    programación lineal + sucesiones; funciones + límites + derivadas +
    integrales.
- Al añadir un bloque hay que actualizar `BLOQUES`, `MATERIAS.bloques`,
  `definicionesSimulacro`, los estilos `.badge-*`, el validador, `tools/audit.html`
  y la tabla de `js/data/README.md`.

## Comandos

```bash
npm run serve       # http://localhost:8080
npm run validate    # valida los 262 ejercicios y los recursos del Service Worker
```

No hay dependencias npm. Se necesita Python 3 para `serve` y Node para `validate`.
La app también funciona con `file://`, pero el Service Worker y la instalación
requieren `http(s)`.

## Mapa de archivos

```
index.html                  Shell, cabecera, pie y orden de carga
css/styles.css              Diseño responsive, temas, foto redondeada y print
js/app.js                   Estado, rutas hash, práctica, corrección, simulacro y PWA
js/formulas.js              Formularios por materia y bloque
js/data/ccss-ii/<bloque>.js  Banco de CCSS II por bloque (11 archivos)
js/data/<materia>/nivel-N.js  Banco del resto por materia y nivel (7 archivos)
img/elcirculo-mates.png     Foto del proyecto
tools/audit.html            Auditoría interactiva del banco
vendor/                     KaTeX 0.16.11 local y fuentes
icons/                      Iconos PNG/SVG de la PWA
sw.js                       Service Worker; VERSION actual: v1.10.8
manifest.webmanifest        Manifest PWA con rutas relativas
scripts/validar-banco.mjs   Validación por Node, sin dependencias
scripts/mejorar-distractores.mjs  Regenera distractores numéricos
scripts/reclasificar-bloques.mjs  Asigna bloques temáticos
scripts/ampliar-banco.mjs   Registro y fusión de la tanda de 24 ejercicios
scripts/ampliar-bloques.mjs Tanda de 48 ejercicios de los seis bloques nuevos
scripts/ampliar-estadistica-pau.mjs Tanda de 3 ejercicios de estadística PAU
scripts/convertir-opciones.mjs    Conversión histórica a opción múltiple
scripts/verificar-latex.mjs Renderiza todas las fórmulas con KaTeX
scripts/prueba-ui.mjs       Prueba de humo con Chrome DevTools
```

## Validación y auditoría

`npm run validate` comprueba:

- 262 IDs únicos y campos obligatorios.
- Materia, bloque y nivel válidos (incluidos los 21 bloques actuales).
- Coherencia entre carpeta, archivo, nivel y bloque del ejercicio.
- Tipo `opcion` y exactamente 4 opciones por apartado, sin campos de escritura.
- Que los recursos precacheados por `sw.js` existan.

`tools/audit.html` repite estas comprobaciones en el navegador y añade la
renderización de todo el LaTeX con KaTeX para detectar fórmulas rotas. Expone
`window.__audit` y permite descargar un informe JSON. Carga los datos y KaTeX
desde rutas relativas, así que funciona en GitHub Pages y en local.

## Flujo de publicación

```bash
npm run validate
# probar la app y tools/audit.html en el navegador
git add -A
git commit -m "Describe el cambio"
git push origin main
```

GitHub Pages reconstruye el sitio automáticamente. Si se modifican recursos del
shell o del banco, subir `VERSION` en `sw.js` para que los clientes abandonen la
caché anterior. El manifest usa `start_url` y `scope` relativos para funcionar
en el subdirectorio del repositorio.

## Fuentes

La lista de documentos y portales por comunidad está en `AGENTS.md`
(sección «Fuentes de exámenes»). Incluye el PDF de CCSS II de EBAU Valencia
2017–2026 aportado por la autora, EbauMatemáticas, Selectividad Intergranada y
los portales oficiales de las 17 comunidades, Ceuta y Melilla. Las rutas concretas
cambian cada curso: verificar el PDF original antes de citar una comunidad.

## Convenciones para futuras aportaciones

- Mantener el español y el tono didáctico.
- No introducir frameworks, backend ni dependencias si no son imprescindibles.
- No usar `eval` para corregir respuestas.
- Añadir cada ejercicio al archivo de su materia y nivel; actualizar el recuento
  de la cabecera del archivo y el total de `README.md` si cambia.
- Usar los bloques existentes antes de crear uno nuevo.
- Verificar los cálculos con SymPy/Python antes de publicar.
- Cuidar el LaTeX: `$...$` para inline, `$$...$$` para destacado y `\lt`/`\gt`
  en lugar de `<`/`>`.
- No cambiar la autoría ni la licencia sin autorización de la autora.

## Pendientes razonables

- **Bloques flojos:** quedan sistemas y geometría de Matemáticas II (4 cada uno),
  y funciones y derivadas de Matemáticas I (4 cada uno). CCSS II tiene todos sus
  bloques con al menos 6 ejercicios; Integrales y Optimización de Matemáticas II
  ya tienen 8.
- **Revisión manual de distractores** de geometría, estadística y probabilidad:
  los automáticos ya son numéricamente plausibles, pero algunos admiten errores
  conceptuales más finos.
- **PDF de CCSS II 2017–2026:** primera tanda adaptada (matrices, sistema de
  precios, probabilidad con Bayes, eficiencia financiera, radar e integrales) y
  tres ejercicios de estadística de nivel PAU (el PDF no trae problemas de
  estadística descriptiva). Quedan la inferencia y las convocatorias anteriores
  a 2024.
- Añadir validación simbólica de expresiones equivalentes (por ejemplo, con
  Pyodide o Symbolica) sin romper el funcionamiento offline.
- Añadir más simulacros por materia y un modo de repaso espaciado.
- Revisar la estructura de la PAU si la Comisión de Materia publica cambios.
