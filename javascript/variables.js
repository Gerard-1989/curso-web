/* 📌 Qué son las variables:
- Espacios en memoria donde podemos guardar informacion, normalmente son valores pequeños que nuestro sitio web o aplicacion utilizarán.
    

    📌 Reglas de las variables:
- Todas las variables deben tener nombres únicos.
    - Deben empezar por al menos una letra.
    - También pueden empezar por el simbolo $ y _ pero es muy poco común.
    - No se pueden usar palabras reservadas como nombre. (ejemplo: for)


    📌 Tipos de datos que podemos guardar en las variables:
string - Cadena de Texto
number - Numero
boolean - Booleano(verdadero o falso)
object - Objeto
function - Funciones

null - Valor nulo
undefined - Valor sin definir*/


// 📌 Otras formas de declarar variables:
let nombre = "Gerard";
const correo = 'correo@correo.com';

// var - ya casi no se utiliza. Fue la primera forma de declarar variables.
// let - se usa cuando queremos definir una variable y su valor puede cambiar en el futuro.
// const - se usa cuando queremos definir una variable y su valor no va a cambiar en el futuro.

// 📌 Declarar variables en una sentencia:
let telefono,
    pais = 'Mexico',
    id;


// 📌 Podemos reasignar valores a las variables:
telefono = 12345678;
console.log(telefono);

pais = 'España';
console.log(pais);



// 📌 Las variables de tipo const no las podemos reasignar
const numero = 123;
numero = 456;
console.log(numero);

// 📌 Podemos realizar operaciones aritmeticas al definir variables
const resultado = 4 + 4;
console.log(resultado);

// En el caso de cadenas de texto, se concatenan los valores.
const nombre1 = "Gerard ";
const nombre2 = "España";
const nombreCompleto = nombre1 + nombre2;
console.log(nombreCompleto);



/*📌 Tipos de variables dinamicos
  En javascript a las variables no les especificamos que solo puedan guardar un tipo de valor.
  En javascript el tipo de valor que podemos guardar es dinamico.
  Es decir que podemos guardar un numero, y luego remplazarlo por una cadena de texto.*/
let variable = 'Texto';
variable = 7;
console.log(variable);
