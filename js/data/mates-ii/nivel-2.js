/* PAU Mates CV — Matemáticas II · 2º Bachillerato (Ciencias)
   nivel-2 · medio · 32 ejercicios
Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "m2-alg-02",
        "materia": "mates-ii",
        "bloque": "matrices",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Potencia enésima de una matriz",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$. ¿Cuánto vale $A^{10}$?",
        "pista": "Calcula $A^2$, $A^3$ y busca el patrón. Después demuéstralo por inducción.",
        "opciones": [
          "$\\begin{pmatrix}1&10\\\\0&1\\end{pmatrix}$",
          "$\\begin{pmatrix}10&1\\\\0&10\\end{pmatrix}$",
          "$\\begin{pmatrix}1&10\\\\1&1\\end{pmatrix}$",
          "$\\begin{pmatrix}10&0\\\\0&10\\end{pmatrix}$"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Calcular las primeras potencias",
            "d": "$A^2=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, $A^3=\\begin{pmatrix}1&3\\\\0&1\\end{pmatrix}$."
          },
          {
            "t": "Conjeturar",
            "d": "Parece que $A^{n}=\\begin{pmatrix}1&n\\\\0&1\\end{pmatrix}$."
          },
          {
            "t": "Inducción",
            "d": "Si $A^{n}=\\begin{pmatrix}1&n\\\\0&1\\end{pmatrix}$, entonces $A^{n+1}=A^{n}A=\\begin{pmatrix}1&n+1\\\\0&1\\end{pmatrix}$. Por tanto $A^{10}=\\begin{pmatrix}1&10\\\\0&1\\end{pmatrix}$."
          }
        ],
        "truco": "Las matrices de la forma $\\begin{pmatrix}1&k\\\\0&1\\end{pmatrix}$ se comportan como sumas: al multiplicar, las $k$ se suman. Es la versión matricial de $1+k$.",
        "errorTipico": "Elevar cada elemento a 10: $1^{10}=1$ y $1^{10}=1$, con lo que saldría la misma matriz. La potencia de matrices no es elemento a elemento."
      },
      {
        "id": "m2-alg-03",
        "materia": "mates-ii",
        "bloque": "sistemas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sistema con parámetro: caso a = −1",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Considera el sistema $\\begin{cases}x+ay=1\\\\[2pt] ax+y=1\\end{cases}$. ¿Qué ocurre cuando $a=-1$?",
        "pista": "El determinante es $1-a^2$. Si se anula, sustituye $a=-1$ en las ecuaciones y compara: no te quedes en «det = 0».",
        "opciones": [
          "Compatible determinado: una única solución",
          "Compatible indeterminado: infinitas soluciones",
          "Incompatible: no tiene solución",
          "No se puede decidir sin conocer el término independiente"
        ],
        "correcta": 2,
        "solucion": [
          {
            "t": "Determinante",
            "d": "$\\det A=1-a^2=(1-a)(1+a)$. Se anula en $a=1$ y $a=-1$."
          },
          {
            "t": "Sustituir a = −1",
            "d": "El sistema queda $\\begin{cases}x-y=1\\\\-x+y=1\\end{cases}$. Sumando: $0=2$, imposible."
          },
          {
            "t": "Conclusión",
            "d": "Para $a=-1$ el sistema es incompatible. (Para $a=1$ ambas ecuaciones son $x+y=1$: infinitas soluciones)."
          }
        ],
        "truco": "En un sistema con parámetro, el determinante solo te dice cuándo NO hay solución única. Los casos singulares hay que sustituirlos y mirar las ecuaciones.",
        "errorTipico": "Ver $\\det=0$ y responder automáticamente «infinitas soluciones». También puede ser incompatible, como aquí."
      },
      {
        "id": "m2-alg-06",
        "materia": "mates-ii",
        "bloque": "matrices",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ecuación matricial AX = B",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sean $A=\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}$ y $B=\\begin{pmatrix}4&2\\\\7&5\\end{pmatrix}$. Resuelve $AX=B$ e indica los elementos $x_{21}$ y $x_{22}$ de $X$.",
        "pista": "Despeja $X=A^{-1}B$ (no $BA^{-1}$). La inversa de una triangular inferior es triangular inferior; comprueba multiplicando.",
        "partes": [
          {
            "etiqueta": "$x_{21}$",
            "opciones": [
              "3,3334",
              "0,8334",
              "1,3333",
              "1,6667"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "$x_{22}$",
            "opciones": [
              "2,6666",
              "0,6666",
              "1,6667",
              "1,3333"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Inversa de A",
            "d": "$\\det A=6$ y $A^{-1}=\\dfrac{1}{6}\\begin{pmatrix}3&0\\\\-1&2\\end{pmatrix}$."
          },
          {
            "t": "Multiplicar por B",
            "d": "$X=\\dfrac{1}{6}\\begin{pmatrix}3&0\\\\-1&2\\end{pmatrix}\\begin{pmatrix}4&2\\\\7&5\\end{pmatrix}=\\dfrac{1}{6}\\begin{pmatrix}12&6\\\\10&8\\end{pmatrix}=\\begin{pmatrix}2&1\\\\5/3&4/3\\end{pmatrix}$."
          },
          {
            "t": "Leer los elementos",
            "d": "$x_{21}=\\dfrac{5}{3}\\approx1{,}6667$ y $x_{22}=\\dfrac{4}{3}\\approx1{,}3333$."
          }
        ],
        "truco": "Comprueba siempre $A\\cdot X=B$ con una fila: $2\\cdot2+0\\cdot\\frac53=4$, correcto. Te detecta el error de orden en 5 segundos.",
        "errorTipico": "Multiplicar $B\\cdot A^{-1}$: el producto de matrices no es conmutativo y el resultado es distinto."
      },
      {
        "id": "m2-ana-02",
        "materia": "mates-ii",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Indeterminaciones 0/0 con raíz y con polinomios",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula:",
        "pista": "Multiplica por el conjugado $\\sqrt{1+x}+1$ en el primero. En el segundo, factoriza $x^3-1=(x-1)(x^2+x+1)$ y $x^2-1=(x-1)(x+1)$.",
        "partes": [
          {
            "etiqueta": "a) $\\displaystyle\\lim_{x\\to0}\\frac{\\sqrt{1+x}-1}{x}$",
            "opciones": [
              "1,0",
              "0,5",
              "0,3",
              "0,6"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "b) $\\displaystyle\\lim_{x\\to1}\\frac{x^3-1}{x^2-1}$",
            "opciones": [
              "3,0",
              "0,8",
              "1,5",
              "0,5"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Conjugado",
            "d": "$\\dfrac{\\sqrt{1+x}-1}{x}\\cdot\\dfrac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1}=\\dfrac{1}{\\sqrt{1+x}+1}$."
          },
          {
            "t": "Límite con raíz",
            "d": "Cuando $x\\to0$: $\\dfrac{1}{1+1}=\\dfrac12$."
          },
          {
            "t": "Factorizar el cociente",
            "d": "$\\dfrac{x^3-1}{x^2-1}=\\dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)}=\\dfrac{x^2+x+1}{x+1}$. En $x=1$: $\\dfrac{3}{2}$."
          }
        ],
        "truco": "Con raíces cuadradas y $0/0$, el conjugado es el reflejo. Con polinomios, factoriza y cancela el factor común antes de sustituir.",
        "errorTipico": "Derivar numerador y denominador cuando aún no has identificado bien el tipo de indeterminación, o aplicar L'Hôpital a una expresión que se simplifica a mano."
      },
      {
        "id": "m2-ana-03",
        "materia": "mates-ii",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Recta tangente",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $f(x)=x^3-3x+1$. Halla la pendiente de la recta tangente en $x=1$ y la ordenada en el origen de esa recta.",
        "pista": "La pendiente es $f'(1)$. La tangente es $y=f(1)+f'(1)(x-1)$; pasa a forma $y=mx+n$ para leer $n$.",
        "partes": [
          {
            "etiqueta": "Pendiente",
            "opciones": [
              "1",
              "−1",
              "2",
              "0"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Ordenada en el origen",
            "opciones": [
              "−1",
              "0",
              "−2",
              "1"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Derivada",
            "d": "$f'(x)=3x^2-3$, luego $f'(1)=3-3=0$."
          },
          {
            "t": "Punto de tangencia",
            "d": "$f(1)=1-3+1=-1$."
          },
          {
            "t": "Recta tangente",
            "d": "$y=-1+0(x-1)\\Rightarrow y=-1$. La ordenada en el origen es $-1$."
          }
        ],
        "truco": "Si $f'(a)=0$, la tangente es horizontal: $y=f(a)$. No hace falta operar más.",
        "errorTipico": "Usar $f(1)$ como pendiente o escribir $y=f'(1)(x-1)$ olvidando sumar $f(1)$."
      },
      {
        "id": "m2-ana-04",
        "materia": "mates-ii",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Optimizar el área de un rectángulo",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Con $100$ m de valla se quiere cercar un rectángulo. ¿Qué lado debe tener para que el área sea máxima y cuánto vale esa área?",
        "pista": "El perímetro da $x+y=50$. Escribe el área $A(x)=x(50-x)$, deriva e iguala a cero.",
        "partes": [
          {
            "etiqueta": "Lado del cuadrado (m)",
            "opciones": [
              "25",
              "26",
              "24",
              "27"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área máxima (m$^2$)",
            "opciones": [
              "626",
              "625",
              "624",
              "627"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Relacionar las variables",
            "d": "$2x+2y=100\\Rightarrow y=50-x$."
          },
          {
            "t": "Función área",
            "d": "$A(x)=x(50-x)=50x-x^2$, con $0\\lt x\\lt50$."
          },
          {
            "t": "Derivar y resolver",
            "d": "$A'(x)=50-2x=0\\Rightarrow x=25$; entonces $y=25$. $A''=-2\\lt0$: máximo."
          },
          {
            "t": "Área",
            "d": "$A(25)=25\\cdot25=625\\ \\text{m}^2$."
          }
        ],
        "truco": "Con perímetro fijo, el rectángulo de área máxima siempre es un cuadrado. Puedes usarlo para comprobar el resultado.",
        "errorTipico": "Derivar sin haber expresado el área en función de una sola variable, o olvidar comprobar que el punto crítico es un máximo."
      },
      {
        "id": "m2-ana-05",
        "materia": "mates-ii",
        "bloque": "integrales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Integral definida y área entre curvas",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula:",
        "pista": "Aplica Barrow: busca una primitiva y evalúa. Para el área entre $x^2$ y $x$ en $[0,1]$, integra la función que queda por encima menos la que queda por debajo.",
        "partes": [
          {
            "etiqueta": "a) $\\displaystyle\\int_{0}^{2}(3x^2-2x)\\,dx$",
            "opciones": [
              "5",
              "3",
              "4",
              "6"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "b) Área entre $y=x^2$ e $y=x$ en $[0,1]$",
            "opciones": [
              "0,3334",
              "0,0833",
              "0,1767",
              "0,1667"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Primitiva",
            "d": "$\\int(3x^2-2x)\\,dx=x^3-x^2+C$."
          },
          {
            "t": "Barrow",
            "d": "$\\left[x^3-x^2\\right]_{0}^{2}=(8-4)-0=4$."
          },
          {
            "t": "Área entre curvas",
            "d": "En $[0,1]$ se cumple $x\\ge x^2$, luego $A=\\int_0^1(x-x^2)\\,dx=\\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1=\\frac12-\\frac13=\\frac16\\approx0{,}1667$."
          }
        ],
        "truco": "Dibuja las dos curvas o evalúa un punto intermedio para saber cuál va arriba. Restar en el orden equivocado da el área con signo negativo.",
        "errorTipico": "Integrar $x^2-x$ sin comprobar quién está arriba y dar $-1/6$ como área. El área es siempre positiva."
      },
      {
        "id": "m2-ana-06",
        "materia": "mates-ii",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Máximos y mínimos de un polinomio",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $f(x)=x^3-3x$. Indica la abscisa del mínimo, el valor mínimo y el valor máximo.",
        "pista": "$f'(x)=3x^2-3=3(x-1)(x+1)$. Estudia el signo de $f'$ a izquierda y derecha de cada punto crítico.",
        "partes": [
          {
            "etiqueta": "Abscisa del mínimo",
            "opciones": [
              "2",
              "0",
              "1",
              "3"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "Valor mínimo",
            "opciones": [
              "0",
              "1",
              "−2",
              "2"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "Valor máximo",
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
            "t": "Puntos críticos",
            "d": "$f'(x)=3x^2-3=0\\Rightarrow x=\\pm1$."
          },
          {
            "t": "Crecimiento",
            "d": "$f'$ es positiva en $(-\\infty,-1)$, negativa en $(-1,1)$ y positiva en $(1,\\infty)$: máximo en $x=-1$ y mínimo en $x=1$."
          },
          {
            "t": "Valores",
            "d": "$f(-1)=-1+3=2$ (máximo) y $f(1)=1-3=-2$ (mínimo)."
          }
        ],
        "truco": "El signo de $f'$ de izquierda a derecha: $+\\to-$ es máximo, $-\\to+$ es mínimo. Más fiable que la segunda derivada en exámenes.",
        "errorTipico": "Creer que $f''(x)\\gt0$ identifica el máximo. $f''\\gt0$ corresponde a convexa, es decir, mínimo."
      },
      {
        "id": "m2-ana-07",
        "materia": "mates-ii",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Continuidad con parámetro",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Halla $a$ para que sea continua en $x=1$ la función\n      $$f(x)=\\begin{cases}x^2+a & \\text{si } x\\lt1\\\\[4pt] 2x & \\text{si } x\\ge1\\end{cases}$$",
        "pista": "En un punto de empalme deben coincidir los dos límites laterales y el valor de la función. Iguala $1^2+a$ con $2\\cdot1$.",
        "partes": [
          {
            "etiqueta": "Valor de a",
            "opciones": [
              "1",
              "2",
              "0",
              "3"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Límite por la izquierda",
            "d": "$\\lim_{x\\to1^-}f(x)=1+a$."
          },
          {
            "t": "Límite por la derecha",
            "d": "$\\lim_{x\\to1^+}f(x)=2$."
          },
          {
            "t": "Igualar",
            "d": "$1+a=2\\Rightarrow a=1$. Con ese valor $f(1)=2$ y la función es continua."
          }
        ],
        "truco": "En funciones definidas a trozos, la continuidad en el punto de corte se resuelve igualando los dos límites laterales. Nada más.",
        "errorTipico": "Igualar solo las expresiones sin sustituir el punto, o comparar con $f(1)$ sin calcular el límite por la izquierda."
      },
      {
        "id": "m2-geo-01",
        "materia": "mates-ii",
        "bloque": "vectores",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Producto escalar, ángulo y producto vectorial",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sean $\\vec u=(1,2,3)$ y $\\vec v=(2,-1,1)$. Calcula, con 2 decimales cuando proceda:",
        "pista": "$\\vec u\\cdot\\vec v=u_1v_1+u_2v_2+u_3v_3$; $\\cos\\theta=\\frac{\\vec u\\cdot\\vec v}{|\\vec u||\\vec v|}$; $|\\vec u\\times\\vec v|$ es el área del paralelogramo.",
        "partes": [
          {
            "etiqueta": "a) $\\vec u\\cdot\\vec v$",
            "opciones": [
              "3",
              "4",
              "2",
              "5"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "b) Ángulo entre ellos ($^\\circ$)",
            "opciones": [
              "109,11",
              "70,89",
              "19,11",
              "80,89"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "c) $|\\vec u\\times\\vec v|$",
            "opciones": [
              "8,66",
              "17,32",
              "4,33",
              "3,00"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Producto escalar",
            "d": "$\\vec u\\cdot\\vec v=1\\cdot2+2\\cdot(-1)+3\\cdot1=2-2+3=3$."
          },
          {
            "t": "Módulos y ángulo",
            "d": "$|\\vec u|=\\sqrt{14}$, $|\\vec v|=\\sqrt6$, $\\cos\\theta=\\dfrac{3}{\\sqrt{84}}\\approx0{,}3273\\Rightarrow\\theta\\approx70{,}89^\\circ$."
          },
          {
            "t": "Producto vectorial",
            "d": "$\\vec u\\times\\vec v=(2\\cdot1-3\\cdot(-1),\\,3\\cdot2-1\\cdot1,\\,1\\cdot(-1)-2\\cdot2)=(5,5,-5)$, cuyo módulo es $5\\sqrt3\\approx8{,}66$."
          }
        ],
        "truco": "El producto vectorial se calcula con el determinante simbólico; su módulo es el área del paralelogramo y la mitad es el área del triángulo.",
        "errorTipico": "Usar el producto escalar como si diera directamente el ángulo, o olvidar dividir por los módulos."
      },
      {
        "id": "m2-geo-03",
        "materia": "mates-ii",
        "bloque": "geometria",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Distancia de un punto a un plano",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula la distancia del punto $P(1,2,3)$ al plano $\\pi:2x-y+2z-1=0$.",
        "pista": "Usa $d=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$ con los coeficientes del plano en forma general.",
        "partes": [
          {
            "etiqueta": "Distancia",
            "opciones": [
              "1,6667",
              "3,3334",
              "0,8334",
              "1,6767"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sustituir el punto",
            "d": "$2(1)-2+2(3)-1=2-2+6-1=5$."
          },
          {
            "t": "Norma de la normal",
            "d": "$\\sqrt{2^2+(-1)^2+2^2}=\\sqrt9=3$."
          },
          {
            "t": "Distancia",
            "d": "$d=\\dfrac{|5|}{3}=\\dfrac53\\approx1{,}6667$."
          }
        ],
        "truco": "El valor absoluto del numerador evita preocuparte por el lado del plano. Si el plano no está en forma general, pásalo primero.",
        "errorTipico": "Olvidar el denominador (la norma de la normal) o dividir por $a+b+c$ en lugar de por la raíz de la suma de cuadrados."
      },
      {
        "id": "m2-geo-05",
        "materia": "mates-ii",
        "bloque": "geometria",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Posición relativa de dos rectas",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Estudia la posición relativa de\n      $$r_1:(x,y,z)=(1,1,0)+t(1,2,1),\\qquad r_2:(x,y,z)=(0,0,1)+s(2,4,2).$$",
        "pista": "Compara los vectores dirección: $(2,4,2)=2(1,2,1)$. Si son proporcionales, solo queda comprobar si un punto de una recta está en la otra.",
        "opciones": [
          "Se cortan en un punto",
          "Son paralelas distintas",
          "Son coincidentes",
          "Se cruzan sin cortarse"
        ],
        "correcta": 1,
        "solucion": [
          {
            "t": "Direcciones",
            "d": "$\\vec d_1=(1,2,1)$ y $\\vec d_2=(2,4,2)=2\\vec d_1$: son proporcionales, así que las rectas son paralelas o coincidentes."
          },
          {
            "t": "Comprobar un punto",
            "d": "¿Está $(1,1,0)$ en $r_2$? Necesitaríamos $0+2s=1$, $4s=1$ y $1+2s=0$: de la primera $s=0{,}5$, que no cumple la tercera."
          },
          {
            "t": "Conclusión",
            "d": "No comparten punto: son paralelas distintas."
          }
        ],
        "truco": "Dos rectas con direcciones proporcionales nunca se cruzan: o son la misma o son paralelas. Basta comprobar un punto.",
        "errorTipico": "Ver que las direcciones son proporcionales y responder «se cortan», o confundir «paralelas» con «coincidentes» sin comprobar un punto."
      },
      {
        "id": "m2-prob-02",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Bayes con dos urnas",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "La urna $A$ contiene 3 bolas rojas y 2 azules; la urna $B$, 1 roja y 4 azules. Se elige una urna al azar y se extrae una bola, que resulta roja. Calcula:",
        "pista": "Primero calcula la probabilidad total de roja con el árbol: $P(R)=P(A)P(R\\mid A)+P(B)P(R\\mid B)$. Después aplica Bayes.",
        "partes": [
          {
            "etiqueta": "a) $P(R)$",
            "opciones": [
              "0,6",
              "0,8",
              "0,2",
              "0,4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "b) $P(A\\mid R)$",
            "opciones": [
              "0,75",
              "0,25",
              "0,38",
              "0,40"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Probabilidades de cada urna",
            "d": "$P(A)=P(B)=0{,}5$; $P(R\\mid A)=\\dfrac{3}{5}=0{,}6$; $P(R\\mid B)=\\dfrac{1}{5}=0{,}2$."
          },
          {
            "t": "Probabilidad total",
            "d": "$P(R)=0{,}5\\cdot0{,}6+0{,}5\\cdot0{,}2=0{,}3+0{,}1=0{,}4$."
          },
          {
            "t": "Teorema de Bayes",
            "d": "$P(A\\mid R)=\\dfrac{P(A)P(R\\mid A)}{P(R)}=\\dfrac{0{,}3}{0{,}4}=0{,}75$."
          }
        ],
        "truco": "La regla de Bayes se lee como «casos favorables entre todos los casos que producen el resultado»: arriba la rama $A\\to R$, abajo todas las ramas que acaban en $R$.",
        "errorTipico": "Calcular $0{,}5\\cdot0{,}6=0{,}3$ y quedarse ahí: eso es $P(A\\cap R)$, no $P(A\\mid R)$. Falta dividir por $P(R)$."
      },
      {
        "id": "m2-prob-04",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Binomial: exactamente, al menos y como mucho",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $X\\sim B(8;\\,0{,}3)$. Calcula, redondeando a 4 decimales:",
        "pista": "$P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$. Para $P(X\\ge 1)$ usa el complementario $1-P(X=0)$, y para $P(X\\le2)$ suma $P(0)+P(1)+P(2)$.",
        "partes": [
          {
            "etiqueta": "a) $P(X=2)$",
            "opciones": [
              "0,7035",
              "0,5930",
              "0,2965",
              "0,1482"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "b) $P(X\\ge 1)$",
            "opciones": [
              "0,0576",
              "0,4712",
              "0,5518",
              "0,9424"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "c) $P(X\\le 2)$",
            "opciones": [
              "0,5518",
              "0,4482",
              "0,2759",
              "0,2965"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Probabilidad puntual",
            "d": "$P(X=2)=\\binom{8}{2}(0{,}3)^2(0{,}7)^6=28\\cdot0{,}09\\cdot0{,}117649\\approx0{,}2965$."
          },
          {
            "t": "Al menos uno",
            "d": "$P(X\\ge1)=1-P(X=0)=1-(0{,}7)^8=1-0{,}057648\\approx0{,}9424$."
          },
          {
            "t": "Como mucho dos",
            "d": "$P(X\\le2)=P(0)+P(1)+P(2)=0{,}0576+0{,}1977+0{,}2965\\approx0{,}5518$."
          }
        ],
        "truco": "«Al menos uno» ⇒ complementario de «ninguno». Es el atajo que más tiempo ahorra en la PAU y evita sumar 8 términos.",
        "errorTipico": "Usar $p=0{,}7$ porque es la probabilidad «de que no». Identifica siempre qué estás contando como éxito: aquí, éxito $=0{,}3$."
      },
      {
        "id": "m2-prob-06",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Cuatro lanzamientos de un dado",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Se lanza un dado equilibrado 4 veces. Calcula, con 4 decimales:",
        "pista": "«Al menos un 6» es $1-P(\\text{ningún 6})=1-(5/6)^4$. Para «exactamente un 6», usa la binomial con $n=4$ y $p=1/6$.",
        "partes": [
          {
            "etiqueta": "a) $P(\\text{al menos un }6)$",
            "opciones": [
              "0,4823",
              "0,2589",
              "0,3858",
              "0,5177"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "b) $P(\\text{exactamente un }6)$",
            "opciones": [
              "0,3858",
              "0,6142",
              "0,7716",
              "0,1929"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Complementario",
            "d": "$P(\\text{ningún }6)=\\left(\\frac{5}{6}\\right)^4=\\frac{625}{1296}\\approx0{,}4823$."
          },
          {
            "t": "Al menos uno",
            "d": "$1-\\frac{625}{1296}=\\frac{671}{1296}\\approx0{,}5177$."
          },
          {
            "t": "Exactamente uno",
            "d": "$\\binom{4}{1}\\cdot\\frac{1}{6}\\cdot\\left(\\frac{5}{6}\\right)^3=\\frac{500}{1296}\\approx0{,}3858$."
          }
        ],
        "truco": "«Al menos uno» ⇒ complementario. Casi todos los ejercicios de este tipo se resuelven en una línea con esa idea.",
        "errorTipico": "Multiplicar $4\\cdot\\frac{1}{6}$ y concluir $0{,}6667$. Eso cuenta el 6 varias veces en el mismo lanzamiento, no es una probabilidad válida para este experimento."
      },
      {
        "id": "m2-alg-08",
        "materia": "mates-ii",
        "bloque": "matrices",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Inversa de una matriz 2×2",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $A=\\begin{pmatrix}4&3\\\\2&1\\end{pmatrix}$. Calcula su determinante y los elementos $(1,1)$ y $(2,1)$ de $A^{-1}$.",
        "pista": "Para una matriz $2\\times2$, $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ si $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$.",
        "partes": [
          {
            "etiqueta": "$\\det A$",
            "opciones": [
              "−1",
              "−3",
              "0",
              "−2"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Elemento $(1,1)$ de $A^{-1}$",
            "opciones": [
              "−1,0",
              "−0,5",
              "−0,3",
              "−0,4"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Elemento $(2,1)$ de $A^{-1}$",
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
            "t": "Determinante",
            "d": "$\\det A=4\\cdot1-3\\cdot2=4-6=-2$."
          },
          {
            "t": "Matriz adjunta",
            "d": "$\\operatorname{adj}(A)=\\begin{pmatrix}1&-3\\\\-2&4\\end{pmatrix}$."
          },
          {
            "t": "Inversa",
            "d": "$A^{-1}=-\\frac12\\begin{pmatrix}1&-3\\\\-2&4\\end{pmatrix}=\\begin{pmatrix}-0{,}5&1{,}5\\\\1&-2\\end{pmatrix}$."
          }
        ],
        "truco": "En $2\\times2$ puedes recordar la inversa como «diagonal cambiada y signos cambiados»: $\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$.",
        "errorTipico": "Olvidar dividir por el determinante o cambiar los signos de los elementos de la diagonal principal, que no se tocan."
      },
      {
        "id": "m2-ana-10",
        "materia": "mates-ii",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Continuidad con parámetro",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $f(x)=\\begin{cases}\\dfrac{x^2-4}{x-2},&x\\ne2\\\\[4pt] k,&x=2\\end{cases}$. Determina $k$ para que $f$ sea continua en $x=2$.",
        "pista": "La continuidad exige que el límite cuando $x\\to2$ coincida con $f(2)=k$. Factoriza el numerador.",
        "partes": [
          {
            "etiqueta": "Valor de k",
            "opciones": [
              "5",
              "3",
              "4",
              "6"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Factorizar",
            "d": "$x^2-4=(x-2)(x+2)$, luego para $x\\ne2$, $f(x)=x+2$."
          },
          {
            "t": "Límite",
            "d": "$\\lim_{x\\to2}f(x)=\\lim_{x\\to2}(x+2)=4$."
          },
          {
            "t": "Igualar",
            "d": "Para que el límite coincida con $f(2)=k$, debe ser $k=4$."
          }
        ],
        "truco": "Una discontinuidad evitable se tapa dando a $f(2)$ el valor del límite. Si el límite no existe o es infinito, no se puede.",
        "errorTipico": "Sustituir $x=2$ directamente en la expresión original y obtener $0/0$; hay que simplificar antes."
      },
      {
        "id": "m2-prob-08",
        "materia": "mates-ii",
        "bloque": "probabilidad",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Binomial con n = 8",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sea $X\\sim B(8;\\,0{,}3)$. Calcula $P(X=2)$ y $P(X\\le1)$ con cuatro decimales.",
        "pista": "$P(X=k)=\\binom nk p^k(1-p)^{n-k}$. Para $P(X\\le1)$ suma $P(X=0)+P(X=1)$.",
        "partes": [
          {
            "etiqueta": "$P(X=2)$",
            "opciones": [
              "0,2965",
              "0,7035",
              "0,5930",
              "0,1482"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$P(X\\le1)$",
            "opciones": [
              "0,7447",
              "0,2553",
              "0,5106",
              "0,1277"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Exactamente 2",
            "d": "$P(X=2)=\\binom82(0{,}3)^2(0{,}7)^6=28\\cdot0{,}09\\cdot0{,}117649\\approx0{,}2965$."
          },
          {
            "t": "Cero o uno",
            "d": "$P(X=0)=0{,}7^8\\approx0{,}0576$; $P(X=1)=8\\cdot0{,}3\\cdot0{,}7^7\\approx0{,}1977$."
          },
          {
            "t": "Sumar",
            "d": "$P(X\\le1)\\approx0{,}0576+0{,}1977=0{,}2553$."
          }
        ],
        "truco": "Comprueba que las probabilidades suman 1 al recorrer toda la binomial. Si $P(X=2)$ te sale mayor que 1, has olvidado el coeficiente.",
        "errorTipico": "Calcular $0{,}3^2\\cdot0{,}7^6$ sin el coeficiente binomial, que cuenta las posiciones de los dos éxitos."
      },
      {
        "id": "m2-geo-08",
        "materia": "mates-ii",
        "bloque": "vectores",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Área de un triángulo y distancia al origen",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Sean $A(1,0,0)$, $B(0,1,0)$ y $C(0,0,2)$. Calcula el área del triángulo $ABC$ y la distancia del origen al plano que lo contiene.",
        "pista": "El área es $\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$. El vector normal del plano es ese producto vectorial.",
        "partes": [
          {
            "etiqueta": "Área",
            "opciones": [
              "1,5",
              "3,0",
              "0,8",
              "0,7"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Distancia al origen",
            "opciones": [
              "1,3334",
              "0,3333",
              "0,6667",
              "0,6767"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Vectores",
            "d": "$\\overrightarrow{AB}=(-1,1,0)$, $\\overrightarrow{AC}=(-1,0,2)$."
          },
          {
            "t": "Producto vectorial",
            "d": "$\\overrightarrow{AB}\\times\\overrightarrow{AC}=(2,2,1)$, de módulo $3$. Área $=\\frac32$."
          },
          {
            "t": "Plano y distancia",
            "d": "$2x+2y+z=2$; $d(0,\\pi)=\\dfrac{2}{\\sqrt{4+4+1}}=\\dfrac23\\approx0{,}6667$."
          }
        ],
        "truco": "Con tres puntos, el producto vectorial te da área y normal a la vez. No necesitas calcular la ecuación del plano para el área.",
        "errorTipico": "Olvidar el $\\frac12$ del área o dividir entre el módulo del vector normal equivocado."
      },
      {
        "id": "m2-int-01",
        "materia": "mates-ii",
        "bloque": "integrales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Integral definida de un polinomio",
        "fuente": "Currículo CV · Matemáticas II",
        "enunciado": "Calcula $\\displaystyle\\int_0^2 (3x^2-2x)\\,dx$.",
        "pista": "Busca una primitiva término a término y aplica Barrow: $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$.",
        "opciones": [
          "4",
          "2",
          "6",
          "8"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Primitiva",
            "d": "$F(x)=x^3-x^2$."
          },
          {
            "t": "Barrow",
            "d": "$F(2)-F(0)=(8-4)-0=4$."
          }
        ],
        "truco": "En un polinomio, integra subiendo un grado y divide por el nuevo exponente. No olvides evaluar en los dos extremos.",
        "errorTipico": "Olvidar restar $F(0)$ o integrar $3x^2$ como $3x^3$ sin dividir entre $3$."
      },
      {
        "id": "m2-int-02",
        "materia": "mates-ii",
        "bloque": "integrales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Área entre una recta y una parábola",
        "fuente": "Currículo CV · Matemáticas II",
        "enunciado": "Halla el área encerrada entre $y=x$ y $y=x^2$ en el intervalo $[0,1]$.",
        "pista": "En $[0,1]$ se cumple $x\\ge x^2$. Integra $x-x^2$.",
        "opciones": [
          "0,1667",
          "0,3333",
          "0,5",
          "0,0833"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Plantear",
            "d": "$A=\\int_0^1 (x-x^2)\\,dx$."
          },
          {
            "t": "Integrar",
            "d": "$\\left[\\dfrac{x^2}{2}-\\dfrac{x^3}{3}\\right]_0^1=\\dfrac12-\\dfrac13$."
          },
          {
            "t": "Resultado",
            "d": "$A=\\dfrac16\\approx0{,}1667$."
          }
        ],
        "truco": "Dibuja las dos curvas: el área es la integral de «la de arriba menos la de abajo».",
        "errorTipico": "Integrar la resta al revés y obtener un área negativa, o no dividir entre 2 y 3."
      },
      {
        "id": "m2-lim-01",
        "materia": "mates-ii",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Límite con indeterminación 0/0",
        "fuente": "Currículo CV · Matemáticas II",
        "enunciado": "Calcula $\\displaystyle\\lim_{x\\to1}\\frac{x^2-1}{x-1}$.",
        "pista": "Factoriza el numerador como diferencia de cuadrados: $x^2-1=(x-1)(x+1)$.",
        "opciones": [
          "2",
          "1",
          "0",
          "3"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Factorizar",
            "d": "$\\dfrac{x^2-1}{x-1}=\\dfrac{(x-1)(x+1)}{x-1}=x+1$ para $x\\ne1$."
          },
          {
            "t": "Sustituir",
            "d": "$\\lim_{x\\to1}(x+1)=2$."
          }
        ],
        "truco": "Antes de sustituir, comprueba si hay factor común. El 0/0 se rompe simplificando.",
        "errorTipico": "Sustituir $x=1$, ver $0/0$ y concluir que el límite no existe."
      },
      {
        "id": "m2-sis-01",
        "materia": "mates-ii",
        "bloque": "sistemas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sistema lineal 2×2",
        "fuente": "Currículo CV · Matemáticas II",
        "enunciado": "Resuelve el sistema $\\begin{cases}x+y=5\\\\2x-y=1\\end{cases}$.",
        "pista": "Suma las dos ecuaciones para eliminar la $y$ y despeja después la otra incógnita.",
        "partes": [
          {
            "etiqueta": "$x$",
            "opciones": [
              "2",
              "3",
              "1",
              "4"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$y$",
            "opciones": [
              "3",
              "2",
              "4",
              "1"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sumar ecuaciones",
            "d": "$(x+y)+(2x-y)=5+1\\Rightarrow3x=6\\Rightarrow x=2$."
          },
          {
            "t": "Sustituir",
            "d": "$2+y=5\\Rightarrow y=3$."
          },
          {
            "t": "Comprobar",
            "d": "$2\\cdot2-3=1$: se cumple la segunda ecuación."
          }
        ],
        "truco": "Elige la incógnita que se elimine al sumar o restar. En este sistema, la $y$ desaparece sola.",
        "errorTipico": "Sumar solo los lados izquierdos y olvidar sumar los términos independientes."
      },
      {
        "id": "m2-com-03",
        "materia": "mates-ii",
        "bloque": "complejos",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Módulo y argumento de un complejo",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Dado $z=-1+\\sqrt{3}\\,i$, calcula su módulo y su argumento.",
        "pista": "El módulo es $\\sqrt{a^2+b^2}$. Para el argumento, dibuja el afijo: la parte real es negativa y la imaginaria positiva, así que está en el segundo cuadrante.",
        "partes": [
          {
            "etiqueta": "Módulo $|z|$",
            "opciones": [
              "$2$",
              "$4$",
              "$\\sqrt{3}$",
              "$1$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Argumento",
            "opciones": [
              "$120^\\circ$",
              "$60^\\circ$",
              "$240^\\circ$",
              "$150^\\circ$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Módulo",
            "d": "$|z|=\\sqrt{(-1)^2+(\\sqrt{3})^2}=\\sqrt{1+3}=2$."
          },
          {
            "t": "Ángulo de referencia",
            "d": "$\\tan\\alpha=\\dfrac{\\sqrt{3}}{1}$, luego $\\alpha=60^\\circ$."
          },
          {
            "t": "Cuadrante",
            "d": "Como $a\\lt0$ y $b\\gt0$, el afijo está en el segundo cuadrante: $\\arg z=180^\\circ-60^\\circ=120^\\circ$."
          }
        ],
        "truco": "Calcula el ángulo agudo y ajústalo al cuadrante: nunca pases de $60^\\circ$ a $120^\\circ$ sin mirar la parte real.",
        "errorTipico": "Responder $60^\\circ$ porque la tangente coincide. La tangente no distingue el primer y el tercer cuadrante del segundo y el cuarto."
      },
      {
        "id": "m2-com-04",
        "materia": "mates-ii",
        "bloque": "complejos",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Cociente de complejos",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula $\\dfrac{2+i}{1-2i}$ en forma binómica.",
        "pista": "Multiplica numerador y denominador por el conjugado del denominador, $1+2i$. El denominador se convierte en $|1-2i|^2$.",
        "partes": [
          {
            "etiqueta": "Resultado",
            "opciones": [
              "$i$",
              "$-i$",
              "$1$",
              "$\\dfrac{3+5i}{5}$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Conjugado",
            "d": "$\\dfrac{2+i}{1-2i}\\cdot\\dfrac{1+2i}{1+2i}=\\dfrac{(2+i)(1+2i)}{1^2+2^2}$."
          },
          {
            "t": "Numerador",
            "d": "$(2+i)(1+2i)=2+4i+i+2i^2=2+5i-2=5i$."
          },
          {
            "t": "Resultado",
            "d": "$\\dfrac{5i}{5}=i$."
          }
        ],
        "truco": "Al multiplicar por el conjugado, el denominador siempre es $a^2+b^2$, un número real positivo.",
        "errorTipico": "Multiplicar por $1-2i$ otra vez, que no elimina la parte imaginaria del denominador."
      },
      {
        "id": "m2-opt-01",
        "materia": "mates-ii",
        "bloque": "optimizacion",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Rectángulo de área máxima con perímetro fijo",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Un rectángulo tiene $40$ m de perímetro. Halla sus dimensiones para que el área sea máxima y calcula esa área.",
        "pista": "Si la base mide $x$, la altura mide $20-x$. El área es $A(x)=x(20-x)$: deriva e iguala a cero.",
        "partes": [
          {
            "etiqueta": "Base del rectángulo (m)",
            "opciones": [
              "$10$",
              "$20$",
              "$8$",
              "$15$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Área máxima (m²)",
            "opciones": [
              "$100$",
              "$400$",
              "$200$",
              "$80$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Relación entre los lados",
            "d": "$2x+2y=40\\Rightarrow y=20-x$."
          },
          {
            "t": "Función área",
            "d": "$A(x)=x(20-x)=20x-x^2$."
          },
          {
            "t": "Optimizar",
            "d": "$A'(x)=20-2x=0\\Rightarrow x=10$, $y=10$."
          },
          {
            "t": "Área",
            "d": "$A(10)=10\\cdot10=100$ m². Es un máximo porque $A''(x)=-2\\lt0$."
          }
        ],
        "truco": "Con perímetro fijo, el área máxima se alcanza en el cuadrado.",
        "errorTipico": "Maximizar $x+y=20$ en lugar del producto y quedarse en $x=y=10$ sin calcular el área pedida."
      },
      {
        "id": "m2-opt-02",
        "materia": "mates-ii",
        "bloque": "optimizacion",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Dos números con suma fija y producto máximo",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Dos números positivos suman $20$. ¿Qué valores hacen máximo su producto? ¿Cuánto vale ese producto?",
        "pista": "Escribe el segundo número como $20-x$ y maximiza $P(x)=x(20-x)$. Comprueba con la segunda derivada que es un máximo.",
        "partes": [
          {
            "etiqueta": "Primer número",
            "opciones": [
              "$10$",
              "$12$",
              "$8$",
              "$15$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Producto máximo",
            "opciones": [
              "$100$",
              "$96$",
              "$80$",
              "$120$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Función a optimizar",
            "d": "$P(x)=x(20-x)=20x-x^2$, con $0\\lt x\\lt20$."
          },
          {
            "t": "Derivada",
            "d": "$P'(x)=20-2x=0\\Rightarrow x=10$, y el otro número es $10$."
          },
          {
            "t": "Producto",
            "d": "$P(10)=10\\cdot10=100$. Como $P''(x)=-2\\lt0$, es un máximo."
          }
        ],
        "truco": "Con suma fija, el producto se maximiza cuando los dos números son iguales.",
        "errorTipico": "Dar $10+10=20$ como respuesta del producto: el enunciado pide el producto, no la suma."
      },
      {
        "id": "m2-rep-01",
        "materia": "mates-ii",
        "bloque": "rectas-planos",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Recta como intersección de dos planos",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Halla unas ecuaciones paramétricas de la recta $r$ dada por $r:\\begin{cases}x+y-z=1\\ 2x-y+z=2\\end{cases}$.",
        "pista": "La dirección de la recta es el producto vectorial de los dos vectores normales. Para el punto, fija el valor de una variable y resuelve.",
        "partes": [
          {
            "etiqueta": "Ecuaciones paramétricas de $r$",
            "opciones": [
              "$(1,0,0)+t(0,1,1)$",
              "$(1,1,0)+t(0,1,1)$",
              "$(0,1,1)+t(1,0,0)$",
              "$(1,0,0)+t(1,1,0)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Dirección",
            "d": "$\\vec d=\\vec n_1\\times\\vec n_2=(1,1,-1)\\times(2,-1,1)=(0,-3,-3)\\parallel(0,1,1)$."
          },
          {
            "t": "Punto",
            "d": "Con $z=0$ queda $x+y=1$ y $2x-y=2$; sumando, $3x=3$, luego $x=1$ e $y=0$: el punto es $(1,0,0)$."
          },
          {
            "t": "Comprobación",
            "d": "Tomando $z=t$ se obtiene $x=1$, $y=t$: la recta es $(1,t,t)$."
          }
        ],
        "truco": "Con dos ecuaciones y tres incógnitas, deja una variable como parámetro y despeja las otras dos.",
        "errorTipico": "Usar el normal de uno de los planos como dirección: la recta es perpendicular a **ambos** normales, no paralela a uno de ellos."
      },
      {
        "id": "m2-rep-02",
        "materia": "mates-ii",
        "bloque": "rectas-planos",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Posición relativa de recta y plano",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Estudia la posición relativa de la recta $r:(x,y,z)=(1,2,3)+t(1,-1,0)$ y el plano $\\pi:x+y-3=0$.",
        "pista": "Si la dirección de la recta es perpendicular al normal del plano, la recta es paralela o está contenida: decide sustituyendo un punto.",
        "partes": [
          {
            "etiqueta": "Posición relativa",
            "opciones": [
              "Secantes en un punto",
              "Paralelos, con la recta fuera del plano",
              "La recta está contenida en el plano",
              "La recta es perpendicular al plano"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Normal y dirección",
            "d": "$\\vec n=(1,1,0)$ y $\\vec d=(1,-1,0)$: $\\vec n\\cdot\\vec d=1-1+0=0$."
          },
          {
            "t": "Primera conclusión",
            "d": "La dirección es perpendicular al normal, así que la recta es paralela al plano o está contenida en él."
          },
          {
            "t": "Punto de la recta",
            "d": "Para $t=0$, $(1,2,3)$: $1+2-3=0$, cumple la ecuación del plano."
          },
          {
            "t": "Resultado",
            "d": "Todos los puntos de la recta cumplen $x+y=3$: $r\\subset\\pi$."
          }
        ],
        "truco": "Primero $\\vec n\\cdot\\vec d$; si vale cero, sustituye un punto de la recta en el plano para distinguir paralela de contenida.",
        "errorTipico": "Quedarse en «paralela» sin comprobar el punto y perder el caso de recta contenida en el plano."
      },
      {
        "id": "m2-int-03",
        "materia": "mates-ii",
        "bloque": "integrales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Cambio de variable y logaritmo",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Calcula $\\displaystyle\\int_0^1 2x(x^2+1)^2\\,dx$ y $\\displaystyle\\int_1^e \\frac{1}{x}\\,dx$.",
        "pista": "En la primera, prueba $u=x^2+1$; en la segunda, $\\frac1x$ es la derivada de $\\ln x$.",
        "partes": [
          {
            "etiqueta": "a) $\\displaystyle\\int_0^1 2x(x^2+1)^2\\,dx$",
            "opciones": [
              "7/3",
              "1/3",
              "8/3",
              "2"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "b) $\\displaystyle\\int_1^e \\frac{1}{x}\\,dx$",
            "opciones": [
              "1",
              "e",
              "0",
              "e-1"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Cambio de variable",
            "d": "$u=x^2+1$, $du=2x\\,dx$; si $x=0$, $u=1$, y si $x=1$, $u=2$."
          },
          {
            "t": "Primera integral",
            "d": "$\\displaystyle\\int_1^2 u^2\\,du=\\left[\\frac{u^3}{3}\\right]_1^2=\\frac83-\\frac13=\\frac73$."
          },
          {
            "t": "Segunda integral",
            "d": "$\\displaystyle\\int_1^e \\frac1x\\,dx=[\\ln x]_1^e=1-0=1$."
          }
        ],
        "truco": "Al cambiar de variable, cambia también los límites; no vuelvas a evaluar en $x$.",
        "errorTipico": "Olvidar cambiar los límites y evaluar $u$ entre $0$ y $1$, o escribir $\\ln e=0$."
      },
      {
        "id": "m2-opt-05",
        "materia": "mates-ii",
        "bloque": "optimizacion",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Rectángulo de área fija con perímetro mínimo",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Un rectángulo tiene un área de $36\\ \\text{m}^2$. Calcula las dimensiones que minimizan su perímetro y el perímetro mínimo.",
        "pista": "Si los lados son $x$ e $y$, entonces $xy=36$. Escribe el perímetro en función de $x$: $P=2x+\\frac{72}{x}$.",
        "partes": [
          {
            "etiqueta": "Lado x (m)",
            "opciones": [
              "6",
              "4",
              "9",
              "12"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Perímetro mínimo (m)",
            "opciones": [
              "24",
              "36",
              "12",
              "48"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Relación",
            "d": "$y=\\frac{36}{x}$, con $x>0$."
          },
          {
            "t": "Perímetro",
            "d": "$P(x)=2x+\\frac{72}{x}$; $P'(x)=2-\\frac{72}{x^2}=0\\Rightarrow x^2=36\\Rightarrow x=6$."
          },
          {
            "t": "Comprobar",
            "d": "$y=6$ y $P=2(6+6)=24$ m. Como $P''>0$, es un mínimo."
          }
        ],
        "truco": "Con área fija, el perímetro mínimo se alcanza en el cuadrado.",
        "errorTipico": "Probar solo valores enteros o no comprobar que el punto crítico es un mínimo."
      },
      {
        "id": "m2-opt-06",
        "materia": "mates-ii",
        "bloque": "optimizacion",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Beneficio máximo con precio decreciente",
        "fuente": "PAU CV · Matemáticas II (adaptado)",
        "enunciado": "Una empresa vende $x$ unidades a un precio $p=60-x$ € por unidad. El coste de producir $x$ unidades es $C(x)=10x+200$ €. Calcula el número de unidades que maximiza el beneficio, el precio por unidad y el beneficio máximo.",
        "pista": "Los ingresos son $I=x(60-x)$ y el beneficio $B=I-C$. Deriva e iguala a cero.",
        "partes": [
          {
            "etiqueta": "Unidades",
            "opciones": [
              "25",
              "30",
              "20",
              "50"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Precio por unidad (€)",
            "opciones": [
              "35",
              "25",
              "60",
              "30"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Beneficio máximo (€)",
            "opciones": [
              "425",
              "400",
              "450",
              "625"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Ingresos y beneficio",
            "d": "$I=60x-x^2$, $B=60x-x^2-10x-200=-x^2+50x-200$."
          },
          {
            "t": "Máximo",
            "d": "$B'(x)=-2x+50=0\\Rightarrow x=25$. El precio es $p=60-25=35$ €."
          },
          {
            "t": "Beneficio",
            "d": "$B(25)=-625+1250-200=425$ €. Como $B''=-2<0$, es un máximo."
          }
        ],
        "truco": "El beneficio es ingresos menos costes; no confundas el precio con el ingreso.",
        "errorTipico": "Maximizar solo los ingresos o olvidar restar el coste fijo."
      }
    ]
  );
})();
