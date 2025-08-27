//       Un módulo ES6 es un archivo JavaScript que exporta cosas (variables, funciones, clases, objetos…) y puede importarlas en otro archivo.
//       Esto permite organizar el código en partes pequeñas y reutilizables. Solo funciona con type="module" en <script> o en entornos modernos como Vite.


let cargarContador = () => {

    let imagen = document.getElementById('imagen');
    let cuenta = document.getElementById('cuenta');

        imagen.addEventListener('click', () => { //a la imagen queremos escuchar cuando el usuario haga CLICK, cuando haga click queremos ejectuar la funcion de la linea 11
            cuenta.innerHTML = parseInt(cuenta.innerText) +1;  //esta funcion accede a la cuenta (el span con el numero 0) a su texto (innterText) y le sumara un 1
        });
};

//accede al span con id cuenta.
//innerText → obtiene el texto que hay dentro del span.
//parseInt → convierte ese texto a número entero.
//innerHTML =  → actualiza el contenido del span con el nuevo número.


export default cargarContador;  // importando-imagenes.js

//export → permite exportar algo (en este caso la funcion cargaContador) desde un módulo JS para poder usarlo en otro archivo.
//default → indica que es el valor principal que se exporta de ese módulo. Al importar, puedes darle cualquier nombre.
