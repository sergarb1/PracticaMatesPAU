/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Inferencia · 7 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-inf-01",
        "materia": "ccss-ii",
        "bloque": "inferencia",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Tipificar una variable normal",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Sea $X\\sim N(50,10)$. Calcula el valor tipificado de $x=60$ y la probabilidad $P(X\\le60)$ usando la tabla normal estándar.",
        "pista": "$z=\\dfrac{x-\\mu}{\\sigma}$. Después busca en la tabla el área a la izquierda de ese $z$.",
        "partes": [
          {
            "etiqueta": "Valor tipificado $z$",
            "opciones": [
              "$1$",
              "$0{,}5$",
              "$10$",
              "$6$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(X\\le60)$",
            "opciones": [
              "$0{,}8413$",
              "$0{,}1587$",
              "$0{,}5000$",
              "$0{,}9772$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Tipificar",
            "d": "$z=\\dfrac{60-50}{10}=1$."
          },
          {
            "t": "Tabla",
            "d": "$P(Z\\le1)=0{,}8413$, luego $P(X\\le60)=0{,}8413$."
          }
        ],
        "truco": "Tipifica siempre antes de buscar en la tabla; si buscas «mayor que», resta a 1.",
        "errorTipico": "Dividir entre la varianza $10^2$ o plantear $\\dfrac{50-60}{10}=-1$ y quedarse con $0{,}1587$."
      },
      {
        "id": "cs2-inf-02",
        "materia": "ccss-ii",
        "bloque": "inferencia",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Intervalo de confianza para la media",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "En una muestra de $100$ personas la media de una variable es $25$, con desviación típica poblacional $\\sigma=5$. Construye el intervalo de confianza al $95\\,\\%$ ($z=1{,}96$).",
        "pista": "El error máximo es $E=z\\cdot\\dfrac{\\sigma}{\\sqrt{n}}$. El intervalo es $\\bar{x}\\pm E$.",
        "partes": [
          {
            "etiqueta": "Error máximo $E$",
            "opciones": [
              "$0{,}98$",
              "$1{,}96$",
              "$0{,}49$",
              "$0{,}50$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Intervalo",
            "opciones": [
              "$[24{,}02;\\,25{,}98]$",
              "$[23{,}04;\\,26{,}96]$",
              "$[24{,}51;\\,25{,}49]$",
              "$[24{,}90;\\,25{,}10]$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Error",
            "d": "$E=1{,}96\\cdot\\dfrac{5}{\\sqrt{100}}=1{,}96\\cdot0{,}5=0{,}98$."
          },
          {
            "t": "Intervalo",
            "d": "$[25-0{,}98;\\,25+0{,}98]=[24{,}02;\\,25{,}98]$."
          }
        ],
        "truco": "Cuadruplicar el tamaño de la muestra reduce el error a la mitad: aparece $\\sqrt{n}$.",
        "errorTipico": "Olvidar la raíz y dividir entre $n=100$, con lo que el error sale $10$ veces menor."
      },
      {
        "id": "cs2-inf-03",
        "materia": "ccss-ii",
        "bloque": "inferencia",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Tamaño mínimo de la muestra",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Con $\\sigma=5$ y un nivel de confianza del $95\\,\\%$ ($z=1{,}96$), ¿qué tamaño de muestra hace falta para que el error máximo no supere $0{,}5$?",
        "pista": "Despeja $n$ en $E=z\\dfrac{\\sigma}{\\sqrt{n}}$, es decir, $n=\\left(\\dfrac{z\\sigma}{E}\\right)^2$, y redondea hacia arriba.",
        "partes": [
          {
            "etiqueta": "Tamaño mínimo $n$",
            "opciones": [
              "$385$",
              "$384$",
              "$400$",
              "$196$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Despejar",
            "d": "$n=\\left(\\dfrac{1{,}96\\cdot5}{0{,}5}\\right)^2=(19{,}6)^2=384{,}16$."
          },
          {
            "t": "Redondear",
            "d": "Con $384$ el error supera $0{,}5$: hace falta $n=385$."
          }
        ],
        "truco": "Al calcular tamaños de muestra, redondea siempre hacia arriba, aunque el decimal sea pequeño.",
        "errorTipico": "Redondear a $384$ y quedarse justo por debajo de la precisión exigida."
      },
      {
        "id": "cs2-inf-04",
        "materia": "ccss-ii",
        "bloque": "inferencia",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Intervalo de confianza para una proporción",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "En una muestra de $400$ encuestados, $160$ están a favor de una medida. Construye el intervalo de confianza al $95\\,\\%$ ($z=1{,}96$) para la proporción poblacional.",
        "pista": "La proporción muestral es $\\hat{p}=160/400$. El error es $E=z\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}$.",
        "partes": [
          {
            "etiqueta": "Error máximo $E$",
            "opciones": [
              "$0{,}048$",
              "$0{,}024$",
              "$0{,}096$",
              "$0{,}490$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Intervalo",
            "opciones": [
              "$[0{,}352;\\,0{,}448]$",
              "$[0{,}400;\\,0{,}448]$",
              "$[0{,}304;\\,0{,}496]$",
              "$[0{,}376;\\,0{,}424]$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Proporción muestral",
            "d": "$\\hat{p}=\\dfrac{160}{400}=0{,}4$."
          },
          {
            "t": "Error",
            "d": "$E=1{,}96\\sqrt{\\dfrac{0{,}4\\cdot0{,}6}{400}}=1{,}96\\cdot0{,}024495\\approx0{,}048$."
          },
          {
            "t": "Intervalo",
            "d": "$[0{,}4-0{,}048;\\,0{,}4+0{,}048]=[0{,}352;\\,0{,}448]$."
          }
        ],
        "truco": "En proporciones, $\\hat{p}(1-\\hat{p})$ hace de varianza; el máximo error posible aparece con $\\hat{p}=0{,}5$.",
        "errorTipico": "Usar $\\sigma=0{,}4$ directamente, sin el factor $\\sqrt{\\hat{p}(1-\\hat{p})}$."
      },
      {
        "id": "cs2-inf-05",
        "materia": "ccss-ii",
        "bloque": "inferencia",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Aproximación normal de la binomial",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Una moneda se lanza $100$ veces. Aproximando la binomial por una normal, indica la media y la desviación típica, y calcula $P(45\\le X\\le55)$.",
        "pista": "$\\mu=np$ y $\\sigma=\\sqrt{np(1-p)}$. Después tipifica los extremos y usa que $P(-1\\le Z\\le1)\\approx0{,}6826$.",
        "partes": [
          {
            "etiqueta": "Media y desviación típica",
            "opciones": [
              "$\\mu=50$, $\\sigma=5$",
              "$\\mu=50$, $\\sigma=25$",
              "$\\mu=25$, $\\sigma=5$",
              "$\\mu=100$, $\\sigma=50$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(45\\le X\\le55)$",
            "opciones": [
              "$0{,}6826$",
              "$0{,}9544$",
              "$0{,}3413$",
              "$0{,}9972$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Parámetros",
            "d": "$\\mu=np=100\\cdot0{,}5=50$; $\\sigma=\\sqrt{100\\cdot0{,}5\\cdot0{,}5}=\\sqrt{25}=5$."
          },
          {
            "t": "Tipificar",
            "d": "$z_1=\\dfrac{45-50}{5}=-1$ y $z_2=\\dfrac{55-50}{5}=1$."
          },
          {
            "t": "Probabilidad",
            "d": "$P(-1\\le Z\\le1)=2\\cdot0{,}8413-1=0{,}6826$."
          }
        ],
        "truco": "La desviación típica de una binomial es la raíz de $npq$; la varianza es $npq$ sin raíz.",
        "errorTipico": "Tomar $\\sigma=25$ (la varianza) y tipificar con $25$, lo que da probabilidades absurdas."
      },
      {
        "id": "cs2-inf-06",
        "materia": "ccss-ii",
        "bloque": "inferencia",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Intervalo de confianza para una proporción",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "En una muestra de 400 estudiantes, 240 usan el transporte público. Calcula el error estándar, el margen de error y el intervalo de confianza al 95 % para la proporción poblacional. Usa $z=1{,}96$.",
        "pista": "La proporción muestral es $\\hat p=240/400=0{,}6$. El error estándar es $\\sqrt{\\hat p(1-\\hat p)/n}$.",
        "partes": [
          {
            "etiqueta": "Error estándar",
            "opciones": [
              "0,0245",
              "0,0240",
              "0,0490",
              "0,0123"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Margen de error",
            "opciones": [
              "0,0480",
              "0,0245",
              "0,0960",
              "0,0510"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Intervalo al 95 %",
            "opciones": [
              "[0,552; 0,648]",
              "[0,576; 0,624]",
              "[0,540; 0,660]",
              "[0,552; 0,624]"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Proporción muestral",
            "d": "$\\hat p=240/400=0{,}6$."
          },
          {
            "t": "Error estándar",
            "d": "$\\sqrt{0{,}6\\cdot0{,}4/400}=\\sqrt{0{,}0006}\\approx0{,}0245$."
          },
          {
            "t": "Margen de error",
            "d": "$1{,}96\\cdot0{,}0245\\approx0{,}0480$."
          },
          {
            "t": "Intervalo",
            "d": "$0{,}6\\pm0{,}0480=[0{,}552;\\ 0{,}648]$."
          }
        ],
        "truco": "Con proporciones, el error estándar usa $\\hat p(1-\\hat p)/n$; no se divide por $n$ fuera de la raíz.",
        "errorTipico": "Usar $0{,}5$ en lugar de $\\hat p$ o confundir el error estándar con el margen de error."
      },
      {
        "id": "cs2-inf-07",
        "materia": "ccss-ii",
        "bloque": "inferencia",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Intervalo de confianza para la media",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Una muestra de 64 estudiantes tiene una media de $6{,}5$ horas de sueño y una desviación típica de $1{,}2$ horas. Calcula el error estándar, el margen de error y el intervalo de confianza al 95 % para la media. Usa $z=1{,}96$.",
        "pista": "El error estándar de la media es $s/\\sqrt{n}$. Después multiplica por $z$ y suma y resta a la media.",
        "partes": [
          {
            "etiqueta": "Error estándar",
            "opciones": [
              "0,15",
              "0,019",
              "0,30",
              "0,12"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Margen de error",
            "opciones": [
              "0,294",
              "0,150",
              "0,588",
              "0,300"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Intervalo al 95 %",
            "opciones": [
              "[6,21; 6,79]",
              "[6,35; 6,65]",
              "[6,21; 6,65]",
              "[6,06; 6,94]"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Error estándar",
            "d": "$s/\\sqrt{n}=1{,}2/8=0{,}15$."
          },
          {
            "t": "Margen de error",
            "d": "$1{,}96\\cdot0{,}15=0{,}294$."
          },
          {
            "t": "Intervalo",
            "d": "$6{,}5\\pm0{,}294=[6{,}206;6{,}794]\\approx[6{,}21;6{,}79]$."
          }
        ],
        "truco": "Con la media, el error estándar es $s/\\sqrt{n}$; no confundas la desviación típica con el error estándar.",
        "errorTipico": "Dividir por $n$ en vez de por $\\sqrt{n}$ o usar $z=1{,}64$ para un nivel del 95 %."
      }
    ]
  );
})();
