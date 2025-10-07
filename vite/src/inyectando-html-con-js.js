console.log('Hola esportmaniacs');

document.querySelector('#app').innerHTML = `<h1>Hola Gerard</h1>`;
//👉 Lo que hace:
// Busca el elemento con id="app".
// Cambia su contenido interno por <h1>Hola Gerard</h1>.




// document. = Accedemos al documento completo del navegador (la página web).
// querySelector = Busca el primer elemento HTML que coincida con un selector CSS (por id, clase o etiqueta). (#app en este caso)
// innerHTML = accedemos al codigo HTML interno y lo quiero sobrescribir.
// `` = Backticks o template literals. Todo lo que esté dentro de ` ... ` se interpreta como HTML o texto literal.
