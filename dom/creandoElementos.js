/*
    📌 Agregando elementos al DOM
	
    Pasos a seguir:
    1. Crear un elemento del DOM
    2. Agregarle texto y atributos
    3. Insertar el elemento dentro del DOM
*/


let agregarCaja = () => {
    /*
    📌 1. Creamos el elemento
    createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
    */   
    let nuevaCaja = document.createElement("div");

    /*
    📌 2. Agregamos texto y atributos
    */
   nuevaCaja.innerText = "Nueva Caja!"; // la nueva caja tendra este texto
   nuevaCaja.setAttribute("id", "nuevo-id"); // tendra este id (nuevo-id)
   nuevaCaja.setAttribute("class", "caja activa"); // y tendra estas 2 clases (caja y activa)

   	/*
		📌 3. Agregamos el elemento al DOM
        appendChild -> agregar un elemento al final

	*/
    let contenedor = document.getElementById("contenedor1");
    contenedor.appendChild(nuevaCaja);    
 


    /* 📌.insertAdjacentElement() - Nos permite agregar un elemento 
	Valores:
		afterbegin - como primer elemento
		beforebegin - antes del elemento padre
		beforeend - como ultimo elemento (este seria igual que el appendChild)
		afterend -  despues del elemento padre
    */
    contenedor.insertAdjacentElement("afterbegin", nuevaCaja); 
    // 1º parámetro (afterbegin) → posición donde lo quiero poner
    // 2º parámetro (nuevaCaja) → el elemento que voy a insertar


    // 📌.replaceWith() - Nos permite remplazar el elemento por otro
    document.querySelector("#contenedor1 .caja").replaceWith(nuevaCaja);
} 
