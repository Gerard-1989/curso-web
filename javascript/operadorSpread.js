/*
    📌 Operador Spread
    Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
let frutas = ['Manzana', 'Pera', 'Piña', 'Melon'];
let comidaFavorita = ['Pizza', 'Sushi', ...frutas];
console.log(comidaFavorita);


// Tambien funciona con objetos
let datosLogin = {
    correo: 'correo@correo.com',
    password: '123',
};

let usuario = {
    nombre: 'Gerard',
    ...datosLogin, // es important a quina part del codi poses el SPREAD perque si ara a datosLogin posem un nombre: 'Ramon', se sobreescribe y 'Gerard' quedaria sobreescrit
    edad: 35,
};

console.log(usuario);


/*
    📌 Parametro Rest
    - Permite que una función reciba un número indefinido de argumentos.
    - Los argumentos "extra" que encuentre se guardan en un **array**.

    1-Solo puede haber un rest parameter en la función.
    2-Siempre debe ir al final de la lista de parámetros.
    3-Convierte todos los valores sobrantes en un array.
*/
let registrarUsuario = (nombre, correo, ...datosAdicionales) => { //dintre de parametros els tres punts es un REST,
    console.log(nombre, correo, datosAdicionales);
};
registrarUsuario('Gerard', 'correo@correo.com', 35, 'Barcelona'); // t0do lo demas q agregue el usuario se guardara dentro de datosAdicionales.



/*
    📌 Destructuración de objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
let amigos = ["Gerard", "Ramon", "Jan"];
let primerAmigo = amigos[0];
let segundoAmigo = amigos[1];
console.log(primerAmigo); //aixi estaria correcte, pero tmb es pot fer amb la DESTRUCTURACIO:

let [firstAmigo, secondAmigo, thirdAmigo] = amigos; // les [] despres de la variable es la DESTRUCTURACIO, dintre estem crean 3 variables que guardan els 3 amics.
console.log(secondAmigo);


//📌 Tambien funciona con OBJETOS:

let persona = {
    nombre: 'Gerard',
    edad: 35,
    ciudad: 'Barcelona',
};

let { nombre, edad, ciudad } = persona;  //en objetos es con {} y hay q pasar los nombres tal cual estan dentro del objeto.
console.log(nombre, ciudad);


//📌Podemos destructurar los valores de una funcion

let mostrarEdad = ( {nombre, edad} ) => {
    console.log(`${nombre} tiene ${edad} años`);
};
// mostrarEdad(persona.nombre, persona.edad);   Es una forma correcta. pero en els parametros les {} no es posarien     
// mostrarEdad(nombre, edad);                   Es una forma correcta. pero en els parametros les {} no es posarien 
mostrarEdad(persona);        // mes directe y facil, pero en els parametros s'han de posar les {}
