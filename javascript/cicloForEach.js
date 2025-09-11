/*
	📌 Ciclo forEach
	Es un metodo de los arreglos que podemos usar para pasar por cada uno de sus elementos.
    Se usa cuando tienes un array y quieres hacer algo con cada uno de sus elementos, sin preocuparte de escribir un bucle
*/
let amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.forEach((nombreDelAmigo, index) => { //nombreDelAmigo es para identificar cada amigo, y index para identificar la posicion de cada uno
    console.log(`El amigo nº${index} es: ${nombreDelAmigo}`);
});


/*
	📌 Ciclo for in
	Nos permite recorrer las propiedades de un objeto.
*/
let persona = {
	nombre: 'Gerard',
	edad: 35,
	correo: 'correo@correo.com',
};

// 🔹 Recorremos todas las propiedades del objeto persona

for (propiedad in persona) {
     // propiedad → variable creada solo para el bucle, que cambia en cada vuelta. toma el nombre de cada clave (nombre, edad, correo)
     // in = Recorre los nombres de las propiedades (claves) de un objeto (nombre,edad,coreo), no los valores.
       persona[propiedad] = '';    // persona[propiedad] → accede al valor de la propiedad actual del objeto. Es como decir: "dame lo que hay dentro de (nombre,edad,correo)
    //[] → usamos cuando el nombre de la propiedad está en una variable.
}

// 🔹 Mostramos el objeto ya modificado
console.log(persona); // Resultado final: { nombre: '', edad: '', correo: '' }



/*
	📌 Ciclo for of
	Nos permite recorrer los valores de un objeto iterable. (iterable = es algo que puedes recorrer uno por uno, como si tuvieras una lista de cosas ordenadas.)
	Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/
let etiquetas = document.head.children; //todas las etiquetas dentro de <head> quedan guardadas en esta variable.
console.log(etiquetas);


for(elemento of etiquetas){
    // elemento → variable que representa “el valor que estoy mirando ahora” en cada vuelta del bucle. 
    // of → indica que queremos recorrer los valores de una colección lista, string o colección iterable, uno por uno.
    // etiquetas → la colección que vamos a recorrer (en mi ejemplo, todas las etiquetas dentro de <head>).
    console.log(elemento);
}   




//En vez de trabajar con el FOR OF, podemos transformar la COLLECTION del HTML a un array y entonces trabajar con forEach.
[...etiquetas].forEach((transformacion) => console.log(transformacion));

// 🔹 [...etiquetas] → convierte la colección HTML en un array real usando el operador spread (...)
// 🔹 forEach → recorre cada elemento del array uno por uno
// 🔹 transformacion → variable temporal que representa cada etiqueta en cada vuelta
// 🔹 console.log(transformacion) → muestra cada etiqueta del <head> individualmente en la consola
