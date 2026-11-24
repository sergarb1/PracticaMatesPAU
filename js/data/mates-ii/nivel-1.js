/* PAU Mates CV — Matemáticas II · 2º Bachillerato (Ciencias)
   nivel-1 · básico · 10 ejercicios
Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...    [
      {
        "id": "m2-alg-01",
        "materia": "mates-ii",
        "bloque": "matrices",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Inversa de una matriz 2×2",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Dada $A=\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}$, ¿cuál es $A^{-1}$?",
        "pista": "En una matriz $2\\times2$, $A^{-1}=\\dfrac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$. Calcula primero el determinante.",
        "opciones": [
          "$\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}$",
          "$\\begin{pmatrix}3&1\\\\5&2\\end{pmatrix}$",
          "$\\begin{pmatrix}2&-1\\\\-5&3\\end{pmatrix}$",
          "$\\begin{pmatrix}-3&1\\\\5&-2\\end{pmatrix}$"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Determinante",
            "d": "$\\det A=2\\cdot3-1\\cdot5=6-5=1$. Como no es cero, existe inversa."
          },
          {
            "t": "Matriz adjunta",
            "d": "Intercambiamos $a$ y $d$, y cambiamos el signo de $b$ y $c$: $\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}$."
          },
          {
            "t": "Dividir por el determinante",
            "d": "Como $\\det A=1$, $A^{-1}=\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}$. Comprobación: $A\\cdot A^{-1}=I$."
          }
        ],
        "truco": "En $2\\times2$ no hace falta adjunta completa: «diagonal se queda, esquina cambia de signo, divide por el determinante».",
        "errorTipico": "Olvidar dividir por el determinante, o cambiar el signo a los elementos de la diagonal en vez de a los de la anti-diagonal."
      },
      {
        "id": "m2-ana-01",
        "materia": "mates-ii",
        "bloque": "limites",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Dos límites sin indeterminación",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula:",
        "pista": "En el primero, factoriza $x^2-4=(x-2)(x+2)$ y simplifica. En el segundo, divide numerador y denominador por $x^2$.",
        "partes": [
          {
            "etiqueta": "a) $\\displaystyle\\lim_{x\\to2}\\frac{x^2-4}{x-2}$",
            "opciones": [
              "4",
              "5",
              "3",
              "6"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "b) $\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^2+2}{x^2-x}$",
            "opciones": [
              "4",
              "2",
              "5",
              "3"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Factorizar",
            "d": "$\\dfrac{x^2-4}{x-2}=\\dfrac{(x-2)(x+2)}{x-2}=x+2$ para $x\\ne2$."
          },
          {
            "t": "Límite en 2",
            "d": "$\\lim_{x\\to2}(x+2)=4$."
          },
          {
            "t": "Límite en infinito",
            "d": "Dividiendo por $x^2$: $\\dfrac{3+2/x^2}{1-1/x}\\to\\dfrac{3}{1}=3$."
          }
        ],
        "truco": "En un cociente de polinomios en el infinito, mira solo los grados: si son iguales, el límite es el cociente de los coeficientes líderes.",
        "errorTipico": "Sustituir $x=2$ sin simplificar y concluir que el límite no existe porque sale $0/0$. La indeterminación se resuelve factorizando."
      },
      {
        "id": "m2-prob-01",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Unión, condicionada y complementario",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sean $P(A)=0{,}4$, $P(B)=0{,}5$ y $P(A\\cap B)=0{,}2$. Calcula:",
        "pista": "Usa $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Para la condicionada, divide por $P(B)$; para el complementario, resta a $P(B)$ lo que ya está en $A$.",
        "partes": [
          {
            "etiqueta": "a) $P(A\\cup B)$",
            "opciones": [
              "0,3",
              "0,4",
              "0,7",
              "0,8"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "b) $P(A\\mid B)$",
            "opciones": [
              "0,6",
              "0,8",
              "0,2",
              "0,4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "c) $P(A^{c}\\cap B)$",
            "opciones": [
              "0,7",
              "0,3",
              "0,6",
              "0,1"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Unión de sucesos",
            "d": "$P(A\\cup B)=0{,}4+0{,}5-0{,}2=0{,}7$. Restamos la intersección porque se cuenta dos veces."
          },
          {
            "t": "Probabilidad condicionada",
            "d": "$P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0{,}2}{0{,}5}=0{,}4$."
          },
          {
            "t": "Solo B",
            "d": "$P(A^{c}\\cap B)=P(B)-P(A\\cap B)=0{,}5-0{,}2=0{,}3$."
          }
        ],
        "truco": "Dibuja dos círculos que se solapan: la zona de solo $B$ es $P(B)$ menos la intersección. Con el dibujo no necesitas memorizar fórmulas.",
        "errorTipico": "Confundir $P(A\\mid B)$ con $P(B\\mid A)$: aquí el denominador siempre es la probabilidad del suceso que ya sabemos que ha ocurrido, $B$."
      },
      {
        "id": "m2-prob-03",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Aprobar Matemáticas y Física",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "El $60\\,\\%$ del alumnado aprueba Matemáticas, el $50\\,\\%$ aprueba Física y el $30\\,\\%$ aprueba ambas. Se elige una persona al azar. Calcula:",
        "pista": "Para la condicionada usa $P(F\\mid M)=P(F\\cap M)/P(M)$. Para «ninguna», calcula primero la unión y resta de 1.",
        "partes": [
          {
            "etiqueta": "a) $P(F\\mid M)$",
            "opciones": [
              "1,0",
              "0,3",
              "0,2",
              "0,5"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "b) Probabilidad de no aprobar ninguna",
            "opciones": [
              "0,2",
              "0,8",
              "0,4",
              "0,1"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Datos",
            "d": "$P(M)=0{,}6$, $P(F)=0{,}5$, $P(M\\cap F)=0{,}3$."
          },
          {
            "t": "Condicionada",
            "d": "$P(F\\mid M)=\\dfrac{P(F\\cap M)}{P(M)}=\\dfrac{0{,}3}{0{,}6}=0{,}5$."
          },
          {
            "t": "Unión y complementario",
            "d": "$P(M\\cup F)=0{,}6+0{,}5-0{,}3=0{,}8$, luego $P(\\text{ninguna})=1-0{,}8=0{,}2$."
          }
        ],
        "truco": "«Ninguna de las dos» es el complementario de la unión. Es casi siempre más rápido que sumar las zonas del diagrama una a una.",
        "errorTipico": "Sumar $0{,}6+0{,}5=1{,}1$ sin restar la intersección. Una probabilidad nunca puede superar 1."
      },
      {
        "id": "m2-ana-11",
        "materia": "mates-ii",
        "bloque": "derivadas",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Valor y derivada de un polinomio",
        "fuente": "Currículo CV · Matemáticas II",
        "enunciado": "Sea $f(x)=3x^3-2x+1$. Calcula $f(1)$ y $f'(1)$.",
        "pista": "Deriva término a término: $(3x^3)'=9x^2$, $(-2x)'=-2$ y $(1)'=0$.",
        "partes": [
          {
            "etiqueta": "$f(1)$",
            "opciones": [
              "2",
              "3",
              "1",
              "4"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$f'(1)$",
            "opciones": [
              "7",
              "8",
              "6",
              "9"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Valor",
            "d": "$f(1)=3-2+1=2$."
          },
          {
            "t": "Derivada",
            "d": "$f'(x)=9x^2-2$."
          },
          {
            "t": "En x = 1",
            "d": "$f'(1)=9-2=7$."
          }
        ],
        "truco": "Derivar antes de sustituir suele ahorrar cuentas y errores, sobre todo con polinomios largos.",
        "errorTipico": "Derivar el término constante como si fuera $x$ o bajar mal el exponente."
      },
      {
        "id": "m2-prob-09",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Probabilidad condicionada en una clase",
        "fuente": "Currículo CV · Matemáticas II",
        "enunciado": "En un grupo, el $60\\,\\%$ aprueba Matemáticas, el $50\\,\\%$ aprueba Historia y el $30\\,\\%$ aprueba ambas. Calcula $P(\\text{Matemáticas}\\mid\\text{Historia})$ y $P(\\text{Historia}\\mid\\text{Matemáticas})$.",
        "pista": "$P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}$. Fíjate en cuál es el denominador: la asignatura de la que ya sabes que se ha aprobado.",
        "partes": [
          {
            "etiqueta": "$P(M\\mid H)$",
            "opciones": [
              "0,6",
              "0,4",
              "0,3",
              "0,5"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(H\\mid M)$",
            "opciones": [
              "1,0",
              "0,3",
              "0,5",
              "0,6"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Datos",
            "d": "$P(M)=0{,}6$, $P(H)=0{,}5$, $P(M\\cap H)=0{,}3$."
          },
          {
            "t": "Matemáticas dado Historia",
            "d": "$P(M\\mid H)=\\dfrac{0{,}3}{0{,}5}=0{,}6$."
          },
          {
            "t": "Historia dado Matemáticas",
            "d": "$P(H\\mid M)=\\dfrac{0{,}3}{0{,}6}=0{,}5$."
          }
        ],
        "truco": "La condicionada no es simétrica: cambia el denominador. Si te preguntan «sabiendo que...», ese suceso va abajo.",
        "errorTipico": "Dividir siempre entre el total o intercambiar $P(A\\mid B)$ con $P(B\\mid A)$."
      },
      {
        "id": "m2-vec-01",
        "materia": "mates-ii",
        "bloque": "vectores",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Producto escalar de dos vectores",
        "fuente": "Currículo CV · Matemáticas II",
        "enunciado": "Sean $\\vec u=(2,-1,2)$ y $\\vec v=(1,2,2)$. Calcula $\\vec u\\cdot\\vec v$.",
        "pista": "Multiplica componente a componente y suma: $\\vec u\\cdot\\vec v=u_1v_1+u_2v_2+u_3v_3$.",
        "opciones": [
          "4",
          "3",
          "5",
          "8"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Producto componente a componente",
            "d": "$2\\cdot1+(-1)\\cdot2+2\\cdot2=2-2+4$."
          },
          {
            "t": "Resultado",
            "d": "$\\vec u\\cdot\\vec v=4$."
          }
        ],
        "truco": "El producto escalar da un número, no un vector. Si te sale un vector, has usado el producto vectorial.",
        "errorTipico": "Sumar los módulos o cambiar el signo del segundo componente: $2+2+4=8$."
      },
      {
        "id": "m2-mat-01",
        "materia": "mates-ii",
        "bloque": "matrices",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Determinante de una matriz 2×2",
        "fuente": "Currículo CV · Matemáticas II",
        "enunciado": "Calcula el determinante de $A=\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$.",
        "pista": "En una matriz $2\\times2$, $\\det A=ad-bc$ con los elementos de la diagonal principal y la secundaria.",
        "opciones": [
          "10",
          "14",
          "5",
          "8"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Producto de diagonales",
            "d": "Diagonal principal: $3\\cdot4=12$. Secundaria: $1\\cdot2=2$."
          },
          {
            "t": "Restar",
            "d": "$\\det A=12-2=10$."
          }
        ],
        "truco": "Diagonal principal menos diagonal secundaria. Si sumas en vez de restar, el determinante sale mal.",
        "errorTipico": "Sumar los dos productos y obtener 14, o multiplicar solo la diagonal principal."
      },
      {
        "id": "m2-com-01",
        "materia": "mates-ii",
        "bloque": "complejos",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Potencias de la unidad imaginaria",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula $i^{37}$ y desarrolla $(1+i)^2$.",
        "pista": "Las potencias de $i$ se repiten cada cuatro: $i^0=1$, $i^1=i$, $i^2=-1$, $i^3=-i$. Para el cuadrado, usa $i^2=-1$.",
        "partes": [
          {
            "etiqueta": "Valor de $i^{37}$",
            "opciones": [
              "$i$",
              "$-i$",
              "$1$",
              "$-1$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor de $(1+i)^2$",
            "opciones": [
              "$2i$",
              "$2$",
              "$1+i$",
              "$0$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Resto de la división entre 4",
            "d": "$37=4\\cdot9+1$, luego $i^{37}=i^{1}=i$."
          },
          {
            "t": "Desarrollo del cuadrado",
            "d": "$(1+i)^2=1+2i+i^2=1+2i-1=2i$."
          }
        ],
        "truco": "Divide el exponente entre 4 y mira el resto: 0 → $1$, 1 → $i$, 2 → $-1$, 3 → $-i$.",
        "errorTipico": "Decir que $i^2=1$ y obtener $2$ en el cuadrado. La unidad imaginaria cumple $i^2=-1$."
      },
      {
        "id": "m2-com-02",
        "materia": "mates-ii",
        "bloque": "complejos",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Suma y producto en forma binómica",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sean $z=3+2i$ y $w=1-4i$. Calcula $z+w$ y $z\\cdot w$.",
        "pista": "Suma parte real con parte real y parte imaginaria con parte imaginaria. En el producto, aplica la propiedad distributiva y sustituye $i^2=-1$.",
        "partes": [
          {
            "etiqueta": "$z+w$",
            "opciones": [
              "$4-2i$",
              "$4+6i$",
              "$2-2i$",
              "$4+2i$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$z\\cdot w$",
            "opciones": [
              "$11-10i$",
              "$3-8i$",
              "$11+10i$",
              "$5-10i$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Suma",
            "d": "$(3+1)+(2-4)i=4-2i$."
          },
          {
            "t": "Producto",
            "d": "$3\\cdot1+3\\cdot(-4i)+2i\\cdot1+2i\\cdot(-4i)=3-12i+2i-8i^2$."
          },
          {
            "t": "Simplificar",
            "d": "$3-10i+8=11-10i$."
          }
        ],
        "truco": "Trata los complejos como binomios y cambia $i^2$ por $-1$ al final.",
        "errorTipico": "Sumar los imaginarios $2+(-4)=-2$ pero olvidar cambiar el signo de $i^2$, y responder $3-10i$."
      }
    ]
  );
})();
