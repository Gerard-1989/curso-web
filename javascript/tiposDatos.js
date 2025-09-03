
/*  Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones
 
    null - Valor nulo
    undefined - Valor sin definir
*/

var numero = 7;
var decimal = 3.14;
//valor Numeric

var nombre = "Gerard 'España' ";  //Si dentro de un string quiero hacer comillas debe llevar las comillas contrarias (si se abre el string con '' para hacer comillas a la palabra se usara "")
var numeroDeTexto = "50";
console.log(nombre + numeroDeTexto);
//les cadenas de text no es sumen

var arreglos = ["Ramon", "Jan"];
//els arreglos son un conjunt de variables q es poden guardar, es poden guardar varis valors dintre de una variable.




var saludo = function (nombre) {
    console.log("Hola " + nombre + ", bienvenido!");
};
saludo("Gerard");


/* Dentro de los paréntesis () recibe un parámetro (nombre).
   Dentro de las llaves {} ponemos el código que se ejecuta (un console.log).
   Luego la llamamos escribiendo saludo("Gerard") y se muestra en la consola.
   
    "Gerard" se pasa como argumento.
     Ese argumento se recibe en el parámetro nombre de la función.

     Si llamas saludo("Ana") → nombre será "Ana".
     Si llamas saludo("Pepe") → nombre será "Pepe".   
     
     
     👉function saludo(...) {} → nombre fijo, disponible en todo el bloque de código desde el principio.
     👉var saludo = function(...) {} → función guardada en una variable, disponible solo después de esa línea.
     */




var verdadero = true;
//el valor BOOLEANO nomes es TRUE o FALSE.
