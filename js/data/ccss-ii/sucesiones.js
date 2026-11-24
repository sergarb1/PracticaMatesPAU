/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Sucesiones · 6 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-suc-01",
        "materia": "ccss-ii",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Progresión aritmética: término y suma",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "En una progresión aritmética el primer término es $a_1=3$ y la diferencia es $d=4$. Calcula $a_{10}$ y la suma de los diez primeros términos.",
        "pista": "$a_n=a_1+(n-1)d$ y $S_n=\\dfrac{n(a_1+a_n)}{2}$.",
        "partes": [
          {
            "etiqueta": "$a_{10}$",
            "opciones": [
              "$39$",
              "$43$",
              "$40$",
              "$35$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$S_{10}$",
            "opciones": [
              "$210$",
              "$195$",
              "$390$",
              "$420$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Décimo término",
            "d": "$a_{10}=3+(10-1)\\cdot4=3+36=39$."
          },
          {
            "t": "Suma",
            "d": "$S_{10}=\\dfrac{10(3+39)}{2}=5\\cdot42=210$."
          }
        ],
        "truco": "La suma de una aritmética es el número de términos por la media del primero y el último.",
        "errorTipico": "Usar $n$ en lugar de $n-1$ y obtener $a_{10}=43$."
      },
      {
        "id": "cs2-suc-02",
        "materia": "ccss-ii",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Progresión geométrica: término y suma",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "En una progresión geométrica $a_1=2$ y la razón es $r=3$. Calcula $a_6$ y la suma de los seis primeros términos.",
        "pista": "$a_n=a_1r^{n-1}$ y $S_n=\\dfrac{a_nr-a_1}{r-1}$.",
        "partes": [
          {
            "etiqueta": "$a_6$",
            "opciones": [
              "$486$",
              "$729$",
              "$162$",
              "$1458$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$S_6$",
            "opciones": [
              "$728$",
              "$729$",
              "$1456$",
              "$364$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sexto término",
            "d": "$a_6=2\\cdot3^{5}=2\\cdot243=486$."
          },
          {
            "t": "Suma",
            "d": "$S_6=\\dfrac{486\\cdot3-2}{3-1}=\\dfrac{1456}{2}=728$."
          }
        ],
        "truco": "La suma geométrica es $\\dfrac{a_nr-a_1}{r-1}$: último término por la razón, menos el primero.",
        "errorTipico": "Calcular $a_6=2\\cdot3^6=1458$, olvidando que el exponente es $n-1$."
      },
      {
        "id": "cs2-suc-03",
        "materia": "ccss-ii",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Límite de una sucesión racional",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{3n^2+2}{n^2+n}$.",
        "pista": "Divide numerador y denominador entre $n^2$ y mira qué términos se van a cero.",
        "partes": [
          {
            "etiqueta": "Límite",
            "opciones": [
              "$3$",
              "$0$",
              "$2$",
              "$\\infty$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Dividir entre $n^2$",
            "d": "$\\dfrac{3n^2+2}{n^2+n}=\\dfrac{3+2/n^2}{1+1/n}$."
          },
          {
            "t": "Límite",
            "d": "Los términos con $n$ en el denominador tienden a $0$: el límite es $\\dfrac{3}{1}=3$."
          }
        ],
        "truco": "Mismo grado arriba y abajo: el límite es el cociente de los coeficientes líderes.",
        "errorTipico": "Quedarse con $2/n$ y responder $0$, como si el denominador tuviera más grado."
      },
      {
        "id": "cs2-suc-04",
        "materia": "ccss-ii",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sucesión definida por recurrencia",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Sea $a_1=1$ y $a_{n+1}=2a_n+1$. Calcula $a_4$ y encuentra la expresión del término general.",
        "pista": "Calcula los primeros términos: $1, 3, 7, \\ldots$ Compáralos con las potencias de $2$.",
        "partes": [
          {
            "etiqueta": "$a_4$",
            "opciones": [
              "$15$",
              "$7$",
              "$31$",
              "$9$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Término general",
            "opciones": [
              "$a_n=2^n-1$",
              "$a_n=2n-1$",
              "$a_n=2^{n-1}+1$",
              "$a_n=n^2$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primeros términos",
            "d": "$a_2=2\\cdot1+1=3$; $a_3=2\\cdot3+1=7$; $a_4=2\\cdot7+1=15$."
          },
          {
            "t": "Conjetura",
            "d": "Los términos son $2^1-1$, $2^2-1$, $2^3-1$, $2^4-1$."
          },
          {
            "t": "Comprobación",
            "d": "Si $a_n=2^n-1$, entonces $2a_n+1=2^{n+1}-2+1=2^{n+1}-1=a_{n+1}$."
          }
        ],
        "truco": "Ante una recurrencia, escribe cuatro o cinco términos y busca el patrón antes de intentar demostrarlo.",
        "errorTipico": "Confundir $2^n$ con $2n$ y proponer $a_n=2n-1$."
      },
      {
        "id": "cs2-suc-05",
        "materia": "ccss-ii",
        "bloque": "sucesiones",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Crecimiento porcentual acumulado",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Una población de $1000$ habitantes crece un $5\\,\\%$ cada año. ¿Cuántos habitantes habrá al cabo de $3$ años? ¿Y al cabo de $10$? Redondea a dos decimales.",
        "pista": "Cada año se multiplica por $1{,}05$. Los aumentos porcentuales encadenados forman una progresión geométrica.",
        "partes": [
          {
            "etiqueta": "Población a los 3 años",
            "opciones": [
              "$1157{,}63$",
              "$1150{,}00$",
              "$1050{,}00$",
              "$1215{,}51$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Población a los 10 años",
            "opciones": [
              "$1628{,}89$",
              "$1500{,}00$",
              "$1600{,}00$",
              "$1742{,}82$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Término general",
            "d": "$a_n=1000\\cdot1{,}05^{n}$, con $n$ años transcurridos."
          },
          {
            "t": "Tres años",
            "d": "$1000\\cdot1{,}05^3=1000\\cdot1{,}157625=1157{,}63$."
          },
          {
            "t": "Diez años",
            "d": "$1000\\cdot1{,}05^{10}\\approx1000\\cdot1{,}6288946=1628{,}89$."
          }
        ],
        "truco": "Subir un $5\\,\\%$ es multiplicar por $1{,}05$; repetirlo $n$ veces es elevar a $n$.",
        "errorTipico": "Sumar $5\\,\\%\\cdot3=15\\,\\%$ y responder $1150$, que es crecimiento lineal."
      },
      {
        "id": "cs2-suc-06",
        "materia": "ccss-ii",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Progresión aritmética: término 12 y suma",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "En una progresión aritmética, $a_1=5$ y la diferencia es $d=3$. Calcula $a_{12}$, la suma de los 12 primeros términos y el término general $a_n$.",
        "pista": "Usa $a_n=a_1+(n-1)d$ y $S_n=\\frac{n(a_1+a_n)}{2}$.",
        "partes": [
          {
            "etiqueta": "$a_{12}$",
            "opciones": [
              "38",
              "41",
              "35",
              "44"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$S_{12}$",
            "opciones": [
              "258",
              "252",
              "264",
              "246"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$a_n$",
            "opciones": [
              "$3n+2$",
              "$5n+3$",
              "$3n+5$",
              "$2n+3$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Término 12",
            "d": "$a_{12}=5+11\\cdot3=38$."
          },
          {
            "t": "Suma",
            "d": "$S_{12}=\\frac{12(5+38)}{2}=6\\cdot43=258$."
          },
          {
            "t": "Término general",
            "d": "$a_n=5+(n-1)3=3n+2$."
          }
        ],
        "truco": "En una progresión aritmética todo sale de $a_1$ y $d$: no memorices cada fórmula por separado.",
        "errorTipico": "Usar $n$ en vez de $n-1$ en el término general, o sumar solo los extremos sin multiplicar por el número de términos."
      }
    ]
  );
})();
