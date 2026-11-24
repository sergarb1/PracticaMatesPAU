# Banco de ejercicios

Contenido separado por **materia**. CCSS II está dividido en **un archivo por bloque**;
el resto de materias, por nivel. Cada archivo es un script clásico que añade sus
ejercicios a `window.PAU_DATA.ejercicios`; no hay que compilar nada.

```
js/data/
├── ccss-ii/      Mat. Aplicadas a las CCSS II · 2º Bach   ← PAU
│   ├── probabilidad.js
│   ├── estadistica.js
│   ├── inferencia.js
│   ├── matrices.js
│   ├── sistemas.js
│   ├── sucesiones.js
│   ├── programacion-lineal.js
│   ├── funciones.js
│   ├── limites.js
│   ├── derivadas.js
│   └── integrales.js
├── mates-ii/     Matemáticas II · 2º Bach (Ciencias)      ← PAU
│   ├── nivel-1.js   básico
│   ├── nivel-2.js   medio
│   └── nivel-3.js   nivel PAU
├── mates-i/      Matemáticas I · 1º Bach (Ciencias)
└── ccss-i/       Mat. Aplicadas a las CCSS I · 1º Bach
```

## Niveles

| `nivel` | Etiqueta | Para qué sirve |
|---|---|---|
| `1` | Básico | afianzar el concepto, primer contacto |
| `2` | Medio | ejercicios de clase y deberes |
| `3` | Nivel PAU | dificultad y estilo de examen |

## Estilos (`tipo`)

El banco actual usa **siempre `opcion`**: se responde tocando y no hay que escribir.
Hay dos formas válidas dentro del mismo `tipo`:

| Forma | Interacción | Campos obligatorios |
|---|---|---|
| Pregunta única | Elige una de cuatro opciones | `opciones[]`, `correcta` |
| Por apartados | Elige una opción en cada apartado | `partes[]` con `etiqueta`, `opciones[]` y `correcta` |

La app solo admite `opcion`: no hay campos de escritura, ni en la práctica ni en
el simulacro. El validador rechaza cualquier otro `tipo` y exige **4 opciones por
apartado**, para que todas las preguntas se respondan tocando y quepan en móvil.

## Esquema de un ejercicio

```js
{
  id: 'm2-prob-04',            // único; prefijo por materia
  materia: 'mates-ii',         // mates-ii | ccss-ii | mates-i | ccss-i
  bloque: 'probabilidad',      // ver tabla de bloques
  nivel: 2,                    // 1 | 2 | 3
  tipo: 'opcion',              // el banco actual usa siempre opcion
  titulo: 'Binomial: ...',     // título corto para la tarjeta
  fuente: 'PAU CV · ...',      // procedencia o «adaptado»
  enunciado: '...',            // texto; LaTeX entre $...$ o $$...$$
  pista: '...',                // ayuda sin revelar la solución
  partes: [                    // opción por apartados (1–4)
    {
      etiqueta: 'a) $P(X=2)$',
      opciones: ['0,2965', '0,4666', '0,8332', '0,0668'],
      correcta: 0              // índice 0–3
    }
  ],
  // Alternativa de pregunta única: opciones: ['...'], correcta: 0
  solucion: [                  // 2–5 pasos; también alimenta el modo Pasos
    { t: 'Título del paso', d: 'Desarrollo con LaTeX' }
  ],
  truco: '...',                // atajo o idea clave
  errorTipico: '...'           // error frecuente y por qué
}
```

### Reglas de respuesta

- Cada apartado de `opcion` lleva **exactamente 4 opciones** y `correcta` es el
  índice (0–3). `npm run validate` falla si hay menos o más.
- Las opciones deben ser distintas y los distractores deben corresponder a errores
  reales (signo cambiado, confundir una razón, olvidar un coeficiente, etc.).
- Escribe los números con coma decimal (`0,2965`) para que se lean como en clase.
- Si el ejercicio tiene varios resultados, usa un apartado por resultado; no metas
  todos los valores en una sola opción larga.
- No uses `eval` para corregir.

### LaTeX

