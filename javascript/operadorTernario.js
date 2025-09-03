
const boleto = 'regular';
let codigoDeAcceso; // No guarda ambos valores, solo uno según la condición que se cumpla.

if (boleto === 'vip') { // === → comparación estricta. Compara valor y tipo.
    codigoDeAcceso = 'VIP-111-111-111' // Si la condición es true, se guarda este valor en la variable
} else {
    codigoDeAcceso = 'REGULAR-000-000-000'// Si la condición es false, se guarda este valor en la variable
}
console.log(codigoDeAcceso);



// Operador ternario ? :
//Es una forma corta de escribir un if-else.

let ticket = 'vip';
let AccesCode = ticket === 'vip' ? 'VIP-111-111-111' : 'NORMAL-999-999-999';  // esta linea de codigo guarda un valor en una variable.
console.log(AccesCode);
/* ticket === 'vip' → condición.
'VIP-111-111-111' → valor si la condición es true.
'NORMAL-999-999-999' → valor si la condición es false. */

ticket === 'vip' ? console.log('Tu ticket es VIP') : console.log('Tu ticket es ESTANDARD'); // esta linea de codigo ejecuta una acción (mostrar mensaje en consola).

/*
ticket === 'vip' → condición que se evalúa

? → si es true, haz esto

: → si es false, haz esto otro
*/
