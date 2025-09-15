/*
    📌 El Document Object Model nos da metodos que podemos utilizar
    para poder obtener y modificar los elementos de una página web. 
    - getElementById
    - children
    - parentElement
    - getElementsByTagName
    - getElementsByClassName
    - querySelectorAll
    - querySelector
    - closest
    - matches
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    📌 getElementById
    Nos permite obtener un elemento en base a su atributo id
*/
let contenedor1 = document.getElementById("contenedor1");//  Guardamos en la variable "elemento" el objeto HTML que tenga el id="contenedor1"
console.log(contenedor1);//  Mostramos en la consola lo que hay dentro de esa variable (el objeto HTML encontrado)

/* 
    📌 children
    Nos permite obtener los elementos hijo
    .children devuelve solo los elementos hijo (ejemplo: <p>, <div>, <span>).
*/
console.log(contenedor1.children); //nos muestra los hijos del contenedor padre (contenedor1)

/*
    📌 parentElement
    Nos permite obtener el elemento padre de un elemento
*/
console.log(contenedor1.parentElement);

/* 
    📌 getElementsByTagName
    - Nos permite obtener una colección de elementos en base a la etiqueta que indiquemos. [ Ejemplo: "div", "p", "span", etc. ]
    - Devuelve una colección HTML (HTMLCollection).
    - Nota: Una colección no es un arreglo. 
      ➝ Se parece a un array porque tiene índices y longitud (length),
         pero no tiene métodos como map(), forEach(), filter(), etc.
*/
let divs = document.getElementsByTagName("div");
console.log(divs); //  Muestra en la consola una colección (HTMLCollection) con todos los <div> que hay en el documento HTML
console.log(`Tenemos ${divs.length} divs en este HTMLCollection`);

/*
📌 getElementsByClassName
Nos permite obtener una colección de elementos en base a su clase CSS.
Nota: Devuelve una colección HTML.
*/
let contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

/*
    📌 querySelector
    Nos devuelve el PRIMER elemento que coincida con un selector estilo CSS.
    Nota: Devuelve un nodelist.
*/
let cajita = document.querySelector("#contenedor1 .caja"); //  Busca dentro del documento el primer elemento que cumpla el selector CSS "#contenedor1 .caja"
// → En conjunto: busca un elemento con clase "caja" que esté dentro de "contenedor1"

console.log(cajita); //  Muestra en la consola ese elemento encontrado (solo el primero que cumpla la condición)

/*
    📌 querySelectorAll
    Nos permite obtener una colección de elementos en base a un selector estilo CSS.
    Nota: Devuelve un nodelist. 
*/

//Selecciona TODOS los elementos que tengan la clase "caja" dentro del contenedor con id="contenedor1"  y los guarda en la variable "cajitas" como una lista (NodeList)
let cajitas = document.querySelectorAll("#contenedor1 .caja");
console.log(cajitas); // Muestra un NodeList con todas las cajas dentro de #contenedor1

cajitas.forEach((caixa) => {
    /*
    CAIXA Solo existe dentro de las llaves { ... } del forEach.
    Cada vez que el bucle pasa al siguiente elemento, caixa se “actualiza” con el siguiente div.
    Fuera del forEach, caixa ya no existe.
    */
    console.log(caixa);

});

/* 
    📌 closest
    - Nos permite buscar **de adentro hacia afuera** (hacia los padres) 
      el primer elemento que coincida con un selector CSS.
    - Devuelve el elemento encontrado o null si no encuentra nada.
*/
let ultimaCaja = document.querySelector(".caja:last-child") // Selecciona el ultimo elemento con clase "caja" en todo el documento
console.log(ultimaCaja);//  Muestra en consola ese último div con clase "caja"

let lastCaja = document.querySelector("#contenedor2 .caja:last-child") //  Selecciona el último elemento con clase "caja" **dentro de #contenedor2**
console.log(lastCaja); // Muestra en consola ese div

console.log(ultimaCaja.closest(".contenedor-principal"));
// lo que hace CLOSEST() -> “Desde ultimaCaja, sube hacia arriba y dime cuál es el primer padre con la clase .contenedor-principal”.

/* 
    📌 Podemos encadenar todos los metodos para obtener elementos.
*/
let container2 = document.getElementById("contenedor2");
console.log(container2.querySelector(".caja"));
//
