/*
    📌 Modificar estilos CSS mediante "inline styles".

    Los estilos inline se aplican arriba de los estilos que podamos tener en archivos CSS.
    Estos estilos se agregan en el atributo style del elemento.
*/
let ultimaCaja = document.querySelector('#contenedor2 .caja:last-child'); // Busca en #contenedor2 la ÚLTIMA caja (.caja) usando el selector :last-child
ultimaCaja.style.background = 'yellow'; 
ultimaCaja.style.color = 'pink'; 





let todasLasCajas = document.querySelectorAll(".caja");  // Seleccionamos TODAS las cajas con la clase .caja
let tamañoInicial = 24;                                 // Guardamos un número base (24) que usaremos como tamaño de fuente en píxeles

let incrementarFuente = () => {     // Creamos una función llamada incrementarFuente
    todasLasCajas.forEach((caja) => { // forEach recibe una función que se ejecuta por cada caja encontrada, "caja" es una variable temporal → representa la caja actual del recorrido
        tamañoInicial++; 
        caja.style.fontSize = `${tamañoInicial}px`; 
        // 🔹 Usamos `backticks` para poder mezclar variables dentro de un string
        //    → Esto se llama Template String
        // 🔹 ${tamañoInicial} → se convierte en el número actual (24, 25, 26...).
        // 🔹 "px" → es texto fijo que se añade al número.
        //    Ejemplo: si tamañoInicial = 25 → se convierte en "25px"
    })
}

/*
	📌 La ventaja de trabajar con estilos inline es que podemos modificar los estilos de forma dinamica.
*/

let disminuirFuente = () => {
    todasLasCajas.forEach((caja) => {
        tamañoInicial--;
        caja.style.fontSize = `${tamañoInicial}px`;
    })
}
