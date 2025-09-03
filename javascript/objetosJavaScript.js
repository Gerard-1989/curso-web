
//C.R.U.D = CREATE - READ - UPDATE - DELTED

//Objeto en JS = son como variables que pueden contener muchos valores


//--------    Objeto:   ---------
//Son similares a los ARRAYS, los objetos nos permiten guardar informacion en parejas (propiedad y valor)
const persona = {
    nombre: "gerard",
    edad: 34,
    coche: {
        marca: "seat",
        color: "negro",
    },
    altura: 1.80,
};

console.log(persona);
/*tambe podem accedir a algo mes en detall:
console.log(persona.noombre)
console.log(persona.coche.color)*/


let aran = {
    nombre: 'Aran',
    edad: 35,
    moto: {
        marca: 'Kymco',
        model: 'Miler',
        color: 'blanca',
        km: 5000,
    },
    bio: function () {
        return this.nombre + ' tiene ' + this.edad + ' años, y tambien conduce una ' + this.moto.marca + ' ' + this.moto.model + ' color ' + this.moto.color 
            + ' con ' + this.moto.km + ' km.';
            /* 📌 Cuando una función llega a return, para de ejecutarse y entrega un valor hacia afuera, como si dijera:
                  “Aquí tienes mi respuesta”. */
    }
};
console.log(aran.bio());  
console.log(aran);
/*bio es solo el nombre de la propiedad que decidi darle a esa función dentro del objeto. Pero en lugar de guardar un dato como "Aran" o 35, guarda una función.
A una propiedad que guarda una función normalmente se le llama método.
Usa this → this se refiere al objeto al que pertenece la función (en este caso, aran).
Entonces:

this.nombre → "Aran"

this.edad → 35

Devuelve un string: "Aran tiene 35 años".
*/
aran.pais = "Andorra"; //añadimos el pais
aran.pais = "Catalunya";  //aqui lo sobrescribimos y el ultimo es el que se queda guardado
aran.bio(); //llamamos a la funcion




let jan = {
    nombre: 'Jan',
    edad: 1,
    pais: 'catalunya',
    bio: function () {
        return this.nombre + ' tiene ' + this.edad + ' año y medio ' + this.pais
        //utilitzem la paraula reservada THIS perque al tindre 2 objetos (Jan i Aran, podrien ser mes)
        //amb THIS.nombre lo q fem REFERIRNOS al nombre igual q amb THIS.edad
    }
};




// ----- ----- ----- ----- ------ ------ ----- ------ ------ ----- ------ ------ ------- -------- ------ ------- ------

// creación de objetos usando funciones constructoras (nos permite crear objetos conforme los necesitemos)
//1️⃣ La función constructora
function personita(nombre, edad, pais) {
    this.nombre = nombre; // queremos la propiedad NOMBRE (el q te el THIS) sea igual al VALOR y al atributo
    this.edad = edad;
    this.pais = pais;
    
    /* personita es una función especial para crear objetos.

       this dentro de la función se refiere al objeto que se va a crear.

      Cada propiedad (nombre, edad, pais) recibe un valor cuando creamos el objeto. */
}



//Instancia = accion de invocar una clase i crear un objeto a partir de ella. (paraula reservada NEW)
//2️⃣ Crear objetos con new
let mama = new personita('Nuria', 60, 'Espanyita'); // creamos MAMA y le decimos q creamos una "nueva" persona y dentro le pasamos los valores q toquen, en este caso: nombre - edad - pais
let hermano = new personita('Ramon', 36, 'Portugal'); // podemos crear cuantos objetos queramos.

console.log(mama.nombre);
console.log(hermano.pais);
//new personita(...) crea un nuevo objeto basado en la función personita.
//mama ahora es un objeto con estas propiedades:



/* 💡 Resumen simple

Función constructora → plantilla para crear objetos con propiedades similares.

new → crea un objeto nuevo usando esa plantilla.

this → se refiere al objeto que se está creando. */
