/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Matrices · 7 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-alg-01",
        "materia": "ccss-ii",
        "bloque": "matrices",
        "nivel": 1,
        "tipo": "opcion",
        "titulo": "Producto de matrices y determinante",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Sean $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$ y $B=\\begin{pmatrix}1&0\\\\2&3\\end{pmatrix}$. Calcula los elementos $(1,1)$ y $(2,2)$ de $A\\cdot B$, y $\\det A$.",
        "pista": "Multiplica fila por columna: el elemento $(i,j)$ es la fila $i$ de $A$ por la columna $j$ de $B$. El determinante $2\\times2$ es $ad-bc$.",
        "partes": [
          {
            "etiqueta": "$(A\\cdot B)_{11}$",
            "opciones": [
              "5",
              "3",
              "6",
              "4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "$(A\\cdot B)_{22}$",
            "opciones": [
              "3",
              "4",
              "2",
              "5"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$\\det A$",
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
            "t": "Producto",
            "d": "$A\\cdot B=\\begin{pmatrix}2\\cdot1+1\\cdot2&2\\cdot0+1\\cdot3\\\\1\\cdot1+1\\cdot2&1\\cdot0+1\\cdot3\\end{pmatrix}=\\begin{pmatrix}4&3\\\\3&3\\end{pmatrix}$."
          },
          {
            "t": "Determinante",
            "d": "$\\det A=2\\cdot1-1\\cdot1=1$."
          },
          {
            "t": "Lectura",
            "d": "Los elementos pedidos son $4$ y $3$; el determinante es $1$."
          }
        ],
        "truco": "Antes de multiplicar, comprueba las dimensiones: $(2\\times2)(2\\times2)$ da $2\\times2$. Si no encajan, estás invirtiendo el orden.",
        "errorTipico": "Multiplicar elemento a elemento ($2\\cdot1$, $1\\cdot0$...). El producto de matrices combina toda una fila con toda una columna."
      },
      {
        "id": "cs2-alg-02",
        "materia": "ccss-ii",
        "bloque": "matrices",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Resolver una ecuación matricial",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Resuelve $AX=B$ con $A=\\begin{pmatrix}1&2\\\\1&3\\end{pmatrix}$ y $B=\\begin{pmatrix}1\\\\2\\end{pmatrix}$. Indica $x$ e $y$.",
        "pista": "Calcula $A^{-1}$ (determinante $1$) y multiplica $X=A^{-1}B$. También puedes resolver el sistema a mano: es equivalente.",
        "partes": [
          {
            "etiqueta": "x",
            "opciones": [
              "0",
              "−1",
              "−2",
              "1"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "y",
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
            "t": "Inversa",
            "d": "$\\det A=3-2=1$, $A^{-1}=\\begin{pmatrix}3&-2\\\\-1&1\\end{pmatrix}$."
          },
          {
            "t": "Despejar X",
            "d": "$X=A^{-1}B=\\begin{pmatrix}3&-2\\\\-1&1\\end{pmatrix}\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}-1\\\\1\\end{pmatrix}$."
          },
          {
            "t": "Comprobar",
            "d": "$A\\cdot(-1,1)=(-1+2,\\,-1+3)=(1,2)=B$. Correcto."
          }
        ],
        "truco": "Si el determinante es $1$, la inversa es la matriz adjunta sin dividir. Aprovecha ese caso, aparece mucho en la PAU de CCSS.",
        "errorTipico": "Escribir $X=BA^{-1}$. El orden importa: como $AX=B$, se multiplica por la izquierda por $A^{-1}$."
      },
      {
        "id": "cs2-mat-01",
        "materia": "ccss-ii",
        "bloque": "matrices",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Producto de matrices 2×2",
        "fuente": "Currículo CV · Matemáticas CCSS II",
        "enunciado": "Sean $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ y $B=\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}$. Calcula $AB$.",
        "pista": "Cada elemento de $AB$ es el producto escalar de una fila de $A$ por una columna de $B$.",
        "opciones": [
          "$\\begin{pmatrix}4&6\\\\1&3\\end{pmatrix}$",
          "$\\begin{pmatrix}4&0\\\\1&3\\end{pmatrix}$",
          "$\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$",
          "$\\begin{pmatrix}2&6\\\\1&3\\end{pmatrix}$"
        ],
        "correcta": 0,
        "solucion": [
          {
            "t": "Fila 1 por columnas",
            "d": "$(1\\cdot2+2\\cdot1,\\;1\\cdot0+2\\cdot3)=(4,6)$."
          },
          {
            "t": "Fila 2 por columnas",
            "d": "$(0\\cdot2+1\\cdot1,\\;0\\cdot0+1\\cdot3)=(1,3)$."
          },
          {
            "t": "Resultado",
            "d": "$AB=\\begin{pmatrix}4&6\\\\1&3\\end{pmatrix}$."
          }
        ],
        "truco": "Fila por columna, nunca elemento a elemento. El producto de matrices no es conmutativo.",
        "errorTipico": "Multiplicar $A$ y $B$ elemento a elemento y obtener $\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$."
      },
      {
        "id": "cs2-mat-02",
        "materia": "ccss-ii",
        "bloque": "matrices",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Matrices: producto por la traspuesta y ecuación",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Sean $A=\\begin{pmatrix}1&5\\\\0&1\\end{pmatrix}$ y $B=\\begin{pmatrix}1&2&2\\\\2&-2&1\\end{pmatrix}$. Calcula $BB^t$, el valor $\\beta$ tal que $(\\beta B)(\\beta B)^t=I$, la potencia $(BB^t)^5$ y la matriz $X$ que cumple $5XA=I$.",
        "pista": "Multiplica cada fila de $B$ por cada fila de $B$ (la traspuesta). Si $BB^t=9I$, todos los cálculos siguientes se reducen a escalares.",
        "partes": [
          {
            "etiqueta": "$BB^t$",
            "opciones": [
              "$9I$",
              "$3I$",
              "$\\begin{pmatrix}9&9\\\\9&9\\end{pmatrix}$",
              "$I$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Valor de $\\beta$",
            "opciones": [
              "$1/3$",
              "$3$",
              "$1/9$",
              "$9$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$(BB^t)^5$",
            "opciones": [
              "$59049\\,I$",
              "$45\\,I$",
              "$6561\\,I$",
              "$9\\,I$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Matriz $X$",
            "opciones": [
              "$\\begin{pmatrix}1/5&-1\\\\0&1/5\\end{pmatrix}$",
              "$\\begin{pmatrix}1/5&1\\\\0&1/5\\end{pmatrix}$",
              "$\\begin{pmatrix}1&-5\\\\0&1\\end{pmatrix}$",
              "$\\begin{pmatrix}5&-25\\\\0&5\\end{pmatrix}$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Producto $BB^t$",
            "d": "Las filas de $B$ son $(1,2,2)$ y $(2,-2,1)$: $BB^t=\\begin{pmatrix}1+4+4&2-4+2\\\\2-4+2&4+4+1\\end{pmatrix}=\\begin{pmatrix}9&0\\\\0&9\\end{pmatrix}=9I$."
          },
          {
            "t": "Escalar $\\beta$",
            "d": "$(\\beta B)(\\beta B)^t=\\beta^2BB^t=9\\beta^2I$. Para que sea $I$, $9\\beta^2=1$, luego $\\beta=\\pm1/3$; tomamos $\\beta=1/3$."
          },
          {
            "t": "Potencia",
            "d": "$(9I)^5=9^5I=59049I$."
          },
          {
            "t": "Despejar $X$",
            "d": "$X=\\frac15A^{-1}$ y $A^{-1}=\\begin{pmatrix}1&-5\\\\0&1\\end{pmatrix}$, porque $\\det A=1$. Por tanto $X=\\begin{pmatrix}1/5&-1\\\\0&1/5\\end{pmatrix}$."
          }
        ],
        "truco": "Cuando $BB^t$ es un múltiplo de la identidad, las potencias y los escalares se calculan sin volver a multiplicar matrices.",
        "errorTipico": "Elevar $B$ a la quinta y multiplicar por su traspuesta: $(BB^t)^5$ no es $B^5(B^t)^5$, sino $(9I)^5$."
      },
      {
        "id": "cs2-mat-03",
        "materia": "ccss-ii",
        "bloque": "matrices",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Ecuación matricial con traspuesta",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Sean $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, $B=\\begin{pmatrix}1&0\\\\2&1\\end{pmatrix}$ y $C=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$. Calcula $B^tC$ y la matriz $X$ que verifica $2XA+B^tC=I$.",
        "pista": "Primero calcula $B^tC$; después despeja $X$ con cuidado: $A$ multiplica a $X$ por la derecha, así que se cancela con $A^{-1}$ también por la derecha.",
        "partes": [
          {
            "etiqueta": "$B^tC$",
            "opciones": [
              "$\\begin{pmatrix}1&3\\\\0&1\\end{pmatrix}$",
              "$\\begin{pmatrix}1&1\\\\2&3\\end{pmatrix}$",
              "$\\begin{pmatrix}1&2\\\\1&3\\end{pmatrix}$",
              "$\\begin{pmatrix}1&0\\\\3&1\\end{pmatrix}$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Matriz $X$",
            "opciones": [
              "$\\begin{pmatrix}0&-3/2\\\\0&0\\end{pmatrix}$",
              "$\\begin{pmatrix}0&3/2\\\\0&0\\end{pmatrix}$",
              "$\\begin{pmatrix}0&-3\\\\0&0\\end{pmatrix}$",
              "$\\begin{pmatrix}-3/2&0\\\\0&0\\end{pmatrix}$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Producto $B^tC$",
            "d": "$B^t=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, luego $B^tC=\\begin{pmatrix}1&3\\\\0&1\\end{pmatrix}$."
          },
          {
            "t": "Despejar $2XA$",
            "d": "$2XA=I-B^tC=\\begin{pmatrix}0&-3\\\\0&0\\end{pmatrix}$."
          },
          {
            "t": "Multiplicar por $A^{-1}$",
            "d": "$A^{-1}=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}$, porque $\\det A=1$. Entonces $X=\\frac12\\begin{pmatrix}0&-3\\\\0&0\\end{pmatrix}A^{-1}=\\frac12\\begin{pmatrix}0&-3\\\\0&0\\end{pmatrix}$."
          }
        ],
        "truco": "Comprueba siempre multiplicando: $2XA+B^tC$ debe dar exactamente $I$.",
        "errorTipico": "Cancelar $A$ por la izquierda. En $2XA$, la matriz $A$ está a la derecha de $X$: hay que multiplicar por $A^{-1}$ por la derecha."
      },
      {
        "id": "cs2-mat-04",
        "materia": "ccss-ii",
        "bloque": "matrices",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Producto de matrices: el orden importa",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Dadas $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ y $B=\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}$, calcula $A\\cdot B$, $B\\cdot A$ y $\\det(A\\cdot B)$.",
        "pista": "Multiplica fila por columna y no olvides que el producto de matrices no es conmutativo.",
        "partes": [
          {
            "etiqueta": "$A\\cdot B$",
            "opciones": [
              "$\\begin{pmatrix}4&6\\\\1&3\\end{pmatrix}$",
              "$\\begin{pmatrix}2&4\\\\1&5\\end{pmatrix}$",
              "$\\begin{pmatrix}4&1\\\\6&3\\end{pmatrix}$",
              "$\\begin{pmatrix}2&6\\\\0&3\\end{pmatrix}$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$B\\cdot A$",
            "opciones": [
              "$\\begin{pmatrix}2&4\\\\1&5\\end{pmatrix}$",
              "$\\begin{pmatrix}4&6\\\\1&3\\end{pmatrix}$",
              "$\\begin{pmatrix}2&1\\\\4&5\\end{pmatrix}$",
              "$\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$\\det(A\\cdot B)$",
            "opciones": [
              "6",
              "5",
              "8",
              "3"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Producto A·B",
            "d": "Fila por columna: $A\\cdot B=\\begin{pmatrix}1\\cdot2+2\\cdot1&1\\cdot0+2\\cdot3\\\\0\\cdot2+1\\cdot1&0\\cdot0+1\\cdot3\\end{pmatrix}=\\begin{pmatrix}4&6\\\\1&3\\end{pmatrix}$."
          },
          {
            "t": "Producto B·A",
            "d": "$B\\cdot A=\\begin{pmatrix}2\\cdot1+0\\cdot0&2\\cdot2+0\\cdot1\\\\1\\cdot1+3\\cdot0&1\\cdot2+3\\cdot1\\end{pmatrix}=\\begin{pmatrix}2&4\\\\1&5\\end{pmatrix}$."
          },
          {
            "t": "Determinante",
            "d": "$\\det(A\\cdot B)=4\\cdot3-6\\cdot1=6$. También $\\det A\\cdot\\det B=1\\cdot6=6$."
          }
        ],
        "truco": "El producto de matrices no es conmutativo: comprueba siempre el orden y multiplica fila por columna.",
        "errorTipico": "Multiplicar elemento a elemento en vez de fila por columna, o intercambiar A·B con B·A."
      },
      {
        "id": "cs2-mat-05",
        "materia": "ccss-ii",
        "bloque": "matrices",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Inversa de una matriz 2×2",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Dada $A=\\begin{pmatrix}3&1\\\\2&1\\end{pmatrix}$, calcula $\\det A$, $A^{-1}$ y la traza de $A^{-1}$.",
        "pista": "En una matriz $2\\times2$, $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$. La traza es la suma de la diagonal.",
        "partes": [
          {
            "etiqueta": "$\\det A$",
            "opciones": [
              "1",
              "5",
              "-1",
              "3"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$A^{-1}$",
            "opciones": [
              "$\\begin{pmatrix}1&-1\\\\-2&3\\end{pmatrix}$",
              "$\\begin{pmatrix}1&1\\\\2&3\\end{pmatrix}$",
              "$\\begin{pmatrix}3&-1\\\\-2&1\\end{pmatrix}$",
              "$\\begin{pmatrix}1&-2\\\\-1&3\\end{pmatrix}$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "$\\operatorname{tr}(A^{-1})$",
            "opciones": [
              "4",
              "2",
              "1",
              "3"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Determinante",
            "d": "$\\det A=3\\cdot1-1\\cdot2=1$."
          },
          {
            "t": "Inversa",
            "d": "$A^{-1}=\\frac{1}{1}\\begin{pmatrix}1&-1\\\\-2&3\\end{pmatrix}=\\begin{pmatrix}1&-1\\\\-2&3\\end{pmatrix}$."
          },
          {
            "t": "Traza",
            "d": "$1+3=4$."
          }
        ],
        "truco": "En $2\times2$: intercambia la diagonal, cambia el signo a las otras dos y divide por el determinante.",
        "errorTipico": "Olvidar dividir por el determinante o cambiar el signo a los elementos de la diagonal."
      }
    ]
  );
})();
