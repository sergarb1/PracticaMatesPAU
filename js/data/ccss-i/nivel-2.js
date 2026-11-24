/* PAU Mates CV — Matemáticas Aplicadas a las CCSS I · 1º Bachillerato (Sociales)
   nivel-2 · medio · 28 ejercicios
Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs1-ari-02",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Interés compuesto",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Se ingresan $1000$ € al $3\\,\\%$ anual compuesto durante $5$ años. ¿Cuál es el capital final? Redondea a céntimos.",
        "pista": "Capital final $=C(1+i)^n$, con $i=0{,}03$ y $n=5$. El exponente afecta a todo el factor, no solo a los intereses.",
        "partes": [
          {
            "etiqueta": "Capital final (€)",
            "opciones": [
              "579,63",
              "1159,28",
              "1159,27",
              "1159,26"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Fórmula",
            "d": "$C_f=C(1+i)^n=1000(1{,}03)^5$."
          },
          {
            "t": "Calcular",
            "d": "$(1{,}03)^5\\approx1{,}159274$."
          },
          {
            "t": "Resultado",
            "d": "$C_f\\approx1159{,}27$ €."
          }
        ],
        "truco": "El interés compuesto crece en progresión geométrica. Si el tiempo es largo, el efecto bola de nieve es enorme: por eso conviene comparar con interés simple.",
        "errorTipico": "Sumar $3\\,\\%\\cdot5=15\\,\\%$ al capital inicial ($1150$ €). Eso es interés simple, no compuesto."
      },
      {
        "id": "cs1-est-03",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Mediana y rango intercuartílico",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Para los datos $1,2,3,4,5,6,7,8,9,10$, calcula la mediana y el rango intercuartílico $Q_3-Q_1$.",
        "pista": "Con 10 datos, la mediana es la media del quinto y el sexto. $Q_1$ es la mediana de los cinco primeros y $Q_3$ la de los cinco últimos.",
        "partes": [
          {
            "etiqueta": "Mediana",
            "opciones": [
              "5,5",
              "6,0",
              "5,0",
              "6,5"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Rango intercuartílico",
            "opciones": [
              "5",
              "6",
              "4",
              "7"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Mediana",
            "d": "$\\dfrac{5+6}{2}=5{,}5$."
          },
          {
            "t": "Cuartiles",
            "d": "$Q_1=3$ (mediana de $1,\\dots,5$), $Q_3=8$ (mediana de $6,\\dots,10$)."
          },
          {
            "t": "Rango intercuartílico",
            "d": "$Q_3-Q_1=8-3=5$. Contiene el $50\\,\\%$ central de los datos."
          }
        ],
        "truco": "El rango intercuartílico mide dispersión sin verse afectado por valores atípicos. Es más robusto que el recorrido total.",
        "errorTipico": "Calcular $Q_1$ y $Q_3$ incluyendo la mediana en ambos grupos, o confundir el rango intercuartílico con el recorrido $10-1=9$."
      },
      {
        "id": "cs1-fun-02",
        "materia": "ccss-i",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Vértice de una parábola",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Sea $y=-x^2+6x-5$. Calcula la abscisa del vértice y el valor máximo.",
        "pista": "El vértice está en $x=-\\frac{b}{2a}$. Como $a=-1\\lt0$, la parábola se abre hacia abajo y ese vértice es un máximo.",
        "partes": [
          {
            "etiqueta": "Abscisa del vértice",
            "opciones": [
              "3",
              "4",
              "2",
              "5"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor máximo",
            "opciones": [
              "5",
              "3",
              "6",
              "4"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Vértice",
            "d": "$x=-\\dfrac{6}{2(-1)}=3$."
          },
          {
            "t": "Valor",
            "d": "$y(3)=-9+18-5=4$."
          },
          {
            "t": "Comprobación",
            "d": "$y=-x^2+6x-5=-(x-3)^2+4$, luego el máximo es $4$ en $x=3$."
          }
        ],
        "truco": "Completar el cuadrado, $y=a(x-h)^2+k$, te da el vértice $(h,k)$ de golpe y revela si es máximo o mínimo.",
        "errorTipico": "Usar $x=\\frac{b}{2a}$ sin el signo negativo, o decir que el vértice es un mínimo porque la parábola «tiene forma de U» sin mirar el signo de $a$."
      },
      {
        "id": "cs1-prob-02",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Extracciones sin reemplazamiento",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Una urna contiene 5 bolas rojas y 3 azules. Se extraen dos bolas sin devolverlas. Calcula la probabilidad de que ambas sean rojas y la de que al menos una sea azul.",
        "pista": "Sin reemplazamiento, la segunda extracción cambia: quedan 7 bolas. Para «al menos una azul», usa el complementario de «ninguna azul».",
        "partes": [
          {
            "etiqueta": "Ambas rojas",
            "opciones": [
              "0,7142",
              "0,3571",
              "0,1785",
              "0,6429"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Al menos una azul",
            "opciones": [
              "1,2858",
              "0,3215",
              "0,6429",
              "0,3571"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Dos rojas",
            "d": "$\\frac58\\cdot\\frac47=\\frac{20}{56}=\\frac{5}{14}\\approx0{,}3571$."
          },
          {
            "t": "Complementario",
            "d": "«Al menos una azul» es el complementario de «ninguna azul», es decir, de «ambas rojas»."
          },
          {
            "t": "Resultado",
            "d": "$1-\\frac{5}{14}=\\frac{9}{14}\\approx0{,}6429$."
          }
        ],
        "truco": "Sin reemplazamiento, multiplica probabilidades condicionadas: el denominador baja en cada extracción. Con reemplazamiento se mantiene.",
        "errorTipico": "Usar $\\frac58\\cdot\\frac58$ (con reemplazamiento) cuando el enunciado dice «sin devolverlas»."
      },
      {
        "id": "cs1-est-04",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Media y desviación típica",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Para los datos $2,4,4,6,9$, calcula la media y la desviación típica poblacional.",
        "pista": "Calcula la media, resta a cada dato la media, eleva al cuadrado, promedia y saca la raíz.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "6",
              "4",
              "5",
              "7"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "Desviación típica",
            "opciones": [
              "2,416",
              "2,316",
              "2,466",
              "2,366"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Media",
            "d": "$\\bar x=\\dfrac{2+4+4+6+9}{5}=5$."
          },
          {
            "t": "Varianza",
            "d": "$\\sigma^2=\\dfrac{9+1+1+1+16}{5}=\\dfrac{28}{5}=5{,}6$."
          },
          {
            "t": "Desviación típica",
            "d": "$\\sigma=\\sqrt{5{,}6}\\approx2{,}366$."
          }
        ],
        "truco": "La desviación típica está en las mismas unidades que los datos; la varianza, en unidades al cuadrado.",
        "errorTipico": "Dividir entre $n-1$ cuando el enunciado pide la poblacional, u olvidar la raíz al final."
      },
      {
        "id": "cs1-fun-04",
        "materia": "ccss-i",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Punto de equilibrio",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Una empresa tiene costes $C(x)=20x+300$ e ingresos $I(x)=35x$, donde $x$ es el número de unidades. Calcula el punto de equilibrio y el beneficio para $x=30$.",
        "pista": "El punto de equilibrio es $I(x)=C(x)$. El beneficio es $I(x)-C(x)$.",
        "partes": [
          {
            "etiqueta": "Unidades de equilibrio",
            "opciones": [
              "21",
              "20",
              "19",
              "22"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Beneficio para $x=30$ (€)",
            "opciones": [
              "151",
              "150",
              "149",
              "152"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Equilibrio",
            "d": "$35x=20x+300\\Rightarrow15x=300\\Rightarrow x=20$."
          },
          {
            "t": "Beneficio",
            "d": "$B(x)=35x-(20x+300)=15x-300$."
          },
          {
            "t": "En x = 30",
            "d": "$B(30)=450-300=150$ €."
          }
        ],
        "truco": "Antes del punto de equilibrio se pierde dinero; después, cada unidad aporta el margen $35-20=15$ €.",
        "errorTipico": "Confundir ingresos con beneficio o restar los costes fijos a cada unidad en lugar de una sola vez."
      },
      {
        "id": "cs1-prob-03",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Suma de dos dados",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Se lanzan dos dados equilibrados. Calcula la probabilidad de que la suma sea $8$ y la de que sea al menos $10$.",
        "pista": "Hay $36$ resultados equiprobables. Para la suma $8$, cuenta las parejas; para «al menos $10$», cuenta las sumas $10$, $11$ y $12$.",
        "partes": [
          {
            "etiqueta": "Probabilidad de suma 8",
            "opciones": [
              "0,1389",
              "0,8611",
              "0,2778",
              "0,0694"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Probabilidad de suma al menos 10",
            "opciones": [
              "0,8333",
              "0,3334",
              "0,1667",
              "0,0833"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Suma 8",
            "d": "Parejas: $(2,6),(3,5),(4,4),(5,3),(6,2)$: $5$ casos. $P=\\frac{5}{36}\\approx0{,}1389$."
          },
          {
            "t": "Al menos 10",
            "d": "Suma $10$: 3 casos; $11$: 2; $12$: 1. Total $6$ casos."
          },
          {
            "t": "Resultado",
            "d": "$P=\\frac{6}{36}=\\frac16\\approx0{,}1667$."
          }
        ],
        "truco": "Haz una tabla $6\\times6$ y cuenta. Es el método más seguro para no olvidar parejas simétricas como $(2,6)$ y $(6,2)$.",
        "errorTipico": "Contar solo las parejas con números distintos y olvidar las dobles, o dividir entre $12$ en lugar de $36$."
      },
      {
        "id": "cs1-ari-05",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Aumento y descuento encadenados",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Un artículo cuesta $150$ €. Sube un $20\\,\\%$ y después baja un $10\\,\\%$. ¿Cuál es el precio final?",
        "pista": "Un aumento del $20\\,\\%$ multiplica por $1{,}2$; una bajada del $10\\,\\%$, por $0{,}9$. Aplica los factores en cadena.",
        "opciones": [
          "162",
          "165",
          "158",
          "180"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Aumento",
            "d": "$150\\cdot1{,}2=180$ €."
          },
          {
            "t": "Descuento",
            "d": "$180\\cdot0{,}9=162$ €."
          },
          {
            "t": "Factor global",
            "d": "$150\\cdot1{,}08=162$ €."
          }
        ],
        "truco": "Los porcentajes encadenados se multiplican, no se suman: $1{,}2cdot0{,}9=1{,}08$.",
        "errorTipico": "Hacer $+20\\,\\%-10\\,\\%=+10\\,\\%$ y responder $165$ €."
      },
      {
        "id": "cs1-ari-06",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Interés compuesto a dos años",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Ingresas $1000$ € al $5\\,\\%$ anual compuesto. ¿Cuánto tienes a los 2 años?",
        "pista": "Usa $C_f=C(1+i)^n$ con $i=0{,}05$ y $n=2$.",
        "opciones": [
          "1102,5",
          "1100",
          "1050",
          "1125"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Fórmula",
            "d": "$C_f=1000(1{,}05)^2$."
          },
          {
            "t": "Calcular",
            "d": "$(1{,}05)^2=1{,}1025$, luego $C_f=1102{,}50$ €."
          }
        ],
        "truco": "En interés compuesto, el segundo año también genera intereses: $(1+i)^n$, no $1+ni$.",
        "errorTipico": "Calcular $1000+2\\cdot50=1100$ €, que es interés simple."
      },
      {
        "id": "cs1-est-07",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Rango intercuartílico",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Para los datos $1,2,3,4,5,6,7,8$, calcula el rango intercuartílico $Q_3-Q_1$.",
        "pista": "Con 8 datos, divide en dos mitades de 4. $Q_1$ es la mediana de la primera mitad y $Q_3$ la de la segunda.",
        "opciones": [
          "4",
          "3",
          "5",
          "6"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Cuartiles",
            "d": "$Q_1=\\dfrac{2+3}{2}=2{,}5$ y $Q_3=\\dfrac{6+7}{2}=6{,}5$."
          },
          {
            "t": "Rango intercuartílico",
            "d": "$Q_3-Q_1=6{,}5-2{,}5=4$."
          }
        ],
        "truco": "El rango intercuartílico mide el 50 % central: no lo arrastran los extremos.",
        "errorTipico": "Restar el mínimo al máximo (rango) en vez de restar los cuartiles."
      },
      {
        "id": "cs1-fun-05",
        "materia": "ccss-i",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Vértice de una parábola",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Halla el vértice de la parábola $y=x^2-4x+3$.",
        "pista": "La abscisa del vértice es $x_v=-\\frac{b}{2a}$. Después sustituye para obtener la ordenada.",
        "partes": [
          {
            "etiqueta": "Abscisa",
            "opciones": [
              "2",
              "4",
              "−2",
              "1"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Ordenada",
            "opciones": [
              "−1",
              "1",
              "3",
              "−3"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Abscisa",
            "d": "$x_v=-\\dfrac{-4}{2}=2$."
          },
          {
            "t": "Ordenada",
            "d": "$y_v=2^2-4\\cdot2+3=-1$."
          }
        ],
        "truco": "El vértice está en $x=-b/(2a)$; si $a\\gt0$ es un mínimo.",
        "errorTipico": "Cambiar el signo dos veces y obtener $x_v=-2$, u olvidar sustituir para la ordenada."
      },
      {
        "id": "cs1-suc-03",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Límite de una sucesión",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Calcula $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{2n+1}{n+3}$.",
        "pista": "Divide numerador y denominador entre $n$. Los términos $1/n$ y $3/n$ tienden a cero.",
        "partes": [
          {
            "etiqueta": "Límite",
            "opciones": [
              "$2$",
              "$1$",
              "$0$",
              "$\\infty$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Dividir",
            "d": "$\\dfrac{2n+1}{n+3}=\\dfrac{2+1/n}{1+3/n}$."
          },
          {
            "t": "Límite",
            "d": "Los términos con $n$ desaparecen: queda $\\dfrac{2}{1}=2$."
          }
        ],
        "truco": "Mismo grado arriba y abajo: mira solo los coeficientes que acompañan a $n$.",
        "errorTipico": "Dividir los términos independientes $1/3$ y responder $0{,}33$."
      },
      {
        "id": "cs1-suc-04",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Depreciación con porcentaje fijo",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Un ordenador de $1000$ € se deprecia un $10\\,\\%$ cada año. Escribe el término general de su valor y calcula cuánto valdrá a los $3$ años.",
        "pista": "Perder un $10\\,\\%$ es multiplicar por $0{,}9$. Es una progresión geométrica de razón $0{,}9$.",
        "partes": [
          {
            "etiqueta": "Término general (valor tras $n-1$ años)",
            "opciones": [
              "$1000\\cdot0{,}9^{n-1}$",
              "$1000\\cdot0{,}9^{n}$",
              "$1000-100n$",
              "$1000\\cdot1{,}1^{n-1}$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor a los 3 años",
            "opciones": [
              "$729$",
              "$700$",
              "$810$",
              "$656{,}10$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Razón",
            "d": "Cada año se conserva el $90\\,\\%$: $r=0{,}9$."
          },
          {
            "t": "Término general",
            "d": "$a_n=1000\\cdot0{,}9^{n-1}$, con $a_1=1000$."
          },
          {
            "t": "Tres años",
            "d": "$a_4=1000\\cdot0{,}9^3=729$ €."
          }
        ],
        "truco": "Bajar un $p\\,\\%$ es multiplicar por $1-p/100$, no restar la misma cantidad cada año.",
        "errorTipico": "Restar $100$ € anuales y responder $700$: eso es depreciación lineal."
      },
      {
        "id": "cs1-suc-05",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Suma de los seis primeros términos de una geométrica",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Para la progresión $2,\\ 4,\\ 8,\\ 16,\\ldots$ calcula $a_6$ y $S_6$.",
        "pista": "La razón es $2$. Usa $a_6=2\\cdot2^5$ y $S_6=\\dfrac{a_6\\cdot2-2}{2-1}$.",
        "partes": [
          {
            "etiqueta": "$a_6$",
            "opciones": [
              "$64$",
              "$128$",
              "$32$",
              "$62$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$S_6$",
            "opciones": [
              "$126$",
              "$128$",
              "$254$",
              "$120$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sexto término",
            "d": "$a_6=2\\cdot2^{5}=64$."
          },
          {
            "t": "Suma",
            "d": "$S_6=\\dfrac{64\\cdot2-2}{1}=126$."
          },
          {
            "t": "Comprobación",
            "d": "$2+4+8+16+32+64=126$."
          }
        ],
        "truco": "Con razón $2$, la suma de $n$ términos es $2a_n-a_1$: el doble del último menos el primero.",
        "errorTipico": "Multiplicar el primer término por el número de términos ($2\\cdot6=12$)."
      },
      {
        "id": "cs1-alg-04",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Inecuación y ecuación racional",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Resuelve $3x+1\\lt10$ y, por separado, $\\dfrac{x+1}{x-2}=2$.",
        "pista": "En la inecuación, opera igual que en una ecuación (no cambias de signo). En la racional, multiplica en cruz y comprueba el dominio.",
        "partes": [
          {
            "etiqueta": "$3x+1\\lt10$",
            "opciones": [
              "$x\\lt3$",
              "$x\\gt3$",
              "$x\\lt9$",
              "$x\\gt9$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$\\dfrac{x+1}{x-2}=2$",
            "opciones": [
              "$x=5$",
              "$x=3$",
              "$x=-5$",
              "No tiene solución"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Inecuación",
            "d": "$3x\\lt9\\Rightarrow x\\lt3$."
          },
          {
            "t": "Ecuación",
            "d": "$x+1=2(x-2)=2x-4\\Rightarrow 5=x$."
          },
          {
            "t": "Dominio",
            "d": "$x=2$ queda excluido, pero $x=5$ es válido: solución $x=5$."
          }
        ],
        "truco": "Al multiplicar por $x-2$ recuerda que $x\\ne2$; si la solución fuese $2$, habría que descartarla.",
        "errorTipico": "Responder $x=-5$ al pasar mal el término independiente a la izquierda."
      },
      {
        "id": "cs1-alg-05",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ecuación con una raíz cuadrada",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Resuelve $\\sqrt{x+7}=5$.",
        "pista": "Eleva al cuadrado los dos miembros, despeja $x$ y comprueba la solución en la ecuación original.",
        "partes": [
          {
            "etiqueta": "$x$",
            "opciones": [
              "$18$",
              "$25$",
              "$12$",
              "$32$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Elevar al cuadrado",
            "d": "$x+7=25$."
          },
          {
            "t": "Despejar",
            "d": "$x=18$."
          },
          {
            "t": "Comprobar",
            "d": "$\\sqrt{18+7}=\\sqrt{25}=5$: correcto."
          }
        ],
        "truco": "Al elevar al cuadrado pueden aparecer soluciones falsas: comprueba siempre.",
        "errorTipico": "Restar $7$ después de elevar ($25-7$) está bien, pero restar antes deja $\\sqrt{x}=5-7$, que no tiene solución."
      },
      {
        "id": "cs1-ari-09",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Interés compuesto a cuatro años",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Depositas $2000$ € al $3\\%$ anual compuesto. ¿Qué capital tendrás al cabo de 4 años?",
        "pista": "Aplica $C_f=C(1+i)^n$ con $i=0{,}03$ y $n=4$.",
        "partes": [
          {
            "etiqueta": "Capital final",
            "opciones": [
              "$2251{,}02$ €",
              "$2240$ €",
              "$2360$ €",
              "$2255{,}09$ €"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Fórmula",
            "d": "$C_f=2000\\cdot1{,}03^4$."
          },
          {
            "t": "Cálculo",
            "d": "$1{,}03^4=1{,}12550881\\ldots$ y $C_f\\approx2251{,}02$ €."
          }
        ],
        "truco": "El exponente es el número de años: el interés se acumula sobre el capital ya ampliado.",
        "errorTipico": "Sumar $2000+4\\cdot60=2240$ €, que es interés simple."
      },
      {
        "id": "cs1-ari-10",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Suma de logaritmos",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Calcula $\\log_2 32+\\log_3\\dfrac{1}{27}$.",
        "pista": "Expresa cada argumento como potencia de su base.",
        "partes": [
          {
            "etiqueta": "Valor de la suma",
            "opciones": [
              "$2$",
              "$-2$",
              "$8$",
              "$0$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primero",
            "d": "$2^5=32\\Rightarrow\\log_2 32=5$."
          },
          {
            "t": "Segundo",
            "d": "$3^{-3}=\\dfrac1{27}\\Rightarrow\\log_3\\dfrac1{27}=-3$."
          },
          {
            "t": "Suma",
            "d": "$5-3=2$."
          }
        ],
        "truco": "Un argumento menor que $1$ da logaritmo negativo.",
        "errorTipico": "Sumar los argumentos en lugar de los logaritmos."
      },
      {
        "id": "cs1-alg-07",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sistema lineal 2×2",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Resuelve $\\begin{cases}2x+y=11\\\\[2pt] x-y=1\\end{cases}$.",
        "pista": "Suma las dos ecuaciones: la $y$ desaparece.",
        "partes": [
          {
            "etiqueta": "Solución $(x,y)$",
            "opciones": [
              "$(4,3)$",
              "$(3,4)$",
              "$(5,1)$",
              "$(2,7)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sumar",
            "d": "$3x=12\\Rightarrow x=4$."
          },
          {
            "t": "Sustituir",
            "d": "$4-y=1\\Rightarrow y=3$."
          },
          {
            "t": "Comprobar",
            "d": "$2\\cdot4+3=11$ ✓."
          }
        ],
        "truco": "Si los coeficientes de una incógnita son opuestos, sumar es más rápido que sustituir.",
        "errorTipico": "Intercambiar $x$ e $y$ al escribir la solución."
      },
      {
        "id": "cs1-alg-08",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Inecuación de primer grado",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Resuelve $2(x-3)\\ge4x+2$.",
        "pista": "Desarrolla el paréntesis, agrupa las $x$ en un lado y fíjate en el signo al despejar.",
        "partes": [
          {
            "etiqueta": "Solución",
            "opciones": [
              "$x\\le-4$",
              "$x\\ge-4$",
              "$x\\le4$",
              "$x\\ge4$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Desarrollar",
            "d": "$2x-6\\ge4x+2$."
          },
          {
            "t": "Agrupar",
            "d": "$-8\\ge2x$."
          },
          {
            "t": "Despejar",
            "d": "$x\\le-4$: al dividir entre $2$ positivo no cambia el sentido."
          }
        ],
        "truco": "Cambia el sentido de la desigualdad solo al multiplicar o dividir por un número negativo.",
        "errorTipico": "Dar $x\\ge-4$ por cambiar el sentido cuando no toca."
      },
      {
        "id": "cs1-alg-09",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ecuación bicuadrada",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Resuelve $x^4-13x^2+36=0$.",
        "pista": "Haz el cambio $t=x^2$ y resuelve en $t$.",
        "partes": [
          {
            "etiqueta": "Soluciones",
            "opciones": [
              "$x=\\pm2$, $x=\\pm3$",
              "$x=2$, $x=3$",
              "$x=\\pm4$, $x=\\pm9$",
              "$x=\\pm6$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Cambio",
            "d": "$t=x^2\\Rightarrow t^2-13t+36=0$."
          },
          {
            "t": "En $t$",
            "d": "$t=\\dfrac{13\\pm\\sqrt{169-144}}{2}=\\dfrac{13\\pm5}{2}\\Rightarrow t=9$ o $t=4$."
          },
          {
            "t": "Volver a $x$",
            "d": "$x=\\pm3$ y $x=\\pm2$."
          }
        ],
        "truco": "Cada valor positivo de $t$ da dos soluciones reales, una positiva y otra negativa.",
        "errorTipico": "Responder solo $x=4$ y $x=9$, que son los valores de $t$."
      },
      {
        "id": "cs1-suc-08",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Suma de doce términos",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Halla la suma de los 12 primeros términos de $4,\\ 7,\\ 10,\\dots$",
        "pista": "Calcula $a_{12}$ y aplica $S_n=\\dfrac{(a_1+a_n)n}{2}$.",
        "partes": [
          {
            "etiqueta": "Suma",
            "opciones": [
              "$246$",
              "$250$",
              "$123$",
              "$240$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Término 12",
            "d": "$d=3$, $a_{12}=4+11\\cdot3=37$."
          },
          {
            "t": "Suma",
            "d": "$S_{12}=\\dfrac{(4+37)\\cdot12}{2}=246$."
          }
        ],
        "truco": "Cada pareja primero-último suma $41$ y hay 6 parejas.",
        "errorTipico": "Dividir entre 2 pero usar $n=12$ con el término mal calculado."
      },
      {
        "id": "cs1-suc-09",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Término general de una geométrica",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "¿Cuál es el término general de la sucesión $5,\\ 10,\\ 20,\\ 40,\\dots$?",
        "pista": "Comprueba que cada término es el doble del anterior y ajusta el exponente con $a_1$.",
        "partes": [
          {
            "etiqueta": "Término general",
            "opciones": [
              "$a_n=5\\cdot2^{n-1}$",
              "$a_n=5\\cdot2^{n}$",
              "$a_n=5+5(n-1)$",
              "$a_n=10\\cdot2^{n-1}$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Razón",
            "d": "$10/5=2$."
          },
          {
            "t": "General",
            "d": "$a_n=5\\cdot2^{n-1}$: para $n=1$ da $5$ ✓."
          }
        ],
        "truco": "Comprueba siempre el término general con $n=1$ y $n=2$.",
        "errorTipico": "Usar $5\\cdot2^n$: entonces $a_1=10$, no $5$."
      },
      {
        "id": "cs1-est-10",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Coeficiente de variación",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Una variable tiene media $20$ y desviación típica $4$. ¿Cuál es su coeficiente de variación?",
        "pista": "$CV=\\dfrac{\\sigma}{\\bar x}$; se suele dar en porcentaje.",
        "partes": [
          {
            "etiqueta": "Coeficiente de variación",
            "opciones": [
              "$20\\%$",
              "$5\\%$",
              "$80\\%$",
              "$2\\%$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Fórmula",
            "d": "$CV=\\dfrac4{20}=0{,}2$."
          },
          {
            "t": "Porcentaje",
            "d": "$CV=20\\%$."
          }
        ],
        "truco": "El CV no tiene unidades: sirve para comparar dispersiones de variables distintas.",
        "errorTipico": "Invertir la fracción y responder $5\\%$."
      },
      {
        "id": "cs1-fun-07",
        "materia": "ccss-i",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Vértice de una parábola",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "¿Dónde está el vértice de la parábola $y=x^2-6x+5$?",
        "pista": "La abscisa del vértice es $x_v=-\\dfrac{b}{2a}$; después sustituye para la ordenada.",
        "partes": [
          {
            "etiqueta": "Vértice",
            "opciones": [
              "$(3,-4)$",
              "$(-3,-4)$",
              "$(3,4)$",
              "$(3,5)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Abscisa",
            "d": "$x_v=\\dfrac62=3$."
          },
          {
            "t": "Ordenada",
            "d": "$y=9-18+5=-4$."
          }
        ],
        "truco": "Comprueba el vértice con dos puntos simétricos: $x=2$ y $x=4$ dan el mismo valor.",
        "errorTipico": "Usar $(3,5)$, que es el corte con el eje $Y$ en $x=0$."
      },
      {
        "id": "cs1-fun-08",
        "materia": "ccss-i",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Cortes con el eje X",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "¿En qué puntos corta al eje $X$ la parábola $y=x^2-4x+3$?",
        "pista": "En el eje $X$ se cumple $y=0$: resuelve la ecuación de segundo grado.",
        "partes": [
          {
            "etiqueta": "Puntos de corte",
            "opciones": [
              "$(1,0)$ y $(3,0)$",
              "$(1,0)$ y $(-3,0)$",
              "$(0,1)$ y $(0,3)$",
              "$(2,0)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Igualar a cero",
            "d": "$x^2-4x+3=0$."
          },
          {
            "t": "Resolver",
            "d": "$x=\\dfrac{4\\pm\\sqrt{16-12}}{2}=\\dfrac{4\\pm2}{2}\\Rightarrow x=1$ o $x=3$."
          },
          {
            "t": "Puntos",
            "d": "$(1,0)$ y $(3,0)$."
          }
        ],
        "truco": "Con $y=0$ se obtienen los cortes con el eje $X$; con $x=0$, el corte con el eje $Y$.",
        "errorTipico": "Dar $(0,1)$ y $(0,3)$, que serían cortes con el eje $Y$."
      },
      {
        "id": "cs1-prob-08",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Dos extracciones sin reemplazamiento",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Una bolsa contiene 5 bolas rojas y 3 azules. Se extraen dos bolas sin reemplazamiento. Calcula la probabilidad de que la primera sea roja, la de que las dos sean rojas y la de obtener una bola de cada color.",
        "pista": "Sin reemplazamiento, después de sacar una bola quedan 7. Para una de cada color, considera los dos órdenes: roja-azul y azul-roja.",
        "partes": [
          {
            "etiqueta": "Primera roja",
            "opciones": [
              "5/8",
              "3/8",
              "5/7",
              "3/7"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Dos rojas",
            "opciones": [
              "5/14",
              "25/64",
              "5/8",
              "10/14"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Una de cada color",
            "opciones": [
              "15/28",
              "5/14",
              "15/56",
              "3/8"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primera roja",
            "d": "Hay 5 rojas de 8 bolas: $5/8$."
          },
          {
            "t": "Dos rojas",
            "d": "$5/8\\cdot4/7=20/56=5/14$."
          },
          {
            "t": "Una de cada color",
            "d": "Dos órdenes: $2\\cdot(5/8)(3/7)=30/56=15/28$."
          }
        ],
        "truco": "Sin reemplazamiento, el segundo denominador es 7 y el número de bolas del color elegido baja si ya salió.",
        "errorTipico": "Usar $5/8$ otra vez en la segunda extracción u olvidar los dos órdenes."
      },
      {
        "id": "cs1-prob-09",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Tabla de contingencia: transporte y estudios",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "En un grupo de 40 personas, 25 usan transporte público y 15 no. De las que usan transporte público, 10 son estudiantes; de las que no, 5 son estudiantes. Se elige una persona al azar. Calcula la probabilidad de que sea estudiante, la de que sea estudiante y use transporte público, y la de que no sea estudiante dado que usa transporte público.",
        "pista": "Organiza los datos en una tabla de doble entrada. Distingue la probabilidad conjunta de la condicionada.",
        "partes": [
          {
            "etiqueta": "Estudiante",
            "opciones": [
              "3/8",
              "1/4",
              "15/25",
              "5/40"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Estudiante y transporte público",
            "opciones": [
              "1/4",
              "3/8",
              "10/25",
              "1/8"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "No estudiante, dado que usa transporte público",
            "opciones": [
              "3/5",
              "2/5",
              "15/40",
              "10/25"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Tabla",
            "d": "Transporte público: 10 estudiantes y 15 no. Sin transporte público: 5 estudiantes y 10 no. Totales: 15 estudiantes y 25 no."
          },
          {
            "t": "Estudiante",
            "d": "$P(\\text{estudiante})=15/40=3/8$."
          },
          {
            "t": "Conjunta",
            "d": "$P(\\text{estudiante y público})=10/40=1/4$."
          },
          {
            "t": "Condicionada",
            "d": "De las 25 que usan transporte público, 15 no son estudiantes: $15/25=3/5$."
          }
        ],
        "truco": "En una probabilidad condicionada, el denominador es el grupo de la condición, no el total.",
        "errorTipico": "Dividir siempre entre 40 cuando la condición ya restringe el grupo."
      }
    ]
  );
})();
