// Los operadores nos permiten asignar elementos, hacer cálculos básicos y comparaciones.

/* 📌 Operadores Aritmeticos
	=	Operador de asignación. Se usa para asignar valores a una variable
	+	Suma
	-	Resta
	*	Multiplicación
	/	Division
	%	Modulo
	++	Aumento
	--	Disminución
*/

var numero1 = 10;
var numero2 = 5;

console.log(numero1 + numero2); // 15
console.log(numero1 - numero2); // 5
console.log(numero1 * numero2); // 50
console.log(numero1 / numero2); // 2
console.log(numero1 % numero2); // 0 -> resto de la división
//El % no devuelve el cociente, devuelve lo que sobra después de dividir.
//Si la división es exacta, el resto es 0.


// Incremento / Decremento
var numero = 2;
numero = numero - 1;  // decremento clásico
console.log(numero);   // 1

numero++;  // incremento
console.log(numero);   // 2

numero--;  // decremento
console.log(numero);   // 1







/*📌 Operadores de Asignación
	+=	Suma un numero al valor de una variable.
	-=  Resta un número al valor de una variable.
    *=  Multiplica el valor de una variable por un número.
    /=  Divide el valor de una variable entre un número.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.*/

let cincuenta = 50;
cincuenta += 10;
console.log(cincuenta);

// Ejemplo: true
var numero1 = 5;
var numero2 = "5";

console.log(numero1 == 5);     // true, porque numero1 es 5
console.log(numero2 == 5);     // true, porque "5" se convierte a número automáticamente
console.log(numero1 == numero2); // true, porque 5 y "5" son iguales al comparar

/* Nota:
Cuando usas == (comparación “débil”):
JavaScript convierte automáticamente los tipos si son diferentes.
En este caso: numero1 es un número (5) y numero2 es un string ("5").
Antes de comparar, JS convierte el string "5" a número 5.
Entonces queda: 5 == 5 → true. ✅
Si usaras === (comparación “estricta”), no hay conversión de tipos.
*/







/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que (solo compara el valor)
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/


// Ejemplo true (mismo valor y mismo tipo)
var texto1 = "hola";
var texto2 = "hola";
console.log(texto1 === texto2); // true, mismo valor y mismo tipo (string)

// Ejemplo false (mismo valor pero diferente tipo)
var numero1 = 5;    // número
var numero2 = '5';  // string
console.log(numero1 === numero2); // false, mismo valor pero diferente tipo

// != compara si los valores son diferentes (convierte tipos si es necesario)
var numero3 = 5;
var numero4 = 10;
console.log(numero3 != numero4); // true, porque 5 no es igual a 10

// !== compara si son diferentes en valor o tipo
var numero5 = 5;
var numero6 = '5';
console.log(numero5 !== numero6); // true, porque aunque el valor es igual, el tipo es diferente





let resultat = 5 > 1; //true
let mayorOigual = 20 >= 20; //true
let comprobar = 10 == 10; // true
let comparar = 50 === '50'; // false (compara si el valor es igual y si el tipo es igual)
let ternario = 7 > 1 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero' ;
//Comprobem si 7 es major que 1 (si) ara be el operarior ternario q significa: ?=Por lo tanto, vull q em guardis en la variable el primer valor (pot ser un string, un numero etc)

console.log(resultat);
console.log(mayorOigual);
console.log(comprobar);
console.log(comparar);
console.log(ternario);



/* 📌 Operadores Logicos:
    && → y además → todas las condiciones deben cumplirse.
    || → o → con que se cumpla una sola ya vale.
    ! → no → niega el valor (si era true pasa a false, y al revés).
*/

//Queremos vender entrada de tickets solo a personas mayores de edad:

let nombre = "Gerard";
let edad = 17;
let tieneEntrada = true;
let tienePermiso = true;
//                                EJEMPLO N#1 &&
let petmitirAcceso = edad >= 18 && tieneEntrada; // && = y ademas comprueba si tiene entrada
console.log("Acceso al concierto: " + petmitirAcceso);

//                               EJEMPLO N#2 ||
let permitirAcces = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);  // con el operador || le deciemos: si la primera condicion no se cumple intenta ejecutar la otra condicion.
//Los paréntesis en JavaScript sirven para agrupar operaciones y decirle al navegador qué comprobar primero.
//Primero revisa si la edad es mayor o igual a 18 y además tiene entrada. 
// Luego, con ese resultado (true o false), compáralo con || tienePermiso.
console.log("Acceso al concierto: " + permitirAcces);
//                               EJEMPLO N#3 !
let variable = true;
console.log(!variable)
//convierte el true en false y viceversa xd
