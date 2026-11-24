/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Límites y continuidad · 7 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-lim-01",
        "materia": "ccss-ii",
        "bloque": "limites",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Límite con indeterminación cero entre cero",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula $\\displaystyle\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$.",
        "pista": "Al sustituir sale $0/0$. Factoriza el numerador como diferencia de cuadrados y simplifica antes de volver a sustituir.",
        "partes": [
          {
            "etiqueta": "Valor del límite",
            "opciones": [
              "$4$",
              "$0$",
              "$2$",
              "$\\infty$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Factorizar",
            "d": "$x^2-4=(x-2)(x+2)$."
          },
          {
            "t": "Simplificar",
            "d": "$\\dfrac{(x-2)(x+2)}{x-2}=x+2$ para $x\\ne2$."
          },
          {
            "t": "Límite",
            "d": "$\\lim_{x\\to2}(x+2)=4$."
          }
        ],
        "truco": "Un $0/0$ nunca es la respuesta: indica que hay un factor común que se cancela.",
        "errorTipico": "Responder $0$ o «no existe» tras obtener la indeterminación."
      },
      {
        "id": "cs2-lim-02",
        "materia": "ccss-ii",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Límites en el infinito de funciones racionales",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{3x^2+2x}{x^2-1}$ y $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{2x+1}{x^2+3}$.",
        "pista": "Divide numerador y denominador entre la mayor potencia de $x$ del denominador. Compara los grados.",
        "partes": [
          {
            "etiqueta": "$\\lim_{x\\to\\infty}\\dfrac{3x^2+2x}{x^2-1}$",
            "opciones": [
              "$3$",
              "$2$",
              "$0$",
              "$\\infty$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$\\lim_{x\\to\\infty}\\dfrac{2x+1}{x^2+3}$",
            "opciones": [
              "$0$",
              "$2$",
              "$\\infty$",
              "$1$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primer límite",
            "d": "Dividiendo entre $x^2$: $\\dfrac{3+2/x}{1-1/x^2}\\to3$. Mismo grado, cociente de coeficientes líderes."
          },
          {
            "t": "Segundo límite",
            "d": "Dividiendo entre $x^2$: $\\dfrac{2/x+1/x^2}{1+3/x^2}\\to0$. El denominador tiene mayor grado."
          }
        ],
        "truco": "Compara grados: igual grado → cociente de coeficientes; grado menor arriba → $0$; grado mayor arriba → $\\pm\\infty$.",
        "errorTipico": "Fijarse solo en los términos independientes o en los lineales y responder $2$ en el primer límite."
      },
      {
        "id": "cs2-lim-03",
        "materia": "ccss-ii",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Continuidad con un valor que hay que definir",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Sea $f(x)=\\dfrac{x^2-1}{x-1}$ si $x\\ne1$ y $f(1)=a$. Determina $a$ para que $f$ sea continua en $x=1$.",
        "pista": "Para que sea continua debe cumplirse $\\lim_{x\\to1}f(x)=f(1)$. Simplifica la función cerca de $1$.",
        "partes": [
          {
            "etiqueta": "Valor de $a$",
            "opciones": [
              "$2$",
              "$1$",
              "$0$",
              "Ningún valor de $a$ la hace continua"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Límite",
            "d": "$\\dfrac{x^2-1}{x-1}=x+1$ para $x\\ne1$, luego $\\lim_{x\\to1}f(x)=2$."
          },
          {
            "t": "Condición de continuidad",
            "d": "Se necesita $f(1)=2$, es decir, $a=2$."
          }
        ],
        "truco": "Una discontinuidad evitable se arregla definiendo el valor de la función igual al límite.",
        "errorTipico": "Decir que es inevitable porque el denominador se anula: al simplificar, el límite existe."
      },
      {
        "id": "cs2-lim-04",
        "materia": "ccss-ii",
        "bloque": "limites",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Asíntotas de una función racional",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Halla las asíntotas de $f(x)=\\dfrac{x^2+1}{x-1}$.",
        "pista": "La asíntota vertical está donde se anula el denominador sin anularse el numerador. Para la oblicua, divide los polinomios: el cociente es la recta.",
        "partes": [
          {
            "etiqueta": "Asíntota vertical",
            "opciones": [
              "$x=1$",
              "$x=0$",
              "$x=-1$",
              "No tiene"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Asíntota oblicua",
            "opciones": [
              "$y=x+1$",
              "$y=x$",
              "$y=x-1$",
              "$y=1$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Asíntota vertical",
            "d": "El denominador se anula en $x=1$ y el numerador vale $2\\ne0$: $x=1$."
          },
          {
            "t": "División",
            "d": "$x^2+1=(x-1)(x+1)+2$, luego $f(x)=x+1+\\dfrac{2}{x-1}$."
          },
          {
            "t": "Asíntota oblicua",
            "d": "Cuando $x\\to\\pm\\infty$, el resto tiende a $0$ y $f(x)\\approx x+1$: recta $y=x+1$."
          }
        ],
        "truco": "En una racional con un grado más arriba, la asíntota oblicua es el cociente de la división.",
        "errorTipico": "Confundir la asíntota oblicua con la horizontal $y=0$, que no existe aquí."
      },
      {
        "id": "cs2-lim-05",
        "materia": "ccss-ii",
        "bloque": "limites",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Límite trigonométrico con indeterminación",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula $\\displaystyle\\lim_{x\\to0}\\dfrac{1-\\cos x}{x^2}$.",
        "pista": "Multiplica numerador y denominador por $1+\\cos x$ para llegar a $\\operatorname{sen}^2x$ y usa que $\\dfrac{\\operatorname{sen}x}{x}\\to1$.",
        "partes": [
          {
            "etiqueta": "Valor del límite",
            "opciones": [
              "$0{,}5$",
              "$1$",
              "$0$",
              "$2$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Multiplicar por el conjugado",
            "d": "$\\dfrac{1-\\cos x}{x^2}\\cdot\\dfrac{1+\\cos x}{1+\\cos x}=\\dfrac{\\operatorname{sen}^2x}{x^2(1+\\cos x)}$."
          },
          {
            "t": "Separar",
            "d": "$\\left(\\dfrac{\\operatorname{sen}x}{x}\\right)^2\\cdot\\dfrac{1}{1+\\cos x}$."
          },
          {
            "t": "Límite",
            "d": "$1^2\\cdot\\dfrac{1}{1+1}=\\dfrac{1}{2}=0{,}5$."
          }
        ],
        "truco": "Cerca de $0$, $1-\\cos x\\approx\\dfrac{x^2}{2}$: es la equivalencia que resuelve el límite en un paso.",
        "errorTipico": "Sustituir y responder $0$ porque el numerador tiende a cero, sin comparar con la velocidad del denominador."
      },
      {
        "id": "cs2-lim-06",
        "materia": "ccss-ii",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Límite con indeterminación 0/0",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula $\\lim_{x\\to2}\\frac{x^2-4}{x^2-3x+2}$ e indica qué indeterminación aparece al sustituir.",
        "pista": "Al sustituir sale $0/0$. Factoriza numerador y denominador y simplifica el factor común.",
        "partes": [
          {
            "etiqueta": "Límite",
            "opciones": [
              "4",
              "2",
              "0",
              "No existe"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Indeterminación",
            "opciones": [
              "0/0",
              "∞/∞",
              "∞−∞",
              "1^∞"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sustituir",
            "d": "En $x=2$: numerador $4-4=0$ y denominador $4-6+2=0$. Aparece $0/0$."
          },
          {
            "t": "Factorizar",
            "d": "$x^2-4=(x-2)(x+2)$ y $x^2-3x+2=(x-2)(x-1)$."
          },
          {
            "t": "Simplificar y sustituir",
            "d": "$\\frac{(x-2)(x+2)}{(x-2)(x-1)}=\\frac{x+2}{x-1}\\to\\frac{4}{1}=4$."
          }
        ],
        "truco": "Si al sustituir sale $0/0$, factoriza y simplifica antes de concluir que el límite no existe.",
        "errorTipico": "Sustituir y decir que no existe, o cancelar términos que no son factores comunes."
      },
      {
        "id": "cs2-lim-07",
        "materia": "ccss-ii",
        "bloque": "limites",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Dos límites en el infinito",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula $\\lim_{x\\to\\infty}\\frac{3x^2-2x+1}{x^2+5}$ y $\\lim_{x\\to\\infty}\\frac{2x+1}{x^2+3}$.",
        "pista": "Divide numerador y denominador por la mayor potencia de $x$ del denominador.",
        "partes": [
          {
            "etiqueta": "a) $\\lim_{x\\to\\infty}\\frac{3x^2-2x+1}{x^2+5}$",
            "opciones": [
              "3",
              "0",
              "∞",
              "1"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "b) $\\lim_{x\\to\\infty}\\frac{2x+1}{x^2+3}$",
            "opciones": [
              "0",
              "2",
              "∞",
              "1/2"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primer límite",
            "d": "Los grados son iguales: cociente de coeficientes líderes $3/1=3$."
          },
          {
            "t": "Segundo límite",
            "d": "El denominador tiene mayor grado, así que el límite es $0$."
          },
          {
            "t": "Método",
            "d": "Dividir por $x^2$ deja términos del tipo $1/x$ y $1/x^2$, que tienden a $0$."
          }
        ],
        "truco": "Compara grados: iguales, cociente de coeficientes; denominador mayor, cero; numerador mayor, infinito.",
        "errorTipico": "Mirar solo los primeros términos sin comparar los grados, o decir que el segundo límite es 2."
      }
    ]
  );
})();
