/* 📌 /*
	Los arreglos en javascript en realidad son objetos. 
	Esto significa que pueden contener propiedades y métodos.
	Vamos a ver algunas de las propiedades y métodos mas importantes:
*/

let colores = ["Azul", "Rojo", "Amarillo",];
/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
console.log(colores.length);

/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/
document.body.innerHTML = colores.toString();

/*
	📌 .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/
console.log(colores.join('-'));

/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/
let letras = ["c","b","d","a"]
console.log(letras.sort());

let numeros = [3,4,1,2];
console.log(numeros.sort());

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/
console.log(letras.reverse());
console.log(numeros.reverse());

/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/
let primerArreglo = [98,99,100];
let segundoArreglo = ["X","Y","Z"];
let metodoConcat = primerArreglo.concat(segundoArreglo);

console.log(metodoConcat);

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/
colores.push('Rosa');
console.log(colores);

/*
	📌 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/
colores.pop();
console.log(colores);

/* 
	📌 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/
let dias = ["lunes","martes","miercoles","jueves","viernes"];
console.log(dias);
let diaEliminado = dias.shift();  //el dia que hemos eliminado (lunes), lo guardamos dentro de la variable diaEliminado. haciendo consol.log podemos ver q dia hemos borrado
console.log(diaEliminado);
console.log(dias);

/*
	📌 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift("Gerard"); //Lunes no sale xq lo borramos en la linea 74 xd
console.log(dias);

/* 
	📌 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Cuantos elementos eliminar desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/
let amigos = ["Carlos","Fran","Arturo","Manuel"];
amigos.splice(1,3, "Jesus","Rafa","Antonio") // amb el 1 diem on volem escomençar a posar els nous elements, el 3 significa quans elements vols eliminar (fran,arturo,manuel) y despres el q volem afegir.
console.log(amigos);

/* 📌 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/

let frutas = ["Manzana","Uvas","Platano","Mandarina","Melon","Sandia","Melocoton"];
let frutasFav = frutas.slice(1,5); // creamos una variable donde pondremos la copia de las frutas q queremos copiar, de la posicion 1 (uvas) hasta la posicion 5 (Sandia) pero se Sandia no se guarda
console.log(frutasFav);
