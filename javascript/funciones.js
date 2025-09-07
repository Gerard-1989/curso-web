
// Una función es un bloque de código que realiza una tarea específica y que podemos reutilizar cada vez que la queramos llamar.
// Es como una receta: defines los pasos una vez y los puedes usar tantas veces como quieras.


// #Forma numero 1
function saludar(){
    console.log('¡Hola!');
}
// saludar();  asi la invocamos.



// #Forma numero 2 - Asignando una funcion a una variable

let saludo = function(){  // Creamos una variable llamada 'saludo' y le asignamos una función anónima
    console.log('Hola desde una variable');
}
// saludo();


// Forma numero 3 - Funcion tipo flecha 

let zaludo = () => console.log('Hola arrow');
// Creamos una variable 'zaludo' y le asignamos una función flecha.
// La función flecha no necesita la palabra 'function' ni llaves si solo tiene una línea.
zaludo();


