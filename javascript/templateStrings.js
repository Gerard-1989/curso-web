/* as template strings (también llamadas template literals) son una forma más cómoda de trabajar con cadenas de texto en JavaScript.
En lugar de usar comillas simples ' ' o dobles " ", se usan backticks `, y esto da varias ventajas */

let nombre = "Gerard";
let edad = 35;
let pais = "Catalunya";
console.log("Me llamo " + nombre + " tengo " + edad + " años y soy de " + pais); // forma antigua?
console.log(`Me llamo ${nombre} tengo ${edad} años y soy de ${pais}`); //forma actual, mas limpio