- Inline: `$...$`; destacado: `$$...$$`.
- Escapa `\\` para saltos de matriz y `\lt`, `\gt` en lugar de `<`, `>`.
- No uses backticks dentro de las cadenas.
- Los archivos actuales guardan las cadenas como JSON (barras dobladas). Si añades
  ejercicios a mano, puedes usar `String.raw` en un archivo nuevo, pero mantén el
  formato del archivo que edites.

## Bloques válidos

| Materia | Bloques |
|---|---|
| `mates-ii` | `probabilidad`, `matrices`, `sistemas`, `complejos`, `limites`, `derivadas`, `integrales`, `optimizacion`, `vectores`, `rectas-planos`, `geometria` |
| `ccss-ii` | `probabilidad`, `estadistica`, `inferencia`, `matrices`, `sistemas`, `sucesiones`, `programacion-lineal`, `funciones`, `limites`, `derivadas`, `integrales` |
| `mates-i` | `algebra`, `numeros-reales`, `sucesiones`, `trigonometria`, `conicas`, `vectores`, `funciones`, `limites`, `derivadas` |
| `ccss-i` | `numerico`, `algebra`, `sucesiones`, `estadistica`, `funciones`, `probabilidad` |

El banco usa 21 bloques temáticos. Al añadir un bloque nuevo hay que declararlo en
`MATERIAS` y `BLOQUES` de `js/app.js`, en el validador, en la auditoría, en los
estilos de las insignias y en esta tabla. El simulacro agrupa los bloques en las
secciones oficiales de la PAU desde `definicionesSimulacro` (en `js/app.js`).

## Añadir ejercicios

1. Elige el archivo: en CCSS II, el del bloque (`js/data/ccss-ii/inferencia.js`);
   en el resto, `js/data/<materia>/nivel-N.js`.
2. Añade un objeto al array con un `id` nuevo.
3. Incluye siempre `pista`, `solucion`, `truco` y `errorTipico`: la app los usa.
4. Comprueba el banco: `npm run validate`.
5. Abre la app y verifica que el ejercicio se renderiza y corrige bien.

## Criterios de calidad

- Una sola idea matemática por ejercicio, con apartados claros.
- La respuesta debe poder comprobarse sin ambigüedad.
- Los distractores de `opcion` deben corresponder a errores reales, no ser absurdos.
- La solución desarrolla el razonamiento; el truco es un atajo, no otra solución.
- Cita la fuente si adaptas un examen oficial; no copies enunciados literales sin
  indicarlo.

## Herramientas de contenido

Los scripts `ampliar-*.mjs` anteriores a la división de CCSS II son históricos:
trabajan con los antiguos `nivel-N.js` y no deben ejecutarse sobre el banco actual.

- `scripts/mejorar-distractores.mjs`: regenera los tres distractores numéricos de
  cada apartado. Conserva la opción correcta, iguala la precisión decimal y acota
  magnitud y dominio. Revisar el resultado y validar después.
- `scripts/reclasificar-bloques.mjs`: asigna el bloque temático a cada ejercicio
  según materia, id y título. No toca enunciados ni respuestas.
- `scripts/ampliar-banco.mjs`: contiene y fusiona la tanda de ejercicios añadida
  en noviembre de 2026; sirve de registro de esa ampliación.
- `scripts/ampliar-bloques.mjs`: contiene la segunda tanda (48 ejercicios de
  complejos, optimización, límites, sucesiones, inferencia, números reales,
  cónicas y álgebra) y la inserta en su archivo de materia y nivel.
- `scripts/ampliar-pau-ccss.mjs`: añade la tanda de 11 ejercicios adaptados de la
  PAU de CCSS II 2017–2026 (matrices, sistemas, probabilidad, derivadas,
  funciones e integrales) y refuerza los límites de Matemáticas I.
- `scripts/ampliar-estadistica-pau.mjs`: añade tres ejercicios de estadística de
  nivel PAU a CCSS II (tabla de frecuencias, correlación y coeficiente de
  variación).
- `scripts/convertir-opciones.mjs`: conversión histórica de `numerico` a `opcion`.
- `scripts/prueba-ui.mjs`: prueba de humo con Chrome DevTools (opciones, corrección
  y simulacro sin campos de texto).

## Verificación

```bash
npm run validate
```

Comprueba ids duplicados, campos obligatorios, tipos, niveles, índices de opción,
opciones duplicadas y recuentos por materia. Falla con código distinto de 0 si algo
no cuadra.
