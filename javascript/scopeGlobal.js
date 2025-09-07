/* 📌 Global Scope o Variables Globales
	- Son las variables declaradas fuera de una funcion.
	- Podemos acceder a ellas desde cualquier parte del código.
	- Podemos usar const, let y var.
*/

var nombre = 'Gerard'; // Variable global
console.log(nombre); 

const saludo = () => {
	
	console.log('Hola ' + nombre); // Dentro de las funciones podemos acceder a las variables globales

	// Si dentro de una función modificas esa variable, el cambio afecta a la variable global.
	nombre = 'Ramon';
	console.log("El nuevo nombre es:" + nombre); //Ramon
};
saludo();
