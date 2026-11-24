# AGENTS.md · PAU Mates CV

App estática para practicar Matemáticas I y II y Matemáticas Aplicadas a las CCSS I
y II, orientada a la PAU de la Comunitat Valenciana. Proyecto de **El Círculo de
las Mates** (<https://sergarb1.github.io/elcirculodelasmates>).
Inspiración: la mecánica de práctica de una app de preguntas (modos, progreso,
PWA, sin backend) y el material de `sergarb1/MatematicasPAU`.

## Stack

- HTML + CSS + JavaScript clásico. **Sin build, sin framework, sin backend.**
- KaTeX 0.16.11 copiado en `vendor/` para renderizar LaTeX **offline**.
- `localStorage` para progreso, tema y preferencias.
- Service Worker + `manifest.webmanifest` para PWA instalable.
- Node solo para validación y herramientas de contenido; no hay dependencias npm.

## Ejecutar

```bash
npm run serve      # http://localhost:8080  (python -m http.server)
npm run validate   # valida el banco de ejercicios
```

No abras `index.html` con doble clic para probar la PWA: usa el servidor local.
La app también funciona con `file://` (sin Service Worker ni instalación).

## Mapa

```
index.html                 shell, orden de carga de scripts
css/styles.css             sistema visual, responsive, temas claro/oscuro
js/app.js                  estado, vistas, corrección, simulacro, PWA
js/formulas.js             formularios por materia/bloque
js/data/ccss-ii/<bloque>.js  banco de CCSS II por bloque
js/data/<materia>/nivel-N.js  banco del resto por materia y nivel
img/elcirculo-mates.png    foto del proyecto (bordes redondeados por CSS)
tools/audit.html           auditoría interactiva del banco
vendor/katex...            KaTeX local + fuentes
sw.js                      caché offline
manifest.webmanifest       instalación PWA
icons/                     iconos PNG/SVG
scripts/validar-banco.mjs  comprobación del contenido
scripts/mejorar-distractores.mjs  regenera distractores numéricos
scripts/reclasificar-bloques.mjs  asigna bloques temáticos
scripts/ampliar-banco.mjs  añade la tanda de ejercicios (histórico)
scripts/ampliar-bloques.mjs  añade la tanda de bloques nuevos (48 ejercicios)
scripts/ampliar-pau-ccss.mjs  adaptaciones PAU de CCSS II y límites de Matemáticas I
scripts/verificar-latex.mjs  renderiza todas las fórmulas con KaTeX
scripts/prueba-ui.mjs      prueba de humo con Chrome
handsoff.md                traspaso técnico y estado del proyecto
```

## Estado de la app

- Banco actual: **262 ejercicios** (54 de nivel PAU) en 18 archivos: 11 de CCSS II
  por bloque y 7 por materia/nivel (64 de Matemáticas II, 78 de CCSS II, 64 de
  Matemáticas I y 56 de CCSS I).
- **21 bloques temáticos**: probabilidad, estadística, inferencia, matrices,
  sistemas, complejos, programación lineal, sucesiones, funciones, límites,
  derivadas, integrales, optimización, vectores, rectas y planos, geometría,
  trigonometría, números reales, cónicas, números y álgebra. Cada materia muestra
  solo los suyos.
- Todas las preguntas son de **opción múltiple**; los apartados se responden tocando
  opciones, sin escribir. Cada apartado tiene 4 opciones con distractores verosímiles,
  con la misma precisión decimal y sin valores fuera del dominio de la respuesta.
- Autoría visible en cabecera, pie, guía, README y LICENSE: **El Círculo de las
  Mates**, con enlace a <https://sergarb1.github.io/elcirculodelasmates>.
- Vistas por hash: `#/entrenar`, `#/pasos`, `#/simulacro`, `#/formulario`,
  `#/guia`, `#/progreso`.
- `js/app.js` define `MATERIAS`, `BLOQUES` y el `Store`. El banco se carga antes
  que `app.js` mediante `<script defer>` en `index.html`. El simulacro agrupa los
  bloques temáticos en las secciones oficiales con `definicionesSimulacro`.
- Modos: práctica con filtros y selector directo de ejercicio; reordenar pasos de
  una solución; simulacro con temporizador y corrección automática; formulario;
  guía; progreso.
- El simulacro usa ejercicios de opción múltiple (todos los actuales).

## Ampliar contenido

1. Lee `js/data/README.md` (esquema completo).
2. Añade el ejercicio en su archivo: en CCSS II, `js/data/ccss-ii/<bloque>.js`; en
   el resto, el `nivel-N.js` de la materia. Usa un `bloque` de la tabla de
   `js/data/README.md`.
3. `npm run validate`.
4. Comprueba en el navegador que el enunciado y la solución se renderizan.
5. Si añades un archivo nuevo, inclúyelo en `index.html` **antes** de `js/app.js`
   y en la lista de `scripts/validar-banco.mjs`.
6. Si añades un recurso al shell, actualízalo también en `sw.js` y sube `VERSION`
   para invalidar la caché antigua.

Los scripts `ampliar-*.mjs` anteriores a la división de CCSS II son históricos y
no deben ejecutarse sobre el banco actual.

## Auditoría del banco

`tools/audit.html` es una página independiente que carga los 18 archivos de datos
y KaTeX desde el propio repositorio. Comprueba ids, campos, materias, bloques,
niveles, partes, opciones, coherencia archivo/materia/nivel/bloque y errores de LaTeX.
Expone el resultado en `window.__audit` y permite descargar un JSON.

Para probarla: `npm run serve` y abrir `http://localhost:8080/tools/audit.html`.
No requiere backend ni CDN. Si se añade un archivo de datos nuevo, hay que añadirlo
a `ARCHIVOS` en la propia página, a `index.html`, al Service Worker y al validador.

## Fuentes de exámenes

Material de referencia para ampliar el banco. Son enunciados y soluciones
públicos: el banco los **adapta**, no los copia literalmente, y cita la
procedencia en el campo `fuente`.

- **Documento base aportado por la autora:** *Mates CCSS II · EBAU Valencia
  2017–2026*, EbauMatemáticas:
  <https://www.ebaumatematicas.com/wp-content/uploads/2026/08/Mates-CCSS-II_EBAU_Valencia_2017-2026.pdf>
- **EbauMatemáticas** (Comunitat Valenciana, enunciados y soluciones por años):
  <https://www.ebaumatematicas.com/>
- **Selectividad Intergranada** (Andalucía y otras comunidades, exámenes
  resueltos): <https://selectividad.intergranada.com/>
- **Repositorios del autor:** `sergarb1/MatematicasPAU` (material de aula).

### Nombres de la prueba

La misma prueba cambia de nombre según la comunidad. Al buscar enunciados,
prueba con todas las variantes:

| Comunidad | Nombre habitual |
|---|---|
| Andalucía | PEvAU |
| Aragón, Madrid | EvAU / EVAU |
| Asturias, Canarias, Cantabria, Castilla-La Mancha, Castilla y León, Extremadura, La Rioja, Murcia, Navarra | EBAU |
| Illes Balears | PBAU |
| Cataluña | PAU / Selectivitat |
| Galicia | ABAU |
| País Vasco | EAU |
| Comunitat Valenciana, Ceuta y Melilla | PAU (en materiales antiguos, EBAU) |

Muchas webs y exámenes antiguos usan «Selectividad» para todas ellas.

### Repositorios generales de exámenes

Bancos que agrupan enunciados y soluciones de varias comunidades. Son material
ajeno: sirven para **localizar** el PDF oficial, no para copiarlo.

- **Exámenes de PAU** · <https://www.examenesdepau.com/> — buscador por comunidad,
  asignatura y convocatoria.
- **ExámenesPAU** · <https://examenesdepau.es/> — catálogo por comunidad y año,
  con criterios de corrección de algunas universidades.
- **Selectividad Academy** · <https://www.selectividad.academy/examenes/matematicas-ii>
  — modelos y exámenes resueltos de las 17 comunidades.
- **sele.es** · <https://sele.es/> — exámenes resueltos por comunidad y tema.
- **Academia La Llibreta** · <https://academialallibreta.es/modelos-examen-pau-2025/>
  — modelos y oficiales por comunidad, con la diferencia entre modelo y examen.
- **Mundo Estudiante** · <https://mundoestudiante.com/examenes-resueltos/selectividad/matematicas/>
  — Matemáticas II y CCSS II de Madrid, Castilla y León y Andalucía.

Antes de citar una comunidad, comprueba el PDF original y el curso: las rutas de
estos agregadores cambian y algunos mezclan convocatorias de varios años.

### Portales oficiales por comunidad

| Comunidad | Portal de referencia |
|---|---|
| Andalucía | Distrito Único Andaluz · <https://www.juntadeandalucia.es/> |
| Aragón | Universidad de Zaragoza (EBAU) · <https://www.unizar.es/> |
| Asturias | Universidad de Oviedo (EBAU) · <https://www.uniovi.es/> |
| Illes Balears | Universitat de les Illes Balears (PBAU) · <https://www.uib.es/> |
| Canarias | Gobierno de Canarias y universidades · <https://www.gobiernodecanarias.org/> |
| Cantabria | Universidad de Cantabria (EBAU) · <https://www.unican.es/> |
| Castilla-La Mancha | Universidad de Castilla-La Mancha (EBAU) · <https://www.uclm.es/> |
| Castilla y León | EducaCyL y universidades · <https://www.educa.jcyl.es/> |
| Cataluña | Generalitat · PAU · <https://universitats.gencat.cat/> |
| Extremadura | Universidad de Extremadura (EBAU) · <https://www.unex.es/> |
| Galicia | CIUG (ABAU) · <https://ciug.gal/> |
| La Rioja | Universidad de La Rioja (EBAU) · <https://www.unirioja.es/> |
| Madrid | Comunidad de Madrid (EVAU) · <https://www.comunidad.madrid/> |
| Murcia | Universidad de Murcia (EBAU) · <https://www.um.es/> |
| Navarra | Universidad Pública de Navarra (PAU) · <https://www.unavarra.es/> |
| País Vasco | UPV/EHU (EBAU) · <https://www.ehu.eus/> |
| Comunitat Valenciana | Conselleria d'Educació (PAU) · <https://www.ceice.gva.es/> y EbauMatemáticas |
| Ceuta y Melilla | Universidad de Granada (PAU) · <https://www.ugr.es/> |

Las rutas concretas de cada convocatoria cambian curso a curso: enlaza al portal
de la institución, comprueba el curso y no atribuyas un enunciado a una
comunidad sin verificar el PDF original.

## Reglas de trabajo

- Mantén el estilo existente: español, tono didáctico, sin dependencias nuevas.
- No cambies respuestas sin recalcularlas y comprobarlas (SymPy/Python es útil).
- No introduzcas `eval` para corregir respuestas.
- Respeta la ruta relativa (`./`): el sitio se publica en un subdirectorio de
  GitHub Pages.
- No toques `vendor/` salvo actualización deliberada de KaTeX.
- Cita fuentes y aclara que el material es adaptado, no oficial.
- Si regeneras distractores con `scripts/mejorar-distractores.mjs`, comprueba que
  no cambia ninguna respuesta correcta y vuelve a validar el banco.
- No añadas atribución de asistentes ni `Co-Authored-By` de herramientas (por
  ejemplo, Codebuff): los commits quedan firmados solo por la autora. El hook
  `.githooks/commit-msg` elimina esas líneas; se activa con
  `git config core.hooksPath .githooks`.

## Despliegue

GitHub Pages desde la rama `main`, carpeta raíz. No requiere Actions.
El `start_url` y el `scope` del manifest son relativos para funcionar en
`https://sergarb1.github.io/PracticaMatesPAU/`.
