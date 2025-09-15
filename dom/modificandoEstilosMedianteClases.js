/*
    📌 Podemos modificar los estilos CSS de un elemento de dos formas:
    - Agregando y quitando clases CSS
    - Modificando los estilos "inline" de cada elemento.
*/

/*
    📌 Modificar estilos CSS mediante clases
*/
let primeraCaja = document.querySelector("#contenedor1 .caja");
console.log(primeraCaja.classList);
// 🔹 .classList → muestra todas las clases que tiene el elemento en forma de lista (tipo array especial)


// classList.add() - Nos permite agregar clases a un elemento.
let agregarClase = () => {
    primeraCaja.classList.add("activa");
}

// classList.remove() - Nos permite eliminar clases de un elemento
let eliminarClase = () => {
    primeraCaja.classList.remove("activa");
}

// classList.toggle() - Nos permite alternar clases de un elemento
let toggleClase = () => {
    primeraCaja.classList.toggle("activa"); // lo q hace el TOGGLE es: Si tiene la class ACTIVA se la quita y si no la tiene se la AGREGA.
}

// classList.contains() - Nos permite comprobar/revisar si un elemento HTML tiene una clase concreta en su lista de clases 
let comprobarClase = () => {
    if (primeraCaja.classList.contains("activa")) { // Le decimos: quiero acceder a primeraCaja, accedemos a su lista de clases y quiero preguntar si CONTIENE una clase (activa)
        console.log("La caja SI tiene la clase 'activa'");
    } else {
        console.log("La caja NO tiene la clase 'activa'");
    }

    //Que nos muestre tmb todas las clases q tiene:
    console.log('y contiene las siguientes clases:');
    // classList.forEach() - Nos permite iterar sobre cada clase
    primeraCaja.classList.forEach((clase) => {
        console.log(clase);
    });
}
