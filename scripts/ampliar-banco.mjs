#!/usr/bin/env node
/* Añade una tanda de ejercicios nuevos al banco y actualiza el recuento
   de la cabecera de cada archivo. Uso: node scripts/ampliar-banco.mjs */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const L = String.raw;
const ROOT = process.cwd();

const NUEVOS = [
  /* ------------------------- Matemáticas II ------------------------- */
  {
    id: 'm2-vec-01', materia: 'mates-ii', bloque: 'vectores', nivel: 1, tipo: 'opcion',
    titulo: 'Producto escalar de dos vectores',
    fuente: 'Currículo CV · Matemáticas II',
    enunciado: L`Sean $\vec u=(2,-1,2)$ y $\vec v=(1,2,2)$. Calcula $\vec u\cdot\vec v$.`,
    pista: L`Multiplica componente a componente y suma: $\vec u\cdot\vec v=u_1v_1+u_2v_2+u_3v_3$.`,
    opciones: ['4', '3', '5', '8'],
    correcta: 0,
    solucion: [
      { t: 'Producto componente a componente', d: L`$2\cdot1+(-1)\cdot2+2\cdot2=2-2+4$.` },
      { t: 'Resultado', d: L`$\vec u\cdot\vec v=4$.` }
    ],
    truco: 'El producto escalar da un número, no un vector. Si te sale un vector, has usado el producto vectorial.',
    errorTipico: L`Sumar los módulos o cambiar el signo del segundo componente: $2+2+4=8$.`
  },
  {
    id: 'm2-int-01', materia: 'mates-ii', bloque: 'integrales', nivel: 2, tipo: 'opcion',
    titulo: 'Integral definida de un polinomio',
    fuente: 'Currículo CV · Matemáticas II',
    enunciado: L`Calcula $\displaystyle\int_0^2 (3x^2-2x)\,dx$.`,
    pista: L`Busca una primitiva término a término y aplica Barrow: $\int x^n\,dx=\frac{x^{n+1}}{n+1}$.`,
    opciones: ['4', '2', '6', '8'],
    correcta: 0,
    solucion: [
      { t: 'Primitiva', d: L`$F(x)=x^3-x^2$.` },
      { t: 'Barrow', d: L`$F(2)-F(0)=(8-4)-0=4$.` }
    ],
    truco: L`En un polinomio, integra subiendo un grado y divide por el nuevo exponente. No olvides evaluar en los dos extremos.`,
    errorTipico: L`Olvidar restar $F(0)$ o integrar $3x^2$ como $3x^3$ sin dividir entre $3$.`
  },
  {
    id: 'm2-int-02', materia: 'mates-ii', bloque: 'integrales', nivel: 2, tipo: 'opcion',
    titulo: 'Área entre una recta y una parábola',
    fuente: 'Currículo CV · Matemáticas II',
    enunciado: L`Halla el área encerrada entre $y=x$ y $y=x^2$ en el intervalo $[0,1]$.`,
    pista: L`En $[0,1]$ se cumple $x\ge x^2$. Integra $x-x^2$.`,
    opciones: ['0,1667', '0,3333', '0,5', '0,0833'],
    correcta: 0,
    solucion: [
      { t: 'Plantear', d: L`$A=\int_0^1 (x-x^2)\,dx$.` },
      { t: 'Integrar', d: L`$\left[\dfrac{x^2}{2}-\dfrac{x^3}{3}\right]_0^1=\dfrac12-\dfrac13$.` },
      { t: 'Resultado', d: L`$A=\dfrac16\approx0{,}1667$.` }
    ],
    truco: 'Dibuja las dos curvas: el área es la integral de «la de arriba menos la de abajo».',
    errorTipico: 'Integrar la resta al revés y obtener un área negativa, o no dividir entre 2 y 3.'
  },
  {
    id: 'm2-lim-01', materia: 'mates-ii', bloque: 'limites', nivel: 2, tipo: 'opcion',
    titulo: 'Límite con indeterminación 0/0',
    fuente: 'Currículo CV · Matemáticas II',
    enunciado: L`Calcula $\displaystyle\lim_{x\to1}\frac{x^2-1}{x-1}$.`,
    pista: L`Factoriza el numerador como diferencia de cuadrados: $x^2-1=(x-1)(x+1)$.`,
    opciones: ['2', '1', '0', '3'],
    correcta: 0,
    solucion: [
      { t: 'Factorizar', d: L`$\dfrac{x^2-1}{x-1}=\dfrac{(x-1)(x+1)}{x-1}=x+1$ para $x\ne1$.` },
      { t: 'Sustituir', d: L`$\lim_{x\to1}(x+1)=2$.` }
    ],
    truco: 'Antes de sustituir, comprueba si hay factor común. El 0/0 se rompe simplificando.',
    errorTipico: L`Sustituir $x=1$, ver $0/0$ y concluir que el límite no existe.`
  },
  {
    id: 'm2-mat-01', materia: 'mates-ii', bloque: 'matrices', nivel: 1, tipo: 'opcion',
    titulo: 'Determinante de una matriz 2×2',
    fuente: 'Currículo CV · Matemáticas II',
    enunciado: L`Calcula el determinante de $A=\begin{pmatrix}3&1\\2&4\end{pmatrix}$.`,
    pista: L`En una matriz $2\times2$, $\det A=ad-bc$ con los elementos de la diagonal principal y la secundaria.`,
    opciones: ['10', '14', '5', '8'],
    correcta: 0,
    solucion: [
      { t: 'Producto de diagonales', d: L`Diagonal principal: $3\cdot4=12$. Secundaria: $1\cdot2=2$.` },
      { t: 'Restar', d: L`$\det A=12-2=10$.` }
    ],
    truco: 'Diagonal principal menos diagonal secundaria. Si sumas en vez de restar, el determinante sale mal.',
    errorTipico: 'Sumar los dos productos y obtener 14, o multiplicar solo la diagonal principal.'
  },
  {
    id: 'm2-sis-01', materia: 'mates-ii', bloque: 'sistemas', nivel: 2, tipo: 'opcion',
    titulo: 'Sistema lineal 2×2',
    fuente: 'Currículo CV · Matemáticas II',
    enunciado: L`Resuelve el sistema $\begin{cases}x+y=5\\2x-y=1\end{cases}$.`,
    pista: 'Suma las dos ecuaciones para eliminar la $y$ y despeja después la otra incógnita.',
    partes: [
      { etiqueta: '$x$', opciones: ['2', '3', '1', '4'], correcta: 0 },
      { etiqueta: '$y$', opciones: ['3', '2', '4', '1'], correcta: 0 }
    ],
    solucion: [
      { t: 'Sumar ecuaciones', d: L`$(x+y)+(2x-y)=5+1\Rightarrow3x=6\Rightarrow x=2$.` },
      { t: 'Sustituir', d: L`$2+y=5\Rightarrow y=3$.` },
      { t: 'Comprobar', d: L`$2\cdot2-3=1$: se cumple la segunda ecuación.` }
    ],
    truco: 'Elige la incógnita que se elimine al sumar o restar. En este sistema, la $y$ desaparece sola.',
    errorTipico: 'Sumar solo los lados izquierdos y olvidar sumar los términos independientes.'
  },

  /* --------------------------- CCSS II --------------------------- */
  {
    id: 'cs2-est-09', materia: 'ccss-ii', bloque: 'estadistica', nivel: 2, tipo: 'opcion',
    titulo: 'Media y mediana de cinco datos',
    fuente: 'Currículo CV · Matemáticas CCSS II',
    enunciado: L`Para los datos $4,6,6,8,11$, calcula la media y la mediana.`,
    pista: 'Suma todos los datos y divide entre 5. Para la mediana, con un número impar de datos, toma el central al ordenarlos.',
    partes: [
      { etiqueta: 'Media', opciones: ['7', '6', '7,5', '8'], correcta: 0 },
      { etiqueta: 'Mediana', opciones: ['6', '7', '5', '8'], correcta: 0 }
    ],
    solucion: [
      { t: 'Media', d: L`$\bar x=\dfrac{4+6+6+8+11}{5}=\dfrac{35}{5}=7$.` },
      { t: 'Mediana', d: L`Los datos ordenados son $4,6,\mathbf{6},8,11$; el central es $6$.` }
    ],
    truco: 'Con pocos datos, ordena primero y localiza el centro. La media puede verse arrastrada por un valor extremo.',
    errorTipico: 'Calcular la mediana como la media de todos los datos, o contar mal la posición central.'
  },
  {
    id: 'cs2-est-10', materia: 'ccss-ii', bloque: 'estadistica', nivel: 2, tipo: 'opcion',
    titulo: 'Varianza poblacional',
    fuente: 'Currículo CV · Matemáticas CCSS II',
    enunciado: L`Para los datos $2,4,4,6,9$, calcula la media y la varianza poblacional.`,
    pista: L`Media: divide la suma entre 5. Varianza: media de las desviaciones al cuadrado, $\frac{\sum(x_i-\bar x)^2}{N}$.`,
    partes: [
      { etiqueta: 'Media', opciones: ['5', '6', '4,8', '5,5'], correcta: 0 },
      { etiqueta: 'Varianza', opciones: ['5,6', '7', '4,48', '6,4'], correcta: 0 }
    ],
    solucion: [
      { t: 'Media', d: L`$\bar x=\dfrac{2+4+4+6+9}{5}=5$.` },
      { t: 'Desviaciones', d: L`$(-3)^2+(-1)^2+(-1)^2+1^2+4^2=9+1+1+1+16=28$.` },
      { t: 'Varianza', d: L`$\sigma^2=\dfrac{28}{5}=5{,}6$.` }
    ],
    truco: 'La varianza promedia cuadrados, no desviaciones. Si divides entre 4 en vez de 5, estás usando la cuasivarianza.',
    errorTipico: L`Dividir entre $N-1$ cuando el enunciado pide la población, u olvidar elevar al cuadrado las desviaciones.`
  },
  {
    id: 'cs2-int-01', materia: 'ccss-ii', bloque: 'integrales', nivel: 2, tipo: 'opcion',
    titulo: 'Integral definida inmediata',
    fuente: 'Currículo CV · Matemáticas CCSS II',
    enunciado: L`Calcula $\displaystyle\int_0^1 (2x+1)\,dx$.`,
    pista: L`La primitiva de $2x$ es $x^2$ y la de $1$ es $x$. Aplica Barrow.`,
    opciones: ['2', '1', '2,5', '3'],
    correcta: 0,
    solucion: [
      { t: 'Primitiva', d: L`$F(x)=x^2+x$.` },
      { t: 'Barrow', d: L`$F(1)-F(0)=(1+1)-0=2$.` }
    ],
    truco: 'Si el integrando es una suma, integra cada sumando por separado.',
    errorTipico: L`Olvidar integrar el $1$ y calcular solo $\int_0^1 2x\,dx=1$.`
  },
  {
    id: 'cs2-mat-01', materia: 'ccss-ii', bloque: 'matrices', nivel: 2, tipo: 'opcion',
    titulo: 'Producto de matrices 2×2',
    fuente: 'Currículo CV · Matemáticas CCSS II',
    enunciado: L`Sean $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$ y $B=\begin{pmatrix}2&0\\1&3\end{pmatrix}$. Calcula $AB$.`,
    pista: 'Cada elemento de $AB$ es el producto escalar de una fila de $A$ por una columna de $B$.',
    opciones: [
      L`$\begin{pmatrix}4&6\\1&3\end{pmatrix}$`,
      L`$\begin{pmatrix}4&0\\1&3\end{pmatrix}$`,
      L`$\begin{pmatrix}2&0\\0&3\end{pmatrix}$`,
      L`$\begin{pmatrix}2&6\\1&3\end{pmatrix}$`
    ],
    correcta: 0,
    solucion: [
      { t: 'Fila 1 por columnas', d: L`$(1\cdot2+2\cdot1,\;1\cdot0+2\cdot3)=(4,6)$.` },
      { t: 'Fila 2 por columnas', d: L`$(0\cdot2+1\cdot1,\;0\cdot0+1\cdot3)=(1,3)$.` },
      { t: 'Resultado', d: L`$AB=\begin{pmatrix}4&6\\1&3\end{pmatrix}$.` }
    ],
    truco: 'Fila por columna, nunca elemento a elemento. El producto de matrices no es conmutativo.',
    errorTipico: L`Multiplicar $A$ y $B$ elemento a elemento y obtener $\begin{pmatrix}2&0\\0&3\end{pmatrix}$.`
  },
  {
    id: 'cs2-pl-01', materia: 'ccss-ii', bloque: 'programacion-lineal', nivel: 2, tipo: 'opcion',
    titulo: 'Máximo de una función objetivo',
    fuente: 'Currículo CV · Matemáticas CCSS II',
    enunciado: L`Maximiza $z=3x+2y$ sujeto a $x+y\le4$, $x\ge0$, $y\ge0$.`,
    pista: L`Los vértices de la región son $(0,0)$, $(4,0)$ y $(0,4)$. Evalúa $z$ en cada uno.`,
    opciones: ['12', '8', '14', '10'],
    correcta: 0,
    solucion: [
      { t: 'Vértices', d: L`$(0,0)$, $(4,0)$ y $(0,4)$.` },
      { t: 'Evaluar', d: L`$z(0,0)=0$, $z(4,0)=12$, $z(0,4)=8$.` },
      { t: 'Máximo', d: L`El máximo es $12$ en $(4,0)$.` }
    ],
    truco: 'En programación lineal con región acotada, el óptimo está siempre en un vértice: no hace falta recorrer el interior.',
    errorTipico: 'Escoger el vértice con mayor coordenada en vez de evaluar la función objetivo.'
  },
  {
    id: 'cs2-sis-01', materia: 'ccss-ii', bloque: 'sistemas', nivel: 2, tipo: 'opcion',
    titulo: 'Sistema lineal 2×2',
    fuente: 'Currículo CV · Matemáticas CCSS II',
    enunciado: L`Resuelve el sistema $\begin{cases}2x+y=7\\x-y=2\end{cases}$.`,
    pista: 'Suma las ecuaciones para eliminar la $y$. Después sustituye el valor de $x$.',
    partes: [
      { etiqueta: '$x$', opciones: ['3', '1', '2', '4'], correcta: 0 },
      { etiqueta: '$y$', opciones: ['1', '3', '2', '−1'], correcta: 0 }
    ],
    solucion: [
      { t: 'Sumar', d: L`$3x=9\Rightarrow x=3$.` },
      { t: 'Sustituir', d: L`$3-y=2\Rightarrow y=1$.` },
      { t: 'Comprobar', d: L`$2\cdot3+1=7$ y $3-1=2$.` }
    ],
    truco: 'Busca la combinación que elimine una incógnita con una sola suma o resta.',
    errorTipico: 'Restar las ecuaciones y perder el término independiente, o cambiar el signo al despejar.'
  },

  /* --------------------------- Matemáticas I --------------------------- */
  {
    id: 'm1-fun-01', materia: 'mates-i', bloque: 'funciones', nivel: 1, tipo: 'opcion',
    titulo: 'Dominio de una raíz cuadrada',
    fuente: 'Currículo CV · Matemáticas I',
    enunciado: L`¿Cuál es el dominio de $f(x)=\sqrt{x-3}$?`,
    pista: L`Lo que hay dentro de una raíz cuadrada no puede ser negativo: plantea $x-3\ge0$.`,
    opciones: [
      L`$[3,+\infty)$`,
      L`$(3,+\infty)$`,
      L`$(-\infty,3]$`,
      L`$\mathbb{R}$`
    ],
    correcta: 0,
    solucion: [
      { t: 'Condición', d: L`$x-3\ge0$.` },
      { t: 'Despejar', d: L`$x\ge3$, luego el dominio es $[3,+\infty)$.` }
    ],
    truco: 'En una raíz de índice par, el radicando manda: nunca negativo. El extremo donde vale 0 sí entra.',
    errorTipico: 'Excluir el 3 con paréntesis, o pensar que el dominio es todo $\\mathbb{R}$.'
  },
  {
    id: 'm1-lim-01', materia: 'mates-i', bloque: 'limites', nivel: 2, tipo: 'opcion',
    titulo: 'Límite en el infinito',
    fuente: 'Currículo CV · Matemáticas I',
    enunciado: L`Calcula $\displaystyle\lim_{x\to+\infty}\frac{2x^2+1}{x^2+3}$.`,
    pista: 'Divide numerador y denominador entre $x^2$ y mira qué términos tienden a cero.',
    opciones: ['2', '1', '0', L`$+\infty$`],
    correcta: 0,
    solucion: [
      { t: 'Dividir', d: L`$\dfrac{2x^2+1}{x^2+3}=\dfrac{2+1/x^2}{1+3/x^2}$.` },
      { t: 'Límite', d: L`$1/x^2\to0$, así que el límite es $\dfrac21=2$.` }
    ],
    truco: 'Si los grados del numerador y del denominador coinciden, el límite es el cociente de los coeficientes líderes.',
    errorTipico: 'Mirar solo el término $1$ del numerador o el $3$ del denominador.'
  },
  {
    id: 'm1-lim-02', materia: 'mates-i', bloque: 'limites', nivel: 1, tipo: 'opcion',
    titulo: 'Límite 0/0 con diferencia de cuadrados',
    fuente: 'Currículo CV · Matemáticas I',
    enunciado: L`Calcula $\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}$.`,
    pista: L`Factoriza $x^2-4=(x-2)(x+2)$ y simplifica antes de sustituir.`,
    opciones: ['4', '2', '0', '8'],
    correcta: 0,
    solucion: [
      { t: 'Factorizar', d: L`$\dfrac{(x-2)(x+2)}{x-2}=x+2$ si $x\ne2$.` },
      { t: 'Sustituir', d: L`$2+2=4$.` }
    ],
    truco: 'La indeterminación 0/0 suele esconder un factor común. Simplifícalo y desaparece.',
    errorTipico: 'Concluir que el límite no existe porque sale 0/0.'
  },
  {
    id: 'm1-der-01', materia: 'mates-i', bloque: 'derivadas', nivel: 2, tipo: 'opcion',
    titulo: 'Derivada de un polinomio en un punto',
    fuente: 'Currículo CV · Matemáticas I',
    enunciado: L`Sea $f(x)=x^3-2x$. Calcula $f'(2)$.`,
    pista: L`Deriva término a término: $(x^3)'=3x^2$ y $(-2x)'=-2$. Después sustituye $x=2$.`,
    opciones: ['10', '12', '6', '8'],
    correcta: 0,
    solucion: [
      { t: 'Derivada', d: L`$f'(x)=3x^2-2$.` },
      { t: 'Sustituir', d: L`$f'(2)=3\cdot4-2=10$.` }
    ],
    truco: 'Deriva primero y sustituye después. Así reutilizas la expresión si te piden otro punto.',
    errorTipico: L`Derivar $x^3$ como $3x$ o evaluar $f(2)$ en vez de $f'(2)$.`
  },
  {
    id: 'm1-der-02', materia: 'mates-i', bloque: 'derivadas', nivel: 1, tipo: 'opcion',
    titulo: 'Pendiente de la recta tangente',
    fuente: 'Currículo CV · Matemáticas I',
    enunciado: L`¿Cuál es la pendiente de la recta tangente a $f(x)=x^2$ en $x=3$?`,
    pista: L`La pendiente de la tangente en un punto es $f'(a)$. Deriva y evalúa en $a=3$.`,
    opciones: ['6', '9', '3', '12'],
    correcta: 0,
    solucion: [
      { t: 'Derivada', d: L`$f'(x)=2x$.` },
      { t: 'Pendiente', d: L`$m=f'(3)=6$.` }
    ],
    truco: 'Tangente = derivada. El valor $f(3)=9$ es la altura del punto, no la pendiente.',
    errorTipico: L`Confundir $f(3)$ con $f'(3)$ y responder $9$.`
  },
  {
    id: 'm1-vec-01', materia: 'mates-i', bloque: 'vectores', nivel: 1, tipo: 'opcion',
    titulo: 'Módulo de un vector',
    fuente: 'Currículo CV · Matemáticas I',
    enunciado: L`Calcula el módulo de $\vec u=(1,2,2)$.`,
    pista: L`$|\vec u|=\sqrt{u_1^2+u_2^2+u_3^2}$. Eleva al cuadrado cada componente, suma y saca la raíz.`,
    opciones: ['3', L`$\sqrt5$`, '9', '5'],
    correcta: 0,
    solucion: [
      { t: 'Cuadrados', d: L`$1^2+2^2+2^2=1+4+4=9$.` },
      { t: 'Raíz', d: L`$|\vec u|=\sqrt9=3$.` }
    ],
    truco: 'El módulo es una longitud: siempre positivo. Si te sale 9, te has quedado en los cuadrados.',
    errorTipico: 'Sumar las componentes sin elevarlas al cuadrado y responder 5.'
  },

  /* --------------------------- CCSS I --------------------------- */
  {
    id: 'cs1-ari-05', materia: 'ccss-i', bloque: 'numerico', nivel: 2, tipo: 'opcion',
    titulo: 'Aumento y descuento encadenados',
    fuente: 'Currículo CV · Matemáticas CCSS I',
    enunciado: L`Un artículo cuesta $150$ €. Sube un $20\,\%$ y después baja un $10\,\%$. ¿Cuál es el precio final?`,
    pista: L`Un aumento del $20\,\%$ multiplica por $1{,}2$; una bajada del $10\,\%$, por $0{,}9$. Aplica los factores en cadena.`,
    opciones: ['162', '165', '158', '180'],
    correcta: 0,
    solucion: [
      { t: 'Aumento', d: L`$150\cdot1{,}2=180$ €.` },
      { t: 'Descuento', d: L`$180\cdot0{,}9=162$ €.` },
      { t: 'Factor global', d: L`$150\cdot1{,}08=162$ €.` }
    ],
    truco: 'Los porcentajes encadenados se multiplican, no se suman: $1{,}2\cdot0{,}9=1{,}08$.',
    errorTipico: L`Hacer $+20\,\%-10\,\%=+10\,\%$ y responder $165$ €.`
  },
  {
    id: 'cs1-ari-06', materia: 'ccss-i', bloque: 'numerico', nivel: 2, tipo: 'opcion',
    titulo: 'Interés compuesto a dos años',
    fuente: 'Currículo CV · Matemáticas CCSS I',
    enunciado: L`Ingresas $1000$ € al $5\,\%$ anual compuesto. ¿Cuánto tienes a los 2 años?`,
    pista: L`Usa $C_f=C(1+i)^n$ con $i=0{,}05$ y $n=2$.`,
    opciones: ['1102,5', '1100', '1050', '1125'],
    correcta: 0,
    solucion: [
      { t: 'Fórmula', d: L`$C_f=1000(1{,}05)^2$.` },
      { t: 'Calcular', d: L`$(1{,}05)^2=1{,}1025$, luego $C_f=1102{,}50$ €.` }
    ],
    truco: L`En interés compuesto, el segundo año también genera intereses: $(1+i)^n$, no $1+ni$.`,
    errorTipico: L`Calcular $1000+2\cdot50=1100$ €, que es interés simple.`
  },
  {
    id: 'cs1-est-06', materia: 'ccss-i', bloque: 'estadistica', nivel: 1, tipo: 'opcion',
    titulo: 'Media y mediana de cinco datos',
    fuente: 'Currículo CV · Matemáticas CCSS I',
    enunciado: L`Para los datos $3,5,5,7,10$, calcula la media y la mediana.`,
    pista: 'La media divide la suma entre 5. La mediana es el dato central al ordenar.',
    partes: [
      { etiqueta: 'Media', opciones: ['6', '5', '7', '6,5'], correcta: 0 },
      { etiqueta: 'Mediana', opciones: ['5', '6', '3', '7'], correcta: 0 }
    ],
    solucion: [
      { t: 'Media', d: L`$\bar x=\dfrac{3+5+5+7+10}{5}=\dfrac{30}{5}=6$.` },
      { t: 'Mediana', d: L`Ordenados: $3,5,\mathbf{5},7,10$. El central es $5$.` }
    ],
    truco: 'Con un número impar de datos, la mediana es exactamente el central: no hay que promediar.',
    errorTipico: 'Responder la media en los dos apartados o contar mal la posición central.'
  },
  {
    id: 'cs1-est-07', materia: 'ccss-i', bloque: 'estadistica', nivel: 2, tipo: 'opcion',
    titulo: 'Rango intercuartílico',
    fuente: 'Currículo CV · Matemáticas CCSS I',
    enunciado: L`Para los datos $1,2,3,4,5,6,7,8$, calcula el rango intercuartílico $Q_3-Q_1$.`,
    pista: 'Con 8 datos, divide en dos mitades de 4. $Q_1$ es la mediana de la primera mitad y $Q_3$ la de la segunda.',
    opciones: ['4', '3', '5', '6'],
    correcta: 0,
    solucion: [
      { t: 'Cuartiles', d: L`$Q_1=\dfrac{2+3}{2}=2{,}5$ y $Q_3=\dfrac{6+7}{2}=6{,}5$.` },
      { t: 'Rango intercuartílico', d: L`$Q_3-Q_1=6{,}5-2{,}5=4$.` }
    ],
    truco: 'El rango intercuartílico mide el 50 % central: no lo arrastran los extremos.',
    errorTipico: 'Restar el mínimo al máximo (rango) en vez de restar los cuartiles.'
  },
  {
    id: 'cs1-fun-05', materia: 'ccss-i', bloque: 'funciones', nivel: 2, tipo: 'opcion',
    titulo: 'Vértice de una parábola',
    fuente: 'Currículo CV · Matemáticas CCSS I',
    enunciado: L`Halla el vértice de la parábola $y=x^2-4x+3$.`,
    pista: L`La abscisa del vértice es $x_v=-\frac{b}{2a}$. Después sustituye para obtener la ordenada.`,
    partes: [
      { etiqueta: 'Abscisa', opciones: ['2', '4', '−2', '1'], correcta: 0 },
      { etiqueta: 'Ordenada', opciones: ['−1', '1', '3', '−3'], correcta: 0 }
    ],
    solucion: [
      { t: 'Abscisa', d: L`$x_v=-\dfrac{-4}{2}=2$.` },
      { t: 'Ordenada', d: L`$y_v=2^2-4\cdot2+3=-1$.` }
    ],
    truco: L`El vértice está en $x=-b/(2a)$; si $a\gt0$ es un mínimo.`,
    errorTipico: L`Cambiar el signo dos veces y obtener $x_v=-2$, u olvidar sustituir para la ordenada.`
  },
  {
    id: 'cs1-prob-04', materia: 'ccss-i', bloque: 'probabilidad', nivel: 1, tipo: 'opcion',
    titulo: 'Probabilidad en una bolsa de bolas',
    fuente: 'Currículo CV · Matemáticas CCSS I',
    enunciado: L`Una bolsa tiene 3 bolas rojas y 2 azules. Se extrae una bola al azar. ¿Cuál es la probabilidad de que sea roja?`,
    pista: L`Aplica Laplace: casos favorables entre casos posibles.`,
    opciones: ['0,6', '0,4', '0,5', '0,3'],
    correcta: 0,
    solucion: [
      { t: 'Casos', d: L`Favorables: $3$ rojas. Posibles: $3+2=5$ bolas.` },
      { t: 'Probabilidad', d: L`$P(\text{roja})=\dfrac35=0{,}6$.` }
    ],
    truco: 'La probabilidad de un suceso y su complementario suman 1. Si la roja es 0,6, la azul es 0,4.',
    errorTipico: 'Dividir entre el número de colores (2) en vez de entre el total de bolas.'
  }
];

