/* 
    📌 Break
    La sentencia break nos sirve para salir de bloques de tipo Switch.
    Pero tambien nos sirve para forzar la salida de un ciclo.
*/
let nombres = ['Arturo', 'Andres', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'Angel'];
for (let i = 0; i < nombres.length; i++) { // i < nombres.length = Ejectura este bloque siempre y cuando la varaible I sea menor que la cantidad de nombres del array.
    if (nombres[i][0] !== "A") {  // Está comprobando si la primera letra de cada nombre es distinta de 'A'
        console.log(nombres[i] + ' No empieza por la letra A');
        break;
    }
    console.log(nombres[i]);
}
/*
    La condición if (nombres[i][0] !== "A"):

            Toma el nombre actual nombres[i].

            Mira su primera letra nombres[i][0].

            Si esa primera letra no es "A", entonces entra al if.

    Dentro del if:

            Muestra en consola: "<nombre> No empieza por la letra A".

            Después hace break; → esto corta el bucle y ya no sigue comprobando los demás.

    Si el nombre sí empieza con "A":

            El if no se ejecuta.

            Entonces se ejecuta la línea de abajo: console.log(nombres[i]); → muestra el nombre normal.
*/



/* 
    📌 Continue
    La sentencia continue nos sirve para saltar a la siguiente iteración.
*/
let invitados = ['Carlos', 'Christian', 'Christoher', 'Jorge', 'Estefania', 'Erika', 'Manuel'];
console.log('Lista de personas aceptadas:');

for(let i = 0; i < invitados.length; i++){
    if(invitados[i] === "Jorge"){
        continue;
    }
    console.log(invitados[i]);
}
/*
    let i = 0
        👉 Empiezo contando desde el primer nombre de la lista (posición 0).

    i < invitados.length
        👉 Pregunto: “¿Quedan nombres en la lista?”.

        Si sí → sigo.

        Si no → paro.

    i++
        👉 Después de mirar un nombre, avanzo al siguiente (sumo 1).

    if(invitados[i] === "Jorge") { continue; }
        👉 Si el nombre que estoy mirando es Jorge, lo salto y paso al siguiente.

    console.log(invitados[i])
         👉 Si no era Jorge, lo muestro en pantalla.
*/
