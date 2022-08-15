# Apuntes de css

## ***Apuntes***
---

### **Box-sizing**

Para que haga calculos y el with y height sea el mismo a pesar de añadir padding, se puede agregar en una variable universal en el body.

```css
*body{
    box-sizing: border-box;
}
```
<br>

### **Header**

El header al meter elementos crea un espacio, para solucionar esto hay varios "hacks"

`overflow:hidden;`

`padding-top: 0.1px;`

`border-top: 0.1 solid blue;`
<br><br>

### **Centrar**

<br>

#### *Centrar bloque*

Para centrar bloques es necesario:
```css
margin-left: auto;
margin-right: auto;
```
<br>

#### *Centrar contenido de bloque*

Si se quiere centrar contenido de bloque se debe declarar en la clase del bloque con el text align

`text-align: center;`

<br>

#### *Centrar elemento de linea*
En caso de querer centrar elemento de linea es ncesario hacer primero un display: block; y ahora si text-align: center;

```css
.elemento-linea{
    display: block;
    text-align: center;
}
```

>En mi opinion es mejor convertirlo a elemento de bloque, darle un ancho y centrarlo por margenes y en este caso tal vez funcione con inline-block

<br>

### **Imagenes**

Las imagenes son elementos `inline-block`

Las imagenes se pueden centrar tambien si estan dentro de otro contenedor mediante un text align

```css
.contenedor-imagen{
    text-align: center;
}
```
<br>

### **Z-index**

Mediante la propiedad z-index se puede colocar un hijo detrás del padre colocando un  numero negativo, mientras el padre no tenga z-index declarado.

<br>

### **Orden de propiedades**

No hay forma estandar de ordenar propiedades pero esto es lo mas comun para hacer una lectura facil:

1. Propiedades de posicionamiento
2. Propiedades del box model
3. Propiedades de texto.
4. Propiedades visuales
5. Resto

<br>

### **Breakpoints**

Breakpoints mas comunes:

* Moviles
  * 360 x 640
  * 360 x 720
  * 375 x 667
  * 375 x 812
  * 411 x 731 

* Tablets
  * 720px
  * 768px x 1024

* Escritorio
  * 1368 x 768
  * 1920 x 1080

Ejemplo real mobile first:
* tablet: 640px
* laptop: 1024px
* desktop: 1440px


<br>

---

## ***Recursos***

----

#### **Validador de html**

Esta página es para revisar la semantica del html en base a la W3C:

[Validator](https://validator.w3.org/)

<br>

#### **Convertir de favicon**

Convertidor de favicon a todas las plataformas:

[Convertidor-de-favicon](https://www.favicon-generator.org/)

<br>

#### **Librerias de iconos**

[Libreria](https://fontawesome.com/start)

<br>

#### **Open graph protocol** 

Estilo al compartir link de la pagina en otras redes sociales:

[OPG](https://ogp.me/)

<br>

#### **Especifidad**

Grafica sobre la especifidad de nuestro codigo css:

[Graph](https://jonassebastianohlsson.com/specificity-graph/)

>Recordar que mientras menos picos mejor

<br>

#### **Autoprefixer** 

Debido a que las etiquetas de css no son compatibles con todos los navegadores podemos colocar nuestro codigo en esta página y así le dará compatibilidad a todos los navegadores.

[Autoprefixer](https://autoprefixer.github.io/)

<br>

#### **Normalizar los esilos de css**

Debido a que cada navegador cuenta con sus propias hojas de estilo es mejor pre-inicializar nuestros estilos por defecto para cambiarlos posteriormente.

[Normalize](https://necolas.github.io/normalize.css/)

<br>

### **Autoprefixer automatico**

Preprocesador para poner el autoprefixer:

[Prepros](https://prepros.io/)

<br>

### **Paletas de colores empresas**

Son las paletas de colores usadas en empresas famosas:

[Brand-colors](https://brandcolors.net/)

<br>

### **Elegir color**

Son paletas de colores:

* [Color-codes](https://htmlcolorcodes.com/)

* [Color-hunt](https://colorhunt.co/)


<br>

### **Fuentes**

[Google-fonts](https://fonts.google.com/)

<br>

### **Recortes css**

[Clippy](https://bennettfeely.com/clippy/)

<br>

### **Grid css**

[Grid](https://angrytools.com/css-grid/)

<br>

### **Transform css**
Es para hacer una matriz con todas las transformaciones que quieras a un objeto, ya que es muy dificil escribir tantas propiedades cuando tienes muchas.

[Transform](https://angrytools.com/css-generator/transform/)

---

## Cosas a mejorar

No entendi al 100% flexbox y grid.