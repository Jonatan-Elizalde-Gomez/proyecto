# Apuntes de Javascript

## Metodos de cadenas

`concat()` - Junta dos o mas cadenas.

<br>

`startsWith()` - Si una cadena comienza con los caracteres de otra cadena, devuelve true, si no devuelve false.

`endsWith()` - Si una cadena termina con los caracteres de otra cadena, devuelve true, si no devuelve false.

`includes()` - Si una cadena puede encontrarse dentro de otra cadena, devuelve true, si no devuelve false.

`indexOf()` - Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.

`lastIndexOf()` - Devuelve el indice del ultimo caracter de la cadena, si no existe, devuelve -1.

<br>

`padStart()` - [Propuesta de estanda] - Rellenar cadena al princiio con los caracteres deseados

`padEnd()` [Propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados.

`repeat()` - Devuelve la misma cadena pero repetida la cantidad de veces deseada.

<br>

`split()` - Divide la cadena como le pidamos.

`substring()` - Nos retorna un pedazo de la cadena que seleccionamos.

`toLowerCase()` - Convierte una cadena a minúscula.

`toUpperCase()` - Convierte una cadena a mayúscula.

`toString()` - Método devuelve una cadena que representa al objeto especificado.

`trim()` - Elimina los espacios en blanco al principio y al final de una cadena.

`trimEnd()` - Elimina los espacios en blanco al final de una cadena.

`trimStart()` - Elimina los espacios en blanco al comienzo de una cadena.

`valueOf()` - Retorna el valor primitivo de un objeto string.

---

## Metodos de arrays

<br>

### *Transformadores*

`pop()` - Elimina el último elemento de un array y lo devuelve.

`shift()` - Elimina el primer elemento de un array y lo devuelve.

`push()` - Agrega un elemento al array al final de la lista.

`reverse()` - Invierte el orden de los elementos de un array.reverse()

`unshift()` - Agrega unoomás elementos al inicio del array,ydevuelve la nueva longitud del array.

`sort()` - Ordena los elementos de un arreglo(array) localmente y devuelve el arreglo ordenado.

`splice()` - Cambia el contenido de un array eliminando elementos existentesy/o agregando nuevos elementos.

<br>

### *Accesores*

`join()` - Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.

`slice()` - Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).

Metodos ya vistos en cadenas: tostring(), indexof(), lastIndexOf(), includes()

<br>

### *De repetición*

`filter()` - Crea un nuevo array con todos los elementos que cumplan la condición.

`forEach()` - Ejecuta la función indicada una vez por cada elemento del array.


```javascript
//Se mostrará unicamente abecedario y manzana porque tienen más de 5 letras

let numeros = ["abcedario", "manzana", "pedro", "dedo", "bobo", "pedro"];

resultado = numeros.filter(let numero => numero.lenght > 5)

document.write(resultado)
```

>Ambas son bucles que funcionan por una función, aunque filter sirve para cosas más especificas como estas.

---

## Math

<br>

### *Metodos*

`sqrt()` - Devuelve la raíz cuadrada positiva de un número.

`cbrt()` - Devuelve la raíz cúbica de un número.

`max()` - Devuelve el mayor de ceroomás números.

`min()` - Devuelve el más pequeño de ceroomás números.

`random()` - Devuelve un número pseudo-aleatorio entre 0 y 1.
```javascript
let numero = Math.random()*99;
numero = Math.floor(numero+1);
```
>Este es un ejemplo de como poner un numero del 1 al 100 usando random, ya que funciona raro.

`round()`-Devuelve el valor de un número redondeado al número entero más cercano.

`fround()` - Devuelve la representación flotante de precisión simple más cercana de un número.

`floor()` - Devuelve el mayor entero menor que o igual a un número.

`trunc()` -  Devuelve la parte entera del número x ,la eliminación de los dígitos fraccionarios.

---

## DOM

<br>

### **Nodo**

Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista.

* Document: El nodo document es el nodo raíz, apartir del cual derivan el resto
* Element: Nodos definidos por etiquetas html.
* Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text(texto).
* Attribute: Los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos, sino como información asociada al nodo de tipo element)
* Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

| Tipos de datos | Descripción |
|----------------|-------------|
| document        | cuando un miembro devuelve un objeto del tipo document, este objeto es la raíz del objeto documento en sí mismo |
| element | se refiere a un elemento o a un nodo de tipo de elemento "element" devuelto por un miembro de la API de DOM |
| nodeList | Una "nodeList" es una serie de elementos, parecido a lo que devuelve el método document.getElementByTagName(). |
| attribute | Los atributos son nodos en el DOM igual que los elementos, pero no suelen usarse así. |
| NamedNodeMap | Un namedNodeMap es una serie, pero los ítems son accesibles tanto por el nombre o por un índice, este último caso es meramente una conveniencia para enumerar ya que no están en ningún orden en particular en la lista.

<br>

### **Metodos de selección de elementos**

`getElementById()` - Selecciona un elemento por ID.

`getElementsByTagName()` - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.

`querySelector()` - Devuelve el primer elemento que coincida con el grupo especificado de selectores.

`querySelectorAll()` - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

<br>

### **Metodos para definir, obtener y eliminar valores de atributos.**

