
/*Condicional: Es una estructura q nos permite tomar decisiones dependiendo de una condicion que le pongamos,
basicament es la forma q nuestro programa,app,web podra decidir dependiendo de lo que haga el usuario*/

/*if(condicion){
    codigo
}*/

// PRIMER EJEMPLO:
let usuario = {
    edad: 35,
    pais: 'Catalunya',
    ticketComprado: true,
}

if (usuario.edad > 17) { // Mira la propiedad edad del objeto usuario y comprueba si su valor es mayor que 17
    console.log('El usuario es mayor de edad');
} else {  // Si NO cumple la condición anterior
    console.log('El usuario es menor de edad'); // Muestra este otro mensaje en la consola
}




// COMBINANDO OPERADORES
let usuari = {
    edat: 35,
    pais: 'Catalunya',
    ticket: true,
}

if (usuari.edat >= 17 && usuari.ticket) {   // con && preguntamos q se cumplan las 2 condiciones
    console.log('El usuario es mayor de edad y ademas ha comprado el ticket');  //para que se ejecute este codigo SI o SI se tienen que cumplir las 2 condiciones
} else {
    console.log('El usuario es menor de edad o no ha comprado el ticket');
}




// ANIDANDO CONDICIONALES
let user = {
    age: 35,
    country: 'Spain',
    buyTicket: false,
}


if (user.age >= 17) {     // si en esta pregunta es false, directamente ejectura el ELSE. Si es true continua y hace la segunda pregunta y en funcion de si es true o false ejecuta uno u otro           
    if (user.buyTicket) {
        console.log('El usuario es mayor de edad y ha comprado un ticket'); //
    } else {
        console.log('El usuario es mayor de edad, pero NO tiene ticket');
    }
} else {
    console.log('El usuario es menor');
}




// elseif
let superusuario = {
    adat: 35,
    ciutat: 'barcelona',
    comprobarTicket: true,
}

// Condicional múltiple: comprobamos la ciudad del usuario
if (superusuario.ciutat === 'españa') {
    // Si la propiedad "ciutat" es exactamente 'españa'
    console.log('El usuari es Español');
} else if (superusuario.ciutat === 'barcelona') {
    // Si la primera condición es false, y la ciudad es 'barcelona'
    console.log('El usuari es Catala');
} else if (superusuario.ciutat === 'argentina') {
    // Si las dos condiciones anteriores son false, y la ciudad es 'argentina'
    console.log('El usuari es Argenti');
} else {
    // Si ninguna de las condiciones anteriores se cumple
    console.log('El usuari es de un altre pais'); // Muestra este mensaje
}


































