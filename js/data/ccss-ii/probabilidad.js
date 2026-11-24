/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Probabilidad · 10 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-est-01",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Tabla de contingencia: idiomas",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "De 200 estudiantes, 120 estudian inglés, 80 francés y 50 ambos idiomas. Se elige uno al azar. Calcula:",
        "pista": "Pasa los datos a probabilidades dividiendo entre 200. Para la unión, resta la intersección; para la condicionada, divide por $P(F)$.",
        "partes": [
          {
            "etiqueta": "a) $P(I\\cup F)$",
            "opciones": [
              "0,25",
              "0,38",
              "0,63",
              "0,75"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "b) $P(I\\mid F)$",
            "opciones": [
              "0,375",
              "0,313",
              "0,625",
              "0,750"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "c) Probabilidad de no estudiar ninguno",
            "opciones": [
              "0,75",
              "0,25",
              "0,50",
              "0,13"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Probabilidades",
            "d": "$P(I)=0{,}6$, $P(F)=0{,}4$, $P(I\\cap F)=0{,}25$."
          },
          {
            "t": "Unión y condicionada",
            "d": "$P(I\\cup F)=0{,}6+0{,}4-0{,}25=0{,}75$; $P(I\\mid F)=\\dfrac{0{,}25}{0{,}4}=0{,}625$."
          },
          {
            "t": "Ninguno",
            "d": "$1-P(I\\cup F)=1-0{,}75=0{,}25$."
          }
        ],
        "truco": "Con una tabla de contingencia, rellena primero los marginales y las casillas que faltan; casi todas las preguntas se leen directamente.",
        "errorTipico": "Dividir la intersección entre 120 (el total de inglés) cuando la condición es «sabiendo que estudia francés»: el denominador debe ser 80."
      },
      {
        "id": "cs2-est-02",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Bayes en el control de calidad",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Una fábrica produce el $60\\,\\%$ de sus piezas en la máquina $A$ y el $40\\,\\%$ en $B$. El $2\\,\\%$ de las piezas de $A$ y el $5\\,\\%$ de las de $B$ son defectuosas. Se toma una pieza al azar. Calcula:",
        "pista": "Probabilidad total: suma las dos ramas que acaban en defectuosa. Para Bayes, divide la rama $A\\to D$ entre ese total.",
        "partes": [
          {
            "etiqueta": "a) $P(D)$",
            "opciones": [
              "0,968",
              "0,032",
              "0,064",
              "0,016"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "b) $P(A\\mid D)$",
            "opciones": [
              "0,625",
              "0,750",
              "0,188",
              "0,375"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Árbol",
            "d": "$P(A)=0{,}6$, $P(D\\mid A)=0{,}02$; $P(B)=0{,}4$, $P(D\\mid B)=0{,}05$."
          },
          {
            "t": "Probabilidad total",
            "d": "$P(D)=0{,}6\\cdot0{,}02+0{,}4\\cdot0{,}05=0{,}012+0{,}020=0{,}032$."
          },
          {
            "t": "Bayes",
            "d": "$P(A\\mid D)=\\dfrac{0{,}012}{0{,}032}=0{,}375$."
          }
        ],
        "truco": "En Bayes, el numerador es siempre una de las ramas del árbol y el denominador es la suma de todas las ramas que producen el suceso observado.",
        "errorTipico": "Comparar $0{,}02$ con $0{,}05$ y decir que es más probable que venga de $B$. Aunque el porcentaje de defectuosas sea mayor en $B$, hay menos producción de $B$."
      },
      {
        "id": "cs2-est-03",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Binomial en un control de calidad",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "El $5\\,\\%$ de los artículos de un lote son defectuosos. Se extraen 20 al azar. Calcula, con 4 decimales:",
        "pista": "$X\\sim B(20;\\,0{,}05)$. Para $P(X\\ge1)$, usa $1-P(X=0)$; para $P(X=1)$, no olvides el factor $\\binom{20}{1}=20$.",
        "partes": [
          {
            "etiqueta": "a) $P(X=0)$",
            "opciones": [
              "0,6415",
              "0,7170",
              "0,1792",
              "0,3585"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "b) $P(X=1)$",
            "opciones": [
              "0,6226",
              "0,7548",
              "0,1887",
              "0,3774"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "c) $P(X\\ge1)$",
            "opciones": [
              "0,3585",
              "0,3207",
              "0,6415",
              "0,3774"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Modelo",
            "d": "$X$ = número de defectuosos, $X\\sim B(20;\\,0{,}05)$; $q=0{,}95$."
          },
          {
            "t": "Ninguno y uno",
            "d": "$P(X=0)=0{,}95^{20}\\approx0{,}3585$; $P(X=1)=20\\cdot0{,}05\\cdot0{,}95^{19}\\approx0{,}3774$."
          },
          {
            "t": "Al menos uno",
            "d": "$P(X\\ge1)=1-P(X=0)\\approx1-0{,}3585=0{,}6415$."
          }
        ],
        "truco": "$P(X=0)=q^n$ es inmediato y sirve para «al menos uno». Es el cálculo más rentable de toda la binomial.",
        "errorTipico": "Calcular $P(X=1)=0{,}05\\cdot0{,}95^{19}$ y olvidar el $20$: hay 20 posiciones posibles para el artículo defectuoso."
      },
      {
        "id": "cs2-est-04",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Distribución normal tipificada",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "La puntuación de un test sigue una distribución normal de media $500$ y desviación típica $100$. Calcula, usando la tabla normal tipificada:",
        "pista": "Tipifica: $Z=\\frac{X-\\mu}{\\sigma}$. Después usa la simetría $P(Z\\gt a)=1-P(Z\\lt a)$ y $P(-a\\lt Z\\lt a)=2P(0\\lt Z\\lt a)$ cuando haga falta.",
        "partes": [
          {
            "etiqueta": "a) $P(X\\lt650)$",
            "opciones": [
              "0,9332",
              "0,0668",
              "0,4666",
              "0,6826"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "b) $P(X\\gt700)$",
            "opciones": [
              "0,9772",
              "0,0228",
              "0,0456",
              "0,0114"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "c) $P(400\\lt X\\lt600)$",
            "opciones": [
              "0,3174",
              "0,6826",
              "0,3413",
              "0,9332"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Tipificar 650",
            "d": "$z=\\dfrac{650-500}{100}=1{,}5$, luego $P(X\\lt650)=P(Z\\lt1{,}5)=0{,}9332$."
          },
          {
            "t": "Tipificar 700",
            "d": "$z=2$, $P(X\\gt700)=P(Z\\gt2)=1-0{,}9772=0{,}0228$."
          },
          {
            "t": "Intervalo simétrico",
            "d": "$400$ y $600$ corresponden a $z=-1$ y $z=1$: $P(-1\\lt Z\\lt1)=0{,}8413-0{,}1587=0{,}6826$."
          }
        ],
        "truco": "Dibuja la campana y sombrea. Un $z=1$ deja $0{,}1587$ a cada lado; casi todos los ejercicios salen de $0{,}8413$, $0{,}9772$ y $0{,}9987$.",
        "errorTipico": "Olvidar tipificar y buscar 650 en la tabla, o restar mal en el intervalo: $P(a\\lt X\\lt b)=P(Z\\lt z_b)-P(Z\\lt z_a)$."
      },
      {
        "id": "cs2-est-06",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Árbol de decisión de compra",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "El $30\\,\\%$ de los clientes compra el producto $A$. De los que compran $A$, el $60\\,\\%$ compra también $B$; de los que no compran $A$, solo el $20\\,\\%$ compra $B$. Calcula:",
        "pista": "Construye el árbol con dos niveles. $P(B)$ es la suma de las dos ramas que acaban en $B$; después aplica Bayes para $P(A\\mid B)$.",
        "partes": [
          {
            "etiqueta": "a) $P(B)$",
            "opciones": [
              "0,68",
              "0,32",
              "0,64",
              "0,16"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "b) $P(A\\mid B)$",
            "opciones": [
              "0,4375",
              "0,2813",
              "0,3200",
              "0,5625"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Ramas",
            "d": "$P(A)=0{,}3$, $P(B\\mid A)=0{,}6$; $P(A^c)=0{,}7$, $P(B\\mid A^c)=0{,}2$."
          },
          {
            "t": "Probabilidad total",
            "d": "$P(B)=0{,}3\\cdot0{,}6+0{,}7\\cdot0{,}2=0{,}18+0{,}14=0{,}32$."
          },
          {
            "t": "Bayes",
            "d": "$P(A\\mid B)=\\dfrac{0{,}18}{0{,}32}=0{,}5625$."
          }
        ],
        "truco": "Escribe el árbol con las probabilidades en las ramas y multiplica al recorrerlo. Para Bayes, «vuelve hacia atrás» dividiendo por el total del efecto.",
        "errorTipico": "Usar $0{,}6$ como $P(B)$ absoluta. $0{,}6$ es condicionada a $A$; hay que ponderarla por $P(A)=0{,}3$."
      },
      {
        "id": "cs2-prob-08",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Binomial: al menos un éxito",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Sea $X\\sim B(6;\\,0{,}2)$. Calcula $P(X=1)$ y $P(X\\ge1)$.",
        "pista": "Para $P(X\\ge1)$ usa el complementario: $1-P(X=0)$. Es mucho más rápido que sumar cinco casos.",
        "partes": [
          {
            "etiqueta": "$P(X=1)$",
            "opciones": [
              "0,3932",
              "0,6068",
              "0,7864",
              "0,1966"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(X\\ge1)$",
            "opciones": [
              "0,7379",
              "0,2621",
              "0,3690",
              "0,3932"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Un éxito",
            "d": "$P(X=1)=\\binom61(0{,}2)(0{,}8)^5=6\\cdot0{,}2\\cdot0{,}32768\\approx0{,}3932$."
          },
          {
            "t": "Complementario",
            "d": "$P(X=0)=0{,}8^6=0{,}262144$."
          },
          {
            "t": "Al menos uno",
            "d": "$P(X\\ge1)=1-0{,}262144=0{,}737856\\approx0{,}7379$."
          }
        ],
        "truco": "«Al menos uno» casi siempre se calcula como $1-P(\\text{ninguno})$. Ahorra tiempo y errores en la PAU.",
        "errorTipico": "Sumar $P(1)+P(2)+\\cdots+P(6)$ y equivocarse por el camino, o calcular $1-P(X=1)$ en vez de $1-P(X=0)$."
      },
      {
        "id": "cs2-est-05",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Aproximar una binomial por una normal",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Sea $X\\sim B(100;\\,0{,}4)$. Calcula la media y la desviación típica de $X$ y aproxima $P(X\\ge50)$ mediante una normal, aplicando corrección de continuidad.",
        "pista": "$\\mu=np=40$, $\\sigma=\\sqrt{npq}$. Para $X\\ge50$, usa el valor $49{,}5$ y tipifica con $\\sigma$.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "40",
              "41",
              "39",
              "42"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Desviación típica",
            "opciones": [
              "4,899",
              "4,949",
              "4,849",
              "4,999"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(X\\ge50)$ aproximada",
            "opciones": [
              "0,9738",
              "0,0262",
              "0,0524",
              "0,0131"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Media y desviación",
            "d": "$\\mu=np=100\\cdot0{,}4=40$; $\\sigma=\\sqrt{100\\cdot0{,}4\\cdot0{,}6}=\\sqrt{24}\\approx4{,}899$."
          },
          {
            "t": "Corrección de continuidad",
            "d": "$P(X\\ge50)\\approx P(Y\\ge49{,}5)$ con $Y\\sim N(40;\\,4{,}899)$."
          },
          {
            "t": "Tipificar",
            "d": "$z=\\dfrac{49{,}5-40}{4{,}899}\\approx1{,}939$; $P(Z\\ge1{,}939)\\approx1-0{,}9738=0{,}0262$."
          }
        ],
        "truco": "La aproximación es buena si $np\\ge5$ y $nq\\ge5$. La corrección de continuidad siempre acerca el valor medio punto ($49{,}5$ para $\\ge50$).",
        "errorTipico": "Tipificar con $50$ en lugar de $49{,}5$, u olvidar dividir por la desviación típica."
      },
      {
        "id": "cs2-prob-06",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Notas con distribución normal",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Las notas de un examen siguen $N(6;\\,1{,}5)$. Calcula $P(X\\ge7{,}5)$, $P(5\\le X\\le7)$ y la nota que deja por debajo al $90\\,\\%$ del alumnado.",
        "pista": "Tipifica con $z=\\frac{x-6}{1{,}5}$. Para el percentil $90$, busca $z$ tal que $\\Phi(z)=0{,}90$ y despeja $x$.",
        "partes": [
          {
            "etiqueta": "$P(X\\ge7{,}5)$",
            "opciones": [
              "0,8413",
              "0,3174",
              "0,1587",
              "0,0794"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "$P(5\\le X\\le7)$",
            "opciones": [
              "0,505",
              "0,990",
              "0,247",
              "0,495"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Percentil 90",
            "opciones": [
              "15,844",
              "3,961",
              "0,495",
              "7,922"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Primera probabilidad",
            "d": "$z=\\frac{7{,}5-6}{1{,}5}=1$; $P(Z\\ge1)=0{,}1587$."
          },
          {
            "t": "Intervalo",
            "d": "$z_1=-0{,}6667$, $z_2=0{,}6667$; $P=2\\Phi(0{,}6667)-1\\approx0{,}4950$."
          },
          {
            "t": "Percentil",
            "d": "$z_{0{,}90}=1{,}2816$; $x=6+1{,}2816\\cdot1{,}5\\approx7{,}922$."
          }
        ],
        "truco": "Dibuja la campana y sombrea. Para «mayor que» resta a 1; para un intervalo, resta las acumuladas.",
        "errorTipico": "Usar $z=7{,}5$ sin tipificar o buscar el percentil $10$ en lugar del $90$."
      },
      {
        "id": "cs2-prob-07",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Bayes con tres máquinas",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Tres máquinas producen el $50\\,\\%$, $30\\,\\%$ y $20\\,\\%$ de la producción. Sus porcentajes de defectuosos son $2\\,\\%$, $3\\,\\%$ y $1\\,\\%$. Calcula la probabilidad de que una pieza sea defectuosa y la de que, siendo defectuosa, venga de la segunda máquina.",
        "pista": "Probabilidad total para el defecto; Bayes para la máquina. Multiplica producción por defectuosos en cada rama.",
        "partes": [
          {
            "etiqueta": "Probabilidad de defectuosa",
            "opciones": [
              "0,979",
              "0,042",
              "0,011",
              "0,021"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "$P(M_2\\mid D)$",
            "opciones": [
              "0,5714",
              "0,4286",
              "0,8572",
              "0,2143"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Probabilidad total",
            "d": "$P(D)=0{,}5\\cdot0{,}02+0{,}3\\cdot0{,}03+0{,}2\\cdot0{,}01=0{,}01+0{,}009+0{,}002=0{,}021$."
          },
          {
            "t": "Bayes",
            "d": "$P(M_2\\mid D)=\\dfrac{0{,}009}{0{,}021}\\approx0{,}4286$."
          },
          {
            "t": "Interpretación",
            "d": "Aunque la máquina 2 produce menos que la 1, su mayor tasa de defectos hace que casi el $43\\,\\%$ de las piezas defectuosas vengan de ella."
          }
        ],
        "truco": "Construye una tabla de doble entrada con cantidades supuestas (por ejemplo, 1000 piezas). Así ves los casos favorables y el total sin fórmulas.",
        "errorTipico": "Comparar directamente $3\\,\\%$ con $2\\,\\%$ sin ponderar por la producción de cada máquina."
      },
      {
        "id": "cs2-prob-09",
        "materia": "ccss-ii",
        "bloque": "probabilidad",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Youtubers: probabilidad total y Bayes",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "El $30\\%$ de los creadores de contenido son talentosos y el $70\\%$ restante, no. Un creador talentoso hace viral un vídeo con probabilidad $0{,}5$; uno no talentoso, con probabilidad $0{,}05$. Calcula la probabilidad de que un vídeo sea viral, la de que un vídeo viral provenga de un creador talentoso y, en $4$ vídeos de un creador no talentoso, la de que al menos $2$ sean virales.",
        "pista": "Haz un árbol con dos ramas (talentoso / no talentoso) y una segunda rama (viral / no viral). Para los $4$ vídeos, usa una binomial y calcula el complementario de «$0$ o $1$ viral».",
        "partes": [
          {
            "etiqueta": "$P(\\text{viral})$",
            "opciones": [
              "$0{,}185$",
              "$0{,}550$",
              "$0{,}035$",
              "$0{,}150$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(\\text{talentoso}\\mid\\text{viral})$",
            "opciones": [
              "$0{,}8108$",
              "$0{,}3000$",
              "$0{,}1500$",
              "$0{,}5000$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(\\text{al menos 2 virales en 4})$",
            "opciones": [
              "$0{,}0140$",
              "$0{,}0005$",
              "$0{,}1715$",
              "$0{,}1850$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Probabilidad total",
            "d": "$P(V)=0{,}3\\cdot0{,}5+0{,}7\\cdot0{,}05=0{,}15+0{,}035=0{,}185$."
          },
          {
            "t": "Bayes",
            "d": "$P(T\\mid V)=\\dfrac{P(T)P(V\\mid T)}{P(V)}=\\dfrac{0{,}15}{0{,}185}\\approx0{,}8108$."
          },
          {
            "t": "Binomial",
            "d": "Con $p=0{,}05$ y $n=4$: $P(X\\ge2)=1-P(0)-P(1)=1-0{,}95^4-4\\cdot0{,}05\\cdot0{,}95^3\\approx1-0{,}8145-0{,}1715=0{,}0140$."
          }
        ],
        "truco": "En Bayes, el denominador es la probabilidad total del suceso observado; si lo olvidas, divides entre la rama equivocada.",
        "errorTipico": "Confundir $P(T\\mid V)$ con $P(V\\mid T)$: el primero pregunta qué proporción de los vídeos virales son de talentosos."
      }
    ]
  );
})();
