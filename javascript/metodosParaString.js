/*
    📌 Métodos y propiedades para cadenas de texto
*/

/*
    📌 .length - Devuelve el numero de caracteres de una cadena de texto 
*/
let saludo = 'Hola yo soy Gerard!';
console.log(saludo.length); //19

/*
     📌 .indexOf()  → busca la primera vez que aparece lo que le digamos y devuelve su posición (index).
     📌 .lastIndexOf() → busca la última vez que aparece lo que le digamos y devuelve su posición (index).
*/
let texto = 'Hola yo soy Gerard!';
console.log(texto.indexOf('o')); // 1
console.log(texto.lastIndexOf('o')); // 9

/*
    📌 .slice() - Devuelve un fragmento de una cadena de texto.
    1er parametro - index desde donde queremos cortar
    2do parametro (opcional) - index hasta donde queremos cortar
*/
let frase = "Hola yo soy Gerard!"
let index = frase.indexOf('G'); // Busca la posicion de la letra G y guardalo en INDEX 
console.log(frase.slice(index)); // corta el texto desde la posición guardada en "index" hasta el final.

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
let reemplazar = "Hola yo soy Gerard!"
console.log(reemplazar.replace('Gerard', "Ramon")); // Hola yo soy Ramon!

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
let convertir = "Hola yo soy Gerard!"
console.log(convertir.split(' ')); //Separamos el texto por los espacios y todas las palabras quedaran como un array "Hola","yo","soy","Gerard!"

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
console.log(convertir.toUpperCase());
console.log(convertir.toLowerCase());


