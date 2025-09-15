/*
	📌 Eliminar eventos de un elemento
*/

// Guardamos en variables los botones y la caja
const boton1 = document.getElementById('agregar-evento');   // selecciona el botón con id="boton1"
const boton2 = document.getElementById('eliminar-evento');   // selecciona el botón con id="boton2"
const primeraCaja = document.querySelector('.caja'); // selecciona la primera caja con clase="caja"

// Función que activa o desactiva (toggle) la clase "activa" en la caja
const toggleClase = () => {
	primeraCaja.classList.toggle('activa'); // si la caja NO tiene la clase, se la pone / si ya la tiene, la quita
};

// 📌 Cuando haces click en el BOTÓN 1
boton1.addEventListener('click', () => { 
	// Le decimos a la caja: "cuando te hagan click, ejecuta toggleClase"
	// (a partir de aquí, si clicas en la caja se pondrá o quitará la clase "activa")
	primeraCaja.addEventListener('click', toggleClase); 
    //! dentro de los () pasamos 2 valores. Parámetro 1: tipo de evento (string, ej. 'click'), Parámetro 2: función que se ejecuta cuando ocurre ese evento.
});

// 📌 Cuando haces click en el BOTÓN 2
boton2.addEventListener('click', () => {
	// Le quitamos a la caja el evento que antes se había agregado
	// Importante: hay que pasarle EXACTAMENTE la misma función (toggleClase)
	// Si pusieras otra función, aunque haga lo mismo, no la eliminaría
	primeraCaja.removeEventListener('click', toggleClase);
});
