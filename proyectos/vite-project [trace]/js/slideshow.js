let btnCambiar = document.getElementById("cambiar");
let slideshow = document.getElementById("slideshow");
let slides = document.getElementById("slides");
let indicadores = document.getElementById("indicadores");
let slideActual = 1;



let nextSlide = () => {
    // 🔹 nextSlide: su función es: **pasar al siguiente slide** en el carrusel
    // 🔹 los pasos que hace son:
    //    1️⃣ mide el ancho del primer slide
    //    2️⃣ mueve todo el contenedor hacia la izquierda (animación de 300ms)
    //    3️⃣ cuando termina la animación, manda el primer slide al final
    //    4️⃣ recoloca el contenedor en la posición inicial (translateX(0)) 

    let primerSlide = slides.children[0];
    // 🔹 Toma el primer hijo de "slides" (el slide en posición 0)  Lo guarda en la variable primerSlide para usarlo después

    let ancho = primerSlide.offsetWidth;
    // 🔹 offsetWidth devuelve el ancho TOTAL del elemento en píxeles
    // 🔹 aquí sirve para saber cuánto hay que mover el contenedor hacia la izquierda

    slides.style.transition = "ease-out 750ms all";
    // 🔹 activa animación de 0.3s para cualquier cambio de estilo en "slides"
    // 🔹 300ms - tiempo que tarda en moverse el slide (animación).

    slides.style.transform = `translateX(-${ancho}px)`;
    // 🔹 mueve el contenedor "slides" hacia la izquierda exactamente el ancho de un slide
    // (esto hace que el primer slide parezca que se va y aparece el segundo)

    setTimeout(() => {
        // 🔹 setTimeout ejecuta la función que le pases después de un tiempo de espera
        // 🔹 primer parámetro → la función (lo que quieres que haga)
        // 🔹 segundo parámetro → el tiempo de espera en milisegundos (1000ms = 1s)
        // 🔹 en este caso, espera 300ms y luego mueve el primer slide al final
        slides.appendChild(primerSlide);
        // 🔹 appendChild() pone el elemento primerSlide al final del contenedor
        // 🔹 Si ya estaba dentro, lo mueve (no lo copia)
        // 🔹 Aquí: manda el primer slide al final de "slides"

        slides.style.transition = "none";
        // 🔹 Quita la animación temporalmente
        // 🔹 Así, al recolocar el slide, no se ve ningún movimiento raro

        slides.style.transform = "translateX(0)";
        // 🔹 coloca el contenedor otra vez en posición inicial (0px a la izquierda).
        // Como el primer slide ya se movió al final, parece que todo sigue en orden.
    }, 750);
    // 🔹 el "300" indica el tiempo de espera en milisegundos 
    // 🔹 debe coincidir con la duración de la transición definida arriba ("750ms")
    // 🔹 así se asegura que el reacomodo se haga justo al terminar la animación


    //? Cambiamos los indicadores.

    if (slideActual < slides.children.length) {
        // 🔹 Comprueba si el slide actual (1) es menor que el total de slides (3)
        // 🔹 Si es así, significa que no estamos en el último slide
        // 🔹 Entonces pasamos al siguiente slide sumando 1 a slideActual
        slideActual++;
    } else {
        slideActual = 1;
        // 🔹 Hemos llegado al final de la lista de slides
        // 🔹 No hay ningún slide después del actual
        // 🔹 Por eso, reiniciamos slideActual a 1
        // 🔹 Asignar slideActual = 1 hace que el carrusel empiece de nuevo desde el primer slide.
    }
    indicadores.querySelector(".active").classList.remove("active");
    // 🔹 buscamos el indicador que actualmente tiene la clase "active"
    // 🔹 y la quitamos para desmarcarlo
    indicadores.children[slideActual - 1].classList.add("active");
    // 🔹 "indicadores.children" es una lista de todos los indicadores (rallitas) del carrusel
    // 🔹 Los índices en esa lista empiezan en 0: 
    //     - primer indicador → índice 0
    //     - segundo indicador → índice 1
    //     - tercer indicador → índice 2
    // 🔹 "slideActual" empieza en 1 porque contamos los slides desde 1
    // 🔹 Para que coincida con el índice correcto en la lista de indicadores, restamos 1
    //     - Ejemplo: si slideActual = 1 → 1 - 1 = 0 → primer indicador
    //     - Ejemplo: si slideActual = 3 → 3 - 1 = 2 → tercer indicador
    // 🔹 Después le añadimos la clase "active" para marcarlo como activo
};

setInterval(() => {
    nextSlide();
}, 5000) //🔹 tiempo que espera antes de pasar al siguiente slide.
