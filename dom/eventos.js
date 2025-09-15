/*
    📌 Eventos
    Los eventos en Javascript nos permiten reaccionar a cosas que ocurren en la página web
    Como por ejemplo reaccionar cuando:
    - la página termina de cargar
    - el usuario da click a un boton
    - pasa el mouse arriba de un elemento
    - escribe en un campo de texto
    - envia un formulario
    - etc.

    Hay cientos de eventos a los que podemos reaccionar:
    https://developer.mozilla.org/en-US/docs/Web/Events#event_listing
*/

/*
    📌 Eventos como atributo de elementos HTML
    Podemos agregar algunos eventos como atributo de un elemento HTML
*/

let botonDeEvento = document.getElementById("boton");
let primeraClase = document.querySelector(".caja");

botonDeEvento.addEventListener("click", (e) => {   // la "e" representa LA ACCION q el usuario hizo en el navegador.
    // 🔹 addEventListener escucha una acción (evento) en el elemento
    // 🔹 "click" → el tipo de evento que queremos detectar
    // 🔹 () => { ... } → función flecha que se ejecutará cuando ocurra el click

    console.log(e);
    // 🔹 (e) → es un parámetro que representa el *objeto del evento*
    // 🔹 Ese objeto contiene toda la información del "click":
    //     - qué elemento fue clicado
    //     - coordenadas del ratón
    //     - si el usuario tenía teclas presionadas (Ctrl, Shift, etc.)
    // 🔹 El nombre "e" lo eliges tú, pero por convención se suele poner "e" (de "event")


    primeraClase.classList.toggle("activa");
    // 🔹 .classList → accede a la lista de clases del elemento "primeraClase"
    // 🔹 .toggle("activa") → si el elemento NO tiene la clase "activa", se la añade
    //                        si YA la tiene, se la quita
    // 🔹 Es como un interruptor ON/OFF para esa clase
});



//	📌 Agregando el evento a multiples elementos
//	Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
//! Nota: Esta no es la forma mas optima, en la proxima clase veremos una mejor forma.

let cajas = document.querySelectorAll('.caja');
// 🔹 Seleccionamos TODAS las cajas con la clase .caja
// 🔹 querySelectorAll devuelve un NodeList (una lista de elementos parecida a un array)


cajas.forEach((caja) => {
    // 🔹 Recorremos cada caja con forEach
    // 🔹 "caja" es una variable temporal → representa la caja actual del recorrido

    caja.addEventListener('click', (e) => {
        // 🔹 A cada caja le añadimos un "escuchador de eventos"
        // 🔹 'click' → el evento que queremos detectar
        // 🔹 () => { ... } → la función que se ejecuta cuando se hace click en esa caja

        console.log(`Has hecho click en la caja: ${e.target.innerHTML}`);
        // 🔹 Usamos backticks ` ` → para poder mezclar texto y variables (Template String)
        // 🔹 e → es el objeto del evento (lo recibimos en el addEventListener)
        // 🔹 e.target → es la caja que clicaste
        // 🔹 innerHTML → el texto que tiene dentro la caja
        // 🔹 Resultado: si la caja contiene "Caja 1", en consola veremos:
        //    "Has hecho click en la caja: Caja 1"
    });
});