`·setAttribute()` - Modifica el valor de un atributo.

`getAttribute()` - Obtiene el valor de un atributo.

`removeAttribute()` - Remueve el valor de un atributo.

<br>

### **Atributos de Inputs**

`className` - Nombre de clase.

`value` - Valor de atributo.

`type` - Tipo de atributo.

`accept` - Acepta distintos tipos de archivo en el tipo de input file.

`form` - Para asociar input a form.

`minlength` - Minima cantidad de caracteres.

`placeholder` - Lo que se ve difuminado.

`required` - Que se requiere llenar el campo.

<br>

### **ClassList y Metodos de classList**

`add()` - Añade una clase.

`remove()` - Remueve una clase.

`item()` - Devuelve la clase del indice especificado.

`contains()` - Verifica si ese elemento posee o no, la clase especificada.

`replace()` - Reemplaza una clase por otra.

`toggle()` - Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

<br>

### **Obtención Modificación de Elementos**

`textcontent` - Devuelve el texto de cualquier nodo.

`innerText` - Devuelve el texto visible de un node element.

`innerHTML` - Devuelve el contenido html de un elemento.
  
`outerHTML` - Devuelve el codigo HTML completo del elemento.
 

 <br>

### **Creación de Elementos**
`createElements()` - Nos crea un elemento nuevo, se debe colocar en mayúsculas.

`createTextNode()` - Crea un nuevo nodo de texto.

`appendChild()` - Permite colocar un nuevo hijo a un elemento.

`createDocumentFragment()` - Guardamos aqui el fragmento con todos los elementos y texto y despúes un `contenedor.appendChild(fragment)` y listo.

<br>

---

## Eventos

<br>

* Eventos "Event Handlers" - Es una rutina de devolución de llamada que funciona de forma asíncrona una vez que se produce un evento: 
  
``` js
  button.onclick=()=>{
}
    alert("parlothola")
```
Estos ya estan desactualizados, actualmente se utilizan los event listeners.

<br>

* Eventos "Event Listeners" - El método adjunta un controlador de eventos al elemento especificado: 

```js
button.addEventListener("click",()=>{
    alert("pedro");
});
```

<br>

Es posible elminar un evento al momento de que se active:

```js
button.addEventListener("click",saludar);
function saludar(){
    alert("hola");
}
   button.removeEventListener("click",saludar)
```

<br>

* El objeto Event - Es el que se define como parametro y se puede asi hacer referencia al propio evento.

* Flujo de Eventos o "event flow" - Los eventos tienen un flujo.

* Event Bubbling - Los más especificos son los hijos y los menos especificos los contenedores.
  
* Event Capturing - Se puede seleccionar hacer que un evento tenga más prioridad mediante el parametro true y se le da prioridad en orden de cascada al que se haya puesto el parametro:
  
```js
contenedor1.addEventListener("click",(e)=>{
    alert("di click en el contenedor rojo")
},true);    

contenedor2.addEventListener("click",(e)=>{
    alert("di click en el contenedor azul")
},true);

button.addEventListener("click",(e)=>{
    alert("di click en un botón")
});
```

<br>

* event.stop Propagation - Es posible evitar la propagación de eventos y que al que ocurra el más especifico no se muestren los otros eventos:
  
```js
button.addEventListener("click",(e)=>{
    alert("di click en un botón")
    e.stopPropagation()
});
```

<br>
    
### **Eventos del Mouse**

`click` - Ocurre con un click.

`dblclick` - Ocurre con un doble click.

`mouseover` - Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.

`mouseout` - Ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.

#### *otros*

`contextmenu` - Ocurre con un click en el boton derecho en un elemento para abrir un menú contextual.

`mouseenter` - Ocurre cuando el puntero se mueve sobre un elemento, pero no funciona el Event Bubble, es para el soporte en internet explorer.

`mouseleave` - Ocurre cuando el puntero se mueve fuera de un elemento.

`mouseup` - Ocurre cuando un usuario suelta un botón del mouse sobre un elemento.

`mousemove` - Ocurre cuando el puntero se mueve mientras está sobre un elemento.

<br>

### **Eventos del Teclado**

`keydown` - Ocurre cuando una tecla se deja de presionar.

`keypress` - Ocurre cuando una tecla se presiona.

`onkeyup` - Ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.

<br>

### **Eventos de la interfaz**

`error` - Ocurre cuando sucede un error durante la carga de un archivo multimedia.

`load` - Ocurre cuando un objeto se ha cargado.

`beforeunload` - Ocurre antes de que el documento esté a punto de descargarse.

`unload` - Ocurre una vez que se ha descargado una página.

`rezize` - Ocurre cuando se cambia el tamaño de la vista del documento.

`scroll` - Ocurre cuando se desplaza la barra de desplazamiento de un elemento.

`select` - Ocurre después de que el usuario selecciona algún texto de `<input>` o `<textarea>`, si por ejemplo se quiere mostrar en pantalla el texto seleccionado es posible hacer esto:

```js
input.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.texContent = textoCompleto.substring(startd,end);
})
```

<br>

---


## Cosas a mejorar

Necesito repasar funciones flecha (necesito saber en que momento usar cual).
