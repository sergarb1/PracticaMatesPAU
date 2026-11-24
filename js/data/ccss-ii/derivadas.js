/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Derivadas · 7 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-fun-02",
        "materia": "ccss-ii",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Máximo y mínimo de un beneficio",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "La función $B(x)=x^3-6x^2+9x$ modela el beneficio (en miles de euros) según la producción $x$. Indica la abscisa del máximo, el beneficio máximo y el beneficio mínimo.",
        "pista": "$B'(x)=3x^2-12x+9=3(x-1)(x-3)$. Estudia el signo de $B'$ para decidir cuál es máximo y cuál mínimo.",
        "partes": [
          {
            "etiqueta": "Abscisa del máximo",
            "opciones": [
              "2",
              "0",
              "3",
              "1"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Beneficio máximo",
            "opciones": [
              "5",
              "3",
              "6",
              "4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Beneficio mínimo",
            "opciones": [
              "1",
              "2",
              "3",
              "0"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Derivada",
            "d": "$B'(x)=3x^2-12x+9=3(x-1)(x-3)$."
          },
          {
            "t": "Signo",
            "d": "$B'\\gt0$ en $(-\\infty,1)$, $B'\\lt0$ en $(1,3)$ y $B'\\gt0$ en $(3,\\infty)$: máximo en $x=1$, mínimo en $x=3$."
          },
          {
            "t": "Valores",
            "d": "$B(1)=1-6+9=4$ y $B(3)=27-54+27=0$."
          }
        ],
        "truco": "El signo de la derivada antes y después del punto crítico decide todo. No necesitas la segunda derivada, y en la PAU es más rápido.",
        "errorTipico": "Intercambiar máximo y mínimo por no mirar el signo, o evaluar en $x=0$ creyendo que es un extremo."
      },
      {
        "id": "cs2-fun-07",
        "materia": "ccss-ii",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ingresos máximos",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "El precio unitario de un producto es $p=100-2x$ euros, donde $x$ es la cantidad vendida. ¿Qué cantidad maximiza los ingresos y cuál es el ingreso máximo?",
        "pista": "Ingreso = precio × cantidad: $I(x)=x(100-2x)$. Es una parábola invertida; su vértice es el máximo.",
        "partes": [
          {
            "etiqueta": "Cantidad",
            "opciones": [
              "26",
              "24",
              "25",
              "27"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "Ingreso máximo (€)",
            "opciones": [
              "1251",
              "1249",
              "1252",
              "1250"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Función ingreso",
            "d": "$I(x)=x(100-2x)=100x-2x^2$."
          },
          {
            "t": "Máximo",
            "d": "$I'(x)=100-4x=0\\Rightarrow x=25$; $I''=-4\\lt0$, máximo."
          },
          {
            "t": "Ingreso",
            "d": "$I(25)=2500-1250=1250$ €."
          }
        ],
        "truco": "Para una parábola $I=ax^2+bx$ con $a\\lt0$, el máximo está en $x=-b/(2a)=100/4=25$. Sin derivar.",
        "errorTipico": "Maximizar el precio en lugar del ingreso. Bajar el precio puede aumentar los ingresos si se vende más."
      },
      {
        "id": "cs2-fun-09",
        "materia": "ccss-ii",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Recta tangente a una cúbica",
        "fuente": "Currículo CV · Matemáticas CCSS II",
        "enunciado": "Calcula la pendiente y la ordenada en el origen de la recta tangente a $f(x)=x^3-3x$ en $x=2$.",
        "pista": "La pendiente es $f'(2)$ y la recta pasa por $(2,f(2))$. Usa $y-f(2)=f'(2)(x-2)$.",
        "partes": [
          {
            "etiqueta": "Pendiente",
            "opciones": [
              "10",
              "8",
              "9",
              "11"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "Ordenada en el origen",
            "opciones": [
              "−15",
              "−16",
              "−17",
              "−14"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Punto",
            "d": "$f(2)=8-6=2$."
          },
          {
            "t": "Pendiente",
            "d": "$f'(x)=3x^2-3$; $f'(2)=12-3=9$."
          },
          {
            "t": "Recta",
            "d": "$y-2=9(x-2)\\Rightarrow y=9x-16$: ordenada $-16$."
          }
        ],
        "truco": "Deriva primero y sustituye después. La tangente es una aproximación local: cerca de $x=2$, $f(x)\\approx9x-16$.",
        "errorTipico": "Usar $f(2)$ como pendiente o olvidar el punto en la ecuación punto-pendiente."
      },
      {
        "id": "cs2-fun-08",
        "materia": "ccss-ii",
        "bloque": "derivadas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Máximo y mínimo de una función racional",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Estudia los extremos de $f(x)=\\dfrac{x}{x^2+1}$: indica la abscisa del máximo, su valor y la abscisa del mínimo.",
        "pista": "Deriva con el cociente: $f'(x)=\\dfrac{1-x^2}{(x^2+1)^2}$. Iguala a cero y estudia el signo a ambos lados.",
        "partes": [
          {
            "etiqueta": "Abscisa del máximo",
            "opciones": [
              "1",
              "2",
              "0",
              "3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor máximo",
            "opciones": [
              "1,0",
              "0,5",
              "0,3",
              "0,6"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Abscisa del mínimo",
            "opciones": [
              "0",
              "1",
              "−1",
              "2"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Derivada",
            "d": "$f'(x)=\\dfrac{(x^2+1)-x(2x)}{(x^2+1)^2}=\\dfrac{1-x^2}{(x^2+1)^2}$."
          },
          {
            "t": "Puntos críticos",
            "d": "$1-x^2=0\\Rightarrow x=\\pm1$."
          },
          {
            "t": "Clasificar",
            "d": "$f'$ pasa de $+$ a $-$ en $x=1$ (máximo, $f(1)=\\frac12$) y de $-$ a $+$ en $x=-1$ (mínimo, $f(-1)=-\\frac12$)."
          }
        ],
        "truco": "El denominador $(x^2+1)^2$ siempre es positivo, así que el signo de $f'$ lo decide solo el numerador.",
        "errorTipico": "Derivar mal el cociente y perder el término $-x(2x)$, u olvidar el mínimo por ser simétrico."
      },
      {
        "id": "cs2-der-06",
        "materia": "ccss-ii",
        "bloque": "derivadas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Eficiencia financiera: máximo (PAU 2026)",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "La eficiencia de una empresa se modela con $E(x)=\\dfrac{100x}{x^2+25}$, con $x\\ge0$. Halla el valor de $x$ que maximiza la eficiencia, el valor máximo y los intervalos de crecimiento y decrecimiento.",
        "pista": "Aplica la regla del cociente. El denominador es siempre positivo, así que el signo de $E'(x)$ depende solo del numerador.",
        "partes": [
          {
            "etiqueta": "Valor óptimo de $x$",
            "opciones": [
              "$5$",
              "$25$",
              "$10$",
              "$50$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Eficiencia máxima",
            "opciones": [
              "$10$",
              "$20$",
              "$5$",
              "$2{,}5$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Monotonía",
            "opciones": [
              "Crece en $(0,5)$ y decrece en $(5,\\infty)$",
              "Decrece en $(0,5)$ y crece en $(5,\\infty)$",
              "Crece en todo su dominio",
              "Decrece en todo su dominio"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Derivada",
            "d": "$E'(x)=\\dfrac{100(x^2+25)-100x\\cdot2x}{(x^2+25)^2}=\\dfrac{2500-100x^2}{(x^2+25)^2}$."
          },
          {
            "t": "Punto crítico",
            "d": "$2500-100x^2=0\\Rightarrow x^2=25\\Rightarrow x=5$, pues $x\\ge0$."
          },
          {
            "t": "Signo",
            "d": "Para $0\\le x\\lt5$, $E'(x)\\gt0$; para $x\\gt5$, $E'(x)\\lt0$: máximo en $x=5$."
          },
          {
            "t": "Valor máximo",
            "d": "$E(5)=\\dfrac{500}{25+25}=10$."
          }
        ],
        "truco": "En un cociente con denominador positivo, estudia solo el numerador de la derivada: es más rápido y evita errores de signo.",
        "errorTipico": "Derivar $100x$ como $100x^2$ o mantener el denominador sin elevarlo al cuadrado."
      },
      {
        "id": "cs2-der-07",
        "materia": "ccss-ii",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Recta tangente a una cúbica",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula la recta tangente a $f(x)=x^3-3x$ en $x=2$.",
        "pista": "Necesitas el punto de tangencia $f(2)$ y la pendiente $f'(2)$. Después usa la ecuación punto-pendiente.",
        "partes": [
          {
            "etiqueta": "Pendiente",
            "opciones": [
              "9",
              "12",
              "6",
              "3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Punto de tangencia",
            "opciones": [
              "(2, 2)",
              "(2, 0)",
              "(2, 8)",
              "(1, -2)"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Ecuación",
            "opciones": [
              "y=9x-16",
              "y=9x+2",
              "y=9x-2",
              "y=12x-16"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Punto",
            "d": "$f(2)=8-6=2$, luego el punto es $(2,2)$."
          },
          {
            "t": "Pendiente",
            "d": "$f'(x)=3x^2-3$ y $f'(2)=12-3=9$."
          },
          {
            "t": "Ecuación",
            "d": "$y-2=9(x-2)\\Rightarrow y=9x-16$."
          }
        ],
        "truco": "La tangente se construye con el punto y la pendiente; no con la función sin derivar.",
        "errorTipico": "Usar $f(2)=2$ como pendiente o olvidar el punto de tangencia."
      },
      {
        "id": "cs2-der-08",
        "materia": "ccss-ii",
        "bloque": "derivadas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Optimización de un beneficio cuadrático",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "El beneficio de una empresa al producir $x$ unidades es $B(x)=-x^2+80x-1200$, con $0\\le x\\le80$. Calcula el número de unidades que maximiza el beneficio, el beneficio máximo y justifica si es máximo o mínimo.",
        "pista": "Deriva e iguala a cero. El signo de la segunda derivada te dice si es máximo o mínimo.",
        "partes": [
          {
            "etiqueta": "Unidades",
            "opciones": [
              "40",
              "80",
              "20",
              "30"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Beneficio máximo (€)",
            "opciones": [
              "400",
              "300",
              "500",
              "200"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Tipo de extremo",
            "opciones": [
              "Máximo, porque a<0",
              "Mínimo, porque a<0",
              "Máximo, porque a>0",
              "Mínimo, porque a>0"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Derivada",
            "d": "$B'(x)=-2x+80$. Igualando a cero: $x=40$."
          },
          {
            "t": "Beneficio",
            "d": "$B(40)=-1600+3200-1200=400$."
          },
          {
            "t": "Tipo de extremo",
            "d": "$B''(x)=-2<0$, luego es un máximo."
          }
        ],
        "truco": "En una parábola $B(x)=ax^2+bx+c$, el vértice está en $x=-b/(2a)$; si $a<0$ es un máximo.",
        "errorTipico": "Evaluar solo los extremos del intervalo o confundir el vértice con $x=0$."
      }
    ]
  );
})();
