/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Integrales · 7 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-fun-04",
        "materia": "ccss-ii",
        "bloque": "integrales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Integral definida y área",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula:",
        "pista": "Busca una primitiva y aplica Barrow. Para el área entre $x$ y $x^2$ en $[0,1]$, integra $x-x^2$ porque $x\\ge x^2$ en ese intervalo.",
        "partes": [
          {
            "etiqueta": "a) $\\displaystyle\\int_0^1(x-x^2)\\,dx$",
            "opciones": [
              "0,3334",
              "0,0833",
              "0,1767",
              "0,1667"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "b) $\\displaystyle\\int_1^3(2x+1)\\,dx$",
            "opciones": [
              "11",
              "9",
              "10",
              "12"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Primitivas",
            "d": "$\\int(x-x^2)\\,dx=\\frac{x^2}{2}-\\frac{x^3}{3}$; $\\int(2x+1)\\,dx=x^2+x$."
          },
          {
            "t": "Barrow en [0,1]",
            "d": "$\\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1=\\frac12-\\frac13=\\frac16\\approx0{,}1667$."
          },
          {
            "t": "Barrow en [1,3]",
            "d": "$\\left[x^2+x\\right]_1^3=(9+3)-(1+1)=10$."
          }
        ],
        "truco": "Comprueba la primitiva derivándola. Es la verificación más rápida y detecta el error antes de evaluar.",
        "errorTipico": "Olvidar restar el valor en el límite inferior. Barrow es $F(b)-F(a)$, no solo $F(b)$."
      },
      {
        "id": "cs2-int-01",
        "materia": "ccss-ii",
        "bloque": "integrales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Integral definida inmediata",
        "fuente": "Currículo CV · Matemáticas CCSS II",
        "enunciado": "Calcula $\\displaystyle\\int_0^1 (2x+1)\\,dx$.",
        "pista": "La primitiva de $2x$ es $x^2$ y la de $1$ es $x$. Aplica Barrow.",
        "opciones": [
          "2",
          "1",
          "2,5",
          "3"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Primitiva",
            "d": "$F(x)=x^2+x$."
          },
          {
            "t": "Barrow",
            "d": "$F(1)-F(0)=(1+1)-0=2$."
          }
        ],
        "truco": "Si el integrando es una suma, integra cada sumando por separado.",
        "errorTipico": "Olvidar integrar el $1$ y calcular solo $\\int_0^1 2x\\,dx=1$."
      },
      {
        "id": "cs2-int-02",
        "materia": "ccss-ii",
        "bloque": "integrales",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Área entre una parábola y una recta",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula el área de la región limitada por la parábola $f(x)=x^2$ y la recta $g(x)=x+2$.",
        "pista": "Primero halla los puntos de corte igualando $x^2=x+2$. Entre ellos, comprueba qué función va por encima y plantea la integral de la diferencia.",
        "partes": [
          {
            "etiqueta": "Puntos de corte",
            "opciones": [
              "$x=-1$ y $x=2$",
              "$x=1$ y $x=2$",
              "$x=-2$ y $x=1$",
              "$x=0$ y $x=2$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Integral que da el área",
            "opciones": [
              "$\\displaystyle\\int_{-1}^{2}(x+2-x^2)\\,dx$",
              "$\\displaystyle\\int_{-1}^{2}(x^2-x-2)\\,dx$",
              "$\\displaystyle\\int_{0}^{2}(x+2-x^2)\\,dx$",
              "$\\displaystyle\\int_{-1}^{2}(x^2+x+2)\\,dx$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área",
            "opciones": [
              "$4{,}5\\ \\text{u}^2$",
              "$9\\ \\text{u}^2$",
              "$3{,}5\\ \\text{u}^2$",
              "$4\\ \\text{u}^2$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Puntos de corte",
            "d": "$x^2=x+2\\Rightarrow x^2-x-2=0\\Rightarrow x=-1$, $x=2$."
          },
          {
            "t": "Orden de las funciones",
            "d": "En $(-1,2)$, por ejemplo en $x=0$: $g(0)=2\\gt0=f(0)$, así que la recta va por encima."
          },
          {
            "t": "Integral",
            "d": "$A=\\displaystyle\\int_{-1}^{2}(x+2-x^2)\\,dx=\\left[\\dfrac{x^2}{2}+2x-\\dfrac{x^3}{3}\\right]_{-1}^{2}$."
          },
          {
            "t": "Evaluar",
            "d": "$\\left(2+4-\\dfrac{8}{3}\\right)-\\left(\\dfrac12-2+\\dfrac13\\right)=\\dfrac{10}{3}+\\dfrac{7}{6}=\\dfrac{9}{2}=4{,}5$."
          }
        ],
        "truco": "El área siempre es positiva: si la integral sale negativa, has restado las funciones en el orden contrario.",
        "errorTipico": "Integrar solo entre $0$ y $2$ y perder el trozo de la izquierda; los cortes marcan los límites completos."
      },
      {
        "id": "cs2-int-03",
        "materia": "ccss-ii",
        "bloque": "integrales",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Integral definida de un polinomio",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula una primitiva de $f(x)=x^2-2x+3$ y evalúa $\\displaystyle\\int_{1}^{3}f(x)\\,dx$.",
        "pista": "Integra término a término y aplica la regla de Barrow. Después deriva tu primitiva para comprobar que recuperas $f$.",
        "partes": [
          {
            "etiqueta": "Primitiva",
            "opciones": [
              "$\\dfrac{x^3}{3}-x^2+3x$",
              "$\\dfrac{x^3}{3}-2x^2+3x$",
              "$3x^2-2x$",
              "$\\dfrac{x^3}{3}-x^2$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor de la integral",
            "opciones": [
              "$\\dfrac{20}{3}$",
              "$7$",
              "$\\dfrac{26}{3}$",
              "$6$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primitiva",
            "d": "$F(x)=\\dfrac{x^3}{3}-x^2+3x$ (la constante se puede tomar $0$)."
          },
          {
            "t": "Barrow",
            "d": "$F(3)=9-9+9=9$ y $F(1)=\\dfrac13-1+3=\\dfrac73$."
          },
          {
            "t": "Restar",
            "d": "$\\displaystyle\\int_{1}^{3}f(x)\\,dx=9-\\dfrac73=\\dfrac{20}{3}\\approx6{,}67$."
          }
        ],
        "truco": "Comprueba la primitiva derivándola: es la forma más rápida de detectar un coeficiente mal dividido.",
        "errorTipico": "Integrar $-2x$ como $-x^2$ está bien, pero integrar $3$ como $3x^2$ o dividir $x^2$ entre $3$ y olvidar el $-x^2$."
      },
      {
        "id": "cs2-int-04",
        "materia": "ccss-ii",
        "bloque": "integrales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Integral definida y valor medio",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Dada $f(x)=2x-3$, calcula $\\int_1^4 f(x)\\,dx$ y el valor medio de $f$ en el intervalo $[1,4]$.",
        "pista": "Una primitiva es $x^2-3x$. Para el valor medio, divide la integral entre la longitud del intervalo.",
        "partes": [
          {
            "etiqueta": "Integral definida",
            "opciones": [
              "6",
              "4",
              "8",
              "3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor medio",
            "opciones": [
              "2",
              "6",
              "3",
              "1,5"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primitiva",
            "d": "$\\int(2x-3)\\,dx=x^2-3x$."
          },
          {
            "t": "Evaluar",
            "d": "$[x^2-3x]_1^4=(16-12)-(1-3)=4-(-2)=6$."
          },
          {
            "t": "Valor medio",
            "d": "$\\frac{1}{4-1}\\int_1^4 f(x)\\,dx=\\frac{6}{3}=2$."
          }
        ],
        "truco": "El valor medio no es la mitad de la integral: se divide por la longitud del intervalo.",
        "errorTipico": "Dividir entre 4 en vez de entre $4-1=3$, u olvidar restar el valor de la primitiva en el límite inferior."
      },
      {
        "id": "cs2-int-05",
        "materia": "ccss-ii",
        "bloque": "integrales",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Integral definida y área bajo el eje",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula la integral definida $\\int_1^3 (x^2-4x+3)\\,dx$ y el área del recinto limitado por la parábola y el eje $OX$ entre $x=1$ y $x=3$.",
        "pista": "La parábola corta el eje en $x=1$ y $x=3$, y entre esas raíces va por debajo. Calcula la integral y toma su valor absoluto para el área.",
        "partes": [
          {
            "etiqueta": "Integral definida",
            "opciones": [
              "-4/3",
              "4/3",
              "0",
              "-8/3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área",
            "opciones": [
              "4/3",
              "8/3",
              "2",
              "16/3"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primitiva",
            "d": "$\\int(x^2-4x+3)\\,dx=\\frac{x^3}{3}-2x^2+3x$."
          },
          {
            "t": "Evaluar",
            "d": "En $x=3$: $9-18+9=0$. En $x=1$: $\\frac13-2+3=\\frac43$. Integral: $0-\\frac43=-\\frac43$."
          },
          {
            "t": "Área",
            "d": "Como la función va por debajo del eje, el área es $\\left|-\\frac43\\right|=\\frac43$."
          }
        ],
        "truco": "El área es el valor absoluto de la integral; si la función va por debajo del eje, cambia el signo.",
        "errorTipico": "Dar la integral negativa como área o restar los límites al revés."
      },
      {
        "id": "cs2-int-06",
        "materia": "ccss-ii",
        "bloque": "integrales",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Área entre una parábola y una recta",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Calcula el área del recinto limitado por $y=x^2$ y $y=x+2$. Indica los puntos de corte y qué función queda por arriba.",
        "pista": "Iguala las dos expresiones para hallar los cortes. Entre ellos, integra (recta − parábola).",
        "partes": [
          {
            "etiqueta": "Puntos de corte",
            "opciones": [
              "x=-1 y x=2",
              "x=1 y x=-2",
              "x=0 y x=2",
              "x=-1 y x=3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Función que va arriba",
            "opciones": [
              "y=x+2",
              "y=x^2",
              "Se cruzan en todo el intervalo",
              "Ninguna"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área",
            "opciones": [
              "9/2",
              "3",
              "6",
              "15/2"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Cortes",
            "d": "$x^2=x+2\\Rightarrow x^2-x-2=0\\Rightarrow x=-1$ y $x=2$."
          },
          {
            "t": "Orden de las funciones",
            "d": "En $x=0$: la recta vale $2$ y la parábola $0$, así que la recta va arriba."
          },
          {
            "t": "Área",
            "d": "$\\int_{-1}^{2}(x+2-x^2)\\,dx=\\left[\\frac{x^2}{2}+2x-\\frac{x^3}{3}\\right]_{-1}^{2}=\\frac{10}{3}+\\frac{7}{6}=\\frac{9}{2}$."
          }
        ],
        "truco": "Primero busca los cortes y después integra (arriba − abajo); el área siempre es positiva.",
        "errorTipico": "Integrar la diferencia al revés y dar un área negativa, o no buscar los puntos de corte."
      }
    ]
  );
})();
