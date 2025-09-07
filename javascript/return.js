// 🔹 ¿Qué hace return?

// Sirve para devolver un valor desde dentro de una función.

// Cuando una función ejecuta return, se detiene y el valor que pongas después de return será el “resultado” de la función.




// Definimos una función flecha llamada "operacion" con 3 parámetros
let operacion = (tipo, numero1, numero2) => {
    
    if (tipo === 'suma') {// Comprobamos si el tipo de operación es 'suma'
      
        return numero1 + numero2;  // Devolver la suma de numero1 y numero2
     
    } else if (tipo === 'resta') {   // Si no es suma, comprobamos si es 'resta'
        
        return numero1 - numero2; // Devolver la resta de numero1 y numero2
        
    }
}
let resultat = operacion('suma', 100, 200); // La función devuelve un resultado que se guarda en la variable resultat

console.log(resultat);// Ahora la variable "resultat contiene el valor devuelto por la función. En este caso, numero1 + numero2 = 100 + 200 = 300
