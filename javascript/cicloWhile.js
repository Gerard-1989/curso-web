/*
    📌 Ciclo While
    Es similar a for, pero con la diferencia de que solo tenemos un condicional.
    Mientras se cumpla el condicional se ejecutara el ciclo.
*/
let contador = 0; 
while (contador <= 10) {// Mientras contador sea menor o igual que 10, se repite el bloque
    console.log(contador); // Muestra el valor actual de contador
    contador++; // Suma 1 al contador (pasa al siguiente número)
}
/*
    📌 Ciclo Do While
    Es similar al ciclo while, con la diferencia de que se ejecuta al menos una vez, aunque la condición sea falsa.
*/
let i = 50;
do {
    console.log(i); // Muestra el valor actual (50)
    i++;            // Suma 1 → ahora i vale 51
} while(i <= 10);   // La condición dice: "mientras i sea menor o igual que 10"

//Aunque la condición i <= 10 era falsa desde el inicio (porque 50 no es menor o igual que 10), se ejecutó una vuelta antes de revisar.
