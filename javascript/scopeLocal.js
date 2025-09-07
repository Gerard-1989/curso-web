/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

let obtenerNumeroLetras = (nombre) => { // Creamos una función flecha y la guardamos en la variable obtenerNumeroLetras. (nombre) es el parámetro, un valor que le pasamos cuando llamamos la función.   
    let numero = nombre.length; // La variable numero solo existe dentro de la función (variable local). nombre.length devuelve el número de caracteres que tiene la cadena nombre.
    console.log(`${nombre} tiene ${numero} letras`); // Usamos backticks ` para poder insertar variables dentro del texto con ${}.

    let funcionDentroDeFuncion = () => {
        console.log(numero); //dentro de esta funcion podemos accedemos a la variable numero
    }//
    funcionDentroDeFuncion(); // Como numero vale 6 (el número de letras de 'Gerard'), imprime 6.
};
obtenerNumeroLetras('Gerard'); // Aquí le pasamos el valor 'Gerard' al parámetro nombre.
 