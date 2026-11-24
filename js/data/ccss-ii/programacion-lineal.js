/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Programación lineal · 6 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-alg-05",
        "materia": "ccss-ii",
        "bloque": "programacion-lineal",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Programación lineal: máximo en un vértice",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Maximiza $z=3x+2y$ sujeto a $x+y\\le4$, $x+2y\\le6$, $x\\ge0$, $y\\ge0$.",
        "pista": "Dibuja las rectas, sombrea la región factible y calcula los vértices. Evalúa $z$ en cada uno: el máximo está en un vértice.",
        "partes": [
          {
            "etiqueta": "Valor máximo de z",
            "opciones": [
              "13",
              "12",
              "11",
              "14"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Vértices",
            "d": "Cortes: $(0,0)$, $(4,0)$, $(0,3)$ y la intersección $x+y=4$ con $x+2y=6$, que es $(2,2)$."
          },
          {
            "t": "Evaluar z",
            "d": "$z(0,0)=0$, $z(4,0)=12$, $z(0,3)=6$, $z(2,2)=10$."
          },
          {
            "t": "Conclusión",
            "d": "Máximo $z=12$ en $(4,0)$."
          }
        ],
        "truco": "Solo necesitas los vértices de la región factible. Si la región es acotada, el óptimo siempre está en uno de ellos.",
        "errorTipico": "Evaluar solo los cortes con los ejes y olvidar la intersección de las dos restricciones, que puede ser el óptimo."
      },
      {
        "id": "cs2-pl-01",
        "materia": "ccss-ii",
        "bloque": "programacion-lineal",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Máximo de una función objetivo",
        "fuente": "Currículo CV · Matemáticas CCSS II",
        "enunciado": "Maximiza $z=3x+2y$ sujeto a $x+y\\le4$, $x\\ge0$, $y\\ge0$.",
        "pista": "Los vértices de la región son $(0,0)$, $(4,0)$ y $(0,4)$. Evalúa $z$ en cada uno.",
        "opciones": [
          "12",
          "8",
          "14",
          "10"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Vértices",
            "d": "$(0,0)$, $(4,0)$ y $(0,4)$."
          },
          {
            "t": "Evaluar",
            "d": "$z(0,0)=0$, $z(4,0)=12$, $z(0,4)=8$."
          },
          {
            "t": "Máximo",
            "d": "El máximo es $12$ en $(4,0)$."
          }
        ],
        "truco": "En programación lineal con región acotada, el óptimo está siempre en un vértice: no hace falta recorrer el interior.",
        "errorTipico": "Escoger el vértice con mayor coordenada en vez de evaluar la función objetivo."
      },
      {
        "id": "cs2-alg-06",
        "materia": "ccss-ii",
        "bloque": "programacion-lineal",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Programación lineal: mesas y sillas",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Un taller fabrica mesas ($x$) y sillas ($y$). Dispone de 12 unidades de madera y 8 horas de trabajo: $2x+y\\le12$, $x+y\\le8$, $x,y\\ge0$. El beneficio es $40x+30y$. Calcula la producción óptima y el beneficio máximo.",
        "pista": "La región factible tiene cuatro vértices: $(0,0)$, $(6,0)$, $(0,8)$ y el corte de $2x+y=12$ con $x+y=8$. Evalúa el beneficio en todos.",
        "partes": [
          {
            "etiqueta": "Mesas (x)",
            "opciones": [
              "4",
              "5",
              "3",
              "6"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Sillas (y)",
            "opciones": [
              "5",
              "3",
              "6",
              "4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Beneficio máximo",
            "opciones": [
              "280",
              "281",
              "279",
              "282"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Vértice de corte",
            "d": "Restando $x+y=8$ a $2x+y=12$: $x=4$, $y=4$."
          },
          {
            "t": "Evaluar beneficio",
            "d": "$B(0,0)=0$, $B(6,0)=240$, $B(0,8)=240$, $B(4,4)=280$."
          },
          {
            "t": "Conclusión",
            "d": "Óptimo en $(4,4)$: 4 mesas y 4 sillas, beneficio $280$ €."
          }
        ],
        "truco": "Define las variables al principio y escribe cada restricción con palabras («madera por mesa», «horas por silla»). Evita el error más caro del ejercicio.",
        "errorTipico": "Olvidar las restricciones de no negatividad o invertir la desigualdad al despejar $y$. Dibuja y comprueba un punto interior."
      },
      {
        "id": "cs2-alg-08",
        "materia": "ccss-ii",
        "bloque": "programacion-lineal",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Programación lineal: coste mínimo",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Minimiza $C=2x+3y$ sujeto a $x+y\\ge10$, $2x+y\\ge14$, $x\\le8$, $x,y\\ge0$. Indica el vértice óptimo y el coste mínimo.",
        "pista": "Representa las rectas y evalúa la función objetivo en los vértices de la región factible. No supongas que el óptimo está en el corte de las dos primeras rectas.",
        "partes": [
          {
            "etiqueta": "$x$",
            "opciones": [
              "8",
              "9",
              "7",
              "10"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$y$",
            "opciones": [
              "3",
              "1",
              "4",
              "2"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Coste mínimo",
            "opciones": [
              "22",
              "23",
              "21",
              "24"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Vértices",
            "d": "Los candidatos son $(8,2)$ y el corte de $x+y=10$ con $2x+y=14$: $(4,6)$."
          },
          {
            "t": "Evaluar",
            "d": "$C(8,2)=16+6=22$; $C(4,6)=8+18=26$."
          },
          {
            "t": "Conclusión",
            "d": "El mínimo es $22$ en $(8,2)$: 8 unidades de $x$ y 2 de $y$."
          }
        ],
        "truco": "En un problema de mínimo, la solución suele estar en el vértice «más cercano al origen» que siga siendo factible. Dibuja la región antes de calcular.",
        "errorTipico": "Evaluar solo el corte de las dos primeras restricciones y no comprobar los vértices que impone $x\\le8$."
      },
      {
        "id": "cs2-pl-02",
        "materia": "ccss-ii",
        "bloque": "programacion-lineal",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Programación lineal: tartas y bizcochos",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Una pastelería fabrica tartas ($x$) y bizcochos ($y$). El horno permite como máximo 10 unidades entre ambos: $x+y\\le10$. El azúcar disponible impone $2x+y\\le16$ y la demanda de tartas limita $x\\le6$. El beneficio es $30x+20y$ euros. Calcula cuántas tartas y bizcochos conviene fabricar y el beneficio máximo.",
        "pista": "Dibuja la región factible. Los vértices son $(0,0)$, $(6,0)$, $(6,4)$ y $(0,10)$; evalúa el beneficio en todos.",
        "partes": [
          {
            "etiqueta": "Tartas (x)",
            "opciones": [
              "6",
              "4",
              "5",
              "3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Bizcochos (y)",
            "opciones": [
              "4",
              "6",
              "5",
              "3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Beneficio máximo (€)",
            "opciones": [
              "260",
              "240",
              "280",
              "250"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Vértices",
            "d": "De $x+y=10$, $2x+y=16$ y $x=6$ se obtienen $(0,0)$, $(6,0)$, $(6,4)$ y $(0,10)$."
          },
          {
            "t": "Evaluar el beneficio",
            "d": "$B(0,0)=0$, $B(6,0)=180$, $B(6,4)=260$, $B(0,10)=200$."
          },
          {
            "t": "Conclusión",
            "d": "El máximo es 260 € con 6 tartas y 4 bizcochos."
          }
        ],
        "truco": "En programación lineal el óptimo está en un vértice: no hace falta probar puntos interiores.",
        "errorTipico": "Olvidar la restricción $x\\le6$ y tomar el vértice $(10,0)$, que no es factible."
      },
      {
        "id": "cs2-pl-03",
        "materia": "ccss-ii",
        "bloque": "programacion-lineal",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Programación lineal: dieta de dos productos",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Una dieta necesita al menos 8 unidades de vitamina A y 12 de vitamina B. El producto X aporta 2 unidades de A y 2 de B por kg, y cuesta 3 €/kg; el producto Y aporta 1 de A y 3 de B por kg, y cuesta 4 €/kg. Minimiza el coste $C=3x+4y$ con $x$ kg de X e $y$ kg de Y, sujeto a $2x+y\\ge8$, $2x+3y\\ge12$, $x,y\\ge0$.",
        "pista": "La región factible tiene vértices $(3,2)$, $(6,0)$ y $(0,8)$. Evalúa el coste en los tres.",
        "partes": [
          {
            "etiqueta": "Kg de X",
            "opciones": [
              "3",
              "2",
              "4",
              "6"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Kg de Y",
            "opciones": [
              "2",
              "3",
              "4",
              "1"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Coste mínimo (€)",
            "opciones": [
              "17",
              "18",
              "20",
              "16"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Vértices",
            "d": "Las rectas $2x+y=8$ y $2x+3y=12$ se cortan en $(3,2)$; los cortes factibles con los ejes son $(6,0)$ y $(0,8)$."
          },
          {
            "t": "Evaluar el coste",
            "d": "$C(3,2)=3\\cdot3+4\\cdot2=17$, $C(6,0)=18$, $C(0,8)=32$."
          },
          {
            "t": "Conclusión",
            "d": "El mínimo es 17 € con 3 kg de X y 2 kg de Y."
          }
        ],
        "truco": "En minimización, comprueba los cortes con los ejes y el cruce de las rectas; no supongas que el mínimo está en $(0,0)$.",
        "errorTipico": "Tomar $(0,0)$, que no cumple las necesidades mínimas, o elegir un punto que no sea factible."
      }
    ]
  );
})();
