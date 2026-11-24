/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Sistemas · 8 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-alg-03",
        "materia": "ccss-ii",
        "bloque": "sistemas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sistema de tres ecuaciones",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Resuelve el sistema $\\begin{cases}x+y+z=6\\\\[2pt] 2x-y+z=3\\\\[2pt] x+2y-z=2\\end{cases}$.",
        "pista": "Despeja $z=6-x-y$ de la primera ecuación y sustitúyela en las otras dos. Obtendrás un sistema $2\\times2$ en $x$ e $y$.",
        "partes": [
          {
            "etiqueta": "x",
            "opciones": [
              "1",
              "2",
              "0",
              "3"
            ],
            "correcta": 0
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
            "t": "Sustituir z",
            "d": "$z=6-x-y$. En la segunda: $2x-y+6-x-y=3\\Rightarrow x-2y=-3$. En la tercera: $x+2y-(6-x-y)=2\\Rightarrow2x+3y=8$."
          },
          {
            "t": "Resolver 2×2",
            "d": "$x=2y-3$; $2(2y-3)+3y=8\\Rightarrow7y=14\\Rightarrow y=2$, $x=1$."
          },
          {
            "t": "Completar",
            "d": "$z=6-1-2=3$. Solución $(1,2,3)$; se comprueba en las tres ecuaciones."
          }
        ],
        "truco": "Gauss o sustitución: elige la incógnita con coeficiente $1$ para despejar. Aquí $z$ en la primera ecuación es el camino corto.",
        "errorTipico": "Errores de signo al sustituir $-(6-x-y)$. Escribe el paréntesis antes de simplificar y comprueba al final en la ecuación original."
      },
      {
        "id": "cs2-alg-04",
        "materia": "ccss-ii",
        "bloque": "sistemas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sistema con parámetro en el término independiente",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Considera $\\begin{cases}x+y=2\\\\[2pt] 2x+2y=a\\end{cases}$. Determina el valor de $a$ para el que el sistema tiene infinitas soluciones.",
        "pista": "El segundo miembro de la segunda ecuación es el doble que el de la primera si el sistema es dependiente. Compara las dos ecuaciones.",
        "partes": [
          {
            "etiqueta": "Valor de a",
            "opciones": [
              "5",
              "4",
              "3",
              "6"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Comparar ecuaciones",
            "d": "La segunda ecuación es $2(x+y)=a$, es decir, $x+y=a/2$."
          },
          {
            "t": "Coherencia",
            "d": "Para que sea la misma recta que $x+y=2$, debe cumplirse $a/2=2$."
          },
          {
            "t": "Conclusión",
            "d": "$a=4$: infinitas soluciones. Si $a\\ne4$, las rectas son paralelas y el sistema es incompatible."
          }
        ],
        "truco": "Si una ecuación es múltiplo de otra, el sistema solo puede ser compatible si también lo es el término independiente.",
        "errorTipico": "Mirar solo los coeficientes ($2$ y $2$) y no el término independiente. La proporcionalidad debe incluir la columna de resultados."
      },
      {
        "id": "cs2-alg-10",
        "materia": "ccss-ii",
        "bloque": "sistemas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Mezcla de café: sistema 2×2",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Se mezclan café ecológico de $8$ €/kg con café convencional de $5$ €/kg hasta obtener $30$ kg a $6{,}5$ €/kg. ¿Cuántos kilos de cada tipo se han mezclado?",
        "pista": "Plantea dos ecuaciones: la suma de kilos y el valor total de la mezcla. El precio medio multiplica a los 30 kg.",
        "partes": [
          {
            "etiqueta": "Café ecológico (kg)",
            "opciones": [
              "15",
              "16",
              "14",
              "17"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Café convencional (kg)",
            "opciones": [
              "16",
              "14",
              "15",
              "17"
            ],
            "correcta": 2
          }
        ],
        "solucion": [
          {
            "t": "Variables",
            "d": "$x$ kg de ecológico, $y$ kg de convencional: $x+y=30$."
          },
          {
            "t": "Valor",
            "d": "$8x+5y=6{,}5\\cdot30=195$."
          },
          {
            "t": "Resolver",
            "d": "$y=30-x$; $8x+5(30-x)=195\\Rightarrow3x=45\\Rightarrow x=15$, $y=15$."
          }
        ],
        "truco": "En mezclas, una ecuación es de cantidades y otra de valor total. Comprueba que el precio medio queda entre los dos precios.",
        "errorTipico": "Multiplicar el precio medio solo por una parte de la mezcla o intercambiar los precios de los dos tipos de café."
      },
      {
        "id": "cs2-sis-01",
        "materia": "ccss-ii",
        "bloque": "sistemas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Sistema lineal 2×2",
        "fuente": "Currículo CV · Matemáticas CCSS II",
        "enunciado": "Resuelve el sistema $\\begin{cases}2x+y=7\\\\x-y=2\\end{cases}$.",
        "pista": "Suma las ecuaciones para eliminar la $y$. Después sustituye el valor de $x$.",
        "partes": [
          {
            "etiqueta": "$x$",
            "opciones": [
              "3",
              "1",
              "2",
              "4"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$y$",
            "opciones": [
              "1",
              "3",
              "2",
              "−1"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Sumar",
            "d": "$3x=9\\Rightarrow x=3$."
          },
          {
            "t": "Sustituir",
            "d": "$3-y=2\\Rightarrow y=1$."
          },
          {
            "t": "Comprobar",
            "d": "$2\\cdot3+1=7$ y $3-1=2$."
          }
        ],
        "truco": "Busca la combinación que elimine una incógnita con una sola suma o resta.",
        "errorTipico": "Restar las ecuaciones y perder el término independiente, o cambiar el signo al despejar."
      },
      {
        "id": "cs2-alg-07",
        "materia": "ccss-ii",
        "bloque": "sistemas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Sistema 3×3 con parámetro",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Determina el valor de $a$ para el que el sistema\n      $$\\begin{cases}x+y+z=1\\\\ x+2y+3z=2\\\\ x+4y+az=4\\end{cases}$$\n      tiene infinitas soluciones.",
        "pista": "Calcula el determinante de la matriz de coeficientes: depende linealmente de $a$. Después sustituye el valor que lo anula y comprueba la tercera ecuación.",
        "partes": [
          {
            "etiqueta": "Valor de a",
            "opciones": [
              "8",
              "7",
              "6",
              "9"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Determinante",
            "d": "$\\begin{vmatrix}1&1&1\\\\1&2&3\\\\1&4&a\\end{vmatrix}=a-7$."
          },
          {
            "t": "Caso singular",
            "d": "Con $a=7$ la tercera fila es $-2\\cdot$ (fila 1) $+3\\cdot$ (fila 2): $-2(1,1,1)+3(1,2,3)=(1,4,7)$, y el término independiente también cumple $-2\\cdot1+3\\cdot2=4$."
          },
          {
            "t": "Conclusión",
            "d": "Rango $2$ en ambas matrices: infinitas soluciones. Para $a\\ne7$, solución única."
          }
        ],
        "truco": "Si el determinante se anula, no contestes «infinitas» ni «ninguna»: mira si la fila dependiente también respeta el término independiente.",
        "errorTipico": "Calcular mal el determinante por saltarse un signo en el desarrollo por la primera fila. Usa Sarrus y revisa los productos negativos."
      },
      {
        "id": "cs2-alg-09",
        "materia": "ccss-ii",
        "bloque": "sistemas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Sistema 2×2 con parámetro",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Estudia el sistema $\\begin{cases}x+ay=1\\\\ ax+y=1\\end{cases}$ y calcula el valor de $a$ que lo hace incompatible, el que produce infinitas soluciones y la solución cuando $a=0$.",
        "pista": "El determinante es $1-a^2$. Analiza $a=1$ y $a=-1$ por separado; para $a=0$, resuelve el sistema numérico.",
        "partes": [
          {
            "etiqueta": "a incompatible",
            "opciones": [
              "0",
              "−1",
              "−2",
              "1"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "a con infinitas soluciones",
            "opciones": [
              "1",
              "2",
              "0",
              "3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$x$ cuando $a=0$",
            "opciones": [
              "2",
              "1",
              "0",
              "3"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "$y$ cuando $a=0$",
            "opciones": [
              "2",
              "1",
              "0",
              "3"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Determinante",
            "d": "$\\det A=1-a^2=(1-a)(1+a)$. Si $a\\ne\\pm1$, solución única."
          },
          {
            "t": "Casos singulares",
            "d": "$a=1$: ambas ecuaciones son $x+y=1$, infinitas soluciones. $a=-1$: $x-y=1$ y $-x+y=1$, incompatibles."
          },
          {
            "t": "a = 0",
            "d": "$x=1$, $y=1$."
          }
        ],
        "truco": "Sustituye el valor singular en el sistema original y compara las ecuaciones. El determinante nulo no decide por sí solo entre infinitas e incompatible.",
        "errorTipico": "Afirmar que todo determinante nulo implica infinitas soluciones, sin mirar los términos independientes."
      },
      {
        "id": "cs2-alg-11",
        "materia": "ccss-ii",
        "bloque": "sistemas",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Precios de procesadores, tarjetas y memoria (PAU 2026)",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Una empresa vende procesadores ($P$), tarjetas gráficas ($T$) y módulos de memoria ($M$). La venta de $2$ procesadores, $1$ tarjeta y $4$ módulos sumó $1020$ €; un lote de $3$ procesadores y $2$ tarjetas con un descuento equivalente a un módulo se vendió por $1280$ €; y una tarjeta cuesta lo mismo que un procesador más el doble de un módulo. Halla los tres precios.",
        "pista": "Traduce cada frase a una ecuación y usa $T=P+2M$ para quedarte con dos incógnitas.",
        "partes": [
          {
            "etiqueta": "Procesador ($P$)",
            "opciones": [
              "$220$ €",
              "$200$ €",
              "$240$ €",
              "$210$ €"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Tarjeta gráfica ($T$)",
            "opciones": [
              "$340$ €",
              "$320$ €",
              "$360$ €",
              "$300$ €"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Memoria ($M$)",
            "opciones": [
              "$60$ €",
              "$80$ €",
              "$50$ €",
              "$70$ €"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Plantear",
            "d": "$2P+T+4M=1020$, $3P+2T-M=1280$ y $T=P+2M$."
          },
          {
            "t": "Reducir a dos incógnitas",
            "d": "Sustituyendo $T$: $3P+6M=1020$, es decir, $P+2M=340$; y $5P+3M=1280$."
          },
          {
            "t": "Resolver",
            "d": "De $P=340-2M$: $1700-10M+3M=1280\\Rightarrow7M=420\\Rightarrow M=60$, $P=220$."
          },
          {
            "t": "Completar y comprobar",
            "d": "$T=220+120=340$. Comprobación: $440+340+240=1020$ y $660+680-60=1280$."
          }
        ],
        "truco": "Con tres incógnitas y una relación directa, sustituye esa relación antes de aplicar reducción o Cramer.",
        "errorTipico": "Escribir el descuento como $3P+2T+M=1280$: el módulo se resta, no se suma."
      },
      {
        "id": "cs2-sis-02",
        "materia": "ccss-ii",
        "bloque": "sistemas",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Conejos y gallinas: sistema 2×2",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "En una granja hay conejos y gallinas. Entre todos suman 30 cabezas y 80 patas. ¿Cuántos conejos y gallinas hay?",
        "pista": "Asigna $c$ a los conejos y $g$ a las gallinas. Cada conejo aporta 4 patas y cada gallina 2.",
        "partes": [
          {
            "etiqueta": "Conejos",
            "opciones": [
              "10",
              "20",
              "12",
              "8"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Gallinas",
            "opciones": [
              "20",
              "10",
              "18",
              "22"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Plantear",
            "d": "$c+g=30$ y $4c+2g=80$."
          },
          {
            "t": "Simplificar",
            "d": "La segunda ecuación dividida entre 2 es $2c+g=40$."
          },
          {
            "t": "Resolver",
            "d": "Restando: $c=10$ y $g=20$."
          }
        ],
        "truco": "Cada animal aporta una cabeza; separa las patas según la especie y resuelve el sistema.",
        "errorTipico": "Contar 4 patas a todos o intercambiar el número de conejos y gallinas."
      }
    ]
  );
})();
