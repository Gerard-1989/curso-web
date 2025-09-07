/* 📌 .indexOf()
    Obtenemos el primer index de un elemento.
    Si no hay elemento nos retorna -1
*/
let amigos = ["Carlos", "Fran", "Arturo", "Manuel", "Gerard", "Ramon", "Antonio", "Fran", "Paco", "Fernando"];
console.log(amigos.indexOf("Gerard")); // nos indica en q posicion esta Gerard
console.log(amigos.indexOf("Jan")); //si nos devuelve -1 significa que "Jan" no esta en el array
console.log(amigos.indexOf("Fran")); //"Fran" esta repetido 2 veces, pero solo nos devuelve el primer "Fran" que encontro (la posicion [1])

/* 
    📌 .lastIndexOf() 
    Obtenemos el ultimo index de un elemento.
*/
console.log(amigos.lastIndexOf("Fran"));

/* 	
    📌 .forEach()
    Nos permite ejecutar una funcion por cada elemento
*/
amigos.forEach((persona, index) => { //le pasamos el parametro PERSONA para poder identificar cada elemento de nuestro arreglo (identificar cada nombre de nuestro array en este caso xd)
    console.log(`Hola ${persona} ${(index)}`);  //la funcion se ejectura 10 veces porque tenemos 10 nombres.
});

/* 
    📌 .find()
    Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
let resultado = amigos.find((nombre) => {
    if (nombre[0] === 'R') {
        return nombre;
    }
});
console.log(resultado);
/* find() empieza con "Carlos".

"Carlos"[0] es "C", no es "R", así que sigue.

"Fran", "Arturo", "Manuel", "Gerard" → tampoco cumplen.

Llega a "Ramon".

"Ramon"[0] es "R", se cumple la condición.

Entonces return nombre; hace que find() devuelva "Ramon".

Se detiene la búsqueda (no sigue mirando "Antonio", "Fran", "Paco", "Fernando"). */



/* 
    📌 .map()
    Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
    en base a los resultados de esa función.
*/
let armas = ["AK", "M416", "AUG", "AWM", "MK12", "MINI-14"]
// Usamos .map() para mirar uno por uno los valores que hay dentro del array "armas"
let minusculas = armas.map((rifles) => {
    // Devolvemos la versión en minúsculas de "rifles"
    //Al final, .map() junta todos esos valores y ese conjunto completo se guarda en minusculas.

    return rifles.toLowerCase(); //return entrega el valor transformado a .map(), y .map() se encarga de recolectar todos esos valores y finalmente guardarlos en minusculas.
});
console.log(minusculas);
// (rifle) => { ... } → “Haz esto con cada elemento”.

// return rifle.toLowerCase() → “Cambia el elemento a minúsculas y entrégalo para el nuevo array”.

// let minusculas = ... → “Guarda todos los resultados del array en la variable minusculas”.


/* 📌 .filter()
    Nos permite ejecutar una funcion por cada elemento 
    y luego crear un arreglo en base a los resultados de esa función. 
    (Va a devolver solamente los resultados que cumplan por ejemplo con una condicion)
*/
let armas4Letras = armas.filter((nombre) => {
    if (nombre.length === 4) {
        return nombre; // Si el nombre tiene 4 letras, entonces quiero q ese nombre me lo devuelvas al nuevo array que .filter esta creando y que esta guardando en armas4Letras
    }
})
console.log(armas4Letras);


/* 
    📌 .includes()
    Nos permite saber si el arreglo contiene un elemento especificado 
*/
let coches = ["BMW", "Audi", "Toyota", 35, "Ford", "Mercedes", "Honda"];
console.log(coches.includes('Seat')); //dentro de los () ponemos el elemento q estamos buscando (devolvera true o false)

/* 
    📌 .every()
    Nos permite ejecutar un condicional sobre cada elemento y 
    nos devuelve true si TODOS los elemento cumplieron la condición.
*/
let cochesValidos = coches.every((coche) => {  //dentro de cochesValidos guardamos TRUE or FALSE 
    if (typeof coche === "string") {  // typeof -> Comprobamos que todos los coches sean de tipo STRING
        return true;  // → devuelve true si TODOS cumplen la condición
    } else {
        return false;      // si el elemento no es un STRING, devolvemos false
                          // y .every() parará y devolverá false directamente 
    }
})
console.log("¿Todos los coches son validos? " + cochesValidos);

/* 
    📌 .some()
    Nos permite ejecutar un condicional sobre cada elemento y
    nos devuelve true si ALGUN elemento cumplio la condición. 
*/

let cochesValidos222 = coches.some((coche) => {
    if (typeof coche !== "string") {  //Lo q preguntamos con el some es: Si algunos de los coches son diferentes a STRING/CADENA DE TEXTO, si hay alguno q es diferente devuelve TRUE
        return true;
    } else {
        return false;  //Si no hay alguno q no sea diferente a una CADENA DE TEXTO devuelve FALSE
    }
})
console.log("¿El array es invalido? " + cochesValidos222);
//cochesValidos guardamos TRUE si hay algun valor que sea invalido
//cochesValidos guardamos FALSE si NO hay valores invalidos 