/* ------------------------------ merge ------------------------------ */

const archivos = [];
for (const materia of ['mates-ii', 'ccss-ii', 'mates-i', 'ccss-i']) {
  const dir = path.join(ROOT, 'js', 'data', materia);
  for (const archivo of fs.readdirSync(dir).filter((f) => f.endsWith('.js')).sort()) {
    archivos.push({ materia, archivo, ruta: path.join(dir, archivo) });
  }
}

const porArchivo = new Map();
const ids = new Set();

for (const item of archivos) {
  const original = fs.readFileSync(item.ruta, 'utf8');
  const contexto = { window: {} };
  vm.createContext(contexto);
  vm.runInContext(original, contexto, { filename: item.ruta });
  const ejercicios = contexto.window.PAU_DATA.ejercicios;
  ejercicios.forEach((ejercicio) => ids.add(ejercicio.id));
  porArchivo.set(item.ruta, { item, original, ejercicios });
}

for (const nuevo of NUEVOS) {
  if (ids.has(nuevo.id)) throw new Error('ID duplicado: ' + nuevo.id);
  ids.add(nuevo.id);
  const destino = archivos.find((a) => a.materia === nuevo.materia && a.archivo === `nivel-${nuevo.nivel}.js`);
  if (!destino) throw new Error('No hay archivo para ' + nuevo.materia + ' nivel ' + nuevo.nivel);
  porArchivo.get(destino.ruta).ejercicios.push(nuevo);
}

for (const { item, original, ejercicios } of porArchivo.values()) {
  const eol = original.includes('\r\n') ? '\r\n' : '\n';
  const cabecera = original
    .slice(0, original.indexOf('(function () {'))
    .replace(/\s+$/, '')
    .replace(/\b\d+ ejercicios\b/, `${ejercicios.length} ejercicios`);
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

console.log(`Añadidos ${NUEVOS.length} ejercicios. Total esperado: ${ids.size}`);
