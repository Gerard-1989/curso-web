/*
    Métodos más importantes para trabajar con numeros
*/

/*
    📌 .toString()
    Convierte un valor (como un número) en una cadena de texto (string).
    .toString() no modifica la variable original, solo crea una copia en forma de texto.
*/
let numero = 10;
console.log(numero, typeof numero); // Muestra 10 y su tipo → "number" (es un número)


let texto = numero.toString(); // Usamos .toString() para convertir el número en texto
console.log(texto, typeof texto); // Muestra "10" (ahora entre comillas, es un string) y su tipo → "string"

/*
    📌 .toFixed()
    Permite obtener un numero con la cantidad de decimales especificados
*/
let numerito = 3.1415;
console.log(numerito.toFixed()); // si lo dejamos vacio quita todos los decimales
console.log(numerito.toFixed(1)); // en parametros podemos decirle cuantos decimales queremos 

/*
    📌 parseInt()
    Intenta transformar un valor a un entero.
*/
let numero1 = parseInt(prompt('Escribe un numero')); //lo q escribes en el promp se guarda en numero1
let numero2 = parseInt(prompt('Escribe un numero')); //lo q escribes en el promp se guarda en numero2
console.log(numero1 + numero2); // Sin el parseInt lo que pasaria es que concatenaria numero1+numero2,ya que el promp es un input de tipo TEXTO y por eso no haria la suma.

/*
    📌 .parseFloat()
    Intenta transformar un valor a un numero con decimales.
*/
let number1 = parseFloat(prompt('Escribe un numero'));
let number2 = parseFloat(prompt('Escribe un numero'));
console.log(number1 + number2);

/*
    📌 Math.random()
    Genera un número decimal entre 0 (incluido) y 1 (excluido).
*/
let elnumero = Math.random();
console.log(elnumero);

/*
    📌 Math.floor()
    Redondea hacia abajo un numero.
*/
console.log(Math.floor('10.1')); //resultado 10
console.log(Math.floor('10.99'));  //resultado 10

/*
    📌 Math.ceil()
    Redondea hacia arriba un numero.
*/
console.log(Math.ceil('10.1')); //resultado 11
console.log(Math.ceil('10.99')); //resultado 11

/*
    📌 Math.round()
    Redondea hacia el entero mas cercano
*/
console.log(Math.round('10.1')); //el mas cercano aqui es 10
console.log(Math.round('10.99')); //el mas cercano aqui es 11

/*
    📌 Ejemplo de numero al azar de 0 a 100
*/
let alazar = Math.random();
console.log(Math.floor(alazar * 101));

/*
            1.  Multiplicar por 101

                Como Math.random() está entre 0 y 1, si lo multiplicamos por 101 el rango cambia:

                El mínimo: 0 * 101 = 0

                El máximo: 0.9999 * 101 ≈ 100.9999

                Resultado: ahora el número está entre 0 y casi 101.

                     2.     Math.floor(...)

                            Math.floor() redondea hacia abajo al número entero más cercano.

                            Entonces:

                            Si el resultado era 0.15 * 101 = 15.15 → se queda en 15.

                            Si era 0.9999 * 101 = 100.99 → se queda en 100.

                            👉 Así obtenemos un número entero al azar entre 0 y 100.




📌 Notas fáciles para recordar:

Math.random() → número decimal entre 0 y 1.

Multiplicar por 101 → estiras ese rango a 0–100.9999.

Math.floor() → quita los decimales para que quede un número entero.*/
