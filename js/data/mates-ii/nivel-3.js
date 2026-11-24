/* PAU Mates CV — Matemáticas II · 2º Bachillerato (Ciencias)
   nivel-3 · nivel PAU · 22 ejercicios
Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "m2-alg-04",
        "materia": "mates-ii",
        "bloque": "sistemas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Discusión de un sistema 3×3",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Estudia el sistema $\\begin{cases}x+y+z=0\\\\[2pt] x+ay+z=1\\\\[2pt] x+y+az=1\\end{cases}$ y determina para qué valor de $a$ es incompatible.",
        "pista": "Calcula el determinante de la matriz de coeficientes. Se anula para un solo valor de $a$; sustitúyelo y compara la primera ecuación con las otras dos.",
        "partes": [
          {
            "etiqueta": "Valor de $a$ para el que el sistema es incompatible",
            "opciones": [
              "2",
              "0",
              "1",
              "3"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Determinante",
            "d": "$\\det A=\\begin{vmatrix}1&1&1\\\\1&a&1\\\\1&1&a\\end{vmatrix}=(a-1)^2$."
          },
          {
            "t": "Caso general",
            "d": "Si $a\\ne1$, el determinante no es cero y el sistema es compatible determinado (Rouché: rango 3)."
          },
          {
            "t": "Caso a = 1",
            "d": "El sistema queda $x+y+z=0$ y $x+y+z=1$ (dos veces), ecuaciones contradictorias: incompatible."
          }
        ],
        "truco": "Cuando el determinante es un cuadrado, sospecha que el caso singular es incompatible por una ecuación duplicada con distinto término independiente.",
        "errorTipico": "Concluir «infinitas soluciones» porque el determinante se anula. Hay que comparar los rangos de $A$ y de la ampliada."
      },
      {
        "id": "m2-alg-05",
        "materia": "mates-ii",
        "bloque": "sistemas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Rango con parámetro",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $A=\\begin{pmatrix}1&2&3\\\\0&1&4\\\\2&5&a\\end{pmatrix}$. Determina el valor de $a$ para el que $\\operatorname{rango}(A)=2$.",
        "pista": "El rango baja de 3 a 2 cuando el determinante se anula, siempre que quede algún menor $2\\times2$ no nulo.",
        "partes": [
          {
            "etiqueta": "Valor de a",
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
            "t": "Determinante",
            "d": "$\\det A=1(1\\cdot a-4\\cdot5)-2(0\\cdot a-4\\cdot2)+3(0\\cdot5-1\\cdot2)=a-10$."
          },
          {
            "t": "Anular el determinante",
            "d": "$\\det A=0\\iff a=10$. Con ese valor el rango es como mucho 2."
          },
          {
            "t": "Comprobar el menor",
            "d": "El menor $\\begin{vmatrix}1&2\\\\0&1\\end{vmatrix}=1\\ne0$, luego el rango es exactamente 2."
          }
        ],
        "truco": "Rango 2 significa: determinante 3×3 nulo + algún menor 2×2 distinto de cero. Comprueba siempre el menor; si no, podría ser rango 1.",
        "errorTipico": "Decir directamente que el rango es 1 cuando el determinante se anula. Hay que bajar solo un escalón, no dos."
      },
      {
        "id": "m2-geo-02",
        "materia": "mates-ii",
        "bloque": "vectores",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Recta y plano: corte y ángulo",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $r:(x,y,z)=(1,0,2)+t(1,1,0)$ y $\\pi:2x-y+z=3$. Calcula el valor de $t$ en el punto de corte y el ángulo entre la recta y el plano.",
        "pista": "Sustituye $x=1+t$, $y=t$, $z=2$ en la ecuación del plano. Para el ángulo, usa $\\operatorname{sen}\\theta=\\frac{|\\vec n\\cdot\\vec d|}{|\\vec n||\\vec d|}$.",
        "partes": [
          {
            "etiqueta": "Valor de t en el corte",
            "opciones": [
              "0",
              "−2",
              "−1",
              "1"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "Ángulo recta-plano ($^\\circ$)",
            "opciones": [
              "73,22",
              "26,78",
              "16,78",
              "6,78"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Sustituir en el plano",
            "d": "$2(1+t)-t+2=3\\Rightarrow4+t=3\\Rightarrow t=-1$. El punto es $(0,-1,2)$."
          },
          {
            "t": "Ángulo",
            "d": "$\\vec n=(2,-1,1)$, $\\vec d=(1,1,0)$; $\\vec n\\cdot\\vec d=1$, $|\\vec n|=\\sqrt6$, $|\\vec d|=\\sqrt2$."
          },
          {
            "t": "Calcular",
            "d": "$\\operatorname{sen}\\theta=\\dfrac{1}{\\sqrt{12}}\\approx0{,}2887\\Rightarrow\\theta\\approx16{,}78^\\circ$."
          }
        ],
        "truco": "Recta-plano usa SENO (el ángulo se mide con la normal del plano), no coseno. Si usas coseno estás midiendo el ángulo con la normal.",
        "errorTipico": "Aplicar la fórmula del ángulo entre dos rectas (coseno) a una recta y un plano, o sustituir mal el parámetro al pasar de paramétricas a implícitas."
      },
      {
        "id": "m2-geo-04",
        "materia": "mates-ii",
        "bloque": "vectores",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Triángulo en el espacio y plano asociado",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sean $A(1,0,0)$, $B(0,1,0)$ y $C(0,0,1)$. Calcula el área del triángulo $ABC$ y la distancia del origen al plano que los contiene.",
        "pista": "Área $=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$. El vector normal del plano es ese producto vectorial; después usa la fórmula de la distancia.",
        "partes": [
          {
            "etiqueta": "Área del triángulo",
            "opciones": [
              "1,732",
              "0,433",
              "0,577",
              "0,866"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Distancia del origen al plano",
            "opciones": [
              "0,5774",
              "1,1548",
              "0,2887",
              "0,8660"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Vectores",
            "d": "$\\overrightarrow{AB}=(-1,1,0)$, $\\overrightarrow{AC}=(-1,0,1)$."
          },
          {
            "t": "Producto vectorial",
            "d": "$\\overrightarrow{AB}\\times\\overrightarrow{AC}=(1,1,1)$, de módulo $\\sqrt3$. Área $=\\frac{\\sqrt3}{2}\\approx0{,}866$."
          },
          {
            "t": "Plano",
            "d": "$x+y+z=1$, normal $(1,1,1)$, $d(0,\\pi)=\\frac{|{-1}|}{\\sqrt3}=\\frac{1}{\\sqrt3}\\approx0{,}5774$."
          }
        ],
        "truco": "El producto vectorial te da a la vez el área (módulo) y la normal del plano. Es la herramienta estrella de geometría en la PAU.",
        "errorTipico": "Olvidar dividir entre 2 al calcular el área del triángulo, o usar el módulo del producto escalar en lugar del vectorial."
      },
      {
        "id": "m2-prob-05",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Clientes que usan la app",
        "fuente": "Inspirado en PAU CV jun. 2025 · P1",
        "enunciado": "El $70\\,\\%$ de los clientes de una tienda usa la app de fidelización. Se eligen 10 clientes al azar. Calcula, con 4 decimales:",
        "pista": "Modelo binomial con $n=10$ y $p=0{,}7$. Para $P(X\\ge9)$ no uses el complementario: solo hay dos casos, $X=9$ y $X=10$.",
        "partes": [
          {
            "etiqueta": "a) $P(X=7)$",
            "opciones": [
              "0,7332",
              "0,5336",
              "0,1334",
              "0,2668"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "b) $P(X\\ge 9)$",
            "opciones": [
              "0,1493",
              "0,8507",
              "0,2986",
              "0,0746"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Identificar el modelo",
            "d": "$X$ = número de clientes con app, $X\\sim B(10;\\,0{,}7)$: hay 10 pruebas independientes y dos resultados posibles."
          },
          {
            "t": "Exactamente 7",
            "d": "$P(X=7)=\\binom{10}{7}(0{,}7)^7(0{,}3)^3=120\\cdot0{,}0823543\\cdot0{,}027\\approx0{,}2668$."
          },
          {
            "t": "Al menos 9",
            "d": "$P(X\\ge9)=P(9)+P(10)=10(0{,}7)^9(0{,}3)+(0{,}7)^{10}\\approx0{,}1211+0{,}0282=0{,}1493$."
          }
        ],
        "truco": "Con la tabla binomial, busca la fila $n=10$ y la columna $p=0{,}70$. Si la tabla es de $P(X=x)$, lee directamente; si es acumulada, resta $F(7)-F(6)$.",
        "errorTipico": "Olvidar el coeficiente binomial y calcular solo $0{,}7^7\\cdot0{,}3^3$. Hay $\\binom{10}{7}$ formas de elegir qué 7 clientes usan la app."
      },
      {
        "id": "m2-alg-07",
        "materia": "mates-ii",
        "bloque": "matrices",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Ecuación matricial 2×2",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sean $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$ y $B=\\begin{pmatrix}3&2\\\\2&2\\end{pmatrix}$. Resuelve $AX=B$ e indica los cuatro elementos de $X$.",
        "pista": "Como $\\det A=1\\ne0$, existe $A^{-1}$ y $X=A^{-1}B$. Calcula la inversa y multiplica en ese orden.",
        "partes": [
          {
            "etiqueta": "$x_{11}$",
            "opciones": [
              "2",
              "1",
              "0",
              "3"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "$x_{12}$",
            "opciones": [
              "1",
              "0",
              "−1",
              "2"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "$x_{21}$",
            "opciones": [
              "2",
              "0",
              "1",
              "3"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "$x_{22}$",
            "opciones": [
              "3",
              "2",
              "1",
              "4"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Determinante e inversa",
            "d": "$\\det A=2\\cdot1-1\\cdot1=1$ y $A^{-1}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$."
          },
          {
            "t": "Multiplicar por la izquierda",
            "d": "$X=A^{-1}B=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}\\begin{pmatrix}3&2\\\\2&2\\end{pmatrix}=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$."
          },
          {
            "t": "Comprobar",
            "d": "$AX=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}=\\begin{pmatrix}3&2\\\\2&2\\end{pmatrix}=B$."
          }
        ],
        "truco": "Comprueba primero que $A^{-1}A=I$. Si la inversa está mal, el producto final también, por muy bien que multipliques.",
        "errorTipico": "Multiplicar $BA^{-1}$ en lugar de $A^{-1}B$. El producto de matrices no conmuta."
      },
      {
        "id": "m2-ana-08",
        "materia": "mates-ii",
        "bloque": "derivadas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Caja sin tapa: superficie mínima",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Se quiere construir una caja sin tapa de base cuadrada y volumen $32\\ \\text{dm}^3$. Calcula el lado de la base, la altura y la superficie total mínima.",
        "pista": "Si el lado de la base es $x$, la altura es $h=32/x^2$. La superficie es $S=x^2+4xh$; sustitúyela y deriva.",
        "partes": [
          {
            "etiqueta": "Lado de la base (dm)",
            "opciones": [
              "5",
              "3",
              "6",
              "4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Altura (dm)",
            "opciones": [
              "2",
              "3",
              "1",
              "4"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Superficie mínima ($\\text{dm}^2$)",
            "opciones": [
              "49",
              "47",
              "50",
              "48"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Relacionar las variables",
            "d": "$V=x^2h=32\\Rightarrow h=\\frac{32}{x^2}$."
          },
          {
            "t": "Función superficie",
            "d": "$S(x)=x^2+4x\\cdot\\frac{32}{x^2}=x^2+\\frac{128}{x}$."
          },
          {
            "t": "Minimizar",
            "d": "$S'(x)=2x-\\frac{128}{x^2}=0\\Rightarrow x^3=64\\Rightarrow x=4$; $h=2$ y $S(4)=16+32=48$."
          }
        ],
        "truco": "Antes de derivar, reduce a una sola variable usando la restricción de volumen. Si derivas con dos variables, necesitas multiplicadores de Lagrange.",
        "errorTipico": "Contar la tapa en la superficie ($2x^2+4xh$) o olvidar que la altura también depende de $x$."
      },
      {
        "id": "m2-ana-09",
        "materia": "mates-ii",
        "bloque": "integrales",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Área entre dos curvas",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula el área de la región limitada por la parábola $y=x^2$ y la recta $y=2x$.",
        "pista": "Primero busca los puntos de corte igualando $x^2=2x$. Entre ellos, la recta va por encima de la parábola.",
        "partes": [
          {
            "etiqueta": "Área",
            "opciones": [
              "1,3333",
              "2,6666",
              "0,6666",
              "1,3433"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Puntos de corte",
            "d": "$x^2=2x\\Rightarrow x(x-2)=0\\Rightarrow x=0,\\ x=2$."
          },
          {
            "t": "Plantear la integral",
            "d": "$A=\\int_0^2(2x-x^2)\\,dx$."
          },
          {
            "t": "Calcular",
            "d": "$A=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=4-\\frac83=\\frac43\\approx1{,}3333$."
          }
        ],
        "truco": "El área siempre es positiva: resta la curva que queda debajo. Si no sabes cuál es cuál, prueba un punto intermedio.",
        "errorTipico": "Integrar sin restar o hacerlo entre límites que no son los cortes. Los cortes son la frontera de la región."
      },
      {
        "id": "m2-prob-07",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Test diagnóstico: probabilidad inversa",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Una enfermedad afecta al $2\\,\\%$ de la población. Un test tiene sensibilidad del $95\\,\\%$ y especificidad del $90\\,\\%$. Calcula la probabilidad de dar positivo y la de estar enfermo sabiendo que se ha dado positivo.",
        "pista": "Usa el teorema de la probabilidad total para $P(+)$ y Bayes para $P(E\\mid+)$. La especificidad del $90\\,\\%$ implica un $10\\,\\%$ de falsos positivos.",
        "partes": [
          {
            "etiqueta": "$P(+)$",
            "opciones": [
              "0,117",
              "0,883",
              "0,234",
              "0,059"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(E\\mid+)$",
            "opciones": [
              "0,8376",
              "0,1624",
              "0,3248",
              "0,0812"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Datos",
            "d": "$P(E)=0{,}02$, $P(+\\mid E)=0{,}95$, $P(+\\mid\\bar E)=0{,}10$."
          },
          {
            "t": "Probabilidad total",
            "d": "$P(+)=0{,}02\\cdot0{,}95+0{,}98\\cdot0{,}10=0{,}019+0{,}098=0{,}117$."
          },
          {
            "t": "Bayes",
            "d": "$P(E\\mid+)=\\dfrac{0{,}019}{0{,}117}\\approx0{,}1624$."
          }
        ],
        "truco": "Dibuja el árbol con dos ramas (enfermo/no enfermo) y dos resultados (positivo/negativo). Bayes es solo una división entre la suma de los caminos que acaban en positivo.",
        "errorTipico": "Confundir $P(+\\mid E)$ con $P(E\\mid+)$ e ignorar los falsos positivos, que en enfermedades raras pueden ser mayoría."
      },
      {
        "id": "m2-geo-06",
        "materia": "mates-ii",
        "bloque": "geometria",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Simétrico de un punto respecto de un plano",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula el simétrico de $P(1,2,3)$ respecto del plano $\\pi:x+y+z=3$.",
        "pista": "Proyecta $P$ sobre el plano siguiendo la dirección normal $(1,1,1)$ y después duplica la distancia: $P'=2Q-P$.",
        "partes": [
          {
            "etiqueta": "$x$",
            "opciones": [
              "−1",
              "0",
              "−2",
              "1"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$y$",
            "opciones": [
              "1",
              "−1",
              "0",
              "2"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "$z$",
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
            "t": "Distancia dirigida",
            "d": "$\\dfrac{1+2+3-3}{\\sqrt3}=\\sqrt3$. El pie de la perpendicular es $Q=P-\\sqrt3\\cdot\\dfrac{(1,1,1)}{\\sqrt3}=(0,1,2)$."
          },
          {
            "t": "Simétrico",
            "d": "$P'=2Q-P=2(0,1,2)-(1,2,3)=(-1,0,1)$."
          },
          {
            "t": "Comprobar",
            "d": "El punto medio de $P$ y $P'$ es $(0,1,2)$, que pertenece al plano."
          }
        ],
        "truco": "El simétrico se obtiene con $P'=P-2\\dfrac{ax_0+by_0+cz_0+d}{a^2+b^2+c^2}(a,b,c)$. Es la misma fórmula que la distancia, con el doble.",
        "errorTipico": "Quedarse en el pie de la perpendicular o restar el doble en lugar de sumarlo. Comprueba que el punto medio está en el plano."
      },
      {
        "id": "m2-geo-07",
        "materia": "mates-ii",
        "bloque": "geometria",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Distancia entre dos rectas que se cruzan",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula la distancia entre $r:(x,y,z)=(1,0,0)+t(1,1,0)$ y $s:(x,y,z)=(0,1,0)+u(0,1,1)$.",
        "pista": "La distancia es $\\dfrac{|(\\vec{OP_s}-\\vec{OP_r})\\cdot(\\vec d_r\\times\\vec d_s)|}{|\\vec d_r\\times\\vec d_s|}$.",
        "partes": [
          {
            "etiqueta": "Distancia",
            "opciones": [
              "2,3094",
              "1,1547",
              "0,5774",
              "1,1647"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Vectores",
            "d": "$\\vec d_r=(1,1,0)$, $\\vec d_s=(0,1,1)$; $\\vec d_r\\times\\vec d_s=(1,-1,1)$."
          },
          {
            "t": "Vector entre puntos",
            "d": "$P_s-P_r=(-1,1,0)$; $|(-1,1,0)\\cdot(1,-1,1)|=2$."
          },
          {
            "t": "Distancia",
            "d": "$d=\\dfrac{2}{\\sqrt3}=\\dfrac{2\\sqrt3}{3}\\approx1{,}1547$."
          }
        ],
        "truco": "El producto mixto da el volumen del paralelepípedo y el producto vectorial el área de la base: distancia = volumen/área.",
        "errorTipico": "Usar la distancia punto-recta o punto-plano sin comprobar que las rectas se cruzan. Si fueran paralelas, el producto vectorial sería cero."
      },
      {
        "id": "m2-com-05",
        "materia": "mates-ii",
        "bloque": "complejos",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Raíces complejas de una ecuación de segundo grado",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Resuelve $z^2-4z+13=0$ en el cuerpo de los números complejos y calcula el producto de sus raíces.",
        "pista": "El discriminante es negativo. Sustituye $\\sqrt{-36}$ por $6i$. El producto de las raíces es $c/a$.",
        "partes": [
          {
            "etiqueta": "Raíces",
            "opciones": [
              "$2\\pm3i$",
              "$2\\pm i$",
              "$-2\\pm3i$",
              "$4\\pm3i$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Producto de las raíces",
            "opciones": [
              "$13$",
              "$4$",
              "$-13$",
              "$9$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Discriminante",
            "d": "$\\Delta=(-4)^2-4\\cdot1\\cdot13=16-52=-36$."
          },
          {
            "t": "Fórmula general",
            "d": "$z=\\dfrac{4\\pm\\sqrt{-36}}{2}=\\dfrac{4\\pm6i}{2}=2\\pm3i$."
          },
          {
            "t": "Producto",
            "d": "Por Cardano, $z_1z_2=\\dfrac{c}{a}=13$. Comprobación: $(2+3i)(2-3i)=4+9=13$."
          }
        ],
        "truco": "Con coeficientes reales, las raíces complejas van en pareja conjugada y su producto es $a^2+b^2$.",
        "errorTipico": "Dejar la raíz de un número negativo sin convertirla en $i$ y concluir que la ecuación no tiene solución."
      },
      {
        "id": "m2-opt-03",
        "materia": "mates-ii",
        "bloque": "optimizacion",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Caja sin tapa de volumen máximo",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "De una cartulina cuadrada de $12$ cm de lado se recortan cuadrados iguales en las esquinas y se dobla para formar una caja sin tapa. ¿Qué lado deben tener los recortes para que el volumen sea máximo? ¿Cuál es ese volumen?",
        "pista": "Si el recorte mide $x$, la base es $(12-2x)\\times(12-2x)$ y la altura $x$. El volumen es $V(x)=x(12-2x)^2$ con $0\\lt x\\lt6$.",
        "partes": [
          {
            "etiqueta": "Lado del recorte (cm)",
            "opciones": [
              "$2$",
              "$3$",
              "$1$",
              "$4$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Volumen máximo (cm³)",
            "opciones": [
              "$128$",
              "$144$",
              "$108$",
              "$120$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Función volumen",
            "d": "$V(x)=x(12-2x)^2$, con $0\\lt x\\lt6$."
          },
          {
            "t": "Derivada factorizada",
            "d": "$V'(x)=(12-2x)^2+x\\cdot2(12-2x)(-2)=(12-2x)(12-6x)$."
          },
          {
            "t": "Puntos críticos",
            "d": "$V'=0\\Rightarrow x=6$ (fuera del dominio, la caja no tendría base) o $x=2$."
          },
          {
            "t": "Volumen",
            "d": "$V(2)=2\\cdot8^2=128$ cm³."
          }
        ],
        "truco": "Factoriza antes de igualar a cero: aparecen las dos raíces y descartas la que anula la base.",
        "errorTipico": "Aceptar $x=6$ como solución y obtener una caja de volumen nulo."
      },
      {
        "id": "m2-opt-04",
        "materia": "mates-ii",
        "bloque": "optimizacion",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Cerca apoyada en una pared",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Se quiere cercar un corral rectangular apoyado en una pared, usando $100$ m de valla para los tres lados restantes. ¿Qué dimensiones dan el área máxima?",
        "pista": "Si el lado paralelo a la pared mide $x$, los otros dos miden $(100-x)/2$ cada uno. La pared no se cerca.",
        "partes": [
          {
            "etiqueta": "Lado paralelo a la pared (m)",
            "opciones": [
              "$50$",
              "$25$",
              "$40$",
              "$60$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área máxima (m²)",
            "opciones": [
              "$1250$",
              "$2500$",
              "$625$",
              "$1000$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Restricción",
            "d": "$x+2y=100\\Rightarrow y=\\dfrac{100-x}{2}$."
          },
          {
            "t": "Función área",
            "d": "$A(x)=x\\cdot\\dfrac{100-x}{2}=50x-\\dfrac{x^2}{2}$."
          },
          {
            "t": "Optimizar",
            "d": "$A'(x)=50-x=0\\Rightarrow x=50$ e $y=25$."
          },
          {
            "t": "Área",
            "d": "$A=50\\cdot25=1250$ m²."
          }
        ],
        "truco": "El lado paralelo a la pared es el doble que cada lado perpendicular: $x=2y$.",
        "errorTipico": "Plantear $2x+2y=100$ como si se cercaran los cuatro lados y obtener $625$ m²."
      },
      {
        "id": "m2-rep-03",
        "materia": "mates-ii",
        "bloque": "rectas-planos",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Distancia de un punto a una recta",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula la distancia del punto $P(3,1,1)$ a la recta $r:(x,y,z)=(1,0,2)+t(2,1,-2)$.",
        "pista": "La distancia es el área del paralelogramo que forman $\\overrightarrow{AP}$ y $\\vec d$, dividida por la base $|\\vec d|$.",
        "partes": [
          {
            "etiqueta": "Distancia",
            "opciones": [
              "$\\dfrac{\\sqrt{14}}{3}$",
              "$\\dfrac{\\sqrt5}{3}$",
              "$\\dfrac53$",
              "$\\sqrt5$"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Vector y dirección",
            "d": "$A=(1,0,2)$, $\\overrightarrow{AP}=(2,1,-1)$ y $\\vec d=(2,1,-2)$."
          },
          {
            "t": "Producto vectorial",
            "d": "$\\overrightarrow{AP}\\times\\vec d=(-1,2,0)$, de módulo $\\sqrt5$."
          },
          {
            "t": "Distancia",
            "d": "$|\\vec d|=\\sqrt{4+1+4}=3$, luego $d=\\dfrac{\\sqrt5}{3}\\approx0{,}75$ unidades."
          }
        ],
        "truco": "Si el producto vectorial sale con números pequeños, revisa el signo del segundo componente: ahí falla casi todo el mundo.",
        "errorTipico": "Dividir por $|\\overrightarrow{AP}|$ en vez de por $|\\vec d|$, o dar el módulo del producto vectorial sin dividir."
      },
      {
        "id": "m2-rep-04",
        "materia": "mates-ii",
        "bloque": "rectas-planos",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Ángulo entre recta y plano",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Halla el ángulo que forman la recta $r:(x,y,z)=(0,1,-1)+t(1,2,0)$ y el plano $\\pi:x+2y-2z=5$.",
        "pista": "El ángulo entre recta y plano se calcula con el seno del ángulo entre su dirección y el normal del plano.",
        "partes": [
          {
            "etiqueta": "Ángulo",
            "opciones": [
              "$\\operatorname{arcsen}\\left(\\dfrac{\\sqrt5}{3}\\right)\\approx48{,}2^\\circ$",
              "$\\arccos\\left(\\dfrac{\\sqrt5}{3}\\right)\\approx41{,}8^\\circ$",
              "$30^\\circ$",
              "$90^\\circ$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Datos",
            "d": "$\\vec n=(1,2,-2)$, $|\\vec n|=3$; $\\vec d=(1,2,0)$, $|\\vec d|=\\sqrt5$."
          },
          {
            "t": "Seno del ángulo",
            "d": "$\\operatorname{sen}\\theta=\\dfrac{|\\vec n\\cdot\\vec d|}{|\\vec n|\\,|\\vec d|}=\\dfrac{5}{3\\sqrt5}=\\dfrac{\\sqrt5}{3}$."
          },
          {
            "t": "Ángulo",
            "d": "$\\theta=\\operatorname{arcsen}(0{,}745)\\approx48{,}2^\\circ$."
          }
        ],
        "truco": "La recta y el normal forman el ángulo complementario: si con el normal sale $41{,}8^\\circ$, con el plano son $48{,}2^\\circ$.",
        "errorTipico": "Aplicar el coseno como si fuera el ángulo entre dos rectas y responder $41{,}8^\\circ$."
      },
      {
        "id": "m2-rep-05",
        "materia": "mates-ii",
        "bloque": "rectas-planos",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Simétrico de un punto respecto de un plano",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Halla el simétrico de $P(1,2,3)$ respecto del plano $\\pi:x+y+z=3$.",
        "pista": "Proyecta $P$ sobre el plano siguiendo la dirección del normal y dobla esa distancia.",
        "partes": [
          {
            "etiqueta": "Punto simétrico",
            "opciones": [
              "$(0,1,2)$",
              "$(-1,0,1)$",
              "$(1,0,-1)$",
              "$(-1,1,0)$"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Parámetro",
            "d": "$t=\\dfrac{1+2+3-3}{1+1+1}=1$."
          },
          {
            "t": "Proyección",
            "d": "$H=P-t\\vec n=(1,2,3)-(1,1,1)=(0,1,2)$; comprueba: $0+1+2=3$."
          },
          {
            "t": "Simétrico",
            "d": "$P'=P-2t\\vec n=(1,2,3)-2(1,1,1)=(-1,0,1)$."
          }
        ],
        "truco": "El simétrico es $P'=P-2\\dfrac{ax_0+by_0+cz_0+d}{a^2+b^2+c^2}(a,b,c)$; el mismo factor sirve para la proyección.",
        "errorTipico": "Dar la proyección $H$ como simétrico: el simétrico está al doble de distancia, al otro lado del plano."
      },
      {
        "id": "m2-int-04",
        "materia": "mates-ii",
        "bloque": "integrales",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Integración por partes",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula $\\displaystyle\\int x e^x\\,dx$ y $\\displaystyle\\int_0^1 x e^x\\,dx$.",
        "pista": "Usa $u=x$ y $dv=e^x\\,dx$; entonces $du=dx$ y $v=e^x$.",
        "partes": [
          {
            "etiqueta": "Primitiva",
            "opciones": [
              "(x-1)e^x+C",
              "(x+1)e^x+C",
              "x e^x+C",
              "(x-1)e^{-x}+C"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Integral definida $\\displaystyle\\int_0^1 x e^x\\,dx$",
            "opciones": [
              "1",
              "e",
              "e-1",
              "0"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Elegir",
            "d": "$u=x$, $dv=e^x\\,dx$, luego $du=dx$ y $v=e^x$."
          },
          {
            "t": "Fórmula",
            "d": "$\\displaystyle\\int x e^x\\,dx=x e^x-\\int e^x\\,dx=(x-1)e^x+C$."
          },
          {
            "t": "Barrow",
            "d": "$\\left[(x-1)e^x\\right]_0^1=0-(-1)=1$."
          }
        ],
        "truco": "En integración por partes, deriva el polinomio e integra la exponencial; así la integral se simplifica.",
        "errorTipico": "Olvidar el signo menos de $-\\int v\\,du$ o evaluar mal el límite inferior."
      },
      {
        "id": "m2-int-05",
        "materia": "mates-ii",
        "bloque": "integrales",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Área entre una cúbica y una recta",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula el área del recinto limitado por $y=x^3$ y $y=x$.",
        "pista": "Iguala $x^3=x$ para obtener los cortes. La región tiene dos trozos simétricos; plantéalos por separado.",
        "partes": [
          {
            "etiqueta": "Puntos de corte",
            "opciones": [
              "x=-1, 0 y 1",
              "x=-1 y 1",
              "x=0 y 1",
              "x=-1 y 0"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área",
            "opciones": [
              "1/2",
              "1",
              "1/4",
              "2/3"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Cortes",
            "d": "$x^3=x\\Rightarrow x(x-1)(x+1)=0\\Rightarrow x=-1,0,1$."
          },
          {
            "t": "Por tramos",
            "d": "En $[-1,0]$ la recta va arriba y en $[0,1]$ la cúbica va arriba. Por simetría, $A=2\\int_0^1(x-x^3)\\,dx$."
          },
          {
            "t": "Calcular",
            "d": "$A=2\\left[\\frac{x^2}{2}-\\frac{x^4}{4}\\right]_0^1=2\\left(\\frac12-\\frac14\\right)=\\frac12$."
          }
        ],
        "truco": "Si las curvas se cruzan dentro del intervalo, divide por los cortes; no integres de $-1$ a $1$ sin más.",
        "errorTipico": "Integrar de $-1$ a $1$ sin separar en $0$: las áreas se restan y sale $0$."
      },
      {
        "id": "m2-int-06",
        "materia": "mates-ii",
        "bloque": "integrales",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Volumen de revolución",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "La región limitada por $y=\\sqrt{x}$, el eje $OX$ y la recta $x=4$ gira alrededor del eje $OX$. Calcula el volumen del sólido.",
        "pista": "Método de discos: $V=\\pi\\int_a^b y^2\\,dx$. Aquí $y^2=x$.",
        "partes": [
          {
            "etiqueta": "Integral del volumen",
            "opciones": [
              "$\\pi\\int_0^4 x\\,dx$",
              "$\\pi\\int_0^4 \\sqrt{x}\\,dx$",
              "$2\\pi\\int_0^4 x\\,dx$",
              "$\\pi\\int_0^4 x^2\\,dx$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Volumen",
            "opciones": [
              "8π",
              "4π",
              "16π/3",
              "8"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Planteamiento",
            "d": "$V=\\pi\\int_0^4(\\sqrt{x})^2\\,dx=\\pi\\int_0^4 x\\,dx$."
          },
          {
            "t": "Calcular",
            "d": "$V=\\pi\\left[\\frac{x^2}{2}\\right]_0^4=\\pi\\cdot\\frac{16}{2}=8\\pi$."
          },
          {
            "t": "Unidades",
            "d": "El volumen se mide en unidades cúbicas."
          }
        ],
        "truco": "Al girar alrededor del eje $X$, el radio es $y$, y el volumen lleva $y^2$ y un factor $\\pi$.",
        "errorTipico": "Integrar $y$ en vez de $y^2$ u olvidar el factor $\\pi$."
      },
      {
        "id": "m2-opt-07",
        "materia": "mates-ii",
        "bloque": "optimizacion",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Cilindro de volumen fijo con superficie mínima",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Un cilindro tiene un volumen de $16\\pi\\ \\text{cm}^3$. Calcula el radio y la altura que minimizan la superficie total, y la superficie mínima.",
        "pista": "$V=\\pi r^2h=16\\pi$, luego $h=16/r^2$. La superficie total es $S=2\\pi r^2+2\\pi rh$.",
        "partes": [
          {
            "etiqueta": "Radio (cm)",
            "opciones": [
              "2",
              "4",
              "8",
              "1"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Altura (cm)",
            "opciones": [
              "4",
              "2",
              "8",
              "16"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Superficie mínima (cm²)",
            "opciones": [
              "24π",
              "16π",
              "32π",
              "12π"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Reducir a una variable",
            "d": "$h=\\frac{16}{r^2}$, luego $S(r)=2\\pi r^2+\\frac{32\\pi}{r}$."
          },
          {
            "t": "Derivar",
            "d": "$S'(r)=4\\pi r-\\frac{32\\pi}{r^2}=0\\Rightarrow r^3=8\\Rightarrow r=2$ cm y $h=4$ cm."
          },
          {
            "t": "Superficie",
            "d": "$S=2\\pi(2)^2+2\\pi(2)(4)=8\\pi+16\\pi=24\\pi\\ \\text{cm}^2$. Como $S''>0$, es un mínimo."
          }
        ],
        "truco": "Antes de derivar, reduce a una sola variable usando la restricción de volumen.",
        "errorTipico": "Derivar la superficie con dos variables o confundir el diámetro con el radio."
      },
      {
        "id": "m2-opt-08",
        "materia": "mates-ii",
        "bloque": "optimizacion",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Dos corrales con valla común",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Con 60 m de valla se quiere cercar un terreno rectangular y dividirlo en dos corrales iguales con una valla paralela a uno de los lados. Llama x al lado perpendicular a la valla divisoria e y al lado paralelo a ella. Calcula las dimensiones que maximizan el área total y el área máxima.",
        "pista": "Dibuja la valla: hay dos tramos de longitud x y tres tramos de longitud y. La restricción es 2x+3y=60.",
        "partes": [
          {
            "etiqueta": "Lado x (m)",
            "opciones": [
              "15",
              "10",
              "20",
              "12"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Lado y (m)",
            "opciones": [
              "10",
              "15",
              "12",
              "8"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área máxima (m²)",
            "opciones": [
              "150",
              "200",
              "180",
              "120"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Restricción",
            "d": "$2x+3y=60\\Rightarrow y=\\frac{60-2x}{3}$."
          },
          {
            "t": "Área",
            "d": "$A(x)=x\\frac{60-2x}{3}=20x-\\frac23x^2$; $A'(x)=20-\\frac43x=0\\Rightarrow x=15$ m."
          },
          {
            "t": "Resultado",
            "d": "$y=10$ m y $A=15\\cdot10=150\\ \\text{m}^2$. Como $A''<0$, es un máximo."
          }
        ],
        "truco": "Dibuja la valla y cuenta los tramos: con dos corrales hay tres tramos paralelos a la divisoria.",
        "errorTipico": "Usar 2x+2y=60 y olvidar la valla interior."
      }
    ]
  );
})();
