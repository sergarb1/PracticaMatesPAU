/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Funciones · 6 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-fun-01",
        "materia": "ccss-ii",
        "bloque": "funciones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Límite de una función racional",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula $\\displaystyle\\lim_{x\\to3}\\frac{x^2-9}{x-3}$.",
        "pista": "Sustituir da $0/0$. Factoriza el numerador como diferencia de cuadrados y simplifica antes de volver a sustituir.",
        "partes": [
          {
            "etiqueta": "Límite",
            "opciones": [
              "7",
              "5",
              "6",
              "8"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Detectar la indeterminación",
            "d": "$\\dfrac{9-9}{3-3}=\\dfrac00$."
          },
          {
            "t": "Factorizar",
            "d": "$x^2-9=(x-3)(x+3)$, luego el cociente es $x+3$ para $x\\ne3$."
          },
          {
            "t": "Calcular",
            "d": "$\\lim_{x\\to3}(x+3)=6$."
          }
        ],
        "truco": "Ante $0/0$ con polinomios, factoriza y cancela. Solo si no se puede factorizar a mano, plantéate L'Hôpital.",
        "errorTipico": "Concluir que el límite no existe porque sale $0/0$. Esa expresión es una indeterminación, no un resultado."
      },
      {
        "id": "cs2-fun-03",
        "materia": "ccss-ii",
        "bloque": "funciones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Minimizar un coste cuadrático",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "El coste de producir $x$ unidades es $C(x)=x^2-40x+500$ euros. ¿Cuántas unidades minimizan el coste y cuál es ese coste mínimo?",
        "pista": "Deriva e iguala a cero. Como es una parábola con el coeficiente de $x^2$ positivo, el vértice es el mínimo.",
        "partes": [
          {
            "etiqueta": "Unidades",
            "opciones": [
              "20",
              "21",
              "19",
              "22"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Coste mínimo (€)",
            "opciones": [
              "100",
              "101",
              "99",
              "102"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Derivar",
            "d": "$C'(x)=2x-40=0\\Rightarrow x=20$."
          },
          {
            "t": "Comprobar",
            "d": "$C''(x)=2\\gt0$: es un mínimo (parábola convexa)."
          },
          {
            "t": "Coste",
            "d": "$C(20)=400-800+500=100$ €."
          }
        ],
        "truco": "En una parábola $ax^2+bx+c$ con $a\\gt0$, el mínimo está en $x=-b/(2a)$. Aquí $40/2=20$, sin derivar.",
        "errorTipico": "Dar el coste mínimo como respuesta de «unidades» o al revés. Lee qué pide cada apartado."
      },
      {
        "id": "cs2-fun-05",
        "materia": "ccss-ii",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Asíntotas de una función racional",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Halla las asíntotas de $f(x)=\\dfrac{2x^2+1}{x^2-4}$. Indica la asíntota horizontal y la asíntota vertical positiva.",
        "pista": "Para la horizontal, compara grados: si son iguales, divide los coeficientes líderes. Para las verticales, anula el denominador (sin anular el numerador).",
        "partes": [
          {
            "etiqueta": "Asíntota horizontal (y = )",
            "opciones": [
              "3",
              "1",
              "4",
              "2"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Asíntota vertical positiva (x = )",
            "opciones": [
              "3",
              "1",
              "4",
              "2"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Horizontal",
            "d": "Grados iguales: $y=\\dfrac{2}{1}=2$."
          },
          {
            "t": "Verticales",
            "d": "$x^2-4=0\\Rightarrow x=\\pm2$; el numerador no se anula en esos puntos."
          },
          {
            "t": "Conclusión",
            "d": "Asíntotas: $y=2$, $x=2$ y $x=-2$."
          }
        ],
        "truco": "Grados: numerador $\\lt$ denominador $\\Rightarrow y=0$; iguales $\\Rightarrow$ cociente de coeficientes; numerador $>$ denominador $\\Rightarrow$ asíntota oblicua (o rama parabólica).",
        "errorTipico": "Confundir la asíntota vertical con el punto donde la función vale cero. Las verticales salen del denominador, no del numerador."
      },
      {
        "id": "cs2-fun-06",
        "materia": "ccss-ii",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Continuidad en un punto de empalme",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Determina $a$ para que sea continua en $x=2$:\n      $$f(x)=\\begin{cases}x^2+a & \\text{si } x\\lt2\\\\[4pt] 3x-1 & \\text{si } x\\ge2\\end{cases}$$",
        "pista": "Iguala el límite por la izquierda, $2^2+a$, con el límite por la derecha, $3\\cdot2-1$.",
        "partes": [
          {
            "etiqueta": "Valor de a",
            "opciones": [
              "2",
              "0",
              "3",
              "1"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Límites laterales",
            "d": "$\\lim_{x\\to2^-}f(x)=4+a$ y $\\lim_{x\\to2^+}f(x)=5$."
          },
          {
            "t": "Igualar",
            "d": "$4+a=5\\Rightarrow a=1$."
          },
          {
            "t": "Comprobar",
            "d": "Con $a=1$, $f(2)=5$ y ambos límites coinciden: continua."
          }
        ],
        "truco": "En un empalme, continuidad = mismos límites laterales = valor de la función. Tres igualdades, no solo dos.",
        "errorTipico": "Igualar las expresiones sin evaluarlas en $x=2$: $x^2+a=3x-1$ no es la condición; hay que sustituir el punto."
      },
      {
        "id": "cs2-fun-10",
        "materia": "ccss-ii",
        "bloque": "funciones",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Sanción de radar: tramos y continuidad (PAU 2026)",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Un radar sanciona con $100$ € si la velocidad es inferior a $80$ km/h, no sanciona entre $80$ y $110$ km/h (ambos incluidos) y, si se superan los $110$ km/h, cobra $50$ € más la diferencia entre la velocidad detectada y $110$. Calcula el pago a $70$ km/h y a $130$ km/h, estudia la continuidad en $v=110$ y halla el área entre $v=120$ y $v=125$.",
        "pista": "Escribe la función a trozos. En $v=110$ compara el límite por la izquierda con el valor del tramo de la derecha; para el área, integra $P(v)=v-60$.",
        "partes": [
          {
            "etiqueta": "$P(70)$",
            "opciones": [
              "$100$ €",
              "$0$ €",
              "$50$ €",
              "$150$ €"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(130)$",
            "opciones": [
              "$70$ €",
              "$50$ €",
              "$20$ €",
              "$120$ €"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Continuidad en $v=110$",
            "opciones": [
              "Discontinua de salto finito: los límites laterales son $0$ y $50$",
              "Continua, porque $P(110)=0$",
              "Discontinua evitable: basta redefinir $P(110)$",
              "Discontinua de salto infinito"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área entre $120$ y $125$",
            "opciones": [
              "$312{,}5$",
              "$300$",
              "$250$",
              "$62{,}5$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Función a trozos",
            "d": "$P(v)=100$ si $v\\lt80$; $P(v)=0$ si $80\\le v\\le110$; $P(v)=50+(v-110)=v-60$ si $v\\gt110$."
          },
          {
            "t": "Valores",
            "d": "$P(70)=100$ y $P(130)=130-60=70$."
          },
          {
            "t": "Continuidad",
            "d": "En $110$: $\\lim_{v\\to110^-}P(v)=0$ y $\\lim_{v\\to110^+}P(v)=50$. Hay un salto finito de $50$ €."
          },
          {
            "t": "Área",
            "d": "$\\displaystyle\\int_{120}^{125}(v-60)\\,dv=\\left[\\dfrac{v^2}{2}-60v\\right]_{120}^{125}=7812{,}5-7500=312{,}5$."
          }
        ],
        "truco": "Los puntos de empalme se estudian siempre por los dos lados, aunque la función esté definida con un valor concreto en ese punto.",
        "errorTipico": "Evaluar $v-60$ en $v=110$ y concluir que la función es continua; ese tramo solo vale para $v\\gt110$."
      },
      {
        "id": "cs2-fun-11",
        "materia": "ccss-ii",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Crecimiento exponencial de una población",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Una población de 2000 bacterias se duplica cada 3 horas. Calcula la población a las 9 horas, la expresión $P(t)$ y el tiempo necesario para llegar a 32000 bacterias.",
        "pista": "Si se duplica cada 3 horas, el factor de duplicación se eleva a $t/3$.",
        "partes": [
          {
            "etiqueta": "Población a 9 h",
            "opciones": [
              "16000",
              "12000",
              "18000",
              "24000"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Expresión de P(t)",
            "opciones": [
              "$P(t)=2000\\cdot2^{t/3}$",
              "$P(t)=2000\\cdot3^{t/2}$",
              "$P(t)=2000+2t$",
              "$P(t)=2000\\cdot2^{3t}$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Tiempo para 32000",
            "opciones": [
              "12 h",
              "9 h",
              "15 h",
              "18 h"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Población a 9 h",
            "d": "$9/3=3$ duplicaciones: $2000\\cdot2^3=16000$."
          },
          {
            "t": "Expresión",
            "d": "$P(t)=2000\\cdot2^{t/3}$."
          },
          {
            "t": "Tiempo",
            "d": "$32000=2000\\cdot2^{t/3}\\Rightarrow16=2^{t/3}\\Rightarrow t/3=4\\Rightarrow t=12$ h."
          }
        ],
        "truco": "El exponente mide cuántos periodos de duplicación han pasado: $t/3$, no $t$.",
        "errorTipico": "Multiplicar por $2t$ en vez de usar $2^{t/3}$, o contar una duplicación por hora."
      }
    ]
  );
})();
