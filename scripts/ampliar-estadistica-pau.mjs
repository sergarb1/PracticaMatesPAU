#!/usr/bin/env node
/* Añade la tanda de estadística de nivel PAU a CCSS II:
   tabla de frecuencias, correlación/regresión y comparación de grupos por CV.
   Uso: node scripts/ampliar-estadistica-pau.mjs
   Conserva el formato JSON y los saltos de línea del archivo. */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const RUTA = path.join(ROOT, 'js', 'data', 'ccss-ii', 'nivel-3.js');
const FUENTE = 'PAU CV · Matemáticas CCSS II (adaptado)';

const NUEVOS = [
  {
    id: 'cs2-est-11',
    materia: 'ccss-ii',
    bloque: 'estadistica',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Tabla de frecuencias: media, desviación y CV',
    fuente: FUENTE,
    enunciado: 'Se han agrupado las edades de $100$ clientes de un gimnasio en los intervalos $[20,30)$ con $10$ personas, $[30,40)$ con $20$, $[40,50)$ con $40$, $[50,60)$ con $20$ y $[60,70]$ con $10$. Calcula la media, la desviación típica y el coeficiente de variación.',
    pista: 'Trabaja con la marca de clase de cada intervalo, es decir, su punto medio: $25$, $35$, $45$, $55$ y $65$. La varianza es la media ponderada de las desviaciones al cuadrado.',
    partes: [
      {
        etiqueta: 'Media',
        opciones: ['$45$', '$44{,}5$', '$45{,}5$', '$40$'],
        correcta: 0
      },
      {
        etiqueta: 'Desviación típica',
        opciones: ['$10{,}95$', '$120$', '$12{,}00$', '$10{,}00$'],
        correcta: 0
      },
      {
        etiqueta: 'Coeficiente de variación',
        opciones: ['$24{,}34\\,\\%$', '$0{,}24\\,\\%$', '$10{,}95\\,\\%$', '$20{,}00\\,\\%$'],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Marcas de clase',
        d: 'Los puntos medios son $25$, $35$, $45$, $55$ y $65$. La media es $\\bar x=\\dfrac{10\\cdot25+20\\cdot35+40\\cdot45+20\\cdot55+10\\cdot65}{100}=45$.'
      },
      {
        t: 'Varianza',
        d: 'Las desviaciones respecto de $45$ son $-20$, $-10$, $0$, $10$ y $20$. Entonces $\\sigma^2=\\dfrac{10\\cdot400+20\\cdot100+40\\cdot0+20\\cdot100+10\\cdot400}{100}=\\dfrac{12000}{100}=120$.'
      },
      {
        t: 'Desviación típica',
        d: '$\\sigma=\\sqrt{120}\\approx10{,}95$.'
      },
      {
        t: 'Coeficiente de variación',
        d: '$CV=\\dfrac{\\sigma}{\\bar x}=\\dfrac{10{,}95}{45}\\approx0{,}2434$, es decir, un $24{,}34\\,\\%$.'
      }
    ],
    truco: 'Con datos agrupados, cada intervalo se representa por su marca de clase; después se pondera por la frecuencia, nunca se usan los extremos.',
    errorTipico: 'Dividir entre $5$ (número de intervalos) en lugar de entre $100$ (número de datos), o presentar la varianza $120$ como si fuera la desviación típica.'
  },
  {
    id: 'cs2-est-12',
    materia: 'ccss-ii',
    bloque: 'estadistica',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Correlación lineal y predicción',
    fuente: FUENTE,
    enunciado: 'Se estudia la relación entre las horas de estudio ($X$) y la nota de un examen ($Y$) en seis estudiantes: $(1,3)$, $(2,5)$, $(3,4)$, $(4,7)$, $(5,8)$ y $(6,9)$. Calcula la covarianza poblacional, el coeficiente de correlación de Pearson, la nota prevista para $7$ horas de estudio e interpreta el valor de $r$.',
    pista: 'Las medias son $\\bar x=3{,}5$ y $\\bar y=6$. Usa $s_{xy}=\\dfrac{\\sum x_iy_i}{n}-\\bar x\\bar y$ y $r=\\dfrac{s_{xy}}{s_xs_y}$; la recta pasa por $(\\bar x,\\bar y)$.',
    partes: [
      {
        etiqueta: 'Covarianza',
        opciones: ['$3{,}5$', '$0{,}5833$', '$21$', '$4{,}2$'],
        correcta: 0
      },
      {
        etiqueta: 'Coeficiente de correlación $r$',
        opciones: ['$0{,}9487$', '$0{,}9000$', '$0{,}9747$', '$0{,}4500$'],
        correcta: 0
      },
      {
        etiqueta: 'Nota prevista para $7$ horas',
        opciones: ['$10{,}2$', '$8{,}4$', '$9{,}0$', '$11{,}4$'],
        correcta: 0
      },
      {
        etiqueta: 'Interpretación de $r$',
        opciones: [
          'Correlación lineal fuerte y positiva',
          'Correlación lineal débil y positiva',
          'Correlación lineal fuerte y negativa',
          'No existe correlación lineal'
        ],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Medias y sumas',
        d: '$\\bar x=3{,}5$, $\\bar y=6$; $\\sum x_iy_i=147$, $\\sum x_i^2=91$ y $\\sum y_i^2=244$.'
      },
      {
        t: 'Covarianza y varianzas',
        d: '$s_{xy}=\\dfrac{147}{6}-3{,}5\\cdot6=24{,}5-21=3{,}5$; $s_x^2=\\dfrac{91}{6}-12{,}25\\approx2{,}9167$ y $s_y^2=\\dfrac{244}{6}-36\\approx4{,}6667$.'
      },
      {
        t: 'Coeficiente de correlación',
        d: '$r=\\dfrac{3{,}5}{\\sqrt{2{,}9167\\cdot4{,}6667}}\\approx0{,}9487$. Al ser positivo y próximo a $1$, la relación lineal es fuerte y directa.'
      },
      {
        t: 'Recta y predicción',
        d: 'La pendiente es $m=\\dfrac{3{,}5}{2{,}9167}=1{,}2$ y la ordenada $b=6-1{,}2\\cdot3{,}5=1{,}8$. Para $x=7$: $\\hat y=1{,}8+1{,}2\\cdot7=10{,}2$.'
      }
    ],
    truco: 'El signo de $r$ coincide con el de la covarianza y con el de la pendiente. Además, $-1\\le r\\le1$: si obtienes algo mayor, has dividido mal.',
    errorTipico: 'Dividir la covarianza entre $n-1$ cuando el enunciado pide la poblacional, o interpretar $r=0{,}9487$ como una pendiente.'
  },
  {
    id: 'cs2-est-13',
    materia: 'ccss-ii',
    bloque: 'estadistica',
    nivel: 3,
    tipo: 'opcion',
    titulo: 'Comparar dos grupos por su coeficiente de variación',
    fuente: FUENTE,
    enunciado: 'En un examen, el grupo A tiene una nota media de $6{,}5$ con desviación típica $1{,}3$; el grupo B tiene media $7{,}2$ con desviación típica $1{,}8$. Calcula el coeficiente de variación de cada grupo, indica cuál presenta mayor dispersión absoluta y cuál es más homogéneo.',
    pista: 'El coeficiente de variación es $CV=\\dfrac{\\sigma}{\\bar x}$ y se suele expresar en porcentaje. La dispersión absoluta se mide con la desviación típica; la relativa, con el CV.',
    partes: [
      {
        etiqueta: 'Coeficiente de variación del grupo A',
        opciones: ['$20\\,\\%$', '$5\\,\\%$', '$13\\,\\%$', '$2\\,\\%$'],
        correcta: 0
      },
      {
        etiqueta: 'Coeficiente de variación del grupo B',
        opciones: ['$25\\,\\%$', '$18\\,\\%$', '$4\\,\\%$', '$2{,}5\\,\\%$'],
        correcta: 0
      },
      {
        etiqueta: 'Mayor dispersión absoluta',
        opciones: [
          'El grupo B, porque su desviación típica es mayor',
          'El grupo A, porque su media es menor',
          'El grupo B, porque su media es mayor',
          'Los dos grupos, porque sus medias son distintas'
        ],
        correcta: 0
      },
      {
        etiqueta: 'Grupo más homogéneo',
        opciones: [
          'El grupo A, porque su coeficiente de variación es menor',
          'El grupo B, porque su media es mayor',
          'El grupo A, porque su media es menor',
          'El grupo B, porque su coeficiente de variación es mayor'
        ],
        correcta: 0
      }
    ],
    solucion: [
      {
        t: 'Grupo A',
        d: '$CV_A=\\dfrac{1{,}3}{6{,}5}=0{,}2=20\\,\\%$.'
      },
      {
        t: 'Grupo B',
        d: '$CV_B=\\dfrac{1{,}8}{7{,}2}=0{,}25=25\\,\\%$.'
      },
      {
        t: 'Dispersión absoluta',
        d: 'La desviación típica del grupo B ($1{,}8$) es mayor que la del A ($1{,}3$): el B tiene más dispersión absoluta.'
      },
      {
        t: 'Homogeneidad',
        d: 'El grupo A tiene menor coeficiente de variación ($20\\,\\%<25\\,\\%$), así que es relativamente más homogéneo aunque su nota media sea menor.'
      }
    ],
    truco: 'Para comparar la dispersión de variables con medias distintas, usa siempre el coeficiente de variación; la desviación típica sola solo sirve si las medias son parecidas.',
    errorTipico: 'Elegir como más homogéneo el grupo con mayor media o con menor desviación típica sin dividir entre la media.'
  }
];

let texto = fs.readFileSync(RUTA, 'utf8');
const eol = texto.includes('\r\n') ? '\r\n' : '\n';
const marca = eol + '    ]';
const pos = texto.lastIndexOf(marca);
if (pos < 0) throw new Error('No se encuentra el cierre del array en ' + RUTA);

const chunk = NUEVOS
  .map((ej) => JSON.stringify(ej, null, 2).split('\n').map((linea) => '      ' + linea).join(eol))
  .join(',' + eol);

texto = texto.slice(0, pos) + ',' + eol + chunk + texto.slice(pos);
const total = (texto.match(/"id":/g) || []).length;
texto = texto.replace(/· \d+ ejercicios/, '· ' + total + ' ejercicios');
fs.writeFileSync(RUTA, texto);

console.log(`${path.relative(ROOT, RUTA)}: +${NUEVOS.length} (total ${total})`);
console.log(`Añadidos ${NUEVOS.length} ejercicios de estadística.`);
