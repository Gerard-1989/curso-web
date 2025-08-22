let formulario = document.getElementById('formulario'), //fican aquesta coma nomes i amb el espai q li hem donat abaix creem mes variables, com la q acabo de fer de nombre.
    nombre = formulario.nombre, //creo una variable amb el nom de nombre, i estic accedin al formulario a la part del html on esta el name="" es nombre.
    email = formulario.email,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');

function validarNombre(e) {
    if (nombre.value == '' || nombre.value == null) { //preguntem si nombre.value esta vacio o tenim un nombre NULL que no existeix doncs llavos executam el console.log (els || crec q es x "fer una altre pregunta") 
        console.log('Introduce un nombre');
        error.style.display = 'block'; //accedim a la variable ERROR, li diem q volem modificar el STYLE y el DISPLAY que sera de tipo BLOCK, al ficar-ho de tipo BLOCK o mostrem x pantalla
        error.innerHTML = error.innerHTML += '<li>Por favor ingresa un nombre</li>'; //estem editan el codi HTML dintre d'ell i li estem agregan el <li>
        //-------------RAMON EXPLICAM MILLOR LO DE innerHTML--------------- en veritat crec que ja ho he entes xd
        e.preventDefault();  // si hi ha un error al formulari no s'envia el formulari. 
    } else {
        error.style.display = 'none'; //Si el usuari completa correctament tots els camps llavors volem "ocultar" el error q li donaria si faltes algun camp x completar (el if)
    }
}
function validarEmail(e) {
    if (email.value == '' || email.value == null) {
        console.log('Introduce un Email');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML += '<li>Por favor ingresa un e-mail</li>';

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}
function validarSexo(e) {
    if (sexo.value == '' || sexo.value == null) {
        console.log('Introduce un sexo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML += '<li>Por favor ingresa un sexo</li>';

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }

}

function validarTerminos(e) {
    if (terminos.checked == false) {
        console.log('Acepta los terminos o muere');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Por favor acepta los terminos</li>';

        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}

function validarFormulario(e) {
    error.innerHTML = ''; // si omples nomes la part del nom del formulari sortira el error de q no has introduit email ni sexo i es duplicaria el error en pantalla, fican aixo nomes surt l'error del q et falta x completar.
    validarNombre(e);
    validarEmail(e);
    validarSexo(e);
    validarTerminos(e);
}
formulario.addEventListener('submit', validarFormulario);

