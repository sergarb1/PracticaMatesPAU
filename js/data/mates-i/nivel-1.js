/* PAU Mates CV — Matemáticas I · 1º Bachillerato (Ciencias)
   nivel-1 · básico · 27 ejercicios
Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...    [
      {
        "id": "m1-alg-01",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Producto de números complejos",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula $(3+2i)(1-2i)$ e indica su parte real, su parte imaginaria y su módulo.",
        "pista": "Multiplica como un binomio y usa $i^2=-1$. El módulo de $a+bi$ es $\\sqrt{a^2+b^2}$.",
        "partes": [
          {
            "etiqueta": "Parte real",
            "opciones": [
              "8",
              "7",
              "6",
              "9"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Parte imaginaria",
            "opciones": [
              "−3",
              "−5",
              "−2",
              "−4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Módulo",
            "opciones": [
              "16,1246",
              "4,0312",
              "7,0000",
              "8,0623"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Producto",
            "d": "$(3+2i)(1-2i)=3-6i+2i-4i^2=3-4i+4=7-4i$."
          },
          {
            "t": "Partes",
            "d": "Parte real $7$; parte imaginaria $-4$."
          },
          {
            "t": "Módulo",
            "d": "$|7-4i|=\\sqrt{49+16}=\\sqrt{65}\\approx8{,}0623$."
          }
        ],
        "truco": "$i^2=-1$: cada vez que aparezca un $i^2$, cámbialo de signo. Es el único cuidado real del producto.",
        "errorTipico": "Sumar los términos en $i$ sin cambiarlos de signo, o calcular el módulo como $7-4=3$."
      },
      {
        "id": "m1-ana-01",
        "materia": "mates-i",
        "bloque": "funciones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Dominio de una raíz cuadrada",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "¿Cuál es el dominio de $f(x)=\\sqrt{x^2-4}$?",
        "pista": "El radicando debe ser no negativo: $x^2-4\\ge0$. Resuelve la inecuación y exprésala como unión de intervalos.",
        "opciones": [
          "$(-\\infty,-2]\\cup[2,+\\infty)$",
          "$[-2,2]$",
          "$(-\\infty,-2)\\cup(2,+\\infty)$",
          "$\\mathbb{R}\\setminus\\{-2,2\\}$"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Condición",
            "d": "$x^2-4\\ge0\\iff x^2\\ge4$."
          },
          {
            "t": "Resolver",
            "d": "$|x|\\ge2$, es decir, $x\\le-2$ o $x\\ge2$."
          },
          {
            "t": "Dominio",
            "d": "$(-\\infty,-2]\\cup[2,+\\infty)$, incluyendo los extremos porque la raíz de cero está definida."
          }
        ],
        "truco": "Dibuja la parábola $y=x^2-4$: es positiva fuera de las raíces. Así ves el signo sin memorizar reglas.",
        "errorTipico": "Poner intervalos abiertos en $-2$ y $2$. En esos puntos el radicando es $0$ y la función vale $0$, así que sí pertenecen al dominio."
      },
      {
        "id": "m1-ana-03",
        "materia": "mates-i",
        "bloque": "limites",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Dos límites fundamentales",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula:",
        "pista": "El primero es un límite fundamental: $\\lim_{x\\to0}\\frac{\\operatorname{sen}x}{x}=1$. En el segundo, divide numerador y denominador por $x^2$.",
        "partes": [
          {
            "etiqueta": "a) $\\displaystyle\\lim_{x\\to0}\\frac{\\operatorname{sen}x}{x}$",
            "opciones": [
              "2",
              "0",
              "3",
              "1"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "b) $\\displaystyle\\lim_{x\\to\\infty}\\frac{2x^2-x}{x^2+3}$",
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
            "t": "Límite fundamental",
            "d": "$\\lim_{x\\to0}\\frac{\\operatorname{sen}x}{x}=1$ (con $x$ en radianes)."
          },
          {
            "t": "Dividir por x²",
            "d": "$\\frac{2x^2-x}{x^2+3}=\\frac{2-1/x}{1+3/x^2}$."
          },
          {
            "t": "Límite",
            "d": "Cuando $x\\to\\infty$, los términos con $1/x$ desaparecen: $\\frac21=2$."
          }
        ],
        "truco": "En el infinito, manda el término de mayor grado. Si los grados coinciden, el límite es el cociente de los coeficientes líderes.",
        "errorTipico": "Sustituir $x=0$ en $\\operatorname{sen}x/x$ y decir que es $0/0$ sin recordar el límite fundamental, o calcular el segundo como $2-1=1$."
      },
      {
        "id": "m1-geo-03",
        "materia": "mates-i",
        "bloque": "vectores",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Distancia y punto medio",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Sean $A(1,2,3)$ y $B(4,6,3)$. Calcula la distancia entre ellos y la coordenada $x$ del punto medio.",
        "pista": "Distancia: $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$. Punto medio: media aritmética de cada coordenada.",
        "partes": [
          {
            "etiqueta": "Distancia",
            "opciones": [
              "6",
              "4",
              "7",
              "5"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Coordenada x del punto medio",
            "opciones": [
              "5,0",
              "2,5",
              "1,3",
              "2,6"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Vector AB",
            "d": "$\\overrightarrow{AB}=(3,4,0)$."
          },
          {
            "t": "Distancia",
            "d": "$\\sqrt{3^2+4^2+0^2}=\\sqrt{25}=5$."
          },
          {
            "t": "Punto medio",
            "d": "$M=\\left(\\frac{1+4}{2},\\frac{2+6}{2},\\frac{3+3}{2}\\right)=(2{,}5;\\,4;\\,3)$."
          }
        ],
        "truco": "Si la diferencia en $z$ es cero, el problema es plano: distancia $\\sqrt{3^2+4^2}=5$, el triángulo $3$-$4$-$5 otra vez.",
        "errorTipico": "Restar las coordenadas en orden arbitrario y olvidar elevar al cuadrado, o calcular el punto medio dividiendo solo una coordenada."
      },
      {
        "id": "m1-tri-01",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Ecuación trigonométrica en una vuelta",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Resuelve $\\operatorname{sen}x=\\dfrac12$ en el intervalo $[0,2\\pi)$.",
        "pista": "El seno vale $1/2$ en el ángulo de referencia $\\pi/6$. Hay un segundo ángulo en el segundo cuadrante: $\\pi-\\pi/6$.",
        "opciones": [
          "$x=\\dfrac{\\pi}{6}$ y $x=\\dfrac{5\\pi}{6}$",
          "$x=\\dfrac{\\pi}{6}$ solamente",
          "$x=\\dfrac{\\pi}{3}$ y $x=\\dfrac{2\\pi}{3}$",
          "$x=\\dfrac{5\\pi}{6}$ y $x=\\dfrac{7\\pi}{6}$"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Ángulo de referencia",
            "d": "$\\operatorname{sen}\\frac{\\pi}{6}=\\frac12$, con $\\frac{\\pi}{6}$ en el primer cuadrante."
          },
          {
            "t": "Segundo cuadrante",
            "d": "El seno también es positivo en el segundo cuadrante: $x=\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}$."
          },
          {
            "t": "Comprobar",
            "d": "Ambas soluciones están en $[0,2\\pi)$; en el tercer y cuarto cuadrante el seno es negativo."
          }
        ],
        "truco": "Dibuja la circunferencia unidad y una recta horizontal en $y=1/2$: corta en dos puntos simétricos respecto del eje $Y$. Esas son las dos soluciones.",
        "errorTipico": "Dar solo $\\pi/6$ y olvidar la solución del segundo cuadrante, o confundir $\\operatorname{sen}=\\frac12$ con $\\cos=\\frac12$ (que sería $\\pi/3$)."
      },
      {
        "id": "m1-alg-05",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Inecuación de segundo grado",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "¿Cuál es el conjunto solución de $x^2-5x+6\\lt0$?",
        "pista": "Factoriza: $x^2-5x+6=(x-2)(x-3)$. La parábola se abre hacia arriba, así que es negativa entre sus raíces.",
        "opciones": [
          "$(-\\infty,2)\\cup(3,\\infty)$",
          "$(2,3)$",
          "$[2,3]$",
          "$(-\\infty,2]\\cup[3,\\infty)$"
        ],
        "correcta": 1,
        "solucion": [
          {
            "t": "Factorizar",
            "d": "$x^2-5x+6=(x-2)(x-3)$."
          },
          {
            "t": "Signo",
            "d": "Las raíces son $2$ y $3$. Entre ellas, un factor es positivo y el otro negativo, así que el producto es negativo."
          },
          {
            "t": "Conclusión",
            "d": "La solución es $(2,3)$, con paréntesis porque la desigualdad es estricta."
          }
        ],
        "truco": "Parábola hacia arriba: negativa entre las raíces, positiva fuera. Si el signo fuera $\\le$, los extremos serían corchetes.",
        "errorTipico": "Escribir la solución fuera de las raíces o usar corchetes cuando la desigualdad es estricta."
      },
      {
        "id": "m1-tri-05",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Razones trigonométricas en un triángulo rectángulo",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "En un triángulo rectángulo, los catetos miden $3$ cm y $4$ cm. Calcula el seno y el coseno del ángulo opuesto al cateto de $3$ cm.",
        "pista": "La hipotenusa es $\\sqrt{3^2+4^2}=5$. El seno es cateto opuesto/hipotenusa y el coseno, cateto contiguo/hipotenusa.",
        "partes": [
          {
            "etiqueta": "$\\operatorname{sen}\\alpha$",
            "opciones": [
              "1,2",
              "0,6",
              "0,3",
              "0,8"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "$\\cos\\alpha$",
            "opciones": [
              "1,6",
              "0,4",
              "0,6",
              "0,8"
            ],
            "correcta": 3
          }
        ],
        "solucion": [
          {
            "t": "Hipotenusa",
            "d": "$h=\\sqrt{3^2+4^2}=5$."
          },
          {
            "t": "Seno",
            "d": "$\\operatorname{sen}\\alpha=\\frac{3}{5}=0{,}6$."
          },
          {
            "t": "Coseno",
            "d": "$\\cos\\alpha=\\frac{4}{5}=0{,}8$."
          }
        ],
        "truco": "El triángulo $3$-$4$-$5$ es el ejemplo perfecto para memorizar las razones: seno $3/5$, coseno $4/5$, tangente $3/4$.",
        "errorTipico": "Confundir cateto opuesto y contiguo, o calcular la hipotenusa como $3+4=7$."
      },
      {
        "id": "m1-fun-01",
        "materia": "mates-i",
        "bloque": "funciones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Dominio de una raíz cuadrada",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "¿Cuál es el dominio de $f(x)=\\sqrt{x-3}$?",
        "pista": "Lo que hay dentro de una raíz cuadrada no puede ser negativo: plantea $x-3\\ge0$.",
        "opciones": [
          "$[3,+\\infty)$",
          "$(3,+\\infty)$",
          "$(-\\infty,3]$",
          "$\\mathbb{R}$"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Condición",
            "d": "$x-3\\ge0$."
          },
          {
            "t": "Despejar",
            "d": "$x\\ge3$, luego el dominio es $[3,+\\infty)$."
          }
        ],
        "truco": "En una raíz de índice par, el radicando manda: nunca negativo. El extremo donde vale 0 sí entra.",
        "errorTipico": "Excluir el 3 con paréntesis, o pensar que el dominio es todo $\\mathbb{R}$."
      },
      {
        "id": "m1-lim-02",
        "materia": "mates-i",
        "bloque": "limites",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Límite 0/0 con diferencia de cuadrados",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula $\\displaystyle\\lim_{x\\to2}\\frac{x^2-4}{x-2}$.",
        "pista": "Factoriza $x^2-4=(x-2)(x+2)$ y simplifica antes de sustituir.",
        "opciones": [
          "4",
          "2",
          "0",
          "8"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Factorizar",
            "d": "$\\dfrac{(x-2)(x+2)}{x-2}=x+2$ si $x\\ne2$."
          },
          {
            "t": "Sustituir",
            "d": "$2+2=4$."
          }
        ],
        "truco": "La indeterminación 0/0 suele esconder un factor común. Simplifícalo y desaparece.",
        "errorTipico": "Concluir que el límite no existe porque sale 0/0."
      },
      {
        "id": "m1-der-02",
        "materia": "mates-i",
        "bloque": "derivadas",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Pendiente de la recta tangente",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "¿Cuál es la pendiente de la recta tangente a $f(x)=x^2$ en $x=3$?",
        "pista": "La pendiente de la tangente en un punto es $f'(a)$. Deriva y evalúa en $a=3$.",
        "opciones": [
          "6",
          "9",
          "3",
          "12"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Derivada",
            "d": "$f'(x)=2x$."
          },
          {
            "t": "Pendiente",
            "d": "$m=f'(3)=6$."
          }
        ],
        "truco": "Tangente = derivada. El valor $f(3)=9$ es la altura del punto, no la pendiente.",
        "errorTipico": "Confundir $f(3)$ con $f'(3)$ y responder $9$."
      },
      {
        "id": "m1-vec-01",
        "materia": "mates-i",
        "bloque": "vectores",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Módulo de un vector",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula el módulo de $\\vec u=(1,2,2)$.",
        "pista": "$|\\vec u|=\\sqrt{u_1^2+u_2^2+u_3^2}$. Eleva al cuadrado cada componente, suma y saca la raíz.",
        "opciones": [
          "3",
          "$\\sqrt5$",
          "9",
          "5"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Cuadrados",
            "d": "$1^2+2^2+2^2=1+4+4=9$."
          },
          {
            "t": "Raíz",
            "d": "$|\\vec u|=\\sqrt9=3$."
          }
        ],
        "truco": "El módulo es una longitud: siempre positivo. Si te sale 9, te has quedado en los cuadrados.",
        "errorTipico": "Sumar las componentes sin elevarlas al cuadrado y responder 5."
      },
      {
        "id": "m1-num-01",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Inecuación de segundo grado",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Resuelve $x^2-5x+6\\lt0$ y expresa la solución como intervalo.",
        "pista": "Calcula las raíces de $x^2-5x+6=0$ (son $2$ y $3$). Como el coeficiente de $x^2$ es positivo, la parábola abre hacia arriba.",
        "partes": [
          {
            "etiqueta": "Conjunto solución",
            "opciones": [
              "$(2,3)$",
              "$[2,3]$",
              "$(-\\infty,2)\\cup(3,\\infty)$",
              "$(-3,-2)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Raíces",
            "d": "$x^2-5x+6=(x-2)(x-3)=0\\Rightarrow x=2$, $x=3$."
          },
          {
            "t": "Signo",
            "d": "Con $a\\gt0$ la parábola es negativa entre las raíces."
          },
          {
            "t": "Solución",
            "d": "La desigualdad es estricta, así que los extremos no entran: $(2,3)$."
          }
        ],
        "truco": "Con $a\\gt0$: negativo entre las raíces, positivo fuera. Con $a\\lt0$, al revés.",
        "errorTipico": "Escribir $[2,3]$; el símbolo $\\lt$ excluye los extremos, donde la expresión vale $0$."
      },
      {
        "id": "m1-num-02",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Inecuación con valor absoluto",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Resuelve $|2x-3|\\le5$.",
        "pista": "$|A|\\le k$ equivale a $-k\\le A\\le k$. Resuelve las dos desigualdades a la vez.",
        "partes": [
          {
            "etiqueta": "Conjunto solución",
            "opciones": [
              "$[-1,4]$",
              "$[1,4]$",
              "$[-4,1]$",
              "$(-\\infty,4]$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Deshacer el valor absoluto",
            "d": "$-5\\le2x-3\\le5$."
          },
          {
            "t": "Sumar 3",
            "d": "$-2\\le2x\\le8$."
          },
          {
            "t": "Dividir entre 2",
            "d": "$-1\\le x\\le4$, es decir, $[-1,4]$."
          }
        ],
        "truco": "El valor absoluto menor o igual que un número siempre da un intervalo cerrado y acotado.",
        "errorTipico": "Resolver solo $2x-3\\le5$ y perder la mitad de la solución."
      },
      {
        "id": "m1-num-03",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Propiedades de los logaritmos",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula $\\log_2 8+\\log_3 9-\\log_{10}100$.",
        "pista": "Pregúntate a qué exponente hay que elevar la base para obtener el argumento.",
        "partes": [
          {
            "etiqueta": "Resultado",
            "opciones": [
              "$3$",
              "$7$",
              "$5$",
              "$1$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Cada logaritmo",
            "d": "$\\log_2 8=3$ porque $2^3=8$; $\\log_3 9=2$; $\\log_{10}100=2$."
          },
          {
            "t": "Operar",
            "d": "$3+2-2=3$."
          }
        ],
        "truco": "Un logaritmo es un exponente: si dudas, escribe la potencia equivalente.",
        "errorTipico": "Sumar los argumentos ($8+9-100$) como si los logaritmos fueran lineales."
      },
      {
        "id": "m1-suc-01",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Diferencia y término veinte de una aritmética",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "En una progresión aritmética $a_3=8$ y $a_7=20$. Calcula la diferencia y el término $a_{20}$.",
        "pista": "Entre $a_3$ y $a_7$ hay cuatro saltos: $a_7-a_3=4d$. Después retrocede hasta $a_1$.",
        "partes": [
          {
            "etiqueta": "Diferencia $d$",
            "opciones": [
              "$3$",
              "$4$",
              "$2{,}5$",
              "$12$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$a_{20}$",
            "opciones": [
              "$59$",
              "$62$",
              "$56$",
              "$60$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Diferencia",
            "d": "$20-8=4d\\Rightarrow d=3$."
          },
          {
            "t": "Primer término",
            "d": "$a_1=a_3-2d=8-6=2$."
          },
          {
            "t": "Término veinte",
            "d": "$a_{20}=2+19\\cdot3=59$."
          }
        ],
        "truco": "La diferencia es $\\dfrac{a_m-a_n}{m-n}$: no hace falta pasar por $a_1$ para hallarla.",
        "errorTipico": "Calcular $a_1$ restando $3d$ en vez de $2d$ y desviarse todo el ejercicio."
      },
      {
        "id": "m1-suc-02",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Suma de una serie geométrica infinita",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Calcula la razón y la suma de la serie $3+1+\\dfrac{1}{3}+\\ldots$",
        "pista": "La razón es el cociente entre un término y el anterior. Para la suma infinita, usa $S=\\dfrac{a_1}{1-r}$ solo si $|r|\\lt1$.",
        "partes": [
          {
            "etiqueta": "Razón $r$",
            "opciones": [
              "$\\dfrac{1}{3}$",
              "$3$",
              "$\\dfrac{2}{3}$",
              "$1$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Suma",
            "opciones": [
              "$4{,}5$",
              "$9$",
              "$6$",
              "$4$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Razón",
            "d": "$r=\\dfrac{1}{3}$."
          },
          {
            "t": "Convergencia",
            "d": "$|r|\\lt1$, así que la serie converge."
          },
          {
            "t": "Suma",
            "d": "$S=\\dfrac{3}{1-1/3}=\\dfrac{3}{2/3}=4{,}5$."
          }
        ],
        "truco": "Si $|r|\\ge1$ la suma infinita no existe: compruébalo antes de aplicar la fórmula.",
        "errorTipico": "Dividir al revés ($r=3$) y no obtener un valor finito."
      },
      {
        "id": "m1-con-01",
        "materia": "mates-i",
        "bloque": "conicas",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Centro y radio de una circunferencia",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Halla el centro y el radio de la circunferencia $x^2+y^2-4x+6y-12=0$.",
        "pista": "Agrupa los términos de $x$ y de $y$ y completa cuadrados. El centro es $(-a/2,-b/2)$ y el radio al cuadrado es centro² menos el término independiente.",
        "partes": [
          {
            "etiqueta": "Centro",
            "opciones": [
              "$(2,-3)$",
              "$(-2,3)$",
              "$(4,-6)$",
              "$(2,3)$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Radio",
            "opciones": [
              "$5$",
              "$25$",
              "$\\sqrt{12}$",
              "$13$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Completar cuadrados",
            "d": "$(x-2)^2-4+(y+3)^2-9-12=0$."
          },
          {
            "t": "Forma canónica",
            "d": "$(x-2)^2+(y+3)^2=25$."
          },
          {
            "t": "Leer",
            "d": "Centro $(2,-3)$ y radio $\\sqrt{25}=5$."
          }
        ],
        "truco": "Radio al cuadrado = (mitad de $a$)² + (mitad de $b$)² − término independiente.",
        "errorTipico": "Dar $25$ como radio y olvidar la raíz cuadrada."
      },
      {
        "id": "m1-con-02",
        "materia": "mates-i",
        "bloque": "conicas",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Foco y directriz de una parábola",
        "fuente": "Currículo CV · Matemáticas I",
        "enunciado": "Para la parábola $y^2=8x$, determina el foco y la directriz.",
        "pista": "Compara con $y^2=2px$: aquí $2p=8$, luego $p=4$. El vértice está en el origen y la parábola abre hacia la derecha.",
        "partes": [
          {
            "etiqueta": "Foco",
            "opciones": [
              "$(2,0)$",
              "$(0,2)$",
              "$(4,0)$",
              "$(-2,0)$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Directriz",
            "opciones": [
              "$x=-2$",
              "$x=2$",
              "$y=-2$",
              "$x=-4$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Parámetro",
            "d": "$2p=8\\Rightarrow p=4$."
          },
          {
            "t": "Foco",
            "d": "A distancia $p/2=2$ del vértice hacia la apertura: $(2,0)$."
          },
          {
            "t": "Directriz",
            "d": "Recta $x=-p/2=-2$."
          }
        ],
        "truco": "En $y^2=2px$ el foco está en $(p/2,0)$ y la directriz en $x=-p/2$.",
        "errorTipico": "Confundir $p$ con $2p$ y colocar el foco en $(4,0)$."
      },
      {
        "id": "m1-alg-06",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Ecuación con una raíz cuadrada",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Resuelve $\\sqrt{2x+3}=x$.",
        "pista": "Aísla la raíz (ya lo está), eleva al cuadrado y después comprueba las soluciones.",
        "partes": [
          {
            "etiqueta": "Soluciones de la ecuación",
            "opciones": [
              "$x=3$",
              "$x=-1$",
              "$x=3$ y $x=-1$",
              "$x=1$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Elevar al cuadrado",
            "d": "$2x+3=x^2$."
          },
          {
            "t": "Resolver",
            "d": "$x^2-2x-3=0\\Rightarrow x=3$ o $x=-1$."
          },
          {
            "t": "Comprobar",
            "d": "$x=3$: $\\sqrt9=3$ ✓. $x=-1$: $\\sqrt1=1\\ne-1$, se descarta."
          }
        ],
        "truco": "Al elevar al cuadrado pueden aparecer soluciones falsas: comprueba siempre en la ecuación original.",
        "errorTipico": "Dar las dos raíces de la cuadrática sin comprobar el signo de la raíz."
      },
      {
        "id": "m1-alg-07",
        "materia": "mates-i",
        "bloque": "algebra",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Sistema no lineal",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Resuelve el sistema $\\begin{cases}x+y=5\\\\[2pt] xy=6\\end{cases}$.",
        "pista": "Despeja $y=5-x$ de la primera ecuación y sustitúyela en la segunda.",
        "partes": [
          {
            "etiqueta": "Soluciones $(x,y)$",
            "opciones": [
              "$(2,3)$ y $(3,2)$",
              "$(1,6)$ y $(6,1)$",
              "$(1,5)$ y $(5,1)$",
              "$(2,4)$ y $(4,2)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sustituir",
            "d": "$y=5-x\\Rightarrow x(5-x)=6$."
          },
          {
            "t": "Ecuación",
            "d": "$x^2-5x+6=0\\Rightarrow x=2$ o $x=3$."
          },
          {
            "t": "Parejas",
            "d": "Si $x=2$, $y=3$; si $x=3$, $y=2$."
          }
        ],
        "truco": "Dos números con suma $S$ y producto $P$ son las raíces de $t^2-St+P=0$.",
        "errorTipico": "Dar solo una pareja: el sistema es simétrico y tiene dos soluciones."
      },
      {
        "id": "m1-num-06",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Racionalizar con dos raíces",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Racionaliza $\\dfrac{3}{\\sqrt5-\\sqrt2}$.",
        "pista": "Multiplica numerador y denominador por el conjugado $\\sqrt5+\\sqrt2$.",
        "partes": [
          {
            "etiqueta": "Expresión racionalizada",
            "opciones": [
              "$\\sqrt5+\\sqrt2$",
              "$\\sqrt5-\\sqrt2$",
              "$\\dfrac{3(\\sqrt5+\\sqrt2)}{7}$",
              "$3(\\sqrt5+\\sqrt2)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Conjugado",
            "d": "$\\dfrac{3(\\sqrt5+\\sqrt2)}{(\\sqrt5-\\sqrt2)(\\sqrt5+\\sqrt2)}$."
          },
          {
            "t": "Denominador",
            "d": "$(\\sqrt5)^2-(\\sqrt2)^2=5-2=3$."
          },
          {
            "t": "Simplificar",
            "d": "$\\dfrac{3(\\sqrt5+\\sqrt2)}{3}=\\sqrt5+\\sqrt2$."
          }
        ],
        "truco": "El conjugado convierte $a-b$ en $a^2-b^2$, que ya no tiene raíces.",
        "errorTipico": "Multiplicar por el conjugado y no simplificar el $3$ del numerador con el del denominador."
      },
      {
        "id": "m1-num-07",
        "materia": "mates-i",
        "bloque": "numeros-reales",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Notación científica",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "¿Cómo se escribe $0{,}00042$ en notación científica?",
        "pista": "Desplaza la coma hasta dejar una cifra no nula delante de ella y cuenta los saltos.",
        "partes": [
          {
            "etiqueta": "Notación científica",
            "opciones": [
              "$4{,}2\\cdot10^{-4}$",
              "$42\\cdot10^{-5}$",
              "$4{,}2\\cdot10^{4}$",
              "$0{,}42\\cdot10^{-3}$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Mantisa",
            "d": "$0{,}00042=4{,}2\\cdot10^{-4}$: la coma se desplaza 4 lugares a la derecha."
          },
          {
            "t": "Comprobación",
            "d": "$4{,}2\\cdot10^{-4}=0{,}00042$ ✓."
          }
        ],
        "truco": "La mantisa debe quedar entre 1 y 10; cada salto a la derecha resta 1 al exponente.",
        "errorTipico": "Dejar $42\\cdot10^{-5}$: no es notación científica porque $42\\gt10$."
      },
      {
        "id": "m1-suc-06",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Términos de una aritmética menores que 100",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "¿Cuántos términos de la progresión aritmética $5,\\ 9,\\ 13,\\dots$ son menores que $100$?",
        "pista": "Escribe el término general y plantea la desigualdad $a_n\\lt100$.",
        "partes": [
          {
            "etiqueta": "Número de términos",
            "opciones": [
              "24",
              "25",
              "23",
              "20"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Término general",
            "d": "$a_n=5+4(n-1)=4n+1$."
          },
          {
            "t": "Desigualdad",
            "d": "$4n+1\\lt100\\Rightarrow n\\lt24{,}75$."
          },
          {
            "t": "Comprobación",
            "d": "$a_{24}=97\\lt100$ y $a_{25}=101\\gt100$: hay 24 términos."
          }
        ],
        "truco": "Calcula el último término que cumple y el primero que se pasa: así no hay dudas con el redondeo.",
        "errorTipico": "Redondear al alza y contar 25 términos, pero $a_{25}=101$."
      },
      {
        "id": "m1-suc-07",
        "materia": "mates-i",
        "bloque": "sucesiones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Término de una progresión geométrica",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "En la progresión geométrica $2,\\ 6,\\ 18,\\dots$, ¿cuál es el sexto término?",
        "pista": "Halla la razón dividiendo dos términos consecutivos y usa $a_n=a_1r^{n-1}$.",
        "partes": [
          {
            "etiqueta": "Sexto término",
            "opciones": [
              "486",
              "162",
              "729",
              "1458"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Razón",
            "d": "$r=6/2=3$."
          },
          {
            "t": "Fórmula",
            "d": "$a_6=2\\cdot3^{5}=2\\cdot243=486$."
          }
        ],
        "truco": "El exponente es $n-1$, porque el primer término ya no multiplica por la razón.",
        "errorTipico": "Calcular $3^6$ y obtener $1458$."
      },
      {
        "id": "m1-tri-06",
        "materia": "mates-i",
        "bloque": "trigonometria",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Coseno y tangente desde el seno",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Si $\\operatorname{sen}\\alpha=\\dfrac35$ y $\\alpha$ está en el primer cuadrante, ¿cuánto valen $\\cos\\alpha$ y $\\operatorname{tg}\\alpha$?",
        "pista": "Usa $\\operatorname{sen}^2\\alpha+\\cos^2\\alpha=1$ y quédate con la raíz positiva.",
        "partes": [
          {
            "etiqueta": "Coseno y tangente",
            "opciones": [
              "$\\cos\\alpha=\\dfrac45$, $\\operatorname{tg}\\alpha=\\dfrac34$",
              "$\\cos\\alpha=\\dfrac45$, $\\operatorname{tg}\\alpha=\\dfrac43$",
              "$\\cos\\alpha=\\dfrac35$, $\\operatorname{tg}\\alpha=1$",
              "$\\cos\\alpha=-\\dfrac45$, $\\operatorname{tg}\\alpha=-\\dfrac34$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Coseno",
            "d": "$\\cos^2\\alpha=1-\\dfrac9{25}=\\dfrac{16}{25}\\Rightarrow\\cos\\alpha=\\dfrac45$."
          },
          {
            "t": "Tangente",
            "d": "$\\operatorname{tg}\\alpha=\\dfrac{3/5}{4/5}=\\dfrac34$."
          }
        ],
        "truco": "Triángulo 3-4-5: seno $3/5$, coseno $4/5$, tangente $3/4$.",
        "errorTipico": "Invertir la tangente y escribir $4/3$."
      },
      {
        "id": "m1-con-05",
        "materia": "mates-i",
        "bloque": "conicas",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Circunferencia por centro y punto",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "Halla la ecuación de la circunferencia de centro $C(2,-1)$ que pasa por $P(5,3)$.",
        "pista": "El radio es la distancia entre el centro y el punto dado.",
        "partes": [
          {
            "etiqueta": "Ecuación de la circunferencia",
            "opciones": [
              "$(x-2)^2+(y+1)^2=25$",
              "$(x+2)^2+(y-1)^2=25$",
              "$(x-2)^2+(y+1)^2=5$",
              "$(x-2)^2+(y-1)^2=25$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Radio",
            "d": "$r^2=(5-2)^2+(3+1)^2=9+16=25$, luego $r=5$."
          },
          {
            "t": "Ecuación",
            "d": "$(x-2)^2+(y+1)^2=25$."
          }
        ],
        "truco": "En la ecuación aparece $(x-x_0)^2$: si el centro es $x_0=2$, se escribe $x-2$.",
        "errorTipico": "Poner $5$ en el segundo miembro: eso daría un radio de $\\sqrt5$."
      },
      {
        "id": "m1-fun-03",
        "materia": "mates-i",
        "bloque": "funciones",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Dominio de una función racional",
        "fuente": "EBAU · Matemáticas I (adaptado)",
        "enunciado": "¿Cuál es el dominio de $f(x)=\\dfrac{1}{x^2-9}$?",
        "pista": "Una función racional no está definida donde se anula el denominador.",
        "partes": [
          {
            "etiqueta": "Dominio",
            "opciones": [
              "$\\mathbb{R}\\setminus\\{-3,3\\}$",
              "$\\mathbb{R}\\setminus\\{9\\}$",
              "$[-3,3]$",
              "$(3,+\\infty)$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Denominador nulo",
            "d": "$x^2-9=0\\Rightarrow x=\\pm3$."
          },
          {
            "t": "Dominio",
            "d": "Todos los reales salvo $-3$ y $3$."
          }
        ],
        "truco": "En una racional se excluyen las raíces del denominador, nunca las del numerador.",
        "errorTipico": "Resolver $x^2=9$ como $x=9$ y excluir solo ese valor."
      }
    ]
  );
})();
