/* 
    📌 Ciclos
    Los ciclos son estructuras que nos van a permitir repetir 
    un bloque de código cuantas veces necesitemos.
*/

/*
    📌 Ciclo For
    Sirve para repetir un bloque de código un número de veces.

    for (expresión1; expresión2; expresión3) {
           👉 codigo a ejecturar
    }

    - Expresión 1 → Se ejecuta una sola vez, antes de que empiece el ciclo (inicialización).
    - Expresión 2 → Es la condición; mientras sea verdadera, el ciclo se repite.
    - Expresión 3 → Se ejecuta después de cada vuelta (generalmente incrementa o cambia un valor).
*/

for (let numero = 1; numero < 11; numero++) { // 1 es menor q 11? si, se ejectura el codigo. Luego se suma +1. 2 es menor q 11? si, se ejectura el codigo luego suma +1. 3 es menor q 11 etc...
    console.log(numero);
}
//🔎 Truco para recordarlo:
//for (inicio; condición; cambio) → inicio una variable, compruebo condición, cambio el valor en cada vuelta.




let nombres = ['Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel'];

for (let namber = 0; namber < 6; namber++) { //si añaden mas nombres al array para hacerlo de forma dinamica en la expresion2 se deberia cambiar a: NAMBER < NUMERO.LENGTH
    console.log(nombres[namber]);
}
