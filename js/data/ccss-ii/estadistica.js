/* PAU Mates CV — Matemáticas Aplicadas a las CCSS II · 2º Bachillerato (Sociales)
   Bloque: Estadística · 7 ejercicios
   Todas las preguntas son de opción múltiple (4 opciones por apartado).
   Esquema y guía para ampliar: js/data/README.md
   LaTeX entre $...$ (inline) y $$...$$ (destacado). */

(function () {
  window.PAU_DATA = window.PAU_DATA || { ejercicios: [] };
  window.PAU_DATA.ejercicios.push(
    ...[
      {
        "id": "cs2-est-08",
        "materia": "ccss-ii",
        "bloque": "estadistica",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Media, mediana y moda",
        "fuente": "Currículo CV · Matemáticas CCSS II",
        "enunciado": "Para los datos $2,3,3,5,7,9$, calcula la media, la mediana y la moda.",
        "pista": "Ordena los datos (ya lo están). Con un número par de datos, la mediana es la media de los dos centrales; la moda es el valor más repetido.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "4,8333",
              "4,8833",
              "4,7833",
              "4,9333"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Mediana",
            "opciones": [
              "5",
              "3",
              "6",
              "4"
            ],
            "correcta": 3
          },
          {
            "etiqueta": "Moda",
            "opciones": [
              "4",
              "3",
              "2",
              "5"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Media",
            "d": "$\\bar x=\\dfrac{2+3+3+5+7+9}{6}=\\dfrac{29}{6}\\approx4{,}8333$."
          },
          {
            "t": "Mediana",
            "d": "Los centrales son $3$ y $5$: $\\dfrac{3+5}{2}=4$."
          },
          {
            "t": "Moda",
            "d": "El valor más repetido es $3$ (dos veces)."
          }
        ],
        "truco": "La media se desplaza con los valores extremos; la mediana es más robusta. Si hay mucha diferencia entre ambas, sospecha de asimetría o atípicos.",
        "errorTipico": "Calcular la mediana sin ordenar o elegir como moda el valor más alto en lugar del más frecuente."
      },
      {
        "id": "cs2-est-09",
        "materia": "ccss-ii",
        "bloque": "estadistica",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Media y mediana de cinco datos",
        "fuente": "Currículo CV · Matemáticas CCSS II",
        "enunciado": "Para los datos $4,6,6,8,11$, calcula la media y la mediana.",
        "pista": "Suma todos los datos y divide entre 5. Para la mediana, con un número impar de datos, toma el central al ordenarlos.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "7",
              "6",
              "7,5",
              "8"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Mediana",
            "opciones": [
              "6",
              "7",
              "5",
              "8"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Media",
            "d": "$\\bar x=\\dfrac{4+6+6+8+11}{5}=\\dfrac{35}{5}=7$."
          },
          {
            "t": "Mediana",
            "d": "Los datos ordenados son $4,6,\\mathbf{6},8,11$; el central es $6$."
          }
        ],
        "truco": "Con pocos datos, ordena primero y localiza el centro. La media puede verse arrastrada por un valor extremo.",
        "errorTipico": "Calcular la mediana como la media de todos los datos, o contar mal la posición central."
      },
      {
        "id": "cs2-est-10",
        "materia": "ccss-ii",
        "bloque": "estadistica",
        "nivel": 2,
        "tipo": "opcion",
        "titulo": "Varianza poblacional",
        "fuente": "Currículo CV · Matemáticas CCSS II",
        "enunciado": "Para los datos $2,4,4,6,9$, calcula la media y la varianza poblacional.",
        "pista": "Media: divide la suma entre 5. Varianza: media de las desviaciones al cuadrado, $\\frac{\\sum(x_i-\\bar x)^2}{N}$.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "5",
              "6",
              "4,8",
              "5,5"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Varianza",
            "opciones": [
              "5,6",
              "7",
              "4,48",
              "6,4"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Media",
            "d": "$\\bar x=\\dfrac{2+4+4+6+9}{5}=5$."
          },
          {
            "t": "Desviaciones",
            "d": "$(-3)^2+(-1)^2+(-1)^2+1^2+4^2=9+1+1+1+16=28$."
          },
          {
            "t": "Varianza",
            "d": "$\\sigma^2=\\dfrac{28}{5}=5{,}6$."
          }
        ],
        "truco": "La varianza promedia cuadrados, no desviaciones. Si divides entre 4 en vez de 5, estás usando la cuasivarianza.",
        "errorTipico": "Dividir entre $N-1$ cuando el enunciado pide la población, u olvidar elevar al cuadrado las desviaciones."
      },
      {
        "id": "cs2-est-07",
        "materia": "ccss-ii",
        "bloque": "estadistica",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Recta de regresión y predicción",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Para los datos $(1,2)$, $(2,4)$, $(3,5)$, $(4,4)$ y $(5,5)$, calcula la pendiente y la ordenada en el origen de la recta de regresión de $Y$ sobre $X$, y predice $Y$ para $X=6$.",
        "pista": "Calcula las medias, la covarianza y la varianza de $X$. La pendiente es $m=\\frac{s_{xy}}{s_x^2}$ y la recta pasa por $(\\bar x,\\bar y)$.",
        "partes": [
          {
            "etiqueta": "Pendiente",
            "opciones": [
              "1,2",
              "0,3",
              "0,6",
              "0,7"
            ],
            "correcta": 2
          },
          {
            "etiqueta": "Ordenada en el origen",
            "opciones": [
              "4,4",
              "2,2",
              "1,1",
              "0,6"
            ],
            "correcta": 1
          },
          {
            "etiqueta": "Predicción para $X=6$",
            "opciones": [
              "11,6",
              "5,8",
              "2,9",
              "2,2"
            ],
            "correcta": 1
          }
        ],
        "solucion": [
          {
            "t": "Medias",
            "d": "$\\bar x=3$, $\\bar y=4$."
          },
          {
            "t": "Pendiente",
            "d": "$s_{xy}=6/5=1{,}2$, $s_x^2=10/5=2$, luego $m=0{,}6$."
          },
          {
            "t": "Recta y predicción",
            "d": "$n=\\bar y-m\\bar x=4-1{,}8=2{,}2$; $\\hat y(6)=2{,}2+0{,}6\\cdot6=5{,}8$."
          }
        ],
        "truco": "La recta de regresión siempre pasa por el punto de medias. Úsalo para comprobar la ordenada en el origen.",
        "errorTipico": "Intercambiar $X$ e $Y$ (regresión de $X$ sobre $Y$) o predecir fuera del rango sin advertir que es una extrapolación."
      },
      {
        "id": "cs2-est-11",
        "materia": "ccss-ii",
        "bloque": "estadistica",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Tabla de frecuencias: media, desviación y CV",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Se han agrupado las edades de $100$ clientes de un gimnasio en los intervalos $[20,30)$ con $10$ personas, $[30,40)$ con $20$, $[40,50)$ con $40$, $[50,60)$ con $20$ y $[60,70]$ con $10$. Calcula la media, la desviación típica y el coeficiente de variación.",
        "pista": "Trabaja con la marca de clase de cada intervalo, es decir, su punto medio: $25$, $35$, $45$, $55$ y $65$. La varianza es la media ponderada de las desviaciones al cuadrado.",
        "partes": [
          {
            "etiqueta": "Media",
            "opciones": [
              "$45$",
              "$44{,}5$",
              "$45{,}5$",
              "$40$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Desviación típica",
            "opciones": [
              "$10{,}95$",
              "$120$",
              "$12{,}00$",
              "$10{,}00$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Coeficiente de variación",
            "opciones": [
              "$24{,}34\\,\\%$",
              "$0{,}24\\,\\%$",
              "$10{,}95\\,\\%$",
              "$20{,}00\\,\\%$"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Marcas de clase",
            "d": "Los puntos medios son $25$, $35$, $45$, $55$ y $65$. La media es $\\bar x=\\dfrac{10\\cdot25+20\\cdot35+40\\cdot45+20\\cdot55+10\\cdot65}{100}=45$."
          },
          {
            "t": "Varianza",
            "d": "Las desviaciones respecto de $45$ son $-20$, $-10$, $0$, $10$ y $20$. Entonces $\\sigma^2=\\dfrac{10\\cdot400+20\\cdot100+40\\cdot0+20\\cdot100+10\\cdot400}{100}=\\dfrac{12000}{100}=120$."
          },
          {
            "t": "Desviación típica",
            "d": "$\\sigma=\\sqrt{120}\\approx10{,}95$."
          },
          {
            "t": "Coeficiente de variación",
            "d": "$CV=\\dfrac{\\sigma}{\\bar x}=\\dfrac{10{,}95}{45}\\approx0{,}2434$, es decir, un $24{,}34\\,\\%$."
          }
        ],
        "truco": "Con datos agrupados, cada intervalo se representa por su marca de clase; después se pondera por la frecuencia, nunca se usan los extremos.",
        "errorTipico": "Dividir entre $5$ (número de intervalos) en lugar de entre $100$ (número de datos), o presentar la varianza $120$ como si fuera la desviación típica."
      },
      {
        "id": "cs2-est-12",
        "materia": "ccss-ii",
        "bloque": "estadistica",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Correlación lineal y predicción",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "Se estudia la relación entre las horas de estudio ($X$) y la nota de un examen ($Y$) en seis estudiantes: $(1,3)$, $(2,5)$, $(3,4)$, $(4,7)$, $(5,8)$ y $(6,9)$. Calcula la covarianza poblacional, el coeficiente de correlación de Pearson, la nota prevista para $7$ horas de estudio e interpreta el valor de $r$.",
        "pista": "Las medias son $\\bar x=3{,}5$ y $\\bar y=6$. Usa $s_{xy}=\\dfrac{\\sum x_iy_i}{n}-\\bar x\\bar y$ y $r=\\dfrac{s_{xy}}{s_xs_y}$; la recta pasa por $(\\bar x,\\bar y)$.",
        "partes": [
          {
            "etiqueta": "Covarianza",
            "opciones": [
              "$3{,}5$",
              "$0{,}5833$",
              "$21$",
              "$4{,}2$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Coeficiente de correlación $r$",
            "opciones": [
              "$0{,}9487$",
              "$0{,}9000$",
              "$0{,}9747$",
              "$0{,}4500$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Nota prevista para $7$ horas",
            "opciones": [
              "$10{,}2$",
              "$8{,}4$",
              "$9{,}0$",
              "$11{,}4$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Interpretación de $r$",
            "opciones": [
              "Correlación lineal fuerte y positiva",
              "Correlación lineal débil y positiva",
              "Correlación lineal fuerte y negativa",
              "No existe correlación lineal"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Medias y sumas",
            "d": "$\\bar x=3{,}5$, $\\bar y=6$; $\\sum x_iy_i=147$, $\\sum x_i^2=91$ y $\\sum y_i^2=244$."
          },
          {
            "t": "Covarianza y varianzas",
            "d": "$s_{xy}=\\dfrac{147}{6}-3{,}5\\cdot6=24{,}5-21=3{,}5$; $s_x^2=\\dfrac{91}{6}-12{,}25\\approx2{,}9167$ y $s_y^2=\\dfrac{244}{6}-36\\approx4{,}6667$."
          },
          {
            "t": "Coeficiente de correlación",
            "d": "$r=\\dfrac{3{,}5}{\\sqrt{2{,}9167\\cdot4{,}6667}}\\approx0{,}9487$. Al ser positivo y próximo a $1$, la relación lineal es fuerte y directa."
          },
          {
            "t": "Recta y predicción",
            "d": "La pendiente es $m=\\dfrac{3{,}5}{2{,}9167}=1{,}2$ y la ordenada $b=6-1{,}2\\cdot3{,}5=1{,}8$. Para $x=7$: $\\hat y=1{,}8+1{,}2\\cdot7=10{,}2$."
          }
        ],
        "truco": "El signo de $r$ coincide con el de la covarianza y con el de la pendiente. Además, $-1\\le r\\le1$: si obtienes algo mayor, has dividido mal.",
        "errorTipico": "Dividir la covarianza entre $n-1$ cuando el enunciado pide la poblacional, o interpretar $r=0{,}9487$ como una pendiente."
      },
      {
        "id": "cs2-est-13",
        "materia": "ccss-ii",
        "bloque": "estadistica",
        "nivel": 3,
        "tipo": "opcion",
        "titulo": "Comparar dos grupos por su coeficiente de variación",
        "fuente": "PAU CV · Matemáticas CCSS II (adaptado)",
        "enunciado": "En un examen, el grupo A tiene una nota media de $6{,}5$ con desviación típica $1{,}3$; el grupo B tiene media $7{,}2$ con desviación típica $1{,}8$. Calcula el coeficiente de variación de cada grupo, indica cuál presenta mayor dispersión absoluta y cuál es más homogéneo.",
        "pista": "El coeficiente de variación es $CV=\\dfrac{\\sigma}{\\bar x}$ y se suele expresar en porcentaje. La dispersión absoluta se mide con la desviación típica; la relativa, con el CV.",
        "partes": [
          {
            "etiqueta": "Coeficiente de variación del grupo A",
            "opciones": [
              "$20\\,\\%$",
              "$5\\,\\%$",
              "$13\\,\\%$",
              "$2\\,\\%$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Coeficiente de variación del grupo B",
            "opciones": [
              "$25\\,\\%$",
              "$18\\,\\%$",
              "$4\\,\\%$",
              "$2{,}5\\,\\%$"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Mayor dispersión absoluta",
            "opciones": [
              "El grupo B, porque su desviación típica es mayor",
              "El grupo A, porque su media es menor",
              "El grupo B, porque su media es mayor",
              "Los dos grupos, porque sus medias son distintas"
            ],
            "correcta": 0
          },
          {
            "etiqueta": "Grupo más homogéneo",
            "opciones": [
              "El grupo A, porque su coeficiente de variación es menor",
              "El grupo B, porque su media es mayor",
              "El grupo A, porque su media es menor",
              "El grupo B, porque su coeficiente de variación es mayor"
            ],
            "correcta": 0
          }
        ],
        "solucion": [
          {
            "t": "Grupo A",
            "d": "$CV_A=\\dfrac{1{,}3}{6{,}5}=0{,}2=20\\,\\%$."
          },
          {
            "t": "Grupo B",
            "d": "$CV_B=\\dfrac{1{,}8}{7{,}2}=0{,}25=25\\,\\%$."
          },
          {
            "t": "Dispersión absoluta",
            "d": "La desviación típica del grupo B ($1{,}8$) es mayor que la del A ($1{,}3$): el B tiene más dispersión absoluta."
          },
          {
            "t": "Homogeneidad",
            "d": "El grupo A tiene menor coeficiente de variación ($20\\,\\%<25\\,\\%$), así que es relativamente más homogéneo aunque su nota media sea menor."
          }
        ],
        "truco": "Para comparar la dispersión de variables con medias distintas, usa siempre el coeficiente de variación; la desviación típica sola solo sirve si las medias son parecidas.",
        "errorTipico": "Elegir como más homogéneo el grupo con mayor media o con menor desviación típica sin dividir entre la media."
      }
    ]
  );
})();
