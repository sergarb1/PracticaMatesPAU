#!/usr/bin/env node
/* Añade la tanda de ejercicios adaptados de la PAU de CCSS II 2017–2026
   (matrices, sistemas, probabilidad, derivadas, integrales y funciones) y
   refuerza el bloque de límites de Matemáticas I.
   Uso: node scripts/ampliar-pau-ccss.mjs
   Conserva el formato JSON y los saltos de línea de cada archivo. */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const F_CS2 = 'PAU CV · Matemáticas CCSS II (adaptado)';
const F_M1 = 'Currículo CV · Matemáticas I';

const NUEVOS = [
  /* --------------------------- CCSS II · matrices --------------------------- */
  {
    id: 'cs2-mat-02',
    materia: 'ccss-ii',
    bloque: 'matrices',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Matrices: producto por la traspuesta y ecuación',
    fuente: F_CS2,
    enunciado: 'Sean $A=\\begin{pmatrix}1&5\\\\0&1\\end{pmatrix}$ y $B=\\begin{pmatrix}1&2&2\\\\2&-2&1\\end{pmatrix}$. Calcula $BB^t$, el valor $\\beta$ tal que $(\\beta B)(\\beta B)^t=I$, la potencia $(BB^t)^5$ y la matriz $X$ que cumple $5XA=I$.',
    pista: 'Multiplica cada fila de $B$ por cada fila de $B$ (la traspuesta). Si $BB^t=9I$, todos los cálculos siguientes se reducen a escalares.',
    partes: [
      {
        etiqueta: '$BB^t$',
        opciones: [
          '$9I$',
          '$3I$',
          '$\\begin{pmatrix}9&9\\\\9&9\\end{pmatrix}$',
          '$I$'
        ],
        correcta: 0
      },
      {
        etiqueta: 'Valor de $\\beta$',
        opciones: ['$1/3$', '$3$', '$1/9$', '$9$'],
        correcta: 0
      },
      {
        etiqueta: '$(BB^t)^5$',
        opciones: ['$59049\\,I$', '$45\\,I$', '$6561\\,I$', '$9\\,I$'],
        correcta: 0
      },
      {
        etiqueta: 'Matriz $X$',
        opciones: [
          '$\\begin{pmatrix}1/5&-1\\\\0&1/5\\end{pmatrix}$',
          '$\\begin{pmatrix}1/5&1\\\\0&1/5\\end{pmatrix}$',
          '$\\begin{pmatrix}1&-5\\\\0&1\\end{pmatrix}$',
          '$\\begin{pmatrix}5&-25\\\\0&5\\end{pmatrix}$'
        ],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Producto $BB^t$',
        d: 'Las filas de $B$ son $(1,2,2)$ y $(2,-2,1)$: $BB^t=\\begin{pmatrix}1+4+4&2-4+2\\\\2-4+2&4+4+1\\end{pmatrix}=\\begin{pmatrix}9&0\\\\0&9\\end{pmatrix}=9I$.'
      },
      {
        t: 'Escalar $\\beta$',
        d: '$(\\beta B)(\\beta B)^t=\\beta^2BB^t=9\\beta^2I$. Para que sea $I$, $9\\beta^2=1$, luego $\\beta=\\pm1/3$; tomamos $\\beta=1/3$.'
      },
      {
        t: 'Potencia',
        d: '$(9I)^5=9^5I=59049I$.'
      },
      {
        t: 'Despejar $X$',
        d: '$X=\\frac15A^{-1}$ y $A^{-1}=\\begin{pmatrix}1&-5\\\\0&1\\end{pmatrix}$, porque $\\det A=1$. Por tanto $X=\\begin{pmatrix}1/5&-1\\\\0&1/5\\end{pmatrix}$.'
      }
    ],
    truco: 'Cuando $BB^t$ es un múltiplo de la identidad, las potencias y los escalares se calculan sin volver a multiplicar matrices.',
    errorTipico: 'Elevar $B$ a la quinta y multiplicar por su traspuesta: $(BB^t)^5$ no es $B^5(B^t)^5$, sino $(9I)^5$.'
  },
  {
    id: 'cs2-mat-03',
    materia: 'ccss-ii',
    bloque: 'matrices',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Ecuación matricial con traspuesta',
    fuente: F_CS2,
    enunciado: 'Sean $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, $B=\\begin{pmatrix}1&0\\\\2&1\\end{pmatrix}$ y $C=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$. Calcula $B^tC$ y la matriz $X$ que verifica $2XA+B^tC=I$.',
    pista: 'Primero calcula $B^tC$; después despeja $X$ con cuidado: $A$ multiplica a $X$ por la derecha, así que se cancela con $A^{-1}$ también por la derecha.',
    partes: [
      {
        etiqueta: '$B^tC$',
        opciones: [
          '$\\begin{pmatrix}1&3\\\\0&1\\end{pmatrix}$',
          '$\\begin{pmatrix}1&1\\\\2&3\\end{pmatrix}$',
          '$\\begin{pmatrix}1&2\\\\1&3\\end{pmatrix}$',
          '$\\begin{pmatrix}1&0\\\\3&1\\end{pmatrix}$'
        ],
        correcta: 0
      },
      {
        etiqueta: 'Matriz $X$',
        opciones: [
          '$\\begin{pmatrix}0&-3/2\\\\0&0\\end{pmatrix}$',
          '$\\begin{pmatrix}0&3/2\\\\0&0\\end{pmatrix}$',
          '$\\begin{pmatrix}0&-3\\\\0&0\\end{pmatrix}$',
          '$\\begin{pmatrix}-3/2&0\\\\0&0\\end{pmatrix}$'
        ],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Producto $B^tC$',
        d: '$B^t=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, luego $B^tC=\\begin{pmatrix}1&3\\\\0&1\\end{pmatrix}$.'
      },
      {
        t: 'Despejar $2XA$',
        d: '$2XA=I-B^tC=\\begin{pmatrix}0&-3\\\\0&0\\end{pmatrix}$.'
      },
      {
        t: 'Multiplicar por $A^{-1}$',
        d: '$A^{-1}=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}$, porque $\\det A=1$. Entonces $X=\\frac12\\begin{pmatrix}0&-3\\\\0&0\\end{pmatrix}A^{-1}=\\frac12\\begin{pmatrix}0&-3\\\\0&0\\end{pmatrix}$.'
      }
    ],
    truco: 'Comprueba siempre multiplicando: $2XA+B^tC$ debe dar exactamente $I$.',
    errorTipico: 'Cancelar $A$ por la izquierda. En $2XA$, la matriz $A$ está a la derecha de $X$: hay que multiplicar por $A^{-1}$ por la derecha.'
  },

  /* --------------------------- CCSS II · sistemas --------------------------- */
  {
    id: 'cs2-alg-11',
    materia: 'ccss-ii',
    bloque: 'sistemas',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Precios de procesadores, tarjetas y memoria (PAU 2026)',
    fuente: F_CS2,
    enunciado: 'Una empresa vende procesadores ($P$), tarjetas gráficas ($T$) y módulos de memoria ($M$). La venta de $2$ procesadores, $1$ tarjeta y $4$ módulos sumó $1020$ €; un lote de $3$ procesadores y $2$ tarjetas con un descuento equivalente a un módulo se vendió por $1280$ €; y una tarjeta cuesta lo mismo que un procesador más el doble de un módulo. Halla los tres precios.',
    pista: 'Traduce cada frase a una ecuación y usa $T=P+2M$ para quedarte con dos incógnitas.',
    partes: [
      {
        etiqueta: 'Procesador ($P$)',
        opciones: ['$220$ €', '$200$ €', '$240$ €', '$210$ €'],
        correcta: 0
      },
      {
        etiqueta: 'Tarjeta gráfica ($T$)',
        opciones: ['$340$ €', '$320$ €', '$360$ €', '$300$ €'],
        correcta: 0
      },
      {
        etiqueta: 'Memoria ($M$)',
        opciones: ['$60$ €', '$80$ €', '$50$ €', '$70$ €'],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Plantear',
        d: '$2P+T+4M=1020$, $3P+2T-M=1280$ y $T=P+2M$.'
      },
      {
        t: 'Reducir a dos incógnitas',
        d: 'Sustituyendo $T$: $3P+6M=1020$, es decir, $P+2M=340$; y $5P+3M=1280$.'
      },
      {
        t: 'Resolver',
        d: 'De $P=340-2M$: $1700-10M+3M=1280\\Rightarrow7M=420\\Rightarrow M=60$, $P=220$.'
      },
      {
        t: 'Completar y comprobar',
        d: '$T=220+120=340$. Comprobación: $440+340+240=1020$ y $660+680-60=1280$.'
      }
    ],
    truco: 'Con tres incógnitas y una relación directa, sustituye esa relación antes de aplicar reducción o Cramer.',
    errorTipico: 'Escribir el descuento como $3P+2T+M=1280$: el módulo se resta, no se suma.'
  },

  /* ------------------------- CCSS II · probabilidad ------------------------- */
  {
    id: 'cs2-prob-09',
    materia: 'ccss-ii',
    bloque: 'probabilidad',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Youtubers: probabilidad total y Bayes',
    fuente: F_CS2,
    enunciado: 'El $30\\%$ de los creadores de contenido son talentosos y el $70\\%$ restante, no. Un creador talentoso hace viral un vídeo con probabilidad $0{,}5$; uno no talentoso, con probabilidad $0{,}05$. Calcula la probabilidad de que un vídeo sea viral, la de que un vídeo viral provenga de un creador talentoso y, en $4$ vídeos de un creador no talentoso, la de que al menos $2$ sean virales.',
    pista: 'Haz un árbol con dos ramas (talentoso / no talentoso) y una segunda rama (viral / no viral). Para los $4$ vídeos, usa una binomial y calcula el complementario de «$0$ o $1$ viral».',
    partes: [
      {
        etiqueta: '$P(\\text{viral})$',
        opciones: ['$0{,}185$', '$0{,}550$', '$0{,}035$', '$0{,}150$'],
        correcta: 0
      },
      {
        etiqueta: '$P(\\text{talentoso}\\mid\\text{viral})$',
        opciones: ['$0{,}8108$', '$0{,}3000$', '$0{,}1500$', '$0{,}5000$'],
        correcta: 0
      },
      {
        etiqueta: '$P(\\text{al menos 2 virales en 4})$',
        opciones: ['$0{,}0140$', '$0{,}0005$', '$0{,}1715$', '$0{,}1850$'],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Probabilidad total',
        d: '$P(V)=0{,}3\\cdot0{,}5+0{,}7\\cdot0{,}05=0{,}15+0{,}035=0{,}185$.'
      },
      {
        t: 'Bayes',
        d: '$P(T\\mid V)=\\dfrac{P(T)P(V\\mid T)}{P(V)}=\\dfrac{0{,}15}{0{,}185}\\approx0{,}8108$.'
      },
      {
        t: 'Binomial',
        d: 'Con $p=0{,}05$ y $n=4$: $P(X\\ge2)=1-P(0)-P(1)=1-0{,}95^4-4\\cdot0{,}05\\cdot0{,}95^3\\approx1-0{,}8145-0{,}1715=0{,}0140$.'
      }
    ],
    truco: 'En Bayes, el denominador es la probabilidad total del suceso observado; si lo olvidas, divides entre la rama equivocada.',
    errorTipico: 'Confundir $P(T\\mid V)$ con $P(V\\mid T)$: el primero pregunta qué proporción de los vídeos virales son de talentosos.'
  },

  /* --------------------------- CCSS II · derivadas -------------------------- */
  {
    id: 'cs2-der-06',
    materia: 'ccss-ii',
    bloque: 'derivadas',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Eficiencia financiera: máximo (PAU 2026)',
    fuente: F_CS2,
    enunciado: 'La eficiencia de una empresa se modela con $E(x)=\\dfrac{100x}{x^2+25}$, con $x\\ge0$. Halla el valor de $x$ que maximiza la eficiencia, el valor máximo y los intervalos de crecimiento y decrecimiento.',
    pista: 'Aplica la regla del cociente. El denominador es siempre positivo, así que el signo de $E\'(x)$ depende solo del numerador.',
    partes: [
      {
        etiqueta: 'Valor óptimo de $x$',
        opciones: ['$5$', '$25$', '$10$', '$50$'],
        correcta: 0
      },
      {
        etiqueta: 'Eficiencia máxima',
        opciones: ['$10$', '$20$', '$5$', '$2{,}5$'],
        correcta: 0
      },
      {
        etiqueta: 'Monotonía',
        opciones: [
          'Crece en $(0,5)$ y decrece en $(5,\\infty)$',
          'Decrece en $(0,5)$ y crece en $(5,\\infty)$',
          'Crece en todo su dominio',
          'Decrece en todo su dominio'
        ],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Derivada',
        d: '$E\'(x)=\\dfrac{100(x^2+25)-100x\\cdot2x}{(x^2+25)^2}=\\dfrac{2500-100x^2}{(x^2+25)^2}$.'
      },
      {
        t: 'Punto crítico',
        d: '$2500-100x^2=0\\Rightarrow x^2=25\\Rightarrow x=5$, pues $x\\ge0$.'
      },
      {
        t: 'Signo',
        d: 'Para $0\\le x\\lt5$, $E\'(x)\\gt0$; para $x\\gt5$, $E\'(x)\\lt0$: máximo en $x=5$.'
      },
      {
        t: 'Valor máximo',
        d: '$E(5)=\\dfrac{500}{25+25}=10$.'
      }
    ],
    truco: 'En un cociente con denominador positivo, estudia solo el numerador de la derivada: es más rápido y evita errores de signo.',
    errorTipico: 'Derivar $100x$ como $100x^2$ o mantener el denominador sin elevarlo al cuadrado.'
  },

  /* -------------------------- CCSS II · integrales -------------------------- */
  {
    id: 'cs2-int-02',
    materia: 'ccss-ii',
    bloque: 'integrales',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Área entre una parábola y una recta',
    fuente: F_CS2,
    enunciado: 'Calcula el área de la región limitada por la parábola $f(x)=x^2$ y la recta $g(x)=x+2$.',
    pista: 'Primero halla los puntos de corte igualando $x^2=x+2$. Entre ellos, comprueba qué función va por encima y plantea la integral de la diferencia.',
    partes: [
      {
        etiqueta: 'Puntos de corte',
        opciones: [
          '$x=-1$ y $x=2$',
          '$x=1$ y $x=2$',
          '$x=-2$ y $x=1$',
          '$x=0$ y $x=2$'
        ],
        correcta: 0
      },
      {
        etiqueta: 'Integral que da el área',
        opciones: [
          '$\\displaystyle\\int_{-1}^{2}(x+2-x^2)\\,dx$',
          '$\\displaystyle\\int_{-1}^{2}(x^2-x-2)\\,dx$',
          '$\\displaystyle\\int_{0}^{2}(x+2-x^2)\\,dx$',
          '$\\displaystyle\\int_{-1}^{2}(x^2+x+2)\\,dx$'
        ],
        correcta: 0
      },
      {
        etiqueta: 'Área',
        opciones: [
          '$4{,}5\\ \\text{u}^2$',
          '$9\\ \\text{u}^2$',
          '$3{,}5\\ \\text{u}^2$',
          '$4\\ \\text{u}^2$'
        ],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Puntos de corte',
        d: '$x^2=x+2\\Rightarrow x^2-x-2=0\\Rightarrow x=-1$, $x=2$.'
      },
      {
        t: 'Orden de las funciones',
        d: 'En $(-1,2)$, por ejemplo en $x=0$: $g(0)=2\\gt0=f(0)$, así que la recta va por encima.'
      },
      {
        t: 'Integral',
        d: '$A=\\displaystyle\\int_{-1}^{2}(x+2-x^2)\\,dx=\\left[\\dfrac{x^2}{2}+2x-\\dfrac{x^3}{3}\\right]_{-1}^{2}$.'
      },
      {
        t: 'Evaluar',
        d: '$\\left(2+4-\\dfrac{8}{3}\\right)-\\left(\\dfrac12-2+\\dfrac13\\right)=\\dfrac{10}{3}+\\dfrac{7}{6}=\\dfrac{9}{2}=4{,}5$.'
      }
    ],
    truco: 'El área siempre es positiva: si la integral sale negativa, has restado las funciones en el orden contrario.',
    errorTipico: 'Integrar solo entre $0$ y $2$ y perder el trozo de la izquierda; los cortes marcan los límites completos.'
  },
  {
    id: 'cs2-int-03',
    materia: 'ccss-ii',
    bloque: 'integrales',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Integral definida de un polinomio',
    fuente: F_CS2,
    enunciado: 'Calcula una primitiva de $f(x)=x^2-2x+3$ y evalúa $\\displaystyle\\int_{1}^{3}f(x)\\,dx$.',
    pista: 'Integra término a término y aplica la regla de Barrow. Después deriva tu primitiva para comprobar que recuperas $f$.',
    partes: [
      {
        etiqueta: 'Primitiva',
        opciones: [
          '$\\dfrac{x^3}{3}-x^2+3x$',
          '$\\dfrac{x^3}{3}-2x^2+3x$',
          '$3x^2-2x$',
          '$\\dfrac{x^3}{3}-x^2$'
        ],
        correcta: 0
      },
      {
        etiqueta: 'Valor de la integral',
        opciones: [
          '$\\dfrac{20}{3}$',
          '$7$',
          '$\\dfrac{26}{3}$',
          '$6$'
        ],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Primitiva',
        d: '$F(x)=\\dfrac{x^3}{3}-x^2+3x$ (la constante se puede tomar $0$).'
      },
      {
        t: 'Barrow',
        d: '$F(3)=9-9+9=9$ y $F(1)=\\dfrac13-1+3=\\dfrac73$.'
      },
      {
        t: 'Restar',
        d: '$\\displaystyle\\int_{1}^{3}f(x)\\,dx=9-\\dfrac73=\\dfrac{20}{3}\\approx6{,}67$.'
      }
    ],
    truco: 'Comprueba la primitiva derivándola: es la forma más rápida de detectar un coeficiente mal dividido.',
    errorTipico: 'Integrar $-2x$ como $-x^2$ está bien, pero integrar $3$ como $3x^2$ o dividir $x^2$ entre $3$ y olvidar el $-x^2$.'
  },

  /* -------------------------- CCSS II · funciones --------------------------- */
  {
    id: 'cs2-fun-10',
    materia: 'ccss-ii',
    bloque: 'funciones',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Sanción de radar: tramos y continuidad (PAU 2026)',
    fuente: F_CS2,
    enunciado: 'Un radar sanciona con $100$ € si la velocidad es inferior a $80$ km/h, no sanciona entre $80$ y $110$ km/h (ambos incluidos) y, si se superan los $110$ km/h, cobra $50$ € más la diferencia entre la velocidad detectada y $110$. Calcula el pago a $70$ km/h y a $130$ km/h, estudia la continuidad en $v=110$ y halla el área entre $v=120$ y $v=125$.',
    pista: 'Escribe la función a trozos. En $v=110$ compara el límite por la izquierda con el valor del tramo de la derecha; para el área, integra $P(v)=v-60$.',
    partes: [
      {
        etiqueta: '$P(70)$',
        opciones: ['$100$ €', '$0$ €', '$50$ €', '$150$ €'],
        correcta: 0
      },
      {
        etiqueta: '$P(130)$',
        opciones: ['$70$ €', '$50$ €', '$20$ €', '$120$ €'],
        correcta: 0
      },
      {
        etiqueta: 'Continuidad en $v=110$',
        opciones: [
          'Discontinua de salto finito: los límites laterales son $0$ y $50$',
          'Continua, porque $P(110)=0$',
          'Discontinua evitable: basta redefinir $P(110)$',
          'Discontinua de salto infinito'
        ],
        correcta: 0
      },
      {
        etiqueta: 'Área entre $120$ y $125$',
        opciones: [
          '$312{,}5$',
          '$300$',
          '$250$',
          '$62{,}5$'
        ],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Función a trozos',
        d: '$P(v)=100$ si $v\\lt80$; $P(v)=0$ si $80\\le v\\le110$; $P(v)=50+(v-110)=v-60$ si $v\\gt110$.'
      },
      {
        t: 'Valores',
        d: '$P(70)=100$ y $P(130)=130-60=70$.'
      },
      {
        t: 'Continuidad',
        d: 'En $110$: $\\lim_{v\\to110^-}P(v)=0$ y $\\lim_{v\\to110^+}P(v)=50$. Hay un salto finito de $50$ €.'
      },
      {
        t: 'Área',
        d: '$\\displaystyle\\int_{120}^{125}(v-60)\\,dv=\\left[\\dfrac{v^2}{2}-60v\\right]_{120}^{125}=7812{,}5-7500=312{,}5$.'
      }
    ],
    truco: 'Los puntos de empalme se estudian siempre por los dos lados, aunque la función esté definida con un valor concreto en ese punto.',
    errorTipico: 'Evaluar $v-60$ en $v=110$ y concluir que la función es continua; ese tramo solo vale para $v\\gt110$.'
  },

  /* ------------------------ Matemáticas I · límites ------------------------- */
  {
    id: 'm1-lim-03',
    materia: 'mates-i',
    bloque: 'limites',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Límite con raíz conjugada',
    fuente: F_M1,
    enunciado: 'Calcula $\\displaystyle\\lim_{x\\to0}\\dfrac{\\sqrt{x+4}-2}{x}$.',
    pista: 'Al sustituir $x=0$ aparece $0/0$. Multiplica numerador y denominador por el conjugado $\\sqrt{x+4}+2$.',
    partes: [
      {
        etiqueta: 'Valor del límite',
        opciones: ['$\\dfrac14$', '$0$', '$\\dfrac12$', 'No existe'],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Indeterminación',
        d: 'Al sustituir: $\\dfrac{\\sqrt4-2}{0}=\\dfrac00$.'
      },
      {
        t: 'Conjugado',
        d: '$\\dfrac{(\\sqrt{x+4}-2)(\\sqrt{x+4}+2)}{x(\\sqrt{x+4}+2)}=\\dfrac{x+4-4}{x(\\sqrt{x+4}+2)}$.'
      },
      {
        t: 'Simplificar y evaluar',
        d: 'Se cancela $x$: $\\dfrac{1}{\\sqrt{x+4}+2}\\to\\dfrac{1}{4}$.'
      }
    ],
    truco: 'Con raíces y una resta que se anula, el conjugado convierte la diferencia en un factor $x$ que se cancela.',
    errorTipico: 'Responder $0$ porque el numerador tiende a $0$; el denominador también, y el cociente tiende a $1/4$.'
  },
  {
    id: 'm1-lim-04',
    materia: 'mates-i',
    bloque: 'limites',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Asíntotas de una función racional',
    fuente: F_M1,
    enunciado: 'Halla la asíntota vertical, la horizontal y la oblicua de $f(x)=\\dfrac{x^2+1}{x-1}$.',
    pista: 'La vertical sale de anular el denominador. Compara los grados para la horizontal y divide los polinomios para la oblicua.',
    partes: [
      {
        etiqueta: 'Asíntota vertical',
        opciones: ['$x=1$', '$x=-1$', '$x=0$', 'No tiene'],
        correcta: 0
      },
      {
        etiqueta: 'Asíntota horizontal',
        opciones: ['No tiene', '$y=1$', '$y=0$', '$y=2$'],
        correcta: 0
      },
      {
        etiqueta: 'Asíntota oblicua',
        opciones: ['$y=x+1$', '$y=x-1$', '$y=x$', '$y=x^2+1$'],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Vertical',
        d: 'El denominador se anula en $x=1$ y el numerador vale $2\\ne0$: asíntota $x=1$.'
      },
      {
        t: 'Horizontal',
        d: 'El grado del numerador ($2$) supera al del denominador ($1$): no hay asíntota horizontal.'
      },
      {
        t: 'Oblicua',
        d: '$x^2+1=(x-1)(x+1)+2$, luego $f(x)=x+1+\\dfrac{2}{x-1}$ y la asíntota es $y=x+1$.'
      }
    ],
    truco: 'Si el numerador tiene un grado más que el denominador, hay oblicua y no horizontal; la división da la recta directamente.',
    errorTipico: 'Responder $y=0$ por comparar solo los coeficientes principales cuando los grados son distintos.'
  },
  {
    id: 'm1-lim-05',
    materia: 'mates-i',
    bloque: 'limites',
    nivel: 2,
    tipo: 'opcion',
    titulo: 'Discontinuidad evitable',
    fuente: F_M1,
    enunciado: 'Sea $f(x)=\\dfrac{x^2-4}{x-2}$ para $x\\ne2$ y $f(2)=k$. Halla $k$ para que $f$ sea continua en $x=2$ y clasifica la discontinuidad si $k=1$.',
    pista: 'Factoriza el numerador como diferencia de cuadrados y simplifica para $x\\ne2$. Después compara el límite con el valor $f(2)$.',
    partes: [
      {
        etiqueta: 'Valor de $k$',
        opciones: ['$4$', '$2$', '$0$', '$1$'],
        correcta: 0
      },
      {
        etiqueta: 'Si $k=1$, la discontinuidad es',
        opciones: ['Evitable', 'De salto finito', 'De salto infinito', 'No hay discontinuidad'],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Simplificar',
        d: '$\\dfrac{x^2-4}{x-2}=\\dfrac{(x-2)(x+2)}{x-2}=x+2$ para $x\\ne2$.'
      },
      {
        t: 'Límite',
        d: '$\\lim_{x\\to2}f(x)=4$. Para que sea continua, $k=4$.'
      },
      {
        t: 'Clasificar',
        d: 'Con $k=1$ el límite existe ($4$) pero no coincide con $f(2)$: discontinuidad evitable, se corrige redefiniendo $f(2)=4$.'
      }
    ],
    truco: 'Si el límite existe y es finito, la discontinuidad es evitable; el «agujero» se tapa con el valor del límite.',
    errorTipico: 'Simplificar y evaluar en $x=2$ sin indicar que la función original no está definida allí.'
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
