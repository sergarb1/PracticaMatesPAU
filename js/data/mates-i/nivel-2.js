/* PAU Mates CV — Matemáticas I · 1º Bachillerato (Ciencias)
   nivel-2 · medio · 37 ejercicios
Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...    [
      {
        "id": "m1-alg-02",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Factorizar un polinomio con raíz doble",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Factoriza $P(x)=x^3-3x^2+4$ e indica su raíz simple y su raíz doble.",
        "pista": "Prueba divisores del término independiente: $P(-1)=0$. Aplica Ruffini y observa que el cociente es un cuadrado perfecto.",
        "partes": [
          {
            "etiqueta": "Raíz simple",
            "opciones": [
              "0",
              "−1",
              "−2",
              "1"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Raíz doble",
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
            "t": "Buscar una raíz",
            "d": "$P(-1)=-1-3+4=0$, luego $x+1$ es factor."
          },
          {
            "t": "Ruffini",
            "d": "$P(x)=(x+1)(x^2-4x+4)=(x+1)(x-2)^2$."
          },
          {
            "t": "Raíces",
            "d": "Raíz simple $x=-1$; raíz doble $x=2$."
          }
        ],
        "truco": "El teorema del factor: si $P(a)=0$, entonces $x-a$ divide a $P$. Prueba primero $-1$, $1$, $2$, $-2$: son las candidatas habituales.",
        "errorTipico": "Dar por hecho que todas las raíces son simples. Un factor $(x-2)^2$ indica multiplicidad 2 y la gráfica es tangente al eje en ese punto."
      },
      {
        "id": "m1-alg-03",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sistema de tres ecuaciones lineales",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Resuelve $\\begin{cases}x+y+z=6\\\\[2pt] x-y+z=2\\\\[2pt] 2x+y-z=1\\end{cases}$.",
        "pista": "Suma la primera y la segunda ecuación: la $z$ y la $x$ se simplifican y aparece $y$. Después sustituye en la tercera.",
        "partes": [
          {
            "etiqueta": "x",
            "opciones": [
              "2",
              "0",
              "3",
              "1"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "y",
            "opciones": [
              "3",
              "1",
              "2",
              "4"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "z",
            "opciones": [
              "4",
              "2",
              "3",
              "5"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Eliminar z",
            "d": "$z=6-x-y$. En la segunda: $x-y+6-x-y=2\\Rightarrow-2y=-4\\Rightarrow y=2$."
          },
          {
            "t": "Sustituir y",
            "d": "En la tercera: $2x+2-(6-x-2)=1\\Rightarrow3x-2=1\\Rightarrow x=1$."
          },
          {
            "t": "Completar",
            "d": "$z=6-1-2=3$. Solución $(1,2,3)$, comprobada en las tres ecuaciones."
          }
        ],
        "truco": "Busca la variable que desaparece al sumar o restar dos ecuaciones. Elegir bien el par ahorra la mitad del trabajo.",
        "errorTipico": "Perder un signo al restar ecuaciones. Escribe la resta con paréntesis y comprueba la solución al final."
      },
      {
        "id": "m1-ana-02",
        "materia": "mates-i",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Derivada de un producto",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Sea $f(x)=x\\ln x$ para $x\\gt0$. Calcula $f'(e)$.",
        "pista": "Aplica la regla del producto: $(uv)'=u'v+uv'$, con $u=x$ y $v=\\ln x$. Después sustituye $x=e$ y recuerda $\\ln e=1$.",
        "partes": [
          {
            "etiqueta": "$f'(e)$",
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
            "t": "Regla del producto",
            "d": "$f'(x)=1\\cdot\\ln x+x\\cdot\\frac1x=\\ln x+1$."
          },
          {
            "t": "Sustituir",
            "d": "$f'(e)=\\ln e+1=1+1=2$."
          },
          {
            "t": "Interpretación",
            "d": "La pendiente de la tangente en $x=e$ es $2$."
          }
        ],
        "truco": "$\\ln e=1$ y $\\ln1=0$ son los dos valores que más se usan. Tenlos automatizados.",
        "errorTipico": "Derivar $x\\ln x$ como $\\ln x$ (olvidando el segundo término del producto) o como $1\\cdot\\frac1x$."
      },
      {
        "id": "m1-geo-01",
        "materia": "mates-i",
        "bloque": "vectores",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ángulo entre dos vectores",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Sean $\\vec u=(2,-1,3)$ y $\\vec v=(1,2,-1)$. Calcula $\\vec u\\cdot\\vec v$ y el ángulo que forman (en grados).",
        "pista": "$\\vec u\\cdot\\vec v=u_1v_1+u_2v_2+u_3v_3$ y $\\cos\\theta=\\frac{\\vec u\\cdot\\vec v}{|\\vec u||\\vec v|}$.",
        "partes": [
          {
            "etiqueta": "a) $\\vec u\\cdot\\vec v$",
            "opciones": [
              "−3",
              "−2",
              "−4",
              "−1"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "b) Ángulo ($^\\circ$)",
            "opciones": [
              "70,89",
              "119,11",
              "99,11",
              "109,11"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Producto escalar",
            "d": "$2\\cdot1+(-1)\\cdot2+3\\cdot(-1)=2-2-3=-3$."
          },
          {
            "t": "Módulos",
            "d": "$|\\vec u|=\\sqrt{4+1+9}=\\sqrt{14}$, $|\\vec v|=\\sqrt{1+4+1}=\\sqrt6$."
          },
          {
            "t": "Ángulo",
            "d": "$\\cos\\theta=\\dfrac{-3}{\\sqrt{84}}\\approx-0{,}3273\\Rightarrow\\theta\\approx109{,}11^\\circ$."
          }
        ],
        "truco": "Si el producto escalar es negativo, el ángulo es obtuso. La calculadora te dará directamente un ángulo entre $0^\\circ$ y $180^\\circ$ con $\\arccos$.",
        "errorTipico": "Olvidar los módulos en el denominador, o quedarse con el coseno y no calcular el ángulo."
      },
      {
        "id": "m1-geo-02",
        "materia": "mates-i",
        "bloque": "vectores",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Pertenencia de un punto a una recta",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Sea la recta $r:(x,y,z)=(1,2,3)+t(2,-1,1)$. Determina el valor de $t$ para el que el punto $P(5,0,5)$ pertenece a $r$.",
        "pista": "Iguala coordenada a coordenada. Si el punto pertenece a la recta, debe salir el mismo $t$ en las tres ecuaciones.",
        "partes": [
          {
            "etiqueta": "Valor de t",
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
            "t": "Plantear",
            "d": "$1+2t=5$, $2-t=0$, $3+t=5$."
          },
          {
            "t": "Resolver",
            "d": "De la primera $t=2$; de la segunda $t=2$; de la tercera $t=2$."
          },
          {
            "t": "Conclusión",
            "d": "El mismo $t$ en las tres: $P$ pertenece a $r$ (con $t=2$)."
          }
        ],
        "truco": "Un punto pertenece a una recta si un único parámetro sirve para las tres coordenadas. Con dos coordenadas ya puedes detectar si falla.",
        "errorTipico": "Aceptar el punto solo porque una coordenada encaja, sin comprobar las demás. Las tres deben dar el mismo $t$."
      },
      {
        "id": "m1-tri-02",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Razones trigonométricas y ángulo doble",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Si $\\operatorname{sen}\\alpha=\\dfrac35$ y $\\alpha$ está en el primer cuadrante, calcula $\\cos\\alpha$, $\\operatorname{sen}(2\\alpha)$ y $\\operatorname{tg}(2\\alpha)$.",
        "pista": "Usa $\\cos^2\\alpha=1-\\operatorname{sen}^2\\alpha$ (positivo en el primer cuadrante), $\\operatorname{sen}2\\alpha=2\\operatorname{sen}\\alpha\\cos\\alpha$ y la fórmula de $\\operatorname{tg}2\\alpha$.",
        "partes": [
          {
            "etiqueta": "a) $\\cos\\alpha$",
            "opciones": [
              "0,8",
              "1,6",
              "0,4",
              "1,0"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "b) $\\operatorname{sen}(2\\alpha)$",
            "opciones": [
              "0,96",
              "1,92",
              "0,48",
              "0,80"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "c) $\\operatorname{tg}(2\\alpha)$",
            "opciones": [
              "6,8572",
              "1,7143",
              "0,9600",
              "3,4286"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Coseno",
            "d": "$\\cos\\alpha=\\sqrt{1-\\frac{9}{25}}=\\sqrt{\\frac{16}{25}}=\\frac45$."
          },
          {
            "t": "Ángulo doble",
            "d": "$\\operatorname{sen}2\\alpha=2\\cdot\\frac35\\cdot\\frac45=\\frac{24}{25}=0{,}96$."
          },
          {
            "t": "Tangente",
            "d": "$\\operatorname{tg}\\alpha=\\frac34$; $\\operatorname{tg}2\\alpha=\\dfrac{2\\cdot\\frac34}{1-\\frac{9}{16}}=\\dfrac{3/2}{7/16}=\\dfrac{24}{7}\\approx3{,}4286$."
          }
        ],
        "truco": "El triángulo $3$-$4$-$5 es tu aliado: si el seno es $3/5$, el coseno es $4/5$ sin hacer cuentas. Aparece constantemente en la PAU.",
        "errorTipico": "Olvidar elegir el signo del coseno según el cuadrante, o calcular $\\operatorname{sen}2\\alpha$ como $2\\operatorname{sen}\\alpha$ y no como $2\\operatorname{sen}\\alpha\\cos\\alpha$."
      },
      {
        "id": "m1-tri-03",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Teorema del coseno y área de un triángulo",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "En un triángulo, $b=5$ cm, $c=8$ cm y el ángulo $A=60^\\circ$. Calcula el lado $a$ y el área.",
        "pista": "Lado: $a^2=b^2+c^2-2bc\\cos A$. Área: $\\frac12bc\\operatorname{sen}A$. Recuerda $\\cos60^\\circ=0{,}5$ y $\\operatorname{sen}60^\\circ=\\frac{\\sqrt3}{2}$.",
        "partes": [
          {
            "etiqueta": "Lado a (cm)",
            "opciones": [
              "8",
              "6",
              "9",
              "7"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Área (cm$^2$)",
            "opciones": [
              "34,64",
              "8,66",
              "17,32",
              "7,00"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Teorema del coseno",
            "d": "$a^2=25+64-2\\cdot5\\cdot8\\cdot0{,}5=89-40=49$."
          },
          {
            "t": "Lado",
            "d": "$a=\\sqrt{49}=7$ cm."
          },
          {
            "t": "Área",
            "d": "$A=\\frac12\\cdot5\\cdot8\\cdot\\frac{\\sqrt3}{2}=20\\cdot\\frac{\\sqrt3}{2}\\approx17{,}32\\ \\text{cm}^2$."
          }
        ],
        "truco": "Si aparecen dos lados y el ángulo comprendido, el teorema del coseno es directo. Si aparecen dos ángulos y un lado, usa el del seno.",
        "errorTipico": "Usar el teorema del seno cuando conoces dos lados y el ángulo entre ellos, o olvidar el doble producto en el coseno."
      },
      {
        "id": "m1-alg-04",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ecuaciones exponencial y logarítmica",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Resuelve $2^{x+1}=8^{x-1}$ y $\\log_2(x)+\\log_2(x-2)=3$.",
        "pista": "En la primera, escribe $8$ como $2^3$. En la segunda, usa $\\log_2 a+\\log_2 b=\\log_2(ab)$ y comprueba el dominio $x\\gt2$.",
        "partes": [
          {
            "etiqueta": "Solución de la exponencial",
            "opciones": [
              "2",
              "3",
              "1",
              "4"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Solución válida de la logarítmica",
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
            "t": "Exponencial",
            "d": "$2^{x+1}=2^{3(x-1)}\\Rightarrow x+1=3x-3\\Rightarrow x=2$."
          },
          {
            "t": "Logarítmica",
            "d": "$\\log_2[x(x-2)]=3\\Rightarrow x(x-2)=8\\Rightarrow x^2-2x-8=0$."
          },
          {
            "t": "Resolver y filtrar",
            "d": "$x=4$ o $x=-2$. Como $x\\gt2$, solo vale $x=4$."
          }
        ],
        "truco": "En ecuaciones logarítmicas, resolver y comprobar el dominio son dos pasos distintos. La solución negativa suele ser una trampa.",
        "errorTipico": "Olvidar que $8=2^3$ y comparar exponentes sin igualar bases, o aceptar $x=-2$ en la logarítmica."
      },
      {
        "id": "m1-tri-04",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ecuación trigonométrica en [0, 2π)",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Resuelve $2\\operatorname{sen}^2x-\\operatorname{sen}x-1=0$ en $[0,2\\pi)$.",
        "pista": "Haz $t=\\operatorname{sen}x$ y resuelve la ecuación de segundo grado. Después vuelve a $x$ y busca todos los ángulos del intervalo.",
        "opciones": [
          "$\\left\\{\\dfrac{\\pi}{2}\\right\\}$",
          "$\\left\\{\\dfrac{\\pi}{2},\\dfrac{7\\pi}{6},\\dfrac{11\\pi}{6}\\right\\}$",
          "$\\left\\{\\dfrac{\\pi}{6},\\dfrac{5\\pi}{6},\\dfrac{3\\pi}{2}\\right\\}$",
          "$\\left\\{\\dfrac{\\pi}{2},\\dfrac{\\pi}{6},\\dfrac{5\\pi}{6}\\right\\}$"
        ],
        "correcta": 1,
        "solucion": [
          {
            "t": "Cambio de variable",
            "d": "$2t^2-t-1=0\\Rightarrow t=1$ o $t=-\\frac12$."
          },
          {
            "t": "Volver al seno",
            "d": "$\\operatorname{sen}x=1\\Rightarrow x=\\frac{\\pi}{2}$; $\\operatorname{sen}x=-\\frac12\\Rightarrow x=\\frac{7\\pi}{6},\\frac{11\\pi}{6}$."
          },
          {
            "t": "Conjunto solución",
            "d": "$\\left\\{\\frac{\\pi}{2},\\frac{7\\pi}{6},\\frac{11\\pi}{6}\\right\\}$."
          }
        ],
        "truco": "Dibuja la circunferencia unidad: el seno es la altura. Para $-\\frac12$ hay dos ángulos simétricos en el tercer y cuarto cuadrante.",
        "errorTipico": "Olvidar una de las dos soluciones del seno o dar ángulos fuera del intervalo $[0,2\\pi)$."
      },
      {
        "id": "m1-geo-04",
        "materia": "mates-i",
        "bloque": "vectores",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Corte de una recta y un plano",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Halla el punto de corte de $r:(x,y,z)=(1,1,1)+t(1,2,-1)$ con el plano $\\pi:x+y+z=6$.",
        "pista": "Sustituye las coordenadas paramétricas en la ecuación del plano: $(1+t)+(1+2t)+(1-t)=6$.",
        "partes": [
          {
            "etiqueta": "$t$",
            "opciones": [
              "3,0",
              "0,8",
              "2,5",
              "1,5"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "$x$",
            "opciones": [
              "5,0",
              "1,3",
              "1,5",
              "2,5"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "$y$",
            "opciones": [
              "5",
              "3",
              "6",
              "4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "$z$",
            "opciones": [
              "−1,0",
              "−0,3",
              "−0,4",
              "−0,5"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Sustituir",
            "d": "$(1+t)+(1+2t)+(1-t)=3+2t=6\\Rightarrow t=\\frac32$."
          },
          {
            "t": "Punto",
            "d": "$(1+\\frac32,\\,1+3,\\,1-\\frac32)=(\\frac52,4,-\\frac12)$."
          },
          {
            "t": "Comprobar",
            "d": "$\\frac52+4-\\frac12=6$, luego pertenece al plano."
          }
        ],
        "truco": "El parámetro del corte es único. Si al sustituir desaparece $t$ y queda una igualdad falsa, la recta es paralela al plano.",
        "errorTipico": "Sustituir solo una coordenada o equivocarse al sumar $1+2t$ con $1-t$."
      },
      {
        "id": "m1-ana-04",
        "materia": "mates-i",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Recta tangente en un punto",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula la pendiente y la ordenada en el origen de la recta tangente a $f(x)=x^2-3x+1$ en $x=2$.",
        "pista": "La pendiente es $f'(2)$ y el punto de tangencia es $(2,f(2))$. Aplica $y-f(2)=f'(2)(x-2)$.",
        "partes": [
          {
            "etiqueta": "Pendiente",
            "opciones": [
              "2",
              "0",
              "3",
              "1"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Ordenada en el origen",
            "opciones": [
              "−2",
              "−3",
              "−4",
              "−1"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Punto",
            "d": "$f(2)=4-6+1=-1$."
          },
          {
            "t": "Pendiente",
            "d": "$f'(x)=2x-3$; $f'(2)=1$."
          },
          {
            "t": "Tangente",
            "d": "$y+1=1(x-2)\\Rightarrow y=x-3$: ordenada $-3$."
          }
        ],
        "truco": "La tangente en $x=a$ es la mejor aproximación lineal de $f$ cerca de $a$: $f(x)\\approx f(a)+f'(a)(x-a)$.",
        "errorTipico": "Usar $f(2)$ como pendiente o confundir la ordenada en el origen con el valor de $f(2)$."
      },
      {
        "id": "m1-lim-01",
        "materia": "mates-i",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Límite en el infinito",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula $\\displaystyle\\lim_{x\\to+\\infty}\\frac{2x^2+1}{x^2+3}$.",
        "pista": "Divide numerador y denominador entre $x^2$ y mira qué términos tienden a cero.",
        "opciones": [
          "2",
          "1",
          "0",
          "$+\\infty$"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Dividir",
            "d": "$\\dfrac{2x^2+1}{x^2+3}=\\dfrac{2+1/x^2}{1+3/x^2}$."
          },
          {
            "t": "Límite",
            "d": "$1/x^2\\to0$, así que el límite es $\\dfrac21=2$."
          }
        ],
        "truco": "Si los grados del numerador y del denominador coinciden, el límite es el cociente de los coeficientes líderes.",
        "errorTipico": "Mirar solo el término $1$ del numerador o el $3$ del denominador."
      },
      {
        "id": "m1-der-01",
        "materia": "mates-i",
        "bloque": "derivadas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Derivada de un polinomio en un punto",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Sea $f(x)=x^3-2x$. Calcula $f'(2)$.",
        "pista": "Deriva término a término: $(x^3)'=3x^2$ y $(-2x)'=-2$. Después sustituye $x=2$.",
        "opciones": [
          "10",
          "12",
          "6",
          "8"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Derivada",
            "d": "$f'(x)=3x^2-2$."
          },
          {
            "t": "Sustituir",
            "d": "$f'(2)=3\\cdot4-2=10$."
          }
        ],
        "truco": "Deriva primero y sustituye después. Así reutilizas la expresión si te piden otro punto.",
        "errorTipico": "Derivar $x^3$ como $3x$ o evaluar $f(2)$ en vez de $f'(2)$."
      },
      {
        "id": "m1-num-04",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Simplificación de radicales",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Expresa $\\sqrt{50}-\\sqrt{18}$ de la forma más simple y da su valor decimal redondeado a dos cifras.",
        "pista": "Extrae factorizaciones cuadradas: $50=25\\cdot2$ y $18=9\\cdot2$. Solo se pueden restar radicales con el mismo radicando.",
        "partes": [
          {
            "etiqueta": "Forma simplificada",
            "opciones": [
              "$2\\sqrt{2}$",
              "$8\\sqrt{2}$",
              "$\\sqrt{32}$",
              "$2\\sqrt{8}$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor decimal",
            "opciones": [
              "$2{,}83$",
              "$2{,}24$",
              "$5{,}66$",
              "$4{,}00$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Extraer cuadrados",
            "d": "$\\sqrt{50}=5\\sqrt{2}$ y $\\sqrt{18}=3\\sqrt{2}$."
          },
          {
            "t": "Restar",
            "d": "$(5-3)\\sqrt{2}=2\\sqrt{2}$."
          },
          {
            "t": "Decimal",
            "d": "$2\\sqrt{2}\\approx2{,}828$, es decir, $2{,}83$."
          }
        ],
        "truco": "Saca el mayor cuadrado perfecto posible del radicando y opera solo los coeficientes.",
        "errorTipico": "Restar los radicandos y responder $\\sqrt{32}$, que no es equivalente."
      },
      {
        "id": "m1-num-05",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ecuación exponencial y logarítmica",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Resuelve $2^{x+1}=16$ y $\\log_2 x=5$.",
        "pista": "Escribe $16$ como potencia de $2$. Para el logaritmo, usa su definición: $\\log_b x=c\\iff x=b^c$.",
        "partes": [
          {
            "etiqueta": "$2^{x+1}=16$",
            "opciones": [
              "$x=3$",
              "$x=4$",
              "$x=2$",
              "$x=5$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$\\log_2 x=5$",
            "opciones": [
              "$x=32$",
              "$x=25$",
              "$x=10$",
              "$x=64$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Igualar bases",
            "d": "$16=2^4$, luego $x+1=4$ y $x=3$."
          },
          {
            "t": "Definición de logaritmo",
            "d": "$\\log_2x=5\\iff x=2^5=32$."
          }
        ],
        "truco": "Todo exponencial se resuelve igualando bases; todo logaritmo, pasando a su forma exponencial.",
        "errorTipico": "Dividir $16:2=8$ y responder $x=4$, que resuelve $2^{x}=16$, no $2^{x+1}=16$."
      },
      {
        "id": "m1-suc-03",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Límite de una sucesión racional",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula $\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n^2-3n}{2n^2+1}$.",
        "pista": "Divide entre $n^2$ y observa que los términos con $n$ en el denominador tienden a cero.",
        "partes": [
          {
            "etiqueta": "Límite",
            "opciones": [
              "$0{,}5$",
              "$1$",
              "$2$",
              "$\\infty$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Dividir",
            "d": "$\\dfrac{n^2-3n}{2n^2+1}=\\dfrac{1-3/n}{2+1/n^2}$."
          },
          {
            "t": "Límite",
            "d": "Los términos sobrantes se anulan y queda $\\dfrac{1}{2}=0{,}5$."
          }
        ],
        "truco": "Mismo grado: cociente de coeficientes líderes, aquí $1/2$.",
        "errorTipico": "Fijarse en $-3n$ y decir que el límite es negativo o infinito."
      },
      {
        "id": "m1-suc-04",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sucesión recurrente de dos términos anteriores",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Sea $a_1=1$, $a_2=3$ y $a_n=a_{n-1}+a_{n-2}$ para $n\\ge3$. Calcula $a_5$.",
        "pista": "Cada término es la suma de los dos anteriores. Ve calculando en orden.",
        "partes": [
          {
            "etiqueta": "$a_5$",
            "opciones": [
              "$11$",
              "$7$",
              "$15$",
              "$10$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Tercer término",
            "d": "$a_3=a_2+a_1=3+1=4$."
          },
          {
            "t": "Cuarto término",
            "d": "$a_4=a_3+a_2=4+3=7$."
          },
          {
            "t": "Quinto término",
            "d": "$a_5=a_4+a_3=7+4=11$."
          }
        ],
        "truco": "En una recurrencia de dos términos, escribe la lista completa: un salto en el orden arruina todo.",
        "errorTipico": "Sumar siempre $a_1+a_2=4$ y responder $4$ o repetir el tercer término."
      },
      {
        "id": "m1-suc-05",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Suma de los diez primeros términos",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Una progresión aritmética empieza en $5$ y tiene diferencia $2$. Calcula $a_{10}$ y $S_{10}$.",
        "pista": "$a_{10}=a_1+9d$ y $S_{10}=\\dfrac{10(a_1+a_{10})}{2}$.",
        "partes": [
          {
            "etiqueta": "$a_{10}$",
            "opciones": [
              "$23$",
              "$25$",
              "$21$",
              "$27$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$S_{10}$",
            "opciones": [
              "$140$",
              "$120$",
              "$280$",
              "$150$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Décimo término",
            "d": "$a_{10}=5+9\\cdot2=23$."
          },
          {
            "t": "Suma",
            "d": "$S_{10}=\\dfrac{10(5+23)}{2}=5\\cdot28=140$."
          }
        ],
        "truco": "También vale $S_n=n\\,a_1+d\\dfrac{n(n-1)}{2}$: elige la fórmula según los datos que tengas.",
        "errorTipico": "Usar $a_{10}=5+10\\cdot2=25$ y arrastrar el error a la suma."
      },
      {
        "id": "m1-con-03",
        "materia": "mates-i",
        "bloque": "conicas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Semiejes y excentricidad de una elipse",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Dada la elipse $\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$, calcula el semieje mayor y la excentricidad.",
        "pista": "Con $a\\gt b$, la elipse tiene $a=5$, $b=3$. La distancia focal cumple $c^2=a^2-b^2$ y la excentricidad es $e=c/a$.",
        "partes": [
          {
            "etiqueta": "Semieje mayor $a$",
            "opciones": [
              "$5$",
              "$3$",
              "$4$",
              "$25$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Excentricidad $e$",
            "opciones": [
              "$0{,}8$",
              "$0{,}6$",
              "$1{,}25$",
              "$0{,}64$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Semiejes",
            "d": "$a^2=25\\Rightarrow a=5$; $b^2=9\\Rightarrow b=3$."
          },
          {
            "t": "Distancia focal",
            "d": "$c=\\sqrt{25-9}=\\sqrt{16}=4$."
          },
          {
            "t": "Excentricidad",
            "d": "$e=\\dfrac{c}{a}=\\dfrac{4}{5}=0{,}8$."
          }
        ],
        "truco": "En la elipse $c^2=a^2-b^2$ y $e\\lt1$; en la hipérbola $c^2=a^2+b^2$ y $e\\gt1$.",
        "errorTipico": "Usar $c^2=a^2+b^2$ (fórmula de la hipérbola) y obtener $c=\\sqrt{34}$."
      },
      {
        "id": "m1-con-04",
        "materia": "mates-i",
        "bloque": "conicas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Asíntotas y focos de una hipérbola",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Para la hipérbola $\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$, halla las asíntotas y los focos.",
        "pista": "Aquí $a=3$ y $b=4$. Las asíntotas son $y=\\pm\\dfrac{b}{a}x$ y los focos cumplen $c^2=a^2+b^2$.",
        "partes": [
          {
            "etiqueta": "Asíntotas",
            "opciones": [
              "$y=\\pm\\frac{4}{3}x$",
              "$y=\\pm\\frac{3}{4}x$",
              "$y=\\pm\\frac{16}{9}x$",
              "$y=\\pm4x$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Focos",
            "opciones": [
              "$(\\pm5,0)$",
              "$(\\pm4,0)$",
              "$(\\pm3,0)$",
              "$(\\pm7,0)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Semiejes",
            "d": "$a=3$, $b=4$."
          },
          {
            "t": "Asíntotas",
            "d": "$y=\\pm\\dfrac{b}{a}x=\\pm\\dfrac{4}{3}x$."
          },
          {
            "t": "Focos",
            "d": "$c=\\sqrt{9+16}=5$, focos $(\\pm5,0)$."
          }
        ],
        "truco": "La hipérbola abre en el eje del término positivo: aquí el horizontal, así que los focos están en el eje $x$.",
        "errorTipico": "Calcular $c=\\sqrt{9-16}$ o usar $c^2=a^2-b^2$, que correspondería a una elipse."
      },
      {
        "id": "m1-alg-08",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ecuación logarítmica",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Resuelve $\\log_2 x+\\log_2(x-2)=3$.",
        "pista": "Suma de logaritmos = logaritmo del producto; después pasa a forma exponencial.",
        "partes": [
          {
            "etiqueta": "Solución",
            "opciones": [
              "$x=4$",
              "$x=4$ y $x=-2$",
              "$x=8$",
              "$x=6$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Agrupar",
            "d": "$\\log_2\\big(x(x-2)\\big)=3\\Rightarrow x(x-2)=8$."
          },
          {
            "t": "Resolver",
            "d": "$x^2-2x-8=0\\Rightarrow x=4$ o $x=-2$."
          },
          {
            "t": "Dominio",
            "d": "Se necesita $x\\gt2$: solo vale $x=4$."
          }
        ],
        "truco": "Antes de resolver, apunta el dominio: los logaritmos solo admiten argumentos positivos.",
        "errorTipico": "Aceptar $x=-2$, que no está en el dominio."
      },
      {
        "id": "m1-alg-09",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Ecuación bicuadrada",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Resuelve $x^4-5x^2+4=0$.",
        "pista": "Haz el cambio $t=x^2$ y resuelve la ecuación de segundo grado en $t$.",
        "partes": [
          {
            "etiqueta": "Soluciones",
            "opciones": [
              "$x=\\pm1$, $x=\\pm2$",
              "$x=1$, $x=4$",
              "$x=\\pm2$",
              "$x=\\pm1$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Cambio",
            "d": "$t=x^2\\Rightarrow t^2-5t+4=0$."
          },
          {
            "t": "En $t$",
            "d": "$t=1$ o $t=4$."
          },
          {
            "t": "Volver a $x$",
            "d": "$x^2=1\\Rightarrow x=\\pm1$; $x^2=4\\Rightarrow x=\\pm2$."
          }
        ],
        "truco": "Si alguna raíz en $t$ sale negativa, esa rama no da soluciones reales.",
        "errorTipico": "Responder $x=1$ y $x=4$ sin deshacer el cambio."
      },
      {
        "id": "m1-alg-10",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Resto por el teorema del resto",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Halla el resto de dividir $P(x)=x^3-2x+5$ entre $x+2$.",
        "pista": "El teorema del resto dice que el resto es $P(-2)$.",
        "partes": [
          {
            "etiqueta": "Resto",
            "opciones": [
              "$1$",
              "$-7$",
              "$9$",
              "$0$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Evaluar",
            "d": "$P(-2)=(-2)^3-2(-2)+5=-8+4+5=1$."
          },
          {
            "t": "Interpretación",
            "d": "El resto es $1$, luego $x+2$ no es factor de $P$."
          }
        ],
        "truco": "Para dividir entre $x-a$ se evalúa en $a$; para $x+2$, en $-2$.",
        "errorTipico": "Evaluar en $2$ en lugar de $-2$ y obtener $9$."
      },
      {
        "id": "m1-num-08",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Inecuación con valor absoluto",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Resuelve $|2x-1|\\le5$.",
        "pista": "$|u|\\le k$ equivale a $-k\\le u\\le k$.",
        "partes": [
          {
            "etiqueta": "Intervalo solución",
            "opciones": [
              "$[-2,3]$",
              "$(-\\infty,-2]\\cup[3,+\\infty)$",
              "$[-3,2]$",
              "$[-1,3]$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Doble desigualdad",
            "d": "$-5\\le2x-1\\le5$."
          },
          {
            "t": "Despejar",
            "d": "$-4\\le2x\\le6\\Rightarrow-2\\le x\\le3$."
          }
        ],
        "truco": "La solución de $|u|\\le k$ es un intervalo cerrado; la de $|u|\\ge k$, una unión de intervalos.",
        "errorTipico": "Resolver solo $2x-1\\le5$ y olvidar la cota inferior."
      },
      {
        "id": "m1-num-09",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Logaritmos con bases distintas",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Calcula $\\log_2 8+\\log_3\\dfrac{1}{9}$.",
        "pista": "Pregúntate a qué exponente hay que elevar cada base para obtener el argumento.",
        "partes": [
          {
            "etiqueta": "Valor de la suma",
            "opciones": [
              "$1$",
              "$-1$",
              "$5$",
              "$6$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Primer logaritmo",
            "d": "$2^3=8\\Rightarrow\\log_2 8=3$."
          },
          {
            "t": "Segundo logaritmo",
            "d": "$3^{-2}=\\dfrac19\\Rightarrow\\log_3\\dfrac19=-2$."
          },
          {
            "t": "Suma",
            "d": "$3+(-2)=1$."
          }
        ],
        "truco": "$\\log_a a^n=n$ funciona también con exponentes negativos.",
        "errorTipico": "Sumar los argumentos ($8+\\frac19$) en vez de los logaritmos."
      },
      {
        "id": "m1-suc-08",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Suma de veinte términos",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Halla la suma de los 20 primeros términos de $5,\\ 8,\\ 11,\\dots$",
        "pista": "Necesitas $a_{20}$; con $a_1$ y $a_{20}$ la suma es $S_n=\\dfrac{(a_1+a_n)n}{2}$.",
        "partes": [
          {
            "etiqueta": "Suma",
            "opciones": [
              "$670$",
              "$700$",
              "$335$",
              "$620$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Diferencia y término 20",
            "d": "$d=3$, $a_{20}=5+19\\cdot3=62$."
          },
          {
            "t": "Suma",
            "d": "$S_{20}=\\dfrac{(5+62)\\cdot20}{2}=670$."
          }
        ],
        "truco": "Empareja el primero con el último: cada pareja suma $67$ y hay 10 parejas.",
        "errorTipico": "Usar $a_{20}=5+20\\cdot3=65$ y obtener $700$."
      },
      {
        "id": "m1-suc-09",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Capital final con interés compuesto",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Un capital de $1500$ € se deposita al $2\\%$ anual compuesto durante 5 años. ¿Qué capital tendrás al final?",
        "pista": "Cada año el capital se multiplica por $1{,}02$: es una progresión geométrica.",
        "partes": [
          {
            "etiqueta": "Capital final",
            "opciones": [
              "$1656{,}12$ €",
              "$1650$ €",
              "$1600$ €",
              "$1712{,}15$ €"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Fórmula",
            "d": "$C_f=C(1+i)^n=1500\\cdot1{,}02^5$."
          },
          {
            "t": "Cálculo",
            "d": "$1{,}02^5=1{,}10408\\ldots$ y $C_f=1656{,}12$ €."
          }
        ],
        "truco": "El capital crece como $C(1+i)^n$: interés compuesto, no sumar intereses año a año.",
        "errorTipico": "Sumar $1500+5\\cdot30=1650$ €, que es interés simple."
      },
      {
        "id": "m1-tri-07",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Seno del ángulo doble",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Con $\\operatorname{sen}\\alpha=\\dfrac35$ y $\\alpha$ agudo, calcula $\\operatorname{sen}2\\alpha$.",
        "pista": "Necesitas el coseno: usa la identidad fundamental y la fórmula del ángulo doble.",
        "partes": [
          {
            "etiqueta": "Seno de $2alpha$",
            "opciones": [
              "$\\dfrac{24}{25}$",
              "$\\dfrac{12}{25}$",
              "$\\dfrac{7}{25}$",
              "$\\dfrac65$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Coseno",
            "d": "$\\cos\\alpha=\\dfrac45$ (ángulo agudo)."
          },
          {
            "t": "Ángulo doble",
            "d": "$\\operatorname{sen}2\\alpha=2\\cdot\\dfrac35\\cdot\\dfrac45=\\dfrac{24}{25}$."
          }
        ],
        "truco": "El seno del ángulo doble se acerca a $1$ cuando el ángulo ronda $45^\\circ$.",
        "errorTipico": "Multiplicar el seno por 2 y responder $6/5$, que es imposible."
      },
      {
        "id": "m1-tri-08",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Teorema del seno",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "En un triángulo, $A=30^\\circ$, $B=45^\\circ$ y $a=10$. ¿Cuánto mide $b$?",
        "pista": "Aplica $\\dfrac{a}{\\operatorname{sen}A}=\\dfrac{b}{\\operatorname{sen}B}$.",
        "partes": [
          {
            "etiqueta": "Lado $b$",
            "opciones": [
              "$10\\sqrt2\\approx14{,}14$",
              "$5\\sqrt2\\approx7{,}07$",
              "$20$",
              "$10\\sqrt3\\approx17{,}32$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Teorema del seno",
            "d": "$b=10\\cdot\\dfrac{\\operatorname{sen}45^\\circ}{\\operatorname{sen}30^\\circ}$."
          },
          {
            "t": "Cálculo",
            "d": "$b=10\\cdot\\dfrac{\\sqrt2/2}{1/2}=10\\sqrt2\\approx14{,}14$."
          }
        ],
        "truco": "Al lado mayor se le opone el ángulo mayor: como $45^\\circ\\gt30^\\circ$, debe salir $b\\gt a$.",
        "errorTipico": "Usar el coseno en lugar del seno."
      },
      {
        "id": "m1-tri-09",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Coseno negativo",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Resuelve $\\cos x=-\\dfrac12$ en $[0,2\\pi)$.",
        "pista": "Toma el ángulo de referencia $\\pi/3$ y colócalo en los cuadrantes donde el coseno es negativo.",
        "partes": [
          {
            "etiqueta": "Soluciones",
            "opciones": [
              "$x=\\dfrac{2\\pi}{3}$ y $x=\\dfrac{4\\pi}{3}$",
              "$x=\\dfrac{\\pi}{3}$ y $x=\\dfrac{5\\pi}{3}$",
              "$x=\\dfrac{\\pi}{6}$ y $x=\\dfrac{11\\pi}{6}$",
              "$x=\\dfrac{\\pi}{2}$ y $x=\\dfrac{3\\pi}{2}$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Cuadrantes",
            "d": "El coseno es negativo en el segundo y en el tercero."
          },
          {
            "t": "Ángulos",
            "d": "$\\pi-\\dfrac{\\pi}{3}=\\dfrac{2\\pi}{3}$ y $\\pi+\\dfrac{\\pi}{3}=\\dfrac{4\\pi}{3}$."
          }
        ],
        "truco": "Coseno negativo → cuadrantes II y III; seno negativo → III y IV.",
        "errorTipico": "Dar los ángulos del coseno positivo ($\\pi/3$ y $5\\pi/3$)."
      },
      {
        "id": "m1-con-06",
        "materia": "mates-i",
        "bloque": "conicas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Elipse con focos y semieje mayor",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Escribe la ecuación de la elipse con focos $(\\pm3,0)$ y semieje mayor $5$.",
        "pista": "En la elipse $a^2=b^2+c^2$, con $c$ la distancia del centro a cada foco.",
        "partes": [
          {
            "etiqueta": "Ecuación",
            "opciones": [
              "$\\dfrac{x^2}{25}+\\dfrac{y^2}{16}=1$",
              "$\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$",
              "$\\dfrac{x^2}{16}+\\dfrac{y^2}{25}=1$",
              "$\\dfrac{x^2}{9}+\\dfrac{y^2}{25}=1$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Datos",
            "d": "$c=3$, $a=5\\Rightarrow b^2=25-9=16$."
          },
          {
            "t": "Ecuación",
            "d": "$\\dfrac{x^2}{25}+\\dfrac{y^2}{16}=1$, con $a^2$ bajo la $x$ porque los focos están en el eje $X$."
          }
        ],
        "truco": "El semieje mayor es el mayor de los dos y va bajo el eje donde están los focos.",
        "errorTipico": "Calcular $b^2=c^2-a^2$ y obtener un valor negativo."
      },
      {
        "id": "m1-con-07",
        "materia": "mates-i",
        "bloque": "conicas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Hipérbola con vértices y asíntotas",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Halla la ecuación de la hipérbola con vértices $(\\pm4,0)$ y asíntotas $y=\\pm\\dfrac34x$.",
        "pista": "En $\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$ las asíntotas son $y=\\pm\\dfrac ba x$.",
        "partes": [
          {
            "etiqueta": "Ecuación",
            "opciones": [
              "$\\dfrac{x^2}{16}-\\dfrac{y^2}{9}=1$",
              "$\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$",
              "$\\dfrac{x^2}{16}+\\dfrac{y^2}{9}=1$",
              "$\\dfrac{x^2}{25}-\\dfrac{y^2}{9}=1$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Semieje $a$",
            "d": "Los vértices dan $a=4$."
          },
          {
            "t": "Semieje $b$",
            "d": "$\\dfrac ba=\\dfrac34\\Rightarrow b=3$."
          },
          {
            "t": "Ecuación",
            "d": "$\\dfrac{x^2}{16}-\\dfrac{y^2}{9}=1$."
          }
        ],
        "truco": "La pendiente de las asíntotas es $b/a$, no $a/b$.",
        "errorTipico": "Intercambiar $a$ y $b$ y responder $\\frac{x^2}{9}-\\frac{y^2}{16}=1$."
      },
      {
        "id": "m1-con-08",
        "materia": "mates-i",
        "bloque": "conicas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Vértice de una parábola",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "¿Dónde está el vértice de la parábola $y^2-8y+4x=0$?",
        "pista": "Completa el cuadrado en $y$: la variable que aparece al cuadrado es la que se agrupa.",
        "partes": [
          {
            "etiqueta": "Vértice",
            "opciones": [
              "$(4,4)$",
              "$(-4,4)$",
              "$(4,-4)$",
              "$(0,4)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Completar el cuadrado",
            "d": "$y^2-8y=(y-4)^2-16$."
          },
          {
            "t": "Reordenar",
            "d": "$(y-4)^2=16-4x=-4(x-4)$."
          },
          {
            "t": "Vértice",
            "d": "La parábola abre hacia la izquierda con vértice en $(4,4)$."
          }
        ],
        "truco": "En $(y-y_0)^2=-4p(x-x_0)$ el vértice es $(x_0,y_0)$, con los signos cambiados respecto a los del paréntesis.",
        "errorTipico": "Leer el vértice como $(-4,4)$ sin despejar el signo."
      },
      {
        "id": "m1-fun-04",
        "materia": "mates-i",
        "bloque": "funciones",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Inversa de una función afín",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Si $f(x)=2x-3$, ¿cuánto vale $f^{-1}(5)$?",
        "pista": "La inversa deshace el camino: busca qué $x$ cumple $f(x)=5$.",
        "partes": [
          {
            "etiqueta": "Valor de $f^{-1}(5)$",
            "opciones": [
              "$4$",
              "$7$",
              "$1$",
              "$2$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Despejar",
            "d": "$y=2x-3\\Rightarrow x=\\dfrac{y+3}{2}$."
          },
          {
            "t": "Calcular",
            "d": "$f^{-1}(5)=\\dfrac{5+3}{2}=4$."
          },
          {
            "t": "Comprobar",
            "d": "$f(4)=2\\cdot4-3=5$ ✓."
          }
        ],
        "truco": "Si $f(a)=b$, entonces $f^{-1}(b)=a$: no hace falta despejar si el número es sencillo.",
        "errorTipico": "Calcular $f(5)=7$ en vez de la inversa."
      },
      {
        "id": "m1-lim-03",
        "materia": "mates-i",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Límite con raíz conjugada",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula $\\displaystyle\\lim_{x\\to0}\\dfrac{\\sqrt{x+4}-2}{x}$.",
        "pista": "Al sustituir $x=0$ aparece $0/0$. Multiplica numerador y denominador por el conjugado $\\sqrt{x+4}+2$.",
        "partes": [
          {
            "etiqueta": "Valor del límite",
            "opciones": [
              "$\\dfrac14$",
              "$0$",
              "$\\dfrac12$",
              "No existe"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Indeterminación",
            "d": "Al sustituir: $\\dfrac{\\sqrt4-2}{0}=\\dfrac00$."
          },
          {
            "t": "Conjugado",
            "d": "$\\dfrac{(\\sqrt{x+4}-2)(\\sqrt{x+4}+2)}{x(\\sqrt{x+4}+2)}=\\dfrac{x+4-4}{x(\\sqrt{x+4}+2)}$."
          },
          {
            "t": "Simplificar y evaluar",
            "d": "Se cancela $x$: $\\dfrac{1}{\\sqrt{x+4}+2}\\to\\dfrac{1}{4}$."
          }
        ],
        "truco": "Con raíces y una resta que se anula, el conjugado convierte la diferencia en un factor $x$ que se cancela.",
        "errorTipico": "Responder $0$ porque el numerador tiende a $0$; el denominador también, y el cociente tiende a $1/4$."
      },
      {
        "id": "m1-lim-04",
        "materia": "mates-i",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Asíntotas de una función racional",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Halla la asíntota vertical, la horizontal y la oblicua de $f(x)=\\dfrac{x^2+1}{x-1}$.",
        "pista": "La vertical sale de anular el denominador. Compara los grados para la horizontal y divide los polinomios para la oblicua.",
        "partes": [
          {
            "etiqueta": "Asíntota vertical",
            "opciones": [
              "$x=1$",
              "$x=-1$",
              "$x=0$",
              "No tiene"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Asíntota horizontal",
            "opciones": [
              "No tiene",
              "$y=1$",
              "$y=0$",
              "$y=2$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Asíntota oblicua",
            "opciones": [
              "$y=x+1$",
              "$y=x-1$",
              "$y=x$",
              "$y=x^2+1$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Vertical",
            "d": "El denominador se anula en $x=1$ y el numerador vale $2\\ne0$: asíntota $x=1$."
          },
          {
            "t": "Horizontal",
            "d": "El grado del numerador ($2$) supera al del denominador ($1$): no hay asíntota horizontal."
          },
          {
            "t": "Oblicua",
            "d": "$x^2+1=(x-1)(x+1)+2$, luego $f(x)=x+1+\\dfrac{2}{x-1}$ y la asíntota es $y=x+1$."
          }
        ],
        "truco": "Si el numerador tiene un grado más que el denominador, hay oblicua y no horizontal; la división da la recta directamente.",
        "errorTipico": "Responder $y=0$ por comparar solo los coeficientes principales cuando los grados son distintos."
      },
      {
        "id": "m1-lim-05",
        "materia": "mates-i",
        "bloque": "limites",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Discontinuidad evitable",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Sea $f(x)=\\dfrac{x^2-4}{x-2}$ para $x\\ne2$ y $f(2)=k$. Halla $k$ para que $f$ sea continua en $x=2$ y clasifica la discontinuidad si $k=1$.",
        "pista": "Factoriza el numerador como diferencia de cuadrados y simplifica para $x\\ne2$. Después compara el límite con el valor $f(2)$.",
        "partes": [
          {
            "etiqueta": "Valor de $k$",
            "opciones": [
              "$4$",
              "$2$",
              "$0$",
              "$1$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Si $k=1$, la discontinuidad es",
            "opciones": [
              "Evitable",
              "De salto finito",
              "De salto infinito",
              "No hay discontinuidad"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Simplificar",
            "d": "$\\dfrac{x^2-4}{x-2}=\\dfrac{(x-2)(x+2)}{x-2}=x+2$ para $x\\ne2$."
          },
          {
            "t": "Límite",
            "d": "$\\lim_{x\\to2}f(x)=4$. Para que sea continua, $k=4$."
          },
          {
            "t": "Clasificar",
            "d": "Con $k=1$ el límite existe ($4$) pero no coincide con $f(2)$: discontinuidad evitable, se corrige redefiniendo $f(2)=4$."
          }
        ],
        "truco": "Si el límite existe y es finito, la discontinuidad es evitable; el «agujero» se tapa con el valor del límite.",
        "errorTipico": "Simplificar y evaluar en $x=2$ sin indicar que la función original no está definida allí."
      }
    ]
  );
})();
