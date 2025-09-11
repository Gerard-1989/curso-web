/*📌 Un ARREGLO es una variable que puede guardar multiples valores 
Un array, es un tipo de dato estructurado que permite almacenar un conjunto de datos homogeneo, 
es decir, todos ellos del mismo tipo y relacionados.*/

let familia = ["Ramon", "Jan", "Mama", "Papa", "Aran"];
console.log(familia);

let arreglo = ['texto', 2351, false, { propiedad: 'valor' }, [1, 2, 3]];
// Un arreglo (array) puede guardar distintos tipos de datos:
// - string  -> 'texto'
// - number  -> 2351
// - boolean -> false
// - objeto  -> {propiedad: 'valor'}
// - otro array -> [1,2,3]
console.log(arreglo);


let colores = [];  // dejamos el array vacio xq queremos q el usuario en la web los vaya escogiendo y los vaya agregando al arreglo.
colores[0] = "Amarillo";
colores[1] = "Azul";
colores[2] = "Rojo";
colores[3] = 'Verde';
console.log('El arreglo colores tiene: ' + colores.length + ' colores');

colores.push('Rosa'); // .push() agrega un nuevo elemento al final del array
console.log(colores);




