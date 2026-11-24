/* PAU Mates CV — Matemáticas Aplicadas a las CCSS I · 1º Bachillerato (Sociales)
   nivel-1 · básico · 28 ejercicios
Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs1-ari-01",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Porcentajes encadenados",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Un artículo cuesta $250$ €. Primero se aplica un descuento del $20\\,\\%$ y después un aumento del $10\\,\\%$ sobre el precio ya rebajado. ¿Cuál es el precio final?",
        "pista": "Un descuento del $20\\,\\%$ multiplica por $0{,}8$; un aumento del $10\\,\\%$ multiplica por $1{,}1$. Aplica los factores en cadena.",
        "partes": [
          {
            "etiqueta": "Precio final (€)",
            "opciones": [
              "221",
              "219",
              "220",
              "222"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Primer descuento",
            "d": "$250\\cdot0{,}8=200$ €."
          },
          {
            "t": "Aumento",
            "d": "$200\\cdot1{,}1=220$ €."
          },
          {
            "t": "Factor global",
            "d": "$250\\cdot0{,}8\\cdot1{,}1=250\\cdot0{,}88=220$ €."
          }
        ],
        "truco": "Los porcentajes encadenados se multiplican, no se suman: $0{,}8\\cdot1{,}1=0{,}88$, un $12\\,\\%$ menos, no un $10\\,\\%$.",
        "errorTipico": "Hacer $250-20\\,\\%+10\\,\\%$ sobre el precio original y obtener $250$ €. El segundo porcentaje se aplica sobre el precio ya rebajado."
      },
      {
        "id": "cs1-ari-03",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Logaritmos básicos",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Calcula:",
        "pista": "Un logaritmo responde a «¿a qué exponente hay que elevar la base?». Recuerda $\\log_{10}1000=3$ y $\\ln e^2=2$.",
        "partes": [
          {
            "etiqueta": "a) $\\log_2 32$",
            "opciones": [
              "6",
              "5",
              "4",
              "7"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "b) $\\log_{10}1000$",
            "opciones": [
              "4",
              "3",
              "2",
              "5"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "c) $\\ln e^2$",
            "opciones": [
              "3",
              "1",
              "2",
              "4"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Potencia de 2",
            "d": "$2^5=32\\Rightarrow\\log_2 32=5$."
          },
          {
            "t": "Potencia de 10",
            "d": "$10^3=1000\\Rightarrow\\log_{10}1000=3$."
          },
          {
            "t": "Logaritmo neperiano",
            "d": "$\\ln e^2=2\\ln e=2$."
          }
        ],
        "truco": "$\\log_a a^x=x$ y $a^{\\log_a x}=x$. Si reconoces la potencia, no necesitas calculadora.",
        "errorTipico": "Confundir $\\ln e^2$ con $(\\ln e)^2=1$, o calcular $\\log_2 32$ como $32/2=16$."
      },
      {
        "id": "cs1-est-01",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Media, mediana y desviación típica",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Para los datos $2,4,4,4,5,5,7,9$, calcula la media, la mediana y la desviación típica.",
        "pista": "Ordena los datos (ya lo están). La mediana es la media de los dos centrales. La desviación típica es la raíz de la media de las desviaciones al cuadrado.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "6",
              "5",
              "4",
              "7"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Mediana",
            "opciones": [
              "4,5",
              "5,0",
              "4,0",
              "5,5"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Desviación típica",
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
            "t": "Media",
            "d": "$\\bar x=\\dfrac{2+4+4+4+5+5+7+9}{8}=\\dfrac{40}{8}=5$."
          },
          {
            "t": "Mediana",
            "d": "Con 8 datos, la mediana es la media de los centrales: $\\dfrac{4+5}{2}=4{,}5$."
          },
          {
            "t": "Desviación típica",
            "d": "Varianza $=\\dfrac{9+1+1+1+0+0+4+16}{8}=\\dfrac{32}{8}=4$; $\\sigma=2$."
          }
        ],
        "truco": "La media es sensible a valores extremos; la mediana no. Si hay un dato muy grande, compara ambas para detectar la asimetría.",
        "errorTipico": "Calcular la varianza dividiendo entre $n-1$ cuando el enunciado pide la población, u olvidar la raíz cuadrada al final."
      },
      {
        "id": "cs1-est-02",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Media con tabla de frecuencias",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "La tabla de frecuencias absolutas de una variable es: $x_i=0,1,2,3$ con $f_i=4,6,8,2$. Calcula el número total de datos y la media.",
        "pista": "El total es la suma de frecuencias. La media es $\\frac{\\sum x_i f_i}{N}$: multiplica cada valor por su frecuencia.",
        "partes": [
          {
            "etiqueta": "Número total de datos",
            "opciones": [
              "21",
              "19",
              "22",
              "20"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Media",
            "opciones": [
              "1,9",
              "0,9",
              "1,4",
              "2,4"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Total",
            "d": "$N=4+6+8+2=20$."
          },
          {
            "t": "Suma ponderada",
            "d": "$0\\cdot4+1\\cdot6+2\\cdot8+3\\cdot2=0+6+16+6=28$."
          },
          {
            "t": "Media",
            "d": "$\\bar x=\\dfrac{28}{20}=1{,}4$."
          }
        ],
        "truco": "En una tabla, la media es «suma de la columna $x_i f_i$ dividida entre el total». Si te olvidas de multiplicar, estás promediando valores sin pesos.",
        "errorTipico": "Sumar solo los valores $0+1+2+3=6$ y dividir entre 4. Hay que ponderar por las frecuencias."
      },
      {
        "id": "cs1-fun-01",
        "materia": "ccss-i",
        "bloque": "funciones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Punto de equilibrio",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Una empresa tiene costes $C(x)=200+15x$ e ingresos $I(x)=25x$ euros, donde $x$ es el número de unidades. ¿Cuántas unidades debe vender para cubrir costes?",
        "pista": "El punto de equilibrio es donde ingresos = costes: $25x=200+15x$. Despeja $x$.",
        "partes": [
          {
            "etiqueta": "Unidades",
            "opciones": [
              "21",
              "19",
              "20",
              "22"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Igualar",
            "d": "$25x=200+15x$."
          },
          {
            "t": "Resolver",
            "d": "$10x=200\\Rightarrow x=20$."
          },
          {
            "t": "Comprobar",
            "d": "$I(20)=500$ y $C(20)=200+300=500$: coincide."
          }
        ],
        "truco": "El punto de equilibrio es la intersección de dos rectas. Con $x=0$ los ingresos son 0 y los costes fijos 200: la empresa empieza perdiendo.",
        "errorTipico": "Igualar mal las funciones o dar el beneficio en lugar del número de unidades. Lee qué magnitud pide el apartado."
      },
      {
        "id": "cs1-prob-01",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Sumas con dos dados",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Se lanzan dos dados equilibrados. Calcula la probabilidad de que la suma sea $7$ y la de que sea al menos $10$.",
        "pista": "Hay $36$ resultados equiprobables. Para la suma $7$, cuenta las parejas: $(1,6),(2,5),\\dots$ Para $\\ge10$, cuenta las parejas con sumas $10,11,12$.",
        "partes": [
          {
            "etiqueta": "a) $P(\\text{suma}=7)$",
            "opciones": [
              "0,8333",
              "0,1667",
              "0,3334",
              "0,0833"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "b) $P(\\text{suma}\\ge10)$",
            "opciones": [
              "0,8333",
              "0,3334",
              "0,0833",
              "0,1667"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Casos para 7",
            "d": "$(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$: 6 casos. $P=\\frac{6}{36}=\\frac16$."
          },
          {
            "t": "Casos para ≥10",
            "d": "Suma 10: 3 casos; suma 11: 2; suma 12: 1. Total 6 casos."
          },
          {
            "t": "Probabilidad",
            "d": "$P=\\frac{6}{36}=\\frac16\\approx0{,}1667$."
          }
        ],
        "truco": "Dibuja la tabla $6\\times6$ y sombrea las diagonales: cada suma tiene un número de casos que crece y decrece. Es más rápido que enumerar a ciegas.",
        "errorTipico": "Contar $(1,6)$ y $(6,1)$ como un solo caso. Los dados son distinguibles, así que son dos resultados distintos."
      },
      {
        "id": "cs1-ari-04",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "IVA y descuento",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Un producto cuesta $80$ € sin IVA. Calcula su precio con un IVA del $21\\,\\%$ y su precio tras un descuento del $15\\,\\%$ sobre el precio sin IVA.",
        "pista": "Un incremento del $21\\,\\%$ multiplica por $1{,}21$; un descuento del $15\\,\\%$ multiplica por $0{,}85$.",
        "partes": [
          {
            "etiqueta": "Precio con IVA (€)",
            "opciones": [
              "48,4",
              "96,8",
              "68,0",
              "96,9"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Precio con descuento (€)",
            "opciones": [
              "68",
              "69",
              "67",
              "70"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "IVA",
            "d": "$80\\cdot1{,}21=96{,}80$ €."
          },
          {
            "t": "Descuento",
            "d": "$80\\cdot0{,}85=68$ €."
          },
          {
            "t": "Interpretación",
            "d": "El IVA se suma y el descuento se resta; no son operaciones inversas porque se aplican sobre bases distintas."
          }
        ],
        "truco": "Incremento del $p\\,\\%$: multiplica por $1+\\frac{p}{100}$. Descuento: multiplica por $1-\\frac{p}{100}$.",
        "errorTipico": "Sumar o restar el porcentaje directamente al precio ($80+21=101$) en lugar de calcular el $21\\,\\%$ de $80$."
      },
      {
        "id": "cs1-est-05",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Media de una tabla de frecuencias",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "La tabla de frecuencias es: valor $1$ con frecuencia $2$, valor $2$ con frecuencia $3$ y valor $3$ con frecuencia $5$. Calcula el número total de datos y la media.",
        "pista": "Multiplica cada valor por su frecuencia, suma y divide entre el total de datos.",
        "partes": [
          {
            "etiqueta": "Número total de datos",
            "opciones": [
              "11",
              "9",
              "12",
              "10"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Media",
            "opciones": [
              "2,8",
              "1,8",
              "3,3",
              "2,3"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Total",
            "d": "$2+3+5=10$ datos."
          },
          {
            "t": "Suma ponderada",
            "d": "$1\\cdot2+2\\cdot3+3\\cdot5=2+6+15=23$."
          },
          {
            "t": "Media",
            "d": "$\\bar x=\\dfrac{23}{10}=2{,}3$."
          }
        ],
        "truco": "En una tabla de frecuencias, la media es una media ponderada: cada valor pesa lo que indica su frecuencia.",
        "errorTipico": "Hacer la media de $1,2,3$ sin tener en cuenta las frecuencias, o dividir entre el número de valores distintos en vez del total de datos."
      },
      {
        "id": "cs1-fun-03",
        "materia": "ccss-i",
        "bloque": "funciones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Dominio de una función racional",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "¿Cuál es el dominio de $f(x)=\\dfrac{x+1}{x^2-4}$?",
        "pista": "El denominador no puede anularse. Resuelve $x^2-4=0$ y excluye esas dos values.",
        "opciones": [
          "$\\mathbb{R}\\setminus\\{2\\}$",
          "$\\mathbb{R}\\setminus\\{-2,2\\}$",
          "$\\mathbb{R}\\setminus\\{-2\\}$",
          "$\\mathbb{R}$"
        ],
        "correcta": 1,
        "solucion": [
          {
            "t": "Denominador",
            "d": "$x^2-4=(x-2)(x+2)$."
          },
          {
            "t": "Excluir",
            "d": "El denominador se anula en $x=2$ y $x=-2$."
          },
          {
            "t": "Dominio",
            "d": "$\\mathbb{R}\\setminus\\{-2,2\\}$."
          }
        ],
        "truco": "En funciones racionales, empieza siempre por el denominador: los ceros que lo anulan son los agujeros del dominio.",
        "errorTipico": "Excluir solo el valor positivo o confundir el dominio con el recorrido."
      },
      {
        "id": "cs1-est-06",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Media y mediana de cinco datos",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Para los datos $3,5,5,7,10$, calcula la media y la mediana.",
        "pista": "La media divide la suma entre 5. La mediana es el dato central al ordenar.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "6",
              "5",
              "7",
              "6,5"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Mediana",
            "opciones": [
              "5",
              "6",
              "3",
              "7"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Media",
            "d": "$\\bar x=\\dfrac{3+5+5+7+10}{5}=\\dfrac{30}{5}=6$."
          },
          {
            "t": "Mediana",
            "d": "Ordenados: $3,5,\\mathbf{5},7,10$. El central es $5$."
          }
        ],
        "truco": "Con un número impar de datos, la mediana es exactamente el central: no hay que promediar.",
        "errorTipico": "Responder la media en los dos apartados o contar mal la posición central."
      },
      {
        "id": "cs1-prob-04",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Probabilidad en una bolsa de bolas",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Una bolsa tiene 3 bolas rojas y 2 azules. Se extrae una bola al azar. ¿Cuál es la probabilidad de que sea roja?",
        "pista": "Aplica Laplace: casos favorables entre casos posibles.",
        "opciones": [
          "0,6",
          "0,4",
          "0,5",
          "0,3"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Casos",
            "d": "Favorables: $3$ rojas. Posibles: $3+2=5$ bolas."
          },
          {
            "t": "Probabilidad",
            "d": "$P(\\text{roja})=\\dfrac35=0{,}6$."
          }
        ],
        "truco": "La probabilidad de un suceso y su complementario suman 1. Si la roja es 0,6, la azul es 0,4.",
        "errorTipico": "Dividir entre el número de colores (2) en vez de entre el total de bolas."
      },
      {
        "id": "cs1-suc-01",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Progresión aritmética decreciente",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Una máquina vale $100$ unidades y pierde $5$ cada año. Escribe su valor como progresión aritmética y calcula el valor en el año $15$.",
        "pista": "$a_1=100$ y $d=-5$. Usa $a_n=a_1+(n-1)d$. Para saber cuándo llega a $0$, resuelve $a_n=0$.",
        "partes": [
          {
            "etiqueta": "Valor en el año 15",
            "opciones": [
              "$30$",
              "$25$",
              "$35$",
              "$20$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Año en que el valor llega a 0",
            "opciones": [
              "$21$",
              "$20$",
              "$25$",
              "$22$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Término general",
            "d": "$a_n=100-5(n-1)$."
          },
          {
            "t": "Año 15",
            "d": "$a_{15}=100-5\\cdot14=30$."
          },
          {
            "t": "Anular",
            "d": "$100-5(n-1)=0\\Rightarrow n-1=20\\Rightarrow n=21$."
          }
        ],
        "truco": "Con diferencia negativa, el término general decrece; despeja $n$ en lugar de ir sumando de uno en uno.",
        "errorTipico": "Calcular $100-5\\cdot15=25$ y responder el año $25$."
      },
      {
        "id": "cs1-suc-02",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Razón y término de una geométrica",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "En la progresión $3,\\ 6,\\ 12,\\ 24,\\ldots$ calcula la razón y el término $a_8$.",
        "pista": "La razón es el cociente entre un término y el anterior. Después aplica $a_n=a_1r^{n-1}$.",
        "partes": [
          {
            "etiqueta": "Razón",
            "opciones": [
              "$2$",
              "$3$",
              "$6$",
              "$0{,}5$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$a_8$",
            "opciones": [
              "$384$",
              "$768$",
              "$192$",
              "$256$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Razón",
            "d": "$r=\\dfrac{6}{3}=2$."
          },
          {
            "t": "Octavo término",
            "d": "$a_8=3\\cdot2^{7}=3\\cdot128=384$."
          }
        ],
        "truco": "En una geométrica el cociente siempre es constante: compruébalo con dos parejas distintas.",
        "errorTipico": "Usar $2^8=256$ y olvidar que el exponente es $n-1$."
      },
      {
        "id": "cs1-alg-01",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Ecuación de segundo grado completa",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Resuelve $x^2-5x+6=0$.",
        "pista": "Busca dos números que sumen $5$ y multipliquen $6$. También puedes aplicar la fórmula general.",
        "partes": [
          {
            "etiqueta": "Soluciones",
            "opciones": [
              "$x=2$ y $x=3$",
              "$x=-2$ y $x=-3$",
              "$x=1$ y $x=6$",
              "$x=-1$ y $x=-6$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Factorizar",
            "d": "$x^2-5x+6=(x-2)(x-3)$."
          },
          {
            "t": "Igualar a cero",
            "d": "$x-2=0$ o $x-3=0$, es decir, $x=2$ y $x=3$."
          }
        ],
        "truco": "Si factorizas con signos negativos dentro de los paréntesis, las soluciones son positivas: suman $5$ y multiplican $6$.",
        "errorTipico": "Responder $x=-2$ y $x=-3$ al copiar los números del paréntesis con su signo."
      },
      {
        "id": "cs1-alg-02",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Sistema de dos ecuaciones",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Resuelve el sistema $\\begin{cases}2x+y=5\\\\[2pt] x-y=1\\end{cases}$.",
        "pista": "Suma las dos ecuaciones: la $y$ se elimina. Después sustituye el valor de $x$.",
        "partes": [
          {
            "etiqueta": "Valor de $x$",
            "opciones": [
              "$2$",
              "$1$",
              "$3$",
              "$4$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor de $y$",
            "opciones": [
              "$1$",
              "$2$",
              "$-1$",
              "$3$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sumar",
            "d": "$3x=6\\Rightarrow x=2$."
          },
          {
            "t": "Sustituir",
            "d": "$2- y=1\\Rightarrow y=1$."
          },
          {
            "t": "Comprobar",
            "d": "$2\\cdot2+1=5$ y $2-1=1$: correcto."
          }
        ],
        "truco": "Suma si los coeficientes de una incógnita son opuestos; resta si son iguales.",
        "errorTipico": "Sumar solo los lados izquierdos y olvidar sumar los términos independientes."
      },
      {
        "id": "cs1-alg-03",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Ecuación exponencial y logarítmica",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Resuelve $3^{x}=81$ y $\\log_2x=5$.",
        "pista": "Escribe $81$ como potencia de $3$. Para el logaritmo, pasa a la forma exponencial.",
        "partes": [
          {
            "etiqueta": "$3^x=81$",
            "opciones": [
              "$x=4$",
              "$x=3$",
              "$x=27$",
              "$x=81$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$\\log_2x=5$",
            "opciones": [
              "$x=32$",
              "$x=10$",
              "$x=25$",
              "$x=64$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Potencia de 3",
            "d": "$81=3^4$, luego $x=4$."
          },
          {
            "t": "Logaritmo",
            "d": "$\\log_2x=5\\Rightarrow x=2^5=32$."
          }
        ],
        "truco": "Si la base no coincide, aplica logaritmos a los dos lados.",
        "errorTipico": "Dividir $81/3=27$ y responder $x=27$."
      },
      {
        "id": "cs1-ari-07",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Descuento seguido de IVA",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Un artículo cuesta $100$ € sin IVA. Se aplica un descuento del $20\\%$ y después se añade el $21\\%$ de IVA. ¿Cuál es el precio final?",
        "pista": "Los porcentajes encadenados se aplican uno tras otro, no se suman.",
        "partes": [
          {
            "etiqueta": "Precio final",
            "opciones": [
              "$96{,}80$ €",
              "$97{,}20$ €",
              "$101{,}00$ €",
              "$96{,}00$ €"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Descuento",
            "d": "$100\\cdot0{,}80=80$ €."
          },
          {
            "t": "IVA",
            "d": "$80\\cdot1{,}21=96{,}80$ €."
          }
        ],
        "truco": "Equivale a multiplicar por $0{,}80\\cdot1{,}21=0{,}968$: un $3{,}2\\%$ menos, no un $1\\%$ más.",
        "errorTipico": "Restar 20 y sumar 21 al precio inicial: los porcentajes se aplican sobre bases distintas."
      },
      {
        "id": "cs1-ari-08",
        "materia": "ccss-i",
        "bloque": "numerico",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Precio antes del descuento",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Tras un descuento del $25\\%$, un artículo cuesta $66$ €. ¿Cuál era su precio?",
        "pista": "El precio final es el $75\\%$ del inicial: divide entre $0{,}75$.",
        "partes": [
          {
            "etiqueta": "Precio inicial",
            "opciones": [
              "$88$ €",
              "$82{,}50$ €",
              "$91$ €",
              "$99$ €"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Plantear",
            "d": "$P\\cdot0{,}75=66$."
          },
          {
            "t": "Despejar",
            "d": "$P=66/0{,}75=88$ €."
          },
          {
            "t": "Comprobar",
            "d": "El $25\\%$ de $88$ es $22$ y $88-22=66$ ✓."
          }
        ],
        "truco": "Divide por el factor que queda ($0{,}75$), no restes el $25\\%$ del precio final.",
        "errorTipico": "Calcular $66+0{,}25\\cdot66=82{,}50$ €: aplica el descuento sobre el precio ya rebajado."
      },
      {
        "id": "cs1-alg-06",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Ecuación de segundo grado",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Resuelve $2x^2-7x+3=0$.",
        "pista": "Aplica la fórmula general con $a=2$, $b=-7$ y $c=3$; el discriminante es positivo.",
        "partes": [
          {
            "etiqueta": "Soluciones",
            "opciones": [
              "$x=3$ y $x=\\dfrac12$",
              "$x=3$ y $x=2$",
              "$x=-3$ y $x=-\\dfrac12$",
              "$x=\\dfrac72$ y $x=3$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Discriminante",
            "d": "$b^2-4ac=49-24=25$."
          },
          {
            "t": "Fórmula",
            "d": "$x=\\dfrac{7\\pm5}{4}\\Rightarrow x=3$ o $x=\\dfrac12$."
          }
        ],
        "truco": "Comprueba con la suma y el producto: $3+\\frac12=\\frac72$ y $3\\cdot\\frac12=\\frac32$.",
        "errorTipico": "Olvidar el $2a=4$ del denominador y responder $x=6$ y $x=1$."
      },
      {
        "id": "cs1-alg-10",
        "materia": "ccss-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Ecuación exponencial",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Resuelve $2^{x+1}=32$.",
        "pista": "Escribe $32$ como potencia de base $2$.",
        "partes": [
          {
            "etiqueta": "Valor de $x$",
            "opciones": [
              "$x=4$",
              "$x=5$",
              "$x=16$",
              "$x=6$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Misma base",
            "d": "$32=2^5$."
          },
          {
            "t": "Igualar exponentes",
            "d": "$x+1=5\\Rightarrow x=4$."
          }
        ],
        "truco": "Si las bases son iguales, los exponentes también: $a^u=a^v\\Rightarrow u=v$.",
        "errorTipico": "Responder $x=5$ olvidando el $+1$ del exponente."
      },
      {
        "id": "cs1-suc-06",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Término 15 de una aritmética",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "En una progresión aritmética con $a_1=7$ y $d=-2$, ¿cuál es $a_{15}$?",
        "pista": "Usa $a_n=a_1+(n-1)d$ con $n=15$.",
        "partes": [
          {
            "etiqueta": "Término 15",
            "opciones": [
              "$-21$",
              "$-23$",
              "$21$",
              "$-35$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Fórmula",
            "d": "$a_{15}=7+14\\cdot(-2)$."
          },
          {
            "t": "Cálculo",
            "d": "$a_{15}=7-28=-21$."
          }
        ],
        "truco": "Con diferencia negativa la sucesión decrece: el término 15 debe ser menor que el primero.",
        "errorTipico": "Usar $n=15$ en vez de $n-1=14$ y obtener $-23$."
      },
      {
        "id": "cs1-suc-07",
        "materia": "ccss-i",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Octavo término de una geométrica",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "En la progresión geométrica $3,\\ 6,\\ 12,\\dots$, ¿cuál es el octavo término?",
        "pista": "Halla la razón y aplica $a_n=a_1r^{n-1}$.",
        "partes": [
          {
            "etiqueta": "Octavo término",
            "opciones": [
              "384",
              "192",
              "768",
              "96"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Razón",
            "d": "$r=6/3=2$."
          },
          {
            "t": "Fórmula",
            "d": "$a_8=3\\cdot2^{7}=3\\cdot128=384$."
          }
        ],
        "truco": "Cada término duplica al anterior: cuenta cuántas duplicaciones hay desde el primero.",
        "errorTipico": "Calcular $3\\cdot2^8=768$ usando $n$ en vez de $n-1$."
      },
      {
        "id": "cs1-est-08",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Media de una serie",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Halla la media de $4,\\ 6,\\ 8,\\ 10,\\ 12$.",
        "pista": "Suma todos los valores y divide entre cuántos hay.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "8",
              "10",
              "7,5",
              "9"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Suma",
            "d": "$4+6+8+10+12=40$."
          },
          {
            "t": "Media",
            "d": "$\\bar x=40/5=8$."
          }
        ],
        "truco": "En una serie simétrica, la media coincide con el valor central.",
        "errorTipico": "Dividir entre $4$ en lugar de entre $5$."
      },
      {
        "id": "cs1-est-09",
        "materia": "ccss-i",
        "bloque": "estadistica",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Mediana con datos pares",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "¿Cuál es la mediana de $3,\\ 5,\\ 5,\\ 7,\\ 9,\\ 10$?",
        "pista": "Con un número par de datos, la mediana es la media de los dos centrales.",
        "partes": [
          {
            "etiqueta": "Mediana",
            "opciones": [
              "6",
              "5",
              "7",
              "5,5"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Ordenar",
            "d": "Ya están ordenados: $3,5,5,7,9,10$."
          },
          {
            "t": "Centrales",
            "d": "Los dos centrales son $5$ y $7$: mediana $=\\dfrac{5+7}{2}=6$."
          }
        ],
        "truco": "La mediana no tiene por qué ser un dato de la serie.",
        "errorTipico": "Elegir uno de los dos centrales y responder $5$ o $7$."
      },
      {
        "id": "cs1-fun-06",
        "materia": "ccss-i",
        "bloque": "funciones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Pendiente de una recta",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "¿Cuál es la pendiente de la recta que pasa por $(1,2)$ y $(3,8)$?",
        "pista": "$m=\\dfrac{y_2-y_1}{x_2-x_1}$.",
        "partes": [
          {
            "etiqueta": "Pendiente",
            "opciones": [
              "3",
              "2",
              "$1/3$",
              "6"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Fórmula",
            "d": "$m=\\dfrac{8-2}{3-1}$."
          },
          {
            "t": "Cálculo",
            "d": "$m=6/2=3$."
          }
        ],
        "truco": "La pendiente dice cuánto sube la recta por cada unidad que avanza.",
        "errorTipico": "Dividir al revés y obtener $1/3$."
      },
      {
        "id": "cs1-prob-05",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Suma siete con dos dados",
        "fuente": "EBAU · CCSS I (adaptado)",
        "enunciado": "Lanzas dos dados. ¿Cuál es la probabilidad de que la suma sea $7$?",
        "pista": "Cuenta los pares que suman $7$ entre los $36$ resultados posibles.",
        "partes": [
          {
            "etiqueta": "Probabilidad",
            "opciones": [
              "$\\dfrac16$",
              "$\\dfrac1{12}$",
              "$\\dfrac7{36}$",
              "$\\dfrac19$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Casos favorables",
            "d": "$(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$: seis."
          },
          {
            "t": "Probabilidad",
            "d": "$\\dfrac6{36}=\\dfrac16$."
          }
        ],
        "truco": "La suma $7$ es la más probable con dos dados: tiene 6 formas frente a 1 de la suma $2$.",
        "errorTipico": "Contar solo tres parejas (sin el orden) y responder $1/12$."
      },
      {
        "id": "cs1-prob-06",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Dos monedas: exactamente una cara",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Lanzamos dos monedas equilibradas. Calcula la probabilidad de obtener exactamente una cara y la de obtener al menos una cara.",
        "pista": "Escribe los cuatro resultados posibles: CC, CX, XC y XX. Todos son equiprobables.",
        "partes": [
          {
            "etiqueta": "Exactamente una cara",
            "opciones": [
              "1/2",
              "1/4",
              "3/4",
              "1/3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Al menos una cara",
            "opciones": [
              "3/4",
              "1/2",
              "1/4",
              "2/3"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Casos posibles",
            "d": "CC, CX, XC y XX: cuatro resultados equiprobables."
          },
          {
            "t": "Exactamente una cara",
            "d": "CX y XC: dos casos. $P=2/4=1/2$."
          },
          {
            "t": "Al menos una cara",
            "d": "CC, CX y XC: tres casos. $P=3/4$."
          }
        ],
        "truco": "«Al menos una cara» es el contrario de «ninguna cara»: $1-1/4=3/4$.",
        "errorTipico": "Contar solo una moneda o confundir «exactamente una» con «al menos una»."
      },
      {
        "id": "cs1-prob-07",
        "materia": "ccss-i",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Probabilidad con un dado",
        "fuente": "Currículo CV · Matemáticas CCSS I",
        "enunciado": "Lanzamos un dado de seis caras equilibrado. Calcula la probabilidad de obtener un número par y la de obtener un número mayor que 4.",
        "pista": "Hay seis resultados equiprobables: 1, 2, 3, 4, 5 y 6.",
        "partes": [
          {
            "etiqueta": "Número par",
            "opciones": [
              "1/2",
              "1/3",
              "1/6",
              "2/3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Mayor que 4",
            "opciones": [
              "1/3",
              "1/2",
              "1/6",
              "2/3"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Números pares",
            "d": "2, 4 y 6: tres casos. $P=3/6=1/2$."
          },
          {
            "t": "Mayores que 4",
            "d": "5 y 6: dos casos. $P=2/6=1/3$."
          },
          {
            "t": "Total",
            "d": "El dado tiene seis caras, así que el denominador es 6 en ambos casos."
          }
        ],
        "truco": "Cuenta los casos favorables y divide entre 6; simplifica la fracción al final.",
        "errorTipico": "Incluir el 4 como mayor que 4 o contar mal los números pares."
      }
    ]
  );
})();
