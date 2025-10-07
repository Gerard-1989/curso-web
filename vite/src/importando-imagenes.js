// import → trabajando con VITE el archivo debe estar dentro de src
// Los imports con nombres 

import './styles.css'; // './styles.css' → no se guarda en variable, solo carga y aplica los estilos globales.
import estilos from './imagen.module.css';
import cargarContador from './modulos-es6';
import imagen from './assets/desierto-montaña.jpg';     // "desierto-montaña" = variable con la URL de la foto                                       

console.log('Hola esportmaniacs');
document.querySelector('#app').innerHTML = `   // Busca el elemento con id="app" y reemplaza su contenido.
  <h1>Hola hola hola</h1>                      // Inserta un título <h1>.
  
  <img src="vite.svg" />                       // Inserta una imagen fija (vite.svg).

  <img src="${imagen}"                         // Inserta otra imagen cuyo src viene de la variable "imagen".
       style="width: 400px;"                   // Le da un ancho de 400px en línea.
       id="imagen"                             // Le pone un id="imagen" (para luego localizarla en JS).
       class="${estilos.imagen}" />            // Esta imagen usa los estilos que definiste en imagen.module.css para que tenga borde, padding y hover.
       
  <h2>Veces que se ha clikeado:                
    <span id="cuenta">0</span>                 // Dentro hay un <span> que empieza en 0 y tiene id="cuenta".
  </h2>`;

cargarContador();  // Llama a la función cargarContador (la que pone el click en la imagen y actualiza el contador).

    
//  `${classes.imagen}` = accedemos a nuestra variable estilos q dentro hemos guardado los estilos que contiene imagen.module.css y luego accedemos a la clase imagen que hay dentro de imagen.module
// <img src="vite.svg" /> aquesta forma casi mai s'utilitza  

