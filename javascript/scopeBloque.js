/* 📌 Block Scope o Alcance de tipo bloque
    - Son las variables declaradas con CONST o LET dentro de un bloque { }
    - Solo podemos acceder a ellas dentro del bloque
*/

let edad = 19;
if (edad >= 18) {
    let accesoPermitido = true;

    if (true) { //if(true) se puede usar solo como bloque de prueba o para agrupar código, no importa la condición; siempre que sea true, se ejecuta.
        console.log(accesoPermitido);
    }

    let miFuncion = () => {
        console.log(accesoPermitido);
        // 1️⃣ La función puede usar variables que están fuera de ella
        // 2️⃣ Busca primero dentro de sí misma, si no la encuentra, mira afuera
        // 3️⃣ Aquí encuentra 'accesoPermitido' del if, que vale true
        // 4️⃣ Por eso cuando llamamos a miFuncion(), imprime true
    }
    miFuncion();
}

let accesoPermitido = 'Hola';
// Esta es otra variable con el mismo nombre, pero fuera del bloque if
// Esto es posible porque 'let' tiene **alcance de bloque**
console.log(accesoPermitido); 
// Imprime 'Hola', porque ahora estamos fuera del bloque anterior







//  ❌ ❌ No trabajar con VAR a no ser q lo domines (que no es mi caso xddd) ❌ ❌

if (true){
    var nombre = 'Gerard';
}
console.log(nombre); // Incluso fuera del bloque {} podemos acceder a la variable. 
// var = antiguo, peligroso, puede crear errores sin que lo notes.
