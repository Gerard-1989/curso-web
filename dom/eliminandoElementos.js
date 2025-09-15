/*
    📌 Eliminar eventos de un elemento
*/



let eliminarCaja = () => {     //    Esta función se ejecutará cuando hagamos clic en el botón
    let padre = document.getElementById("contenedor2"); 

    let cajaQueVamosAeliminar = padre.querySelector(".caja");  
    // 🔹 Dentro de padre (que es contenedor2) buscamos la PRIMERA caja que tenga la clase .caja, 
    // querySelector devuelve el primer match o null si no encuentra ninguno

    if (cajaQueVamosAeliminar) { 
         // 🔹 Si encontró alguna caja, entra en este bloque
         //  Si no encontró nada (null), no hace nada y evita errores
        padre.removeChild(cajaQueVamosAeliminar);  
         // 🔹 Eliminamos esa caja seleccionada del DOM. 
         //    removeChild necesita que le pases el hijo exacto
    } // 🔹 Fin del if → si no hay cajas, no borra nada
}
