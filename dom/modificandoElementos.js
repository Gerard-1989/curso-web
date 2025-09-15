/* 📌 elemento.innerHTML
	Nos permite cambiar el contenido HTML de un elemento
*/
let primeraCaja = document.querySelector(".caja");
primeraCaja.innerHTML = "<b>Hola</b>"; 

/* 📌 elemento.attribute
	Nos permite acceder y cambiar atributos del elemento.
*/
primeraCaja.id = "nuevo-id";  //si ja tenia un ID es sobreescriu, be carefull amigo xd

/* 📌 elemento.setAttribute()
	Nos permite agregar o establecer el valor de un atributo del elemento
*/
primeraCaja.setAttribute("class", "caja activa")
// recibe 2 parametros:
// El primero es el atributo es el que quieres modificar/agregar nuevo (class en este caso)
// El segundo es el nuevo valor q tendra (activa en este caso)

primeraCaja.setAttribute("data-id", "12345-6789") // tmb podemos agregar un atributo personalizado (data-)

/* 📌 elemento.style.property
	Nos permite cambiar los estilos css de un elemento
*/
let contenedor2Caja1 = document.querySelector("#contenedor2 .caja");//  Busca dentro de #contenedor2 el primer elemento con clase "caja" y lo guarda en la variable contenedor2Caja1
contenedor2Caja1.style.background = "green"; //  Cambia el background de esa caja, 
contenedor2Caja1.style.color = "red"; //  Cambia el color de texto de esa caja, 

contenedor2Caja1.style.textTransform = "uppercase"; //  Aplica un estilo visual que convierte todo el texto a mayúsculas
                                                   // NOTA:🔹 El texto se ve en mayúsculas en la página, pero el contenido original dentro del div sigue igual
