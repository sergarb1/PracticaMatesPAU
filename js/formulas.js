/* Formularios de consulta rápida.
   Cada materia tiene grupos por bloque; cada ítem es {n: nombre, f: LaTeX}.
   En la interfaz se renderiza como fórmula destacada. */
(function () {
  const L = String.raw;
  window.PAU_FORMULAS = {
    'mates-ii': [
      {
        bloque: 'matrices',
        titulo: 'Matrices, determinantes y sistemas',
        items: [
          { n: 'Determinante 2×2', f: L`\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc` },
          { n: 'Determinante 3×3 (Sarrus)', f: L`\begin{vmatrix}a&b&c\\d&e&f\\g&h&i\end{vmatrix}=aei+bfg+cdh-cge-bdi-afh` },
          { n: 'Inversa 2×2', f: L`A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}` },
          { n: 'Inversa general', f: L`A^{-1}=\frac{1}{\det A}\,(\operatorname{adj}A)^{T}` },
          { n: 'Rouché–Capelli', f: L`\text{Compatible}\iff \operatorname{rg}(A)=\operatorname{rg}(A|b)` },
          { n: 'Compat. determinado', f: L`\operatorname{rg}(A)=\operatorname{rg}(A|b)=n` },
          { n: 'Compat. indeterminado', f: L`\operatorname{rg}(A)=\operatorname{rg}(A|b)\lt n` }
        ]
      },
      {
        bloque: 'derivadas',
        titulo: 'Derivadas, límites e integrales',
        items: [
          { n: 'Producto y cociente', f: L`(uv)'=u'v+uv'\qquad\left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^{2}}` },
          { n: 'Regla de la cadena', f: L`\big(f(g(x))\big)'=f'(g(x))\,g'(x)` },
          { n: 'Derivadas usuales', f: L`\begin{aligned}(x^n)'&=nx^{n-1}&(\ln x)'&=\tfrac1x\\ (e^x)'&=e^x&(\operatorname{sen}x)'&=\cos x\\ (\cos x)'&=-\operatorname{sen}x&(\operatorname{tg}x)'&=1+\operatorname{tg}^2x\end{aligned}` },
          { n: 'Recta tangente en a', f: L`y=f(a)+f'(a)(x-a)` },
          { n: 'Límites de cocientes', f: L`\lim_{x\to\infty}\frac{ax^p+\dots}{bx^q+\dots}=\begin{cases}0&p\lt q\\ a/b&p=q\\ \infty&p\gt q\end{cases}` },
          { n: 'L\'Hôpital', f: L`\lim\frac{f}{g}=\lim\frac{f'}{g'}\quad\text{si }\frac00\text{ o }\frac{\infty}{\infty}` },
          { n: 'Barrow', f: L`\int_a^b f(x)\,dx=F(b)-F(a),\quad F'=f` },
          { n: 'Integrales inmediatas', f: L`\int x^n dx=\frac{x^{n+1}}{n+1}\quad(n\ne-1)\qquad\int\frac1x dx=\ln|x|` },
          { n: 'Área entre curvas', f: L`A=\int_a^b |f(x)-g(x)|\,dx` }
        ]
      },
      {
        bloque: 'vectores',
        titulo: 'Geometría en el espacio',
        items: [
          { n: 'Producto escalar', f: L`\vec u\cdot\vec v=u_1v_1+u_2v_2+u_3v_3` },
          { n: 'Módulo', f: L`|\vec u|=\sqrt{u_1^2+u_2^2+u_3^2}` },
          { n: 'Ángulo entre vectores', f: L`\cos\theta=\frac{\vec u\cdot\vec v}{|\vec u|\,|\vec v|}` },
          { n: 'Producto vectorial', f: L`\vec u\times\vec v=\begin{vmatrix}\vec i&\vec j&\vec k\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix}` },
          { n: 'Área del triángulo', f: L`A=\frac12\,|\overrightarrow{AB}\times\overrightarrow{AC}|` },
          { n: 'Ángulo recta-plano', f: L`\operatorname{sen}\theta=\frac{|\vec n\cdot\vec d|}{|\vec n|\,|\vec d|}` },
          { n: 'Distancia punto-plano', f: L`d=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}` },
          { n: 'Plano por punto y normal', f: L`a(x-x_0)+b(y-y_0)+c(z-z_0)=0` },
          { n: 'Distancia punto-recta', f: L`d=\frac{|\overrightarrow{AP}\times\vec d|}{|\vec d|}` }
        ]
      },
      {
        bloque: 'probabilidad',
        titulo: 'Probabilidad y estadística',
        items: [
          { n: 'Unión', f: L`P(A\cup B)=P(A)+P(B)-P(A\cap B)` },
          { n: 'Condicionada', f: L`P(A\mid B)=\frac{P(A\cap B)}{P(B)}` },
          { n: 'Probabilidad total', f: L`P(B)=\sum_i P(A_i)\,P(B\mid A_i)` },
          { n: 'Bayes', f: L`P(A_i\mid B)=\frac{P(A_i)P(B\mid A_i)}{\sum_j P(A_j)P(B\mid A_j)}` },
          { n: 'Independencia', f: L`P(A\cap B)=P(A)P(B)\iff P(A\mid B)=P(A)` },
          { n: 'Binomial', f: L`P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}` },
          { n: 'Media y varianza binomial', f: L`\mu=np,\qquad \sigma^2=np(1-p)` },
          { n: 'Complementario', f: L`P(X\ge1)=1-P(X=0)` }
        ]
      },
      {
        bloque: 'complejos',
        titulo: 'Números complejos',
        items: [
          { n: 'Forma binómica y módulo', f: L`z=a+bi,\qquad |z|=\sqrt{a^2+b^2}` },
          { n: 'Argumento', f: L`\arg z=\begin{cases}\arctan(b/a)&a\gt 0\\ \arctan(b/a)+\pi&a\lt 0\end{cases}` },
          { n: 'Forma polar', f: L`z=r(\cos\theta+i\operatorname{sen}\theta),\qquad r=|z|` },
          { n: 'Producto y cociente', f: L`\begin{aligned}z_1z_2&=r_1r_2\big(\cos(\theta_1+\theta_2)+i\operatorname{sen}(\theta_1+\theta_2)\big)\\\frac{z_1}{z_2}&=\frac{r_1}{r_2}\big(\cos(\theta_1-\theta_2)+i\operatorname{sen}(\theta_1-\theta_2)\big)\end{aligned}` },
          { n: 'Conjugado', f: L`\overline{a+bi}=a-bi,\qquad z\overline z=|z|^2` },
          { n: 'Potencia (De Moivre)', f: L`z^n=r^n\big(\cos n\theta+i\operatorname{sen}n\theta\big)` },
          { n: 'Raíces n-ésimas', f: L`\sqrt[n]{z}=\sqrt[n]{r}\left(\cos\frac{\theta+2k\pi}{n}+i\operatorname{sen}\frac{\theta+2k\pi}{n}\right),\ k=0,\dots,n-1` },
          { n: 'Cuadrática sin raíces reales', f: L`x=\frac{-b\pm i\sqrt{4ac-b^2}}{2a}` }
        ]
      },
      {
        bloque: 'optimizacion',
        titulo: 'Optimización',
        items: [
          { n: 'Condición necesaria', f: L`f'(x)=0` },
          { n: 'Criterio de la 2ª derivada', f: L`f''(x_0)\gt 0\Rightarrow\text{mínimo},\qquad f''(x_0)\lt 0\Rightarrow\text{máximo}` },
          { n: 'Intervalo cerrado', f: L`\text{Comparar }f\text{ en los puntos críticos y en los extremos}` },
          { n: 'Con restricción', f: L`\text{Despejar una variable de la ligadura y sustituir en la función objetivo}` },
          { n: 'Ingreso y coste marginal', f: L`I'(q)=0\Rightarrow\text{ingreso máximo},\qquad C'(q)=\text{coste marginal}` },
          { n: 'Beneficio', f: L`B(q)=I(q)-C(q),\qquad B'(q)=0` }
        ]
      },
      {
        bloque: 'rectas-planos',
        titulo: 'Rectas y planos en el espacio',
        items: [
          { n: 'Recta por punto y dirección', f: L`(x,y,z)=(x_0,y_0,z_0)+t(d_1,d_2,d_3)` },
          { n: 'Plano por punto y normal', f: L`a(x-x_0)+b(y-y_0)+c(z-z_0)=0` },
          { n: 'Plano por tres puntos', f: L`\begin{vmatrix}x-x_0&y-y_0&z-z_0\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix}=0` },
          { n: 'Recta contenida o paralela', f: L`\vec n\cdot\vec d=0` },
          { n: 'Ángulo recta-plano', f: L`\operatorname{sen}\theta=\frac{|\vec n\cdot\vec d|}{|\vec n|\,|\vec d|}` },
          { n: 'Ángulo entre planos', f: L`\cos\theta=\frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1|\,|\vec n_2|}` },
          { n: 'Distancia punto-plano', f: L`d=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}` },
          { n: 'Distancia punto-recta', f: L`d=\frac{|\overrightarrow{AP}\times\vec d|}{|\vec d|}` },
          { n: 'Simétrico de P respecto de π', f: L`P'=P-2\frac{ax_0+by_0+cz_0+d}{a^2+b^2+c^2}(a,b,c)` }
        ]
      }
    ],
    'ccss-ii': [
      {
        bloque: 'matrices',
        titulo: 'Álgebra y programación lineal',
        items: [
          { n: 'Producto de matrices', f: L`(AB)_{ij}=\sum_k a_{ik}b_{kj}` },
          { n: 'Inversa 2×2', f: L`A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}` },
          { n: 'Rouché–Capelli', f: L`\text{Compatible}\iff \operatorname{rg}(A)=\operatorname{rg}(A|b)` },
          { n: 'Programación lineal', f: L`\text{Optimizar } z=ax+by \text{ sobre la región factible}` },
          { n: 'Método gráfico', f: L`\text{El óptimo está en un vértice de la región factible}` },
          { n: 'Vértice intersección', f: L`\begin{cases}a_1x+b_1y=c_1\\ a_2x+b_2y=c_2\end{cases}` }
        ]
      },
      {
        bloque: 'derivadas',
        titulo: 'Funciones, derivadas e integrales',
        items: [
          { n: 'Derivadas usuales', f: L`(x^n)'=nx^{n-1}\quad(e^x)'=e^x\quad(\ln x)'=\tfrac1x` },
          { n: 'Producto y cociente', f: L`(uv)'=u'v+uv'\qquad\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}` },
          { n: 'Recta tangente', f: L`y=f(a)+f'(a)(x-a)` },
          { n: 'Asíntota horizontal', f: L`y=\lim_{x\to\pm\infty}f(x)` },
          { n: 'Asíntota vertical', f: L`x=a\ \text{si}\ \lim_{x\to a}f(x)=\pm\infty` },
          { n: 'Barrow', f: L`\int_a^b f(x)\,dx=F(b)-F(a)` },
          { n: 'Área entre curvas', f: L`A=\int_a^b|f(x)-g(x)|\,dx` },
          { n: 'Vértice parábola', f: L`x=-\frac{b}{2a},\qquad y=c-\frac{b^2}{4a}` }
        ]
      },
      {
        bloque: 'probabilidad',
        titulo: 'Probabilidad, binomial y normal',
        items: [
          { n: 'Condicionada y total', f: L`P(A\mid B)=\frac{P(A\cap B)}{P(B)}\qquad P(B)=\sum_i P(A_i)P(B\mid A_i)` },
          { n: 'Bayes', f: L`P(A_i\mid B)=\frac{P(A_i)P(B\mid A_i)}{P(B)}` },
          { n: 'Binomial', f: L`P(X=k)=\binom nk p^k(1-p)^{n-k}` },
          { n: 'Media y desviación binomial', f: L`\mu=np,\qquad\sigma=\sqrt{np(1-p)}` },
          { n: 'Tipificar normal', f: L`Z=\frac{X-\mu}{\sigma}\sim N(0,1)` },
          { n: 'Intervalo tipificado', f: L`P(a\lt X\lt b)=P\!\left(\frac{a-\mu}{\sigma}\lt Z\lt\frac{b-\mu}{\sigma}\right)` },
          { n: 'Corrección de continuidad', f: L`P(X\ge k)\approx P\!\left(Z\ge\frac{k-0{,}5-\mu}{\sigma}\right)` },
          { n: 'Aproximación', f: L`B(n,p)\approx N(np,\sqrt{np(1-p)})\ \text{si }np,nq\ge5` }
        ]
      },
      {
        bloque: 'estadistica',
        titulo: 'Estadística descriptiva y regresión',
        items: [
          { n: 'Media', f: L`\bar x=\frac{\sum x_i f_i}{N}` },
          { n: 'Varianza', f: L`\sigma^2=\frac{\sum x_i^2 f_i}{N}-\bar x^2` },
          { n: 'Desviación típica', f: L`\sigma=\sqrt{\sigma^2}` },
          { n: 'Covarianza', f: L`\sigma_{xy}=\frac{\sum x_i y_i f_i}{N}-\bar x\,\bar y` },
          { n: 'Coeficiente de correlación', f: L`r=\frac{\sigma_{xy}}{\sigma_x\sigma_y}\in[-1,1]` },
          { n: 'Recta de regresión', f: L`y-\bar y=\frac{\sigma_{xy}}{\sigma_x^2}(x-\bar x)` }
        ]
      },
      {
        bloque: 'limites',
        titulo: 'Límites, continuidad y asíntotas',
        items: [
          { n: 'Límite en un punto', f: L`f\text{ es continua en }a\iff \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=f(a)` },
          { n: 'Límites de cocientes', f: L`\lim_{x\to\infty}\frac{ax^p+\dots}{bx^q+\dots}=\begin{cases}0&p\lt q\\ a/b&p=q\\ \infty&p\gt q\end{cases}` },
          { n: 'Indeterminación ∞/∞', f: L`\lim_{x\to\infty}\frac{f}{g}=\lim_{x\to\infty}\frac{f'}{g'}` },
          { n: 'Asíntota horizontal', f: L`y=\lim_{x\to\pm\infty}f(x)` },
          { n: 'Asíntota vertical', f: L`x=a\ \text{si}\ \lim_{x\to a}f(x)=\pm\infty` },
          { n: 'Asíntota oblicua', f: L`y=mx+n,\quad m=\lim_{x\to\infty}\frac{f(x)}{x},\ n=\lim_{x\to\infty}\big(f(x)-mx\big)` }
        ]
      },
      {
        bloque: 'sucesiones',
        titulo: 'Sucesiones',
        items: [
          { n: 'Aritmética', f: L`a_n=a_1+(n-1)d` },
          { n: 'Geométrica', f: L`a_n=a_1r^{\,n-1}` },
          { n: 'Suma aritmética', f: L`S_n=\frac{(a_1+a_n)\,n}{2}` },
          { n: 'Suma geométrica', f: L`S_n=a_1\frac{r^n-1}{r-1}\quad(r\ne1)` },
          { n: 'Suma infinita', f: L`S=\frac{a_1}{1-r}\quad\text{si }|r|\lt 1` },
          { n: 'Término general por recurrencia', f: L`a_{n+1}=f(a_n)\Rightarrow\text{calcular los primeros términos y buscar el patrón}` },
          { n: 'Límites de potencias', f: L`\lim_{n\to\infty}r^n=\begin{cases}0&|r|\lt 1\\ 1&r=1\\ \infty&r\gt 1\end{cases}` }
        ]
      },
      {
        bloque: 'inferencia',
        titulo: 'Inferencia estadística',
        items: [
          { n: 'Tipificar', f: L`Z=\frac{X-\mu}{\sigma}\sim N(0,1)` },
          { n: 'Valores usuales de z', f: L`90\%\to1{,}645\qquad 95\%\to1{,}96\qquad 99\%\to2{,}575` },
          { n: 'IC para la media (σ conocida)', f: L`\bar x\pm z_{\alpha/2}\frac{\sigma}{\sqrt n}` },
          { n: 'IC para la media (σ desconocida)', f: L`\bar x\pm t_{\alpha/2}\,\frac{s}{\sqrt n}` },
          { n: 'Error máximo admisible', f: L`E=z_{\alpha/2}\frac{\sigma}{\sqrt n}` },
          { n: 'Tamaño de la muestra', f: L`n=\left(\frac{z_{\alpha/2}\,\sigma}{E}\right)^2` },
          { n: 'IC para la proporción', f: L`\hat p\pm z_{\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}` }
        ]
      }
    ],
    'mates-i': [
      {
        bloque: 'algebra',
        titulo: 'Álgebra y números complejos',
        items: [
          { n: 'Ecuación de segundo grado', f: L`x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}` },
          { n: 'Teorema del factor', f: L`P(a)=0\iff (x-a)\mid P(x)` },
          { n: 'Complejos', f: L`z=a+bi,\qquad |z|=\sqrt{a^2+b^2}` },
          { n: 'Producto complejo', f: L`(a+bi)(c+di)=(ac-bd)+(ad+bc)i` },
          { n: 'Conjugado', f: L`\overline{a+bi}=a-bi,\qquad z\overline z=|z|^2` },
          { n: 'Forma polar', f: L`z=r(\cos\theta+i\operatorname{sen}\theta)` }
        ]
      },
      {
        bloque: 'trigonometria',
        titulo: 'Trigonometría',
        items: [
          { n: 'Identidad fundamental', f: L`\operatorname{sen}^2\alpha+\cos^2\alpha=1` },
          { n: 'Tangente', f: L`\operatorname{tg}\alpha=\frac{\operatorname{sen}\alpha}{\cos\alpha}` },
          { n: 'Ángulo doble', f: L`\operatorname{sen}2\alpha=2\operatorname{sen}\alpha\cos\alpha,\quad \cos2\alpha=\cos^2\alpha-\operatorname{sen}^2\alpha` },
          { n: 'Teorema del seno', f: L`\frac{a}{\operatorname{sen}A}=\frac{b}{\operatorname{sen}B}=\frac{c}{\operatorname{sen}C}` },
          { n: 'Teorema del coseno', f: L`a^2=b^2+c^2-2bc\cos A` },
          { n: 'Área del triángulo', f: L`A=\frac12bc\operatorname{sen}A` }
        ]
      },
      {
        bloque: 'vectores',
        titulo: 'Vectores y geometría',
        items: [
          { n: 'Producto escalar', f: L`\vec u\cdot\vec v=u_1v_1+u_2v_2+u_3v_3` },
          { n: 'Módulo', f: L`|\vec u|=\sqrt{u_1^2+u_2^2+u_3^2}` },
          { n: 'Ángulo', f: L`\cos\theta=\frac{\vec u\cdot\vec v}{|\vec u|\,|\vec v|}` },
          { n: 'Distancia entre puntos', f: L`d(A,B)=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}` },
          { n: 'Punto medio', f: L`M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2},\frac{z_1+z_2}{2}\right)` }
        ]
      },
      {
        bloque: 'derivadas',
        titulo: 'Funciones y cálculo',
        items: [
          { n: 'Derivadas usuales', f: L`(x^n)'=nx^{n-1}\quad(\ln x)'=\tfrac1x\quad(e^x)'=e^x` },
          { n: 'Producto', f: L`(uv)'=u'v+uv'` },
          { n: 'Límites fundamentales', f: L`\lim_{x\to0}\frac{\operatorname{sen}x}{x}=1,\qquad \lim_{x\to\infty}\left(1+\frac1x\right)^x=e` },
          { n: 'Recta tangente', f: L`y=f(a)+f'(a)(x-a)` },
          { n: 'Dominio de una raíz', f: L`\sqrt{g(x)}\ \Rightarrow\ g(x)\ge0` }
        ]
      },
      {
        bloque: 'numeros-reales',
        titulo: 'Números reales',
        items: [
          { n: 'Intervalo centrado', f: L`|x-a|\lt r\iff x\in(a-r,\,a+r)` },
          { n: 'Radicales', f: L`\sqrt{a^2}=|a|,\qquad \sqrt[n]{a^m}=a^{m/n}` },
          { n: 'Racionalizar', f: L`\frac{1}{\sqrt a}=\frac{\sqrt a}{a},\qquad \frac{1}{\sqrt a-\sqrt b}=\frac{\sqrt a+\sqrt b}{a-b}` },
          { n: 'Logaritmos', f: L`\log(ab)=\log a+\log b,\quad \log\frac ab=\log a-\log b,\quad \log a^n=n\log a` },
          { n: 'Cambio de base', f: L`\log_a b=\frac{\ln b}{\ln a}` },
          { n: 'Notación científica', f: L`a\cdot10^{n}\ \text{con}\ 1\le|a|\lt 10` },
          { n: 'Error absoluto y relativo', f: L`E_a=|x_{\text{real}}-x_{\text{aprox}}|,\qquad E_r=\frac{E_a}{|x_{\text{real}}|}` }
        ]
      },
      {
        bloque: 'sucesiones',
        titulo: 'Sucesiones',
        items: [
          { n: 'Aritmética', f: L`a_n=a_1+(n-1)d` },
          { n: 'Geométrica', f: L`a_n=a_1r^{\,n-1}` },
          { n: 'Suma de los n primeros', f: L`S_n=\frac{(a_1+a_n)n}{2}\quad\text{o}\quad S_n=a_1\frac{r^n-1}{r-1}` },
          { n: 'Término general por recurrencia', f: L`a_{n+1}=f(a_n)` },
          { n: 'Límite de una geométrica', f: L`|r|\lt 1\Rightarrow a_n\to0` },
          { n: 'Monotonía', f: L`a_{n+1}-a_n\gt 0\Rightarrow\text{creciente}` }
        ]
      },
      {
        bloque: 'conicas',
        titulo: 'Cónicas',
        items: [
          { n: 'Circunferencia', f: L`(x-a)^2+(y-b)^2=r^2` },
          { n: 'Elipse', f: L`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\qquad c^2=a^2-b^2,\qquad e=\frac ca` },
          { n: 'Hipérbola', f: L`\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\qquad c^2=a^2+b^2,\qquad y=\pm\frac ba x` },
          { n: 'Parábola', f: L`y^2=2px,\qquad \text{foco }\left(\frac p2,0\right),\qquad \text{directriz }x=-\frac p2` },
          { n: 'Traslación', f: L`\frac{(x-x_0)^2}{a^2}+\frac{(y-y_0)^2}{b^2}=1` },
          { n: 'Clasificación', f: L`Ax^2+By^2+Dx+Ey+F=0\ \Rightarrow\ \text{según el signo de }A\text{ y }B` }
        ]
      }
    ],
    'ccss-i': [
      {
        bloque: 'numerico',
        titulo: 'Números, porcentajes y logaritmos',
        items: [
          { n: 'Porcentaje encadenado', f: L`P_{\text{final}}=P(1\pm r_1)(1\pm r_2)\cdots` },
          { n: 'Interés compuesto', f: L`C_f=C(1+i)^n` },
          { n: 'Logaritmo', f: L`\log_a x=y\iff a^y=x` },
          { n: 'Propiedades', f: L`\log(ab)=\log a+\log b,\quad \log(a^n)=n\log a` }
        ]
      },
      {
        bloque: 'estadistica',
        titulo: 'Estadística',
        items: [
          { n: 'Media', f: L`\bar x=\frac{\sum x_i f_i}{N}` },
          { n: 'Varianza', f: L`\sigma^2=\frac{\sum x_i^2 f_i}{N}-\bar x^2` },
          { n: 'Desviación típica', f: L`\sigma=\sqrt{\sigma^2}` },
          { n: 'Coeficiente de variación', f: L`CV=\frac{\sigma}{\bar x}` },
          { n: 'Cuartiles', f: L`IQR=Q_3-Q_1` }
        ]
      },
      {
        bloque: 'funciones',
        titulo: 'Funciones',
        items: [
          { n: 'Recta', f: L`y=mx+n,\qquad m=\frac{y_2-y_1}{x_2-x_1}` },
          { n: 'Parábola', f: L`y=ax^2+bx+c,\qquad x_v=-\frac{b}{2a}` },
          { n: 'Punto de equilibrio', f: L`I(x)=C(x)` },
          { n: 'Exponencial y logaritmo', f: L`y=a^x\iff x=\log_a y` }
        ]
      },
      {
        bloque: 'probabilidad',
        titulo: 'Probabilidad',
        items: [
          { n: 'Laplace', f: L`P(A)=\frac{\text{casos favorables}}{\text{casos posibles}}` },
          { n: 'Complementario', f: L`P(A^c)=1-P(A)` },
          { n: 'Unión', f: L`P(A\cup B)=P(A)+P(B)-P(A\cap B)` },
          { n: 'Condicionada', f: L`P(A\mid B)=\frac{P(A\cap B)}{P(B)}` }
        ]
      },
      {
        bloque: 'sucesiones',
        titulo: 'Sucesiones',
        items: [
          { n: 'Aritmética', f: L`a_n=a_1+(n-1)d` },
          { n: 'Geométrica', f: L`a_n=a_1r^{\,n-1}` },
          { n: 'Suma de los n primeros', f: L`S_n=\frac{(a_1+a_n)n}{2}\quad\text{o}\quad S_n=a_1\frac{r^n-1}{r-1}` },
          { n: 'Interés compuesto', f: L`C_f=C(1+i)^n\ \text{es una progresión geométrica de razón }1+i` },
          { n: 'Límite de una geométrica', f: L`|r|\lt 1\Rightarrow a_n\to0` }
        ]
      },
      {
        bloque: 'algebra',
        titulo: 'Álgebra',
        items: [
          { n: 'Ecuación de segundo grado', f: L`x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}` },
          { n: 'Factorización', f: L`ax^2+bx+c=a(x-x_1)(x-x_2)` },
          { n: 'Sistema 2×2', f: L`x=\frac{c_1b_2-c_2b_1}{a_1b_2-a_2b_1},\qquad y=\frac{a_1c_2-a_2c_1}{a_1b_2-a_2b_1}` },
          { n: 'Bicuadrada', f: L`ax^4+bx^2+c=0\ \Rightarrow\ t=x^2` },
          { n: 'Inecuación de primer grado', f: L`ax+b\gt 0\ \Rightarrow\ x\gt-\frac ba\ \text{si }a\gt 0` }
        ]
      }
    ]
  };
})();
