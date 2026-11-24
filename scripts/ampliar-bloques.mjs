#!/usr/bin/env node
/* Añade la tanda de ejercicios de los bloques nuevos (complejos, optimización,
   sucesiones, inferencia, números reales y cónicas) a los archivos de materia y
   nivel. Uso: node scripts/ampliar-bloques.mjs
   Conserva el formato JSON y los saltos de línea de cada archivo. */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const F_M2 = 'PAU CV · Matemáticas II (adaptado)';
const F_CS2 = 'PAU CV · Matemáticas CCSS II (adaptado)';
const F_M1 = 'Currículo CV · Matemáticas I';
const F_CS1 = 'Currículo CV · Matemáticas CCSS I';

const NUEVOS = [
  /* ------------------------- Matemáticas II · complejos ------------------------ */
  {
    id: 'm2-com-01',
    materia: 'mates-ii',
    bloque: 'complejos',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Potencias de la unidad imaginaria',
    fuente: F_M2,
    enunciado: 'Calcula $i^{37}$ y desarrolla $(1+i)^2$.',
    pista: 'Las potencias de $i$ se repiten cada cuatro: $i^0=1$, $i^1=i$, $i^2=-1$, $i^3=-i$. Para el cuadrado, usa $i^2=-1$.',
    partes: [
      { etiqueta: 'Valor de $i^{37}$', opciones: ['$i$', '$-i$', '$1$', '$-1$'], correcta: 0 },
      { etiqueta: 'Valor de $(1+i)^2$', opciones: ['$2i$', '$2$', '$1+i$', '$0$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Resto de la división entre 4', d: '$37=4\\cdot9+1$, luego $i^{37}=i^{1}=i$.' },
      { t: 'Desarrollo del cuadrado', d: '$(1+i)^2=1+2i+i^2=1+2i-1=2i$.' }
    ],
    truco: 'Divide el exponente entre 4 y mira el resto: 0 → $1$, 1 → $i$, 2 → $-1$, 3 → $-i$.',
    errorTipico: 'Decir que $i^2=1$ y obtener $2$ en el cuadrado. La unidad imaginaria cumple $i^2=-1$.'
  },
  {
    id: 'm2-com-02',
    materia: 'mates-ii',
    bloque: 'complejos',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Suma y producto en forma binómica',
    fuente: F_M2,
    enunciado: 'Sean $z=3+2i$ y $w=1-4i$. Calcula $z+w$ y $z\\cdot w$.',
    pista: 'Suma parte real con parte real y parte imaginaria con parte imaginaria. En el producto, aplica la propiedad distributiva y sustituye $i^2=-1$.',
    partes: [
      { etiqueta: '$z+w$', opciones: ['$4-2i$', '$4+6i$', '$2-2i$', '$4+2i$'], correcta: 0 },
      { etiqueta: '$z\\cdot w$', opciones: ['$11-10i$', '$3-8i$', '$11+10i$', '$5-10i$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Suma', d: '$(3+1)+(2-4)i=4-2i$.' },
      { t: 'Producto', d: '$3\\cdot1+3\\cdot(-4i)+2i\\cdot1+2i\\cdot(-4i)=3-12i+2i-8i^2$.' },
      { t: 'Simplificar', d: '$3-10i+8=11-10i$.' }
    ],
    truco: 'Trata los complejos como binomios y cambia $i^2$ por $-1$ al final.',
    errorTipico: 'Sumar los imaginarios $2+(-4)=-2$ pero olvidar cambiar el signo de $i^2$, y responder $3-10i$.'
  },
  {
    id: 'm2-com-03',
    materia: 'mates-ii',
    bloque: 'complejos',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Módulo y argumento de un complejo',
    fuente: F_M2,
    enunciado: 'Dado $z=-1+\\sqrt{3}\\,i$, calcula su módulo y su argumento.',
    pista: 'El módulo es $\\sqrt{a^2+b^2}$. Para el argumento, dibuja el afijo: la parte real es negativa y la imaginaria positiva, así que está en el segundo cuadrante.',
    partes: [
      { etiqueta: 'Módulo $|z|$', opciones: ['$2$', '$4$', '$\\sqrt{3}$', '$1$'], correcta: 0 },
      { etiqueta: 'Argumento', opciones: ['$120^\\circ$', '$60^\\circ$', '$240^\\circ$', '$150^\\circ$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Módulo', d: '$|z|=\\sqrt{(-1)^2+(\\sqrt{3})^2}=\\sqrt{1+3}=2$.' },
      { t: 'Ángulo de referencia', d: '$\\tan\\alpha=\\dfrac{\\sqrt{3}}{1}$, luego $\\alpha=60^\\circ$.' },
      { t: 'Cuadrante', d: 'Como $a\\lt0$ y $b\\gt0$, el afijo está en el segundo cuadrante: $\\arg z=180^\\circ-60^\\circ=120^\\circ$.' }
    ],
    truco: 'Calcula el ángulo agudo y ajústalo al cuadrante: nunca pases de $60^\\circ$ a $120^\\circ$ sin mirar la parte real.',
    errorTipico: 'Responder $60^\\circ$ porque la tangente coincide. La tangente no distingue el primer y el tercer cuadrante del segundo y el cuarto.'
  },
  {
    id: 'm2-com-04',
    materia: 'mates-ii',
    bloque: 'complejos',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Cociente de complejos',
    fuente: F_M2,
    enunciado: 'Calcula $\\dfrac{2+i}{1-2i}$ en forma binómica.',
    pista: 'Multiplica numerador y denominador por el conjugado del denominador, $1+2i$. El denominador se convierte en $|1-2i|^2$.',
    partes: [
      { etiqueta: 'Resultado', opciones: ['$i$', '$-i$', '$1$', '$\\dfrac{3+5i}{5}$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Conjugado', d: '$\\dfrac{2+i}{1-2i}\\cdot\\dfrac{1+2i}{1+2i}=\\dfrac{(2+i)(1+2i)}{1^2+2^2}$.' },
      { t: 'Numerador', d: '$(2+i)(1+2i)=2+4i+i+2i^2=2+5i-2=5i$.' },
      { t: 'Resultado', d: '$\\dfrac{5i}{5}=i$.' }
    ],
    truco: 'Al multiplicar por el conjugado, el denominador siempre es $a^2+b^2$, un número real positivo.',
    errorTipico: 'Multiplicar por $1-2i$ otra vez, que no elimina la parte imaginaria del denominador.'
  },
  {
    id: 'm2-com-05',
    materia: 'mates-ii',
    bloque: 'complejos',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Raíces complejas de una ecuación de segundo grado',
    fuente: F_M2,
    enunciado: 'Resuelve $z^2-4z+13=0$ en el cuerpo de los números complejos y calcula el producto de sus raíces.',
    pista: 'El discriminante es negativo. Sustituye $\\sqrt{-36}$ por $6i$. El producto de las raíces es $c/a$.',
    partes: [
      { etiqueta: 'Raíces', opciones: ['$2\\pm3i$', '$2\\pm i$', '$-2\\pm3i$', '$4\\pm3i$'], correcta: 0 },
      { etiqueta: 'Producto de las raíces', opciones: ['$13$', '$4$', '$-13$', '$9$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Discriminante', d: '$\\Delta=(-4)^2-4\\cdot1\\cdot13=16-52=-36$.' },
      { t: 'Fórmula general', d: '$z=\\dfrac{4\\pm\\sqrt{-36}}{2}=\\dfrac{4\\pm6i}{2}=2\\pm3i$.' },
      { t: 'Producto', d: 'Por Cardano, $z_1z_2=\\dfrac{c}{a}=13$. Comprobación: $(2+3i)(2-3i)=4+9=13$.' }
    ],
    truco: 'Con coeficientes reales, las raíces complejas van en pareja conjugada y su producto es $a^2+b^2$.',
    errorTipico: 'Dejar la raíz de un número negativo sin convertirla en $i$ y concluir que la ecuación no tiene solución.'
  },

  /* ---------------------- Matemáticas II · optimización ----------------------- */
  {
    id: 'm2-opt-01',
    materia: 'mates-ii',
    bloque: 'optimizacion',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Rectángulo de área máxima con perímetro fijo',
    fuente: F_M2,
    enunciado: 'Un rectángulo tiene $40$ m de perímetro. Halla sus dimensiones para que el área sea máxima y calcula esa área.',
    pista: 'Si la base mide $x$, la altura mide $20-x$. El área es $A(x)=x(20-x)$: deriva e iguala a cero.',
    partes: [
      { etiqueta: 'Base del rectángulo (m)', opciones: ['$10$', '$20$', '$8$', '$15$'], correcta: 0 },
      { etiqueta: 'Área máxima (m²)', opciones: ['$100$', '$400$', '$200$', '$80$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Relación entre los lados', d: '$2x+2y=40\\Rightarrow y=20-x$.' },
      { t: 'Función área', d: '$A(x)=x(20-x)=20x-x^2$.' },
      { t: 'Optimizar', d: '$A\'(x)=20-2x=0\\Rightarrow x=10$, $y=10$.' },
      { t: 'Área', d: '$A(10)=10\\cdot10=100$ m². Es un máximo porque $A\'\'(x)=-2\\lt0$.' }
    ],
    truco: 'Con perímetro fijo, el área máxima se alcanza en el cuadrado.',
    errorTipico: 'Maximizar $x+y=20$ en lugar del producto y quedarse en $x=y=10$ sin calcular el área pedida.'
  },
  {
    id: 'm2-opt-02',
    materia: 'mates-ii',
    bloque: 'optimizacion',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Dos números con suma fija y producto máximo',
    fuente: F_M2,
    enunciado: 'Dos números positivos suman $20$. ¿Qué valores hacen máximo su producto? ¿Cuánto vale ese producto?',
    pista: 'Escribe el segundo número como $20-x$ y maximiza $P(x)=x(20-x)$. Comprueba con la segunda derivada que es un máximo.',
    partes: [
      { etiqueta: 'Primer número', opciones: ['$10$', '$12$', '$8$', '$15$'], correcta: 0 },
      { etiqueta: 'Producto máximo', opciones: ['$100$', '$96$', '$80$', '$120$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Función a optimizar', d: '$P(x)=x(20-x)=20x-x^2$, con $0\\lt x\\lt20$.' },
      { t: 'Derivada', d: '$P\'(x)=20-2x=0\\Rightarrow x=10$, y el otro número es $10$.' },
      { t: 'Producto', d: '$P(10)=10\\cdot10=100$. Como $P\'\'(x)=-2\\lt0$, es un máximo.' }
    ],
    truco: 'Con suma fija, el producto se maximiza cuando los dos números son iguales.',
    errorTipico: 'Dar $10+10=20$ como respuesta del producto: el enunciado pide el producto, no la suma.'
  },
  {
    id: 'm2-opt-03',
    materia: 'mates-ii',
    bloque: 'optimizacion',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Caja sin tapa de volumen máximo',
    fuente: F_M2,
    enunciado: 'De una cartulina cuadrada de $12$ cm de lado se recortan cuadrados iguales en las esquinas y se dobla para formar una caja sin tapa. ¿Qué lado deben tener los recortes para que el volumen sea máximo? ¿Cuál es ese volumen?',
    pista: 'Si el recorte mide $x$, la base es $(12-2x)\\times(12-2x)$ y la altura $x$. El volumen es $V(x)=x(12-2x)^2$ con $0\\lt x\\lt6$.',
    partes: [
      { etiqueta: 'Lado del recorte (cm)', opciones: ['$2$', '$3$', '$1$', '$4$'], correcta: 0 },
      { etiqueta: 'Volumen máximo (cm³)', opciones: ['$128$', '$144$', '$108$', '$120$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Función volumen', d: '$V(x)=x(12-2x)^2$, con $0\\lt x\\lt6$.' },
      { t: 'Derivada factorizada', d: '$V\'(x)=(12-2x)^2+x\\cdot2(12-2x)(-2)=(12-2x)(12-6x)$.' },
      { t: 'Puntos críticos', d: '$V\'=0\\Rightarrow x=6$ (fuera del dominio, la caja no tendría base) o $x=2$.' },
      { t: 'Volumen', d: '$V(2)=2\\cdot8^2=128$ cm³.' }
    ],
    truco: 'Factoriza antes de igualar a cero: aparecen las dos raíces y descartas la que anula la base.',
    errorTipico: 'Aceptar $x=6$ como solución y obtener una caja de volumen nulo.'
  },
  {
    id: 'm2-opt-04',
    materia: 'mates-ii',
    bloque: 'optimizacion',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Cerca apoyada en una pared',
    fuente: F_M2,
    enunciado: 'Se quiere cercar un corral rectangular apoyado en una pared, usando $100$ m de valla para los tres lados restantes. ¿Qué dimensiones dan el área máxima?',
    pista: 'Si el lado paralelo a la pared mide $x$, los otros dos miden $(100-x)/2$ cada uno. La pared no se cerca.',
    partes: [
      { etiqueta: 'Lado paralelo a la pared (m)', opciones: ['$50$', '$25$', '$40$', '$60$'], correcta: 0 },
      { etiqueta: 'Área máxima (m²)', opciones: ['$1250$', '$2500$', '$625$', '$1000$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Restricción', d: '$x+2y=100\\Rightarrow y=\\dfrac{100-x}{2}$.' },
      { t: 'Función área', d: '$A(x)=x\\cdot\\dfrac{100-x}{2}=50x-\\dfrac{x^2}{2}$.' },
      { t: 'Optimizar', d: '$A\'(x)=50-x=0\\Rightarrow x=50$ e $y=25$.' },
      { t: 'Área', d: '$A=50\\cdot25=1250$ m².' }
    ],
    truco: 'El lado paralelo a la pared es el doble que cada lado perpendicular: $x=2y$.',
    errorTipico: 'Plantear $2x+2y=100$ como si se cercaran los cuatro lados y obtener $625$ m².'
  },

  /* --------------------- CCSS II · límites y continuidad ---------------------- */
  {
    id: 'cs2-lim-01',
    materia: 'ccss-ii',
    bloque: 'limites',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Límite con indeterminación cero entre cero',
    fuente: F_CS2,
    enunciado: 'Calcula $\\displaystyle\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$.',
    pista: 'Al sustituir sale $0/0$. Factoriza el numerador como diferencia de cuadrados y simplifica antes de volver a sustituir.',
    partes: [
      { etiqueta: 'Valor del límite', opciones: ['$4$', '$0$', '$2$', '$\\infty$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Factorizar', d: '$x^2-4=(x-2)(x+2)$.' },
      { t: 'Simplificar', d: '$\\dfrac{(x-2)(x+2)}{x-2}=x+2$ para $x\\ne2$.' },
      { t: 'Límite', d: '$\\lim_{x\\to2}(x+2)=4$.' }
    ],
    truco: 'Un $0/0$ nunca es la respuesta: indica que hay un factor común que se cancela.',
    errorTipico: 'Responder $0$ o «no existe» tras obtener la indeterminación.'
  },
  {
    id: 'cs2-lim-02',
    materia: 'ccss-ii',
    bloque: 'limites',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Límites en el infinito de funciones racionales',
    fuente: F_CS2,
    enunciado: 'Calcula $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{3x^2+2x}{x^2-1}$ y $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{2x+1}{x^2+3}$.',
    pista: 'Divide numerador y denominador entre la mayor potencia de $x$ del denominador. Compara los grados.',
    partes: [
      { etiqueta: '$\\lim_{x\\to\\infty}\\dfrac{3x^2+2x}{x^2-1}$', opciones: ['$3$', '$2$', '$0$', '$\\infty$'], correcta: 0 },
      { etiqueta: '$\\lim_{x\\to\\infty}\\dfrac{2x+1}{x^2+3}$', opciones: ['$0$', '$2$', '$\\infty$', '$1$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Primer límite', d: 'Dividiendo entre $x^2$: $\\dfrac{3+2/x}{1-1/x^2}\\to3$. Mismo grado, cociente de coeficientes líderes.' },
      { t: 'Segundo límite', d: 'Dividiendo entre $x^2$: $\\dfrac{2/x+1/x^2}{1+3/x^2}\\to0$. El denominador tiene mayor grado.' }
    ],
    truco: 'Compara grados: igual grado → cociente de coeficientes; grado menor arriba → $0$; grado mayor arriba → $\\pm\\infty$.',
    errorTipico: 'Fijarse solo en los términos independientes o en los lineales y responder $2$ en el primer límite.'
  },
  {
    id: 'cs2-lim-03',
    materia: 'ccss-ii',
    bloque: 'limites',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Continuidad con un valor que hay que definir',
    fuente: F_CS2,
    enunciado: 'Sea $f(x)=\\dfrac{x^2-1}{x-1}$ si $x\\ne1$ y $f(1)=a$. Determina $a$ para que $f$ sea continua en $x=1$.',
    pista: 'Para que sea continua debe cumplirse $\\lim_{x\\to1}f(x)=f(1)$. Simplifica la función cerca de $1$.',
    partes: [
      { etiqueta: 'Valor de $a$', opciones: ['$2$', '$1$', '$0$', 'Ningún valor de $a$ la hace continua'], correcta: 0 }
    ],
    solucion: [
      { t: 'Límite', d: '$\\dfrac{x^2-1}{x-1}=x+1$ para $x\\ne1$, luego $\\lim_{x\\to1}f(x)=2$.' },
      { t: 'Condición de continuidad', d: 'Se necesita $f(1)=2$, es decir, $a=2$.' }
    ],
    truco: 'Una discontinuidad evitable se arregla definiendo el valor de la función igual al límite.',
    errorTipico: 'Decir que es inevitable porque el denominador se anula: al simplificar, el límite existe.'
  },
  {
    id: 'cs2-lim-04',
    materia: 'ccss-ii',
    bloque: 'limites',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Asíntotas de una función racional',
    fuente: F_CS2,
    enunciado: 'Halla las asíntotas de $f(x)=\\dfrac{x^2+1}{x-1}$.',
    pista: 'La asíntota vertical está donde se anula el denominador sin anularse el numerador. Para la oblicua, divide los polinomios: el cociente es la recta.',
    partes: [
      { etiqueta: 'Asíntota vertical', opciones: ['$x=1$', '$x=0$', '$x=-1$', 'No tiene'], correcta: 0 },
      { etiqueta: 'Asíntota oblicua', opciones: ['$y=x+1$', '$y=x$', '$y=x-1$', '$y=1$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Asíntota vertical', d: 'El denominador se anula en $x=1$ y el numerador vale $2\\ne0$: $x=1$.' },
      { t: 'División', d: '$x^2+1=(x-1)(x+1)+2$, luego $f(x)=x+1+\\dfrac{2}{x-1}$.' },
      { t: 'Asíntota oblicua', d: 'Cuando $x\\to\\pm\\infty$, el resto tiende a $0$ y $f(x)\\approx x+1$: recta $y=x+1$.' }
    ],
    truco: 'En una racional con un grado más arriba, la asíntota oblicua es el cociente de la división.',
    errorTipico: 'Confundir la asíntota oblicua con la horizontal $y=0$, que no existe aquí.'
  },
  {
    id: 'cs2-lim-05',
    materia: 'ccss-ii',
    bloque: 'limites',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Límite trigonométrico con indeterminación',
    fuente: F_CS2,
    enunciado: 'Calcula $\\displaystyle\\lim_{x\\to0}\\dfrac{1-\\cos x}{x^2}$.',
    pista: 'Multiplica numerador y denominador por $1+\\cos x$ para llegar a $\\operatorname{sen}^2x$ y usa que $\\dfrac{\\operatorname{sen}x}{x}\\to1$.',
    partes: [
      { etiqueta: 'Valor del límite', opciones: ['$0{,}5$', '$1$', '$0$', '$2$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Multiplicar por el conjugado', d: '$\\dfrac{1-\\cos x}{x^2}\\cdot\\dfrac{1+\\cos x}{1+\\cos x}=\\dfrac{\\operatorname{sen}^2x}{x^2(1+\\cos x)}$.' },
      { t: 'Separar', d: '$\\left(\\dfrac{\\operatorname{sen}x}{x}\\right)^2\\cdot\\dfrac{1}{1+\\cos x}$.' },
      { t: 'Límite', d: '$1^2\\cdot\\dfrac{1}{1+1}=\\dfrac{1}{2}=0{,}5$.' }
    ],
    truco: 'Cerca de $0$, $1-\\cos x\\approx\\dfrac{x^2}{2}$: es la equivalencia que resuelve el límite en un paso.',
    errorTipico: 'Sustituir y responder $0$ porque el numerador tiende a cero, sin comparar con la velocidad del denominador.'
  },

  /* ------------------------ CCSS II · sucesiones ------------------------------ */
  {
    id: 'cs2-suc-01',
    materia: 'ccss-ii',
    bloque: 'sucesiones',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Progresión aritmética: término y suma',
    fuente: F_CS2,
    enunciado: 'En una progresión aritmética el primer término es $a_1=3$ y la diferencia es $d=4$. Calcula $a_{10}$ y la suma de los diez primeros términos.',
    pista: '$a_n=a_1+(n-1)d$ y $S_n=\\dfrac{n(a_1+a_n)}{2}$.',
    partes: [
      { etiqueta: '$a_{10}$', opciones: ['$39$', '$43$', '$40$', '$35$'], correcta: 0 },
      { etiqueta: '$S_{10}$', opciones: ['$210$', '$195$', '$390$', '$420$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Décimo término', d: '$a_{10}=3+(10-1)\\cdot4=3+36=39$.' },
      { t: 'Suma', d: '$S_{10}=\\dfrac{10(3+39)}{2}=5\\cdot42=210$.' }
    ],
    truco: 'La suma de una aritmética es el número de términos por la media del primero y el último.',
    errorTipico: 'Usar $n$ en lugar de $n-1$ y obtener $a_{10}=43$.'
  },
  {
    id: 'cs2-suc-02',
    materia: 'ccss-ii',
    bloque: 'sucesiones',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Progresión geométrica: término y suma',
    fuente: F_CS2,
    enunciado: 'En una progresión geométrica $a_1=2$ y la razón es $r=3$. Calcula $a_6$ y la suma de los seis primeros términos.',
    pista: '$a_n=a_1r^{n-1}$ y $S_n=\\dfrac{a_nr-a_1}{r-1}$.',
    partes: [
      { etiqueta: '$a_6$', opciones: ['$486$', '$729$', '$162$', '$1458$'], correcta: 0 },
      { etiqueta: '$S_6$', opciones: ['$728$', '$729$', '$1456$', '$364$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Sexto término', d: '$a_6=2\\cdot3^{5}=2\\cdot243=486$.' },
      { t: 'Suma', d: '$S_6=\\dfrac{486\\cdot3-2}{3-1}=\\dfrac{1456}{2}=728$.' }
    ],
    truco: 'La suma geométrica es $\\dfrac{a_nr-a_1}{r-1}$: último término por la razón, menos el primero.',
    errorTipico: 'Calcular $a_6=2\\cdot3^6=1458$, olvidando que el exponente es $n-1$.'
  },
  {
    id: 'cs2-suc-03',
    materia: 'ccss-ii',
    bloque: 'sucesiones',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Límite de una sucesión racional',
    fuente: F_CS2,
    enunciado: 'Calcula $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{3n^2+2}{n^2+n}$.',
    pista: 'Divide numerador y denominador entre $n^2$ y mira qué términos se van a cero.',
    partes: [
      { etiqueta: 'Límite', opciones: ['$3$', '$0$', '$2$', '$\\infty$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Dividir entre $n^2$', d: '$\\dfrac{3n^2+2}{n^2+n}=\\dfrac{3+2/n^2}{1+1/n}$.' },
      { t: 'Límite', d: 'Los términos con $n$ en el denominador tienden a $0$: el límite es $\\dfrac{3}{1}=3$.' }
    ],
    truco: 'Mismo grado arriba y abajo: el límite es el cociente de los coeficientes líderes.',
    errorTipico: 'Quedarse con $2/n$ y responder $0$, como si el denominador tuviera más grado.'
  },
  {
    id: 'cs2-suc-04',
    materia: 'ccss-ii',
    bloque: 'sucesiones',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Sucesión definida por recurrencia',
    fuente: F_CS2,
    enunciado: 'Sea $a_1=1$ y $a_{n+1}=2a_n+1$. Calcula $a_4$ y encuentra la expresión del término general.',
    pista: 'Calcula los primeros términos: $1, 3, 7, \\ldots$ Compáralos con las potencias de $2$.',
    partes: [
      { etiqueta: '$a_4$', opciones: ['$15$', '$7$', '$31$', '$9$'], correcta: 0 },
      { etiqueta: 'Término general', opciones: ['$a_n=2^n-1$', '$a_n=2n-1$', '$a_n=2^{n-1}+1$', '$a_n=n^2$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Primeros términos', d: '$a_2=2\\cdot1+1=3$; $a_3=2\\cdot3+1=7$; $a_4=2\\cdot7+1=15$.' },
      { t: 'Conjetura', d: 'Los términos son $2^1-1$, $2^2-1$, $2^3-1$, $2^4-1$.' },
      { t: 'Comprobación', d: 'Si $a_n=2^n-1$, entonces $2a_n+1=2^{n+1}-2+1=2^{n+1}-1=a_{n+1}$.' }
    ],
    truco: 'Ante una recurrencia, escribe cuatro o cinco términos y busca el patrón antes de intentar demostrarlo.',
    errorTipico: 'Confundir $2^n$ con $2n$ y proponer $a_n=2n-1$.'
  },
  {
    id: 'cs2-suc-05',
    materia: 'ccss-ii',
    bloque: 'sucesiones',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Crecimiento porcentual acumulado',
    fuente: F_CS2,
    enunciado: 'Una población de $1000$ habitantes crece un $5\\,\\%$ cada año. ¿Cuántos habitantes habrá al cabo de $3$ años? ¿Y al cabo de $10$? Redondea a dos decimales.',
    pista: 'Cada año se multiplica por $1{,}05$. Los aumentos porcentuales encadenados forman una progresión geométrica.',
    partes: [
      { etiqueta: 'Población a los 3 años', opciones: ['$1157{,}63$', '$1150{,}00$', '$1050{,}00$', '$1215{,}51$'], correcta: 0 },
      { etiqueta: 'Población a los 10 años', opciones: ['$1628{,}89$', '$1500{,}00$', '$1600{,}00$', '$1742{,}82$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Término general', d: '$a_n=1000\\cdot1{,}05^{n}$, con $n$ años transcurridos.' },
      { t: 'Tres años', d: '$1000\\cdot1{,}05^3=1000\\cdot1{,}157625=1157{,}63$.' },
      { t: 'Diez años', d: '$1000\\cdot1{,}05^{10}\\approx1000\\cdot1{,}6288946=1628{,}89$.' }
    ],
    truco: 'Subir un $5\\,\\%$ es multiplicar por $1{,}05$; repetirlo $n$ veces es elevar a $n$.',
    errorTipico: 'Sumar $5\\,\\%\\cdot3=15\\,\\%$ y responder $1150$, que es crecimiento lineal.'
  },

  /* ------------------- CCSS II · inferencia estadística ---------------------- */
  {
    id: 'cs2-inf-01',
    materia: 'ccss-ii',
    bloque: 'inferencia',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Tipificar una variable normal',
    fuente: F_CS2,
    enunciado: 'Sea $X\\sim N(50,10)$. Calcula el valor tipificado de $x=60$ y la probabilidad $P(X\\le60)$ usando la tabla normal estándar.',
    pista: '$z=\\dfrac{x-\\mu}{\\sigma}$. Después busca en la tabla el área a la izquierda de ese $z$.',
    partes: [
      { etiqueta: 'Valor tipificado $z$', opciones: ['$1$', '$0{,}5$', '$10$', '$6$'], correcta: 0 },
      { etiqueta: '$P(X\\le60)$', opciones: ['$0{,}8413$', '$0{,}1587$', '$0{,}5000$', '$0{,}9772$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Tipificar', d: '$z=\\dfrac{60-50}{10}=1$.' },
      { t: 'Tabla', d: '$P(Z\\le1)=0{,}8413$, luego $P(X\\le60)=0{,}8413$.' }
    ],
    truco: 'Tipifica siempre antes de buscar en la tabla; si buscas «mayor que», resta a 1.',
    errorTipico: 'Dividir entre la varianza $10^2$ o plantear $\\dfrac{50-60}{10}=-1$ y quedarse con $0{,}1587$.'
  },
  {
    id: 'cs2-inf-02',
    materia: 'ccss-ii',
    bloque: 'inferencia',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Intervalo de confianza para la media',
    fuente: F_CS2,
    enunciado: 'En una muestra de $100$ personas la media de una variable es $25$, con desviación típica poblacional $\\sigma=5$. Construye el intervalo de confianza al $95\\,\\%$ ($z=1{,}96$).',
    pista: 'El error máximo es $E=z\\cdot\\dfrac{\\sigma}{\\sqrt{n}}$. El intervalo es $\\bar{x}\\pm E$.',
    partes: [
      { etiqueta: 'Error máximo $E$', opciones: ['$0{,}98$', '$1{,}96$', '$0{,}49$', '$0{,}50$'], correcta: 0 },
      { etiqueta: 'Intervalo', opciones: ['$[24{,}02;\\,25{,}98]$', '$[23{,}04;\\,26{,}96]$', '$[24{,}51;\\,25{,}49]$', '$[24{,}90;\\,25{,}10]$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Error', d: '$E=1{,}96\\cdot\\dfrac{5}{\\sqrt{100}}=1{,}96\\cdot0{,}5=0{,}98$.' },
      { t: 'Intervalo', d: '$[25-0{,}98;\\,25+0{,}98]=[24{,}02;\\,25{,}98]$.' }
    ],
    truco: 'Cuadruplicar el tamaño de la muestra reduce el error a la mitad: aparece $\\sqrt{n}$.',
    errorTipico: 'Olvidar la raíz y dividir entre $n=100$, con lo que el error sale $10$ veces menor.'
  },
  {
    id: 'cs2-inf-03',
    materia: 'ccss-ii',
    bloque: 'inferencia',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Tamaño mínimo de la muestra',
    fuente: F_CS2,
    enunciado: 'Con $\\sigma=5$ y un nivel de confianza del $95\\,\\%$ ($z=1{,}96$), ¿qué tamaño de muestra hace falta para que el error máximo no supere $0{,}5$?',
    pista: 'Despeja $n$ en $E=z\\dfrac{\\sigma}{\\sqrt{n}}$, es decir, $n=\\left(\\dfrac{z\\sigma}{E}\\right)^2$, y redondea hacia arriba.',
    partes: [
      { etiqueta: 'Tamaño mínimo $n$', opciones: ['$385$', '$384$', '$400$', '$196$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Despejar', d: '$n=\\left(\\dfrac{1{,}96\\cdot5}{0{,}5}\\right)^2=(19{,}6)^2=384{,}16$.' },
      { t: 'Redondear', d: 'Con $384$ el error supera $0{,}5$: hace falta $n=385$.' }
    ],
    truco: 'Al calcular tamaños de muestra, redondea siempre hacia arriba, aunque el decimal sea pequeño.',
    errorTipico: 'Redondear a $384$ y quedarse justo por debajo de la precisión exigida.'
  },
  {
    id: 'cs2-inf-04',
    materia: 'ccss-ii',
    bloque: 'inferencia',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Intervalo de confianza para una proporción',
    fuente: F_CS2,
    enunciado: 'En una muestra de $400$ encuestados, $160$ están a favor de una medida. Construye el intervalo de confianza al $95\\,\\%$ ($z=1{,}96$) para la proporción poblacional.',
    pista: 'La proporción muestral es $\\hat{p}=160/400$. El error es $E=z\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}$.',
    partes: [
      { etiqueta: 'Error máximo $E$', opciones: ['$0{,}048$', '$0{,}024$', '$0{,}096$', '$0{,}490$'], correcta: 0 },
      { etiqueta: 'Intervalo', opciones: ['$[0{,}352;\\,0{,}448]$', '$[0{,}400;\\,0{,}448]$', '$[0{,}304;\\,0{,}496]$', '$[0{,}376;\\,0{,}424]$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Proporción muestral', d: '$\\hat{p}=\\dfrac{160}{400}=0{,}4$.' },
      { t: 'Error', d: '$E=1{,}96\\sqrt{\\dfrac{0{,}4\\cdot0{,}6}{400}}=1{,}96\\cdot0{,}024495\\approx0{,}048$.' },
      { t: 'Intervalo', d: '$[0{,}4-0{,}048;\\,0{,}4+0{,}048]=[0{,}352;\\,0{,}448]$.' }
    ],
    truco: 'En proporciones, $\\hat{p}(1-\\hat{p})$ hace de varianza; el máximo error posible aparece con $\\hat{p}=0{,}5$.',
    errorTipico: 'Usar $\\sigma=0{,}4$ directamente, sin el factor $\\sqrt{\\hat{p}(1-\\hat{p})}$.'
  },
  {
    id: 'cs2-inf-05',
    materia: 'ccss-ii',
    bloque: 'inferencia',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Aproximación normal de la binomial',
    fuente: F_CS2,
    enunciado: 'Una moneda se lanza $100$ veces. Aproximando la binomial por una normal, indica la media y la desviación típica, y calcula $P(45\\le X\\le55)$.',
    pista: '$\\mu=np$ y $\\sigma=\\sqrt{np(1-p)}$. Después tipifica los extremos y usa que $P(-1\\le Z\\le1)\\approx0{,}6826$.',
    partes: [
      { etiqueta: 'Media y desviación típica', opciones: ['$\\mu=50$, $\\sigma=5$', '$\\mu=50$, $\\sigma=25$', '$\\mu=25$, $\\sigma=5$', '$\\mu=100$, $\\sigma=50$'], correcta: 0 },
      { etiqueta: '$P(45\\le X\\le55)$', opciones: ['$0{,}6826$', '$0{,}9544$', '$0{,}3413$', '$0{,}9972$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Parámetros', d: '$\\mu=np=100\\cdot0{,}5=50$; $\\sigma=\\sqrt{100\\cdot0{,}5\\cdot0{,}5}=\\sqrt{25}=5$.' },
      { t: 'Tipificar', d: '$z_1=\\dfrac{45-50}{5}=-1$ y $z_2=\\dfrac{55-50}{5}=1$.' },
      { t: 'Probabilidad', d: '$P(-1\\le Z\\le1)=2\\cdot0{,}8413-1=0{,}6826$.' }
    ],
    truco: 'La desviación típica de una binomial es la raíz de $npq$; la varianza es $npq$ sin raíz.',
    errorTipico: 'Tomar $\\sigma=25$ (la varianza) y tipificar con $25$, lo que da probabilidades absurdas.'
  },

  /* ---------------------- Matemáticas I · números reales --------------------- */
  {
    id: 'm1-num-01',
    materia: 'mates-i',
    bloque: 'numeros-reales',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Inecuación de segundo grado',
    fuente: F_M1,
    enunciado: 'Resuelve $x^2-5x+6\\lt0$ y expresa la solución como intervalo.',
    pista: 'Calcula las raíces de $x^2-5x+6=0$ (son $2$ y $3$). Como el coeficiente de $x^2$ es positivo, la parábola abre hacia arriba.',
    partes: [
      { etiqueta: 'Conjunto solución', opciones: ['$(2,3)$', '$[2,3]$', '$(-\\infty,2)\\cup(3,\\infty)$', '$(-3,-2)$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Raíces', d: '$x^2-5x+6=(x-2)(x-3)=0\\Rightarrow x=2$, $x=3$.' },
      { t: 'Signo', d: 'Con $a\\gt0$ la parábola es negativa entre las raíces.' },
      { t: 'Solución', d: 'La desigualdad es estricta, así que los extremos no entran: $(2,3)$.' }
    ],
    truco: 'Con $a\\gt0$: negativo entre las raíces, positivo fuera. Con $a\\lt0$, al revés.',
    errorTipico: 'Escribir $[2,3]$; el símbolo $\\lt$ excluye los extremos, donde la expresión vale $0$.'
  },
  {
    id: 'm1-num-02',
    materia: 'mates-i',
    bloque: 'numeros-reales',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Inecuación con valor absoluto',
    fuente: F_M1,
    enunciado: 'Resuelve $|2x-3|\\le5$.',
    pista: '$|A|\\le k$ equivale a $-k\\le A\\le k$. Resuelve las dos desigualdades a la vez.',
    partes: [
      { etiqueta: 'Conjunto solución', opciones: ['$[-1,4]$', '$[1,4]$', '$[-4,1]$', '$(-\\infty,4]$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Deshacer el valor absoluto', d: '$-5\\le2x-3\\le5$.' },
      { t: 'Sumar 3', d: '$-2\\le2x\\le8$.' },
      { t: 'Dividir entre 2', d: '$-1\\le x\\le4$, es decir, $[-1,4]$.' }
    ],
    truco: 'El valor absoluto menor o igual que un número siempre da un intervalo cerrado y acotado.',
    errorTipico: 'Resolver solo $2x-3\\le5$ y perder la mitad de la solución.'
  },
  {
    id: 'm1-num-03',
    materia: 'mates-i',
    bloque: 'numeros-reales',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Propiedades de los logaritmos',
    fuente: F_M1,
    enunciado: 'Calcula $\\log_2 8+\\log_3 9-\\log_{10}100$.',
    pista: 'Pregúntate a qué exponente hay que elevar la base para obtener el argumento.',
    partes: [
      { etiqueta: 'Resultado', opciones: ['$3$', '$7$', '$5$', '$1$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Cada logaritmo', d: '$\\log_2 8=3$ porque $2^3=8$; $\\log_3 9=2$; $\\log_{10}100=2$.' },
      { t: 'Operar', d: '$3+2-2=3$.' }
    ],
    truco: 'Un logaritmo es un exponente: si dudas, escribe la potencia equivalente.',
    errorTipico: 'Sumar los argumentos ($8+9-100$) como si los logaritmos fueran lineales.'
  },
  {
    id: 'm1-num-04',
    materia: 'mates-i',
    bloque: 'numeros-reales',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Simplificación de radicales',
    fuente: F_M1,
    enunciado: 'Expresa $\\sqrt{50}-\\sqrt{18}$ de la forma más simple y da su valor decimal redondeado a dos cifras.',
    pista: 'Extrae factorizaciones cuadradas: $50=25\\cdot2$ y $18=9\\cdot2$. Solo se pueden restar radicales con el mismo radicando.',
    partes: [
      { etiqueta: 'Forma simplificada', opciones: ['$2\\sqrt{2}$', '$8\\sqrt{2}$', '$\\sqrt{32}$', '$2\\sqrt{8}$'], correcta: 0 },
      { etiqueta: 'Valor decimal', opciones: ['$2{,}83$', '$2{,}24$', '$5{,}66$', '$4{,}00$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Extraer cuadrados', d: '$\\sqrt{50}=5\\sqrt{2}$ y $\\sqrt{18}=3\\sqrt{2}$.' },
      { t: 'Restar', d: '$(5-3)\\sqrt{2}=2\\sqrt{2}$.' },
      { t: 'Decimal', d: '$2\\sqrt{2}\\approx2{,}828$, es decir, $2{,}83$.' }
    ],
    truco: 'Saca el mayor cuadrado perfecto posible del radicando y opera solo los coeficientes.',
    errorTipico: 'Restar los radicandos y responder $\\sqrt{32}$, que no es equivalente.'
  },
  {
    id: 'm1-num-05',
    materia: 'mates-i',
    bloque: 'numeros-reales',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Ecuación exponencial y logarítmica',
    fuente: F_M1,
    enunciado: 'Resuelve $2^{x+1}=16$ y $\\log_2 x=5$.',
    pista: 'Escribe $16$ como potencia de $2$. Para el logaritmo, usa su definición: $\\log_b x=c\\iff x=b^c$.',
    partes: [
      { etiqueta: '$2^{x+1}=16$', opciones: ['$x=3$', '$x=4$', '$x=2$', '$x=5$'], correcta: 0 },
      { etiqueta: '$\\log_2 x=5$', opciones: ['$x=32$', '$x=25$', '$x=10$', '$x=64$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Igualar bases', d: '$16=2^4$, luego $x+1=4$ y $x=3$.' },
      { t: 'Definición de logaritmo', d: '$\\log_2x=5\\iff x=2^5=32$.' }
    ],
    truco: 'Todo exponencial se resuelve igualando bases; todo logaritmo, pasando a su forma exponencial.',
    errorTipico: 'Dividir $16:2=8$ y responder $x=4$, que resuelve $2^{x}=16$, no $2^{x+1}=16$.'
  },

  /* ------------------------ Matemáticas I · sucesiones ----------------------- */
  {
    id: 'm1-suc-01',
    materia: 'mates-i',
    bloque: 'sucesiones',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Diferencia y término veinte de una aritmética',
    fuente: F_M1,
    enunciado: 'En una progresión aritmética $a_3=8$ y $a_7=20$. Calcula la diferencia y el término $a_{20}$.',
    pista: 'Entre $a_3$ y $a_7$ hay cuatro saltos: $a_7-a_3=4d$. Después retrocede hasta $a_1$.',
    partes: [
      { etiqueta: 'Diferencia $d$', opciones: ['$3$', '$4$', '$2{,}5$', '$12$'], correcta: 0 },
      { etiqueta: '$a_{20}$', opciones: ['$59$', '$62$', '$56$', '$60$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Diferencia', d: '$20-8=4d\\Rightarrow d=3$.' },
      { t: 'Primer término', d: '$a_1=a_3-2d=8-6=2$.' },
      { t: 'Término veinte', d: '$a_{20}=2+19\\cdot3=59$.' }
    ],
    truco: 'La diferencia es $\\dfrac{a_m-a_n}{m-n}$: no hace falta pasar por $a_1$ para hallarla.',
    errorTipico: 'Calcular $a_1$ restando $3d$ en vez de $2d$ y desviarse todo el ejercicio.'
  },
  {
    id: 'm1-suc-02',
    materia: 'mates-i',
    bloque: 'sucesiones',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Suma de una serie geométrica infinita',
    fuente: F_M1,
    enunciado: 'Calcula la razón y la suma de la serie $3+1+\\dfrac{1}{3}+\\ldots$',
    pista: 'La razón es el cociente entre un término y el anterior. Para la suma infinita, usa $S=\\dfrac{a_1}{1-r}$ solo si $|r|\\lt1$.',
    partes: [
      { etiqueta: 'Razón $r$', opciones: ['$\\dfrac{1}{3}$', '$3$', '$\\dfrac{2}{3}$', '$1$'], correcta: 0 },
      { etiqueta: 'Suma', opciones: ['$4{,}5$', '$9$', '$6$', '$4$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Razón', d: '$r=\\dfrac{1}{3}$.' },
      { t: 'Convergencia', d: '$|r|\\lt1$, así que la serie converge.' },
      { t: 'Suma', d: '$S=\\dfrac{3}{1-1/3}=\\dfrac{3}{2/3}=4{,}5$.' }
    ],
    truco: 'Si $|r|\\ge1$ la suma infinita no existe: compruébalo antes de aplicar la fórmula.',
    errorTipico: 'Dividir al revés ($r=3$) y no obtener un valor finito.'
  },
  {
    id: 'm1-suc-03',
    materia: 'mates-i',
    bloque: 'sucesiones',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Límite de una sucesión racional',
    fuente: F_M1,
    enunciado: 'Calcula $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n^2-3n}{2n^2+1}$.',
    pista: 'Divide entre $n^2$ y observa que los términos con $n$ en el denominador tienden a cero.',
    partes: [
      { etiqueta: 'Límite', opciones: ['$0{,}5$', '$1$', '$2$', '$\\infty$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Dividir', d: '$\\dfrac{n^2-3n}{2n^2+1}=\\dfrac{1-3/n}{2+1/n^2}$.' },
      { t: 'Límite', d: 'Los términos sobrantes se anulan y queda $\\dfrac{1}{2}=0{,}5$.' }
    ],
    truco: 'Mismo grado: cociente de coeficientes líderes, aquí $1/2$.',
    errorTipico: 'Fijarse en $-3n$ y decir que el límite es negativo o infinito.'
  },
  {
    id: 'm1-suc-04',
    materia: 'mates-i',
    bloque: 'sucesiones',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Sucesión recurrente de dos términos anteriores',
    fuente: F_M1,
    enunciado: 'Sea $a_1=1$, $a_2=3$ y $a_n=a_{n-1}+a_{n-2}$ para $n\\ge3$. Calcula $a_5$.',
    pista: 'Cada término es la suma de los dos anteriores. Ve calculando en orden.',
    partes: [
      { etiqueta: '$a_5$', opciones: ['$11$', '$7$', '$15$', '$10$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Tercer término', d: '$a_3=a_2+a_1=3+1=4$.' },
      { t: 'Cuarto término', d: '$a_4=a_3+a_2=4+3=7$.' },
      { t: 'Quinto término', d: '$a_5=a_4+a_3=7+4=11$.' }
    ],
    truco: 'En una recurrencia de dos términos, escribe la lista completa: un salto en el orden arruina todo.',
    errorTipico: 'Sumar siempre $a_1+a_2=4$ y responder $4$ o repetir el tercer término.'
  },
  {
    id: 'm1-suc-05',
    materia: 'mates-i',
    bloque: 'sucesiones',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Suma de los diez primeros términos',
    fuente: F_M1,
    enunciado: 'Una progresión aritmética empieza en $5$ y tiene diferencia $2$. Calcula $a_{10}$ y $S_{10}$.',
    pista: '$a_{10}=a_1+9d$ y $S_{10}=\\dfrac{10(a_1+a_{10})}{2}$.',
    partes: [
      { etiqueta: '$a_{10}$', opciones: ['$23$', '$25$', '$21$', '$27$'], correcta: 0 },
      { etiqueta: '$S_{10}$', opciones: ['$140$', '$120$', '$280$', '$150$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Décimo término', d: '$a_{10}=5+9\\cdot2=23$.' },
      { t: 'Suma', d: '$S_{10}=\\dfrac{10(5+23)}{2}=5\\cdot28=140$.' }
    ],
    truco: 'También vale $S_n=n\\,a_1+d\\dfrac{n(n-1)}{2}$: elige la fórmula según los datos que tengas.',
    errorTipico: 'Usar $a_{10}=5+10\\cdot2=25$ y arrastrar el error a la suma.'
  },

  /* -------------------------- Matemáticas I · cónicas ------------------------ */
  {
    id: 'm1-con-01',
    materia: 'mates-i',
    bloque: 'conicas',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Centro y radio de una circunferencia',
    fuente: F_M1,
    enunciado: 'Halla el centro y el radio de la circunferencia $x^2+y^2-4x+6y-12=0$.',
    pista: 'Agrupa los términos de $x$ y de $y$ y completa cuadrados. El centro es $(-a/2,-b/2)$ y el radio al cuadrado es centro² menos el término independiente.',
    partes: [
      { etiqueta: 'Centro', opciones: ['$(2,-3)$', '$(-2,3)$', '$(4,-6)$', '$(2,3)$'], correcta: 0 },
      { etiqueta: 'Radio', opciones: ['$5$', '$25$', '$\\sqrt{12}$', '$13$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Completar cuadrados', d: '$(x-2)^2-4+(y+3)^2-9-12=0$.' },
      { t: 'Forma canónica', d: '$(x-2)^2+(y+3)^2=25$.' },
      { t: 'Leer', d: 'Centro $(2,-3)$ y radio $\\sqrt{25}=5$.' }
    ],
    truco: 'Radio al cuadrado = (mitad de $a$)² + (mitad de $b$)² − término independiente.',
    errorTipico: 'Dar $25$ como radio y olvidar la raíz cuadrada.'
  },
  {
    id: 'm1-con-02',
    materia: 'mates-i',
    bloque: 'conicas',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Foco y directriz de una parábola',
    fuente: F_M1,
    enunciado: 'Para la parábola $y^2=8x$, determina el foco y la directriz.',
    pista: 'Compara con $y^2=2px$: aquí $2p=8$, luego $p=4$. El vértice está en el origen y la parábola abre hacia la derecha.',
    partes: [
      { etiqueta: 'Foco', opciones: ['$(2,0)$', '$(0,2)$', '$(4,0)$', '$(-2,0)$'], correcta: 0 },
      { etiqueta: 'Directriz', opciones: ['$x=-2$', '$x=2$', '$y=-2$', '$x=-4$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Parámetro', d: '$2p=8\\Rightarrow p=4$.' },
      { t: 'Foco', d: 'A distancia $p/2=2$ del vértice hacia la apertura: $(2,0)$.' },
      { t: 'Directriz', d: 'Recta $x=-p/2=-2$.' }
    ],
    truco: 'En $y^2=2px$ el foco está en $(p/2,0)$ y la directriz en $x=-p/2$.',
    errorTipico: 'Confundir $p$ con $2p$ y colocar el foco en $(4,0)$.'
  },
  {
    id: 'm1-con-03',
    materia: 'mates-i',
    bloque: 'conicas',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Semiejes y excentricidad de una elipse',
    fuente: F_M1,
    enunciado: 'Dada la elipse $\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$, calcula el semieje mayor y la excentricidad.',
    pista: 'Con $a\\gt b$, la elipse tiene $a=5$, $b=3$. La distancia focal cumple $c^2=a^2-b^2$ y la excentricidad es $e=c/a$.',
    partes: [
      { etiqueta: 'Semieje mayor $a$', opciones: ['$5$', '$3$', '$4$', '$25$'], correcta: 0 },
      { etiqueta: 'Excentricidad $e$', opciones: ['$0{,}8$', '$0{,}6$', '$1{,}25$', '$0{,}64$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Semiejes', d: '$a^2=25\\Rightarrow a=5$; $b^2=9\\Rightarrow b=3$.' },
      { t: 'Distancia focal', d: '$c=\\sqrt{25-9}=\\sqrt{16}=4$.' },
      { t: 'Excentricidad', d: '$e=\\dfrac{c}{a}=\\dfrac{4}{5}=0{,}8$.' }
    ],
    truco: 'En la elipse $c^2=a^2-b^2$ y $e\\lt1$; en la hipérbola $c^2=a^2+b^2$ y $e\\gt1$.',
    errorTipico: 'Usar $c^2=a^2+b^2$ (fórmula de la hipérbola) y obtener $c=\\sqrt{34}$.'
  },
  {
    id: 'm1-con-04',
    materia: 'mates-i',
    bloque: 'conicas',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Asíntotas y focos de una hipérbola',
    fuente: F_M1,
    enunciado: 'Para la hipérbola $\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$, halla las asíntotas y los focos.',
    pista: 'Aquí $a=3$ y $b=4$. Las asíntotas son $y=\\pm\\dfrac{b}{a}x$ y los focos cumplen $c^2=a^2+b^2$.',
    partes: [
      { etiqueta: 'Asíntotas', opciones: ['$y=\\pm\\frac{4}{3}x$', '$y=\\pm\\frac{3}{4}x$', '$y=\\pm\\frac{16}{9}x$', '$y=\\pm4x$'], correcta: 0 },
      { etiqueta: 'Focos', opciones: ['$(\\pm5,0)$', '$(\\pm4,0)$', '$(\\pm3,0)$', '$(\\pm7,0)$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Semiejes', d: '$a=3$, $b=4$.' },
      { t: 'Asíntotas', d: '$y=\\pm\\dfrac{b}{a}x=\\pm\\dfrac{4}{3}x$.' },
      { t: 'Focos', d: '$c=\\sqrt{9+16}=5$, focos $(\\pm5,0)$.' }
    ],
    truco: 'La hipérbola abre en el eje del término positivo: aquí el horizontal, así que los focos están en el eje $x$.',
    errorTipico: 'Calcular $c=\\sqrt{9-16}$ o usar $c^2=a^2-b^2$, que correspondería a una elipse.'
  },

  /* ---------------------------- CCSS I · sucesiones -------------------------- */
  {
    id: 'cs1-suc-01',
    materia: 'ccss-i',
    bloque: 'sucesiones',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Progresión aritmética decreciente',
    fuente: F_CS1,
    enunciado: 'Una máquina vale $100$ unidades y pierde $5$ cada año. Escribe su valor como progresión aritmética y calcula el valor en el año $15$.',
    pista: '$a_1=100$ y $d=-5$. Usa $a_n=a_1+(n-1)d$. Para saber cuándo llega a $0$, resuelve $a_n=0$.',
    partes: [
      { etiqueta: 'Valor en el año 15', opciones: ['$30$', '$25$', '$35$', '$20$'], correcta: 0 },
      { etiqueta: 'Año en que el valor llega a 0', opciones: ['$21$', '$20$', '$25$', '$22$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Término general', d: '$a_n=100-5(n-1)$.' },
      { t: 'Año 15', d: '$a_{15}=100-5\\cdot14=30$.' },
      { t: 'Anular', d: '$100-5(n-1)=0\\Rightarrow n-1=20\\Rightarrow n=21$.' }
    ],
    truco: 'Con diferencia negativa, el término general decrece; despeja $n$ en lugar de ir sumando de uno en uno.',
    errorTipico: 'Calcular $100-5\\cdot15=25$ y responder el año $25$.'
  },
  {
    id: 'cs1-suc-02',
    materia: 'ccss-i',
    bloque: 'sucesiones',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Razón y término de una geométrica',
    fuente: F_CS1,
    enunciado: 'En la progresión $3,\\ 6,\\ 12,\\ 24,\\ldots$ calcula la razón y el término $a_8$.',
    pista: 'La razón es el cociente entre un término y el anterior. Después aplica $a_n=a_1r^{n-1}$.',
    partes: [
      { etiqueta: 'Razón', opciones: ['$2$', '$3$', '$6$', '$0{,}5$'], correcta: 0 },
      { etiqueta: '$a_8$', opciones: ['$384$', '$768$', '$192$', '$256$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Razón', d: '$r=\\dfrac{6}{3}=2$.' },
      { t: 'Octavo término', d: '$a_8=3\\cdot2^{7}=3\\cdot128=384$.' }
    ],
    truco: 'En una geométrica el cociente siempre es constante: compruébalo con dos parejas distintas.',
    errorTipico: 'Usar $2^8=256$ y olvidar que el exponente es $n-1$.'
  },
  {
    id: 'cs1-suc-03',
    materia: 'ccss-i',
    bloque: 'sucesiones',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Límite de una sucesión',
    fuente: F_CS1,
    enunciado: 'Calcula $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{2n+1}{n+3}$.',
    pista: 'Divide numerador y denominador entre $n$. Los términos $1/n$ y $3/n$ tienden a cero.',
    partes: [
      { etiqueta: 'Límite', opciones: ['$2$', '$1$', '$0$', '$\\infty$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Dividir', d: '$\\dfrac{2n+1}{n+3}=\\dfrac{2+1/n}{1+3/n}$.' },
      { t: 'Límite', d: 'Los términos con $n$ desaparecen: queda $\\dfrac{2}{1}=2$.' }
    ],
    truco: 'Mismo grado arriba y abajo: mira solo los coeficientes que acompañan a $n$.',
    errorTipico: 'Dividir los términos independientes $1/3$ y responder $0{,}33$.'
  },
  {
    id: 'cs1-suc-04',
    materia: 'ccss-i',
    bloque: 'sucesiones',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Depreciación con porcentaje fijo',
    fuente: F_CS1,
    enunciado: 'Un ordenador de $1000$ € se deprecia un $10\\,\\%$ cada año. Escribe el término general de su valor y calcula cuánto valdrá a los $3$ años.',
    pista: 'Perder un $10\\,\\%$ es multiplicar por $0{,}9$. Es una progresión geométrica de razón $0{,}9$.',
    partes: [
      { etiqueta: 'Término general (valor tras $n-1$ años)', opciones: ['$1000\\cdot0{,}9^{n-1}$', '$1000\\cdot0{,}9^{n}$', '$1000-100n$', '$1000\\cdot1{,}1^{n-1}$'], correcta: 0 },
      { etiqueta: 'Valor a los 3 años', opciones: ['$729$', '$700$', '$810$', '$656{,}10$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Razón', d: 'Cada año se conserva el $90\\,\\%$: $r=0{,}9$.' },
      { t: 'Término general', d: '$a_n=1000\\cdot0{,}9^{n-1}$, con $a_1=1000$.' },
      { t: 'Tres años', d: '$a_4=1000\\cdot0{,}9^3=729$ €.' }
    ],
    truco: 'Bajar un $p\\,\\%$ es multiplicar por $1-p/100$, no restar la misma cantidad cada año.',
    errorTipico: 'Restar $100$ € anuales y responder $700$: eso es depreciación lineal.'
  },
  {
    id: 'cs1-suc-05',
    materia: 'ccss-i',
    bloque: 'sucesiones',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Suma de los seis primeros términos de una geométrica',
    fuente: F_CS1,
    enunciado: 'Para la progresión $2,\\ 4,\\ 8,\\ 16,\\ldots$ calcula $a_6$ y $S_6$.',
    pista: 'La razón es $2$. Usa $a_6=2\\cdot2^5$ y $S_6=\\dfrac{a_6\\cdot2-2}{2-1}$.',
    partes: [
      { etiqueta: '$a_6$', opciones: ['$64$', '$128$', '$32$', '$62$'], correcta: 0 },
      { etiqueta: '$S_6$', opciones: ['$126$', '$128$', '$254$', '$120$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Sexto término', d: '$a_6=2\\cdot2^{5}=64$.' },
      { t: 'Suma', d: '$S_6=\\dfrac{64\\cdot2-2}{1}=126$.' },
      { t: 'Comprobación', d: '$2+4+8+16+32+64=126$.' }
    ],
    truco: 'Con razón $2$, la suma de $n$ términos es $2a_n-a_1$: el doble del último menos el primero.',
    errorTipico: 'Multiplicar el primer término por el número de términos ($2\\cdot6=12$).'
  },

  /* ------------------------------ CCSS I · álgebra ---------------------------- */
  {
    id: 'cs1-alg-01',
    materia: 'ccss-i',
    bloque: 'algebra',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Ecuación de segundo grado completa',
    fuente: F_CS1,
    enunciado: 'Resuelve $x^2-5x+6=0$.',
    pista: 'Busca dos números que sumen $5$ y multipliquen $6$. También puedes aplicar la fórmula general.',
    partes: [
      { etiqueta: 'Soluciones', opciones: ['$x=2$ y $x=3$', '$x=-2$ y $x=-3$', '$x=1$ y $x=6$', '$x=-1$ y $x=-6$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Factorizar', d: '$x^2-5x+6=(x-2)(x-3)$.' },
      { t: 'Igualar a cero', d: '$x-2=0$ o $x-3=0$, es decir, $x=2$ y $x=3$.' }
    ],
    truco: 'Si factorizas con signos negativos dentro de los paréntesis, las soluciones son positivas: suman $5$ y multiplican $6$.',
    errorTipico: 'Responder $x=-2$ y $x=-3$ al copiar los números del paréntesis con su signo.'
  },
  {
    id: 'cs1-alg-02',
    materia: 'ccss-i',
    bloque: 'algebra',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Sistema de dos ecuaciones',
    fuente: F_CS1,
    enunciado: 'Resuelve el sistema $\\begin{cases}2x+y=5\\\\[2pt] x-y=1\\end{cases}$.',
    pista: 'Suma las dos ecuaciones: la $y$ se elimina. Después sustituye el valor de $x$.',
    partes: [
      { etiqueta: 'Valor de $x$', opciones: ['$2$', '$1$', '$3$', '$4$'], correcta: 0 },
      { etiqueta: 'Valor de $y$', opciones: ['$1$', '$2$', '$-1$', '$3$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Sumar', d: '$3x=6\\Rightarrow x=2$.' },
      { t: 'Sustituir', d: '$2- y=1\\Rightarrow y=1$.' },
      { t: 'Comprobar', d: '$2\\cdot2+1=5$ y $2-1=1$: correcto.' }
    ],
    truco: 'Suma si los coeficientes de una incógnita son opuestos; resta si son iguales.',
    errorTipico: 'Sumar solo los lados izquierdos y olvidar sumar los términos independientes.'
  },
  {
    id: 'cs1-alg-03',
    materia: 'ccss-i',
    bloque: 'algebra',
    nivel: 1,
    tipo: 'opcion',
    titulo: 'Ecuación exponencial y logarítmica',
    fuente: F_CS1,
    enunciado: 'Resuelve $3^{x}=81$ y $\\log_2x=5$.',
    pista: 'Escribe $81$ como potencia de $3$. Para el logaritmo, pasa a la forma exponencial.',
    partes: [
      { etiqueta: '$3^x=81$', opciones: ['$x=4$', '$x=3$', '$x=27$', '$x=81$'], correcta: 0 },
      { etiqueta: '$\\log_2x=5$', opciones: ['$x=32$', '$x=10$', '$x=25$', '$x=64$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Potencia de 3', d: '$81=3^4$, luego $x=4$.' },
      { t: 'Logaritmo', d: '$\\log_2x=5\\Rightarrow x=2^5=32$.' }
    ],
    truco: 'Si la base no coincide, aplica logaritmos a los dos lados.',
    errorTipico: 'Dividir $81/3=27$ y responder $x=27$.'
  },
  {
    id: 'cs1-alg-04',
    materia: 'ccss-i',
    bloque: 'algebra',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Inecuación y ecuación racional',
    fuente: F_CS1,
    enunciado: 'Resuelve $3x+1\\lt10$ y, por separado, $\\dfrac{x+1}{x-2}=2$.',
    pista: 'En la inecuación, opera igual que en una ecuación (no cambias de signo). En la racional, multiplica en cruz y comprueba el dominio.',
    partes: [
      { etiqueta: '$3x+1\\lt10$', opciones: ['$x\\lt3$', '$x\\gt3$', '$x\\lt9$', '$x\\gt9$'], correcta: 0 },
      { etiqueta: '$\\dfrac{x+1}{x-2}=2$', opciones: ['$x=5$', '$x=3$', '$x=-5$', 'No tiene solución'], correcta: 0 }
    ],
    solucion: [
      { t: 'Inecuación', d: '$3x\\lt9\\Rightarrow x\\lt3$.' },
      { t: 'Ecuación', d: '$x+1=2(x-2)=2x-4\\Rightarrow 5=x$.' },
      { t: 'Dominio', d: '$x=2$ queda excluido, pero $x=5$ es válido: solución $x=5$.' }
    ],
    truco: 'Al multiplicar por $x-2$ recuerda que $x\\ne2$; si la solución fuese $2$, habría que descartarla.',
    errorTipico: 'Responder $x=-5$ al pasar mal el término independiente a la izquierda.'
  },
  {
    id: 'cs1-alg-05',
    materia: 'ccss-i',
    bloque: 'algebra',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Ecuación con una raíz cuadrada',
    fuente: F_CS1,
    enunciado: 'Resuelve $\\sqrt{x+7}=5$.',
    pista: 'Eleva al cuadrado los dos miembros, despeja $x$ y comprueba la solución en la ecuación original.',
    partes: [
      { etiqueta: '$x$', opciones: ['$18$', '$25$', '$12$', '$32$'], correcta: 0 }
    ],
    solucion: [
      { t: 'Elevar al cuadrado', d: '$x+7=25$.' },
      { t: 'Despejar', d: '$x=18$.' },
      { t: 'Comprobar', d: '$\\sqrt{18+7}=\\sqrt{25}=5$: correcto.' }
    ],
    truco: 'Al elevar al cuadrado pueden aparecer soluciones falsas: comprueba siempre.',
    errorTipico: 'Restar $7$ después de elevar ($25-7$) está bien, pero restar antes deja $\\sqrt{x}=5-7$, que no tiene solución.'
  }
];

const porArchivo = new Map();
for (const ej of NUEVOS) {
  const ruta = path.join(ROOT, 'js', 'data', ej.materia, 'nivel-' + ej.nivel + '.js');
  if (!porArchivo.has(ruta)) porArchivo.set(ruta, []);
  porArchivo.get(ruta).push(ej);
}

for (const [ruta, lista] of porArchivo) {
  let texto = fs.readFileSync(ruta, 'utf8');
  const eol = texto.includes('\r\n') ? '\r\n' : '\n';
  const marca = eol + '    ]';
  const pos = texto.lastIndexOf(marca);
  if (pos < 0) throw new Error('No se encuentra el cierre del array en ' + ruta);
  const chunk = lista
    .map((ej) => JSON.stringify(ej, null, 2).split('\n').map((linea) => '      ' + linea).join(eol))
    .join(',' + eol);
  texto = texto.slice(0, pos) + ',' + eol + chunk + texto.slice(pos);
  const total = (texto.match(/"id":/g) || []).length;
  texto = texto.replace(/· \d+ ejercicios/, '· ' + total + ' ejercicios');
  fs.writeFileSync(ruta, texto);
  console.log(`${path.relative(ROOT, ruta)}: +${lista.length} (total ${total})`);
}

console.log(`\nAñadidos ${NUEVOS.length} ejercicios.`);
