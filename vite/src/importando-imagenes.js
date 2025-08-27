// import → trabajando con VITE el archivo debe estar dentro de src
// Los imports con nombres 

import './styles.css'; // './styles.css' → no se guarda en variable, solo carga y aplica los estilos globales.
import estilos from './imagen.module.css';
import cargarContador from './modulos-es6';
import imagen from './assets/desierto-montaña.jpg';     // "desierto-montaña" = variable con la URL de la foto                                       

console.log('Hola esportmaniacs');

document.querySelector('#app').innerHTML = `
    <h1>Hola hola hola</h1> 

    <img src="vite.svg" />

    <img src="${imagen}" style="width: 400px;" id="imagen" class="${estilos.imagen}" />     
    <h2>Veces que se ha clikeado: <span id="cuenta">0</span></h2>`;

    cargarContador();
    
//  `${classes.imagen}` = accedemos a nuestra variable estilos q dentro hemos guardado los estilos que contiene imagen.module.css y luego accedemos a la clase imagen que hay dentro de imagen.module
// <img src="vite.svg" /> aquesta forma casi mai s'utilitza  

