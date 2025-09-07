// ----- Parámetros en funciones -----
// Los parámetros son como "variables" que recibe la función cuando la llamamos.

let saludo = (nombre = "amic") => {
    // 'nombre' es un parámetro de la función
    // Si no se pasa ningún valor, tomará el valor por defecto "amic"
    console.log(`Hola ${nombre}`);  // recordar utilitzar BACKTICKS i no "" senzilles
};
saludo("Gerard"); //Si llamas a la función dando un valor, ese valor sustituye al parámetro.
saludo("Ramon");
saludo(); //Si llamas a la función sin dar nada, como en
//entonces JavaScript no recibe ningún valor para nombre, y automáticamente lo rellena con "amic".



//🚀🚀🚀 ----- Notas importantes -----
// (nombre = "amic") → parámetro con valor por defecto.

// `Hola ${nombre}` → template string para mostrar variables dentro del texto.

// saludo() → si no recibe nada, usa el valor por defecto "amic".



// 👉 Multiples parametros:

let operacion = (tipo, numero1, numero2) => {
    // 'tipo' indica qué operación queremos (suma o resta)
    // 'numero1' y 'numero2' son los dos números con los que vamos a trabajar
    if (tipo === 'suma') {
        console.log(numero1 + numero2);
    } else if (tipo === 'resta') {
        console.log(numero1 - numero2);
    }
}
operacion('suma', 200, 200);
operacion('resta', 500, 500);

// 🚀 Resumen corto:

// Parámetros: tipo, numero1, numero2.

// Condición: según el valor de tipo, la función hace suma o resta.

// Ventaja: una sola función sirve para varias operaciones.
