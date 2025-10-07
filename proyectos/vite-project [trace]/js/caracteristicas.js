let previews = document.getElementById("previews");
let tabs = document.getElementById("tabs");

tabs.addEventListener("click", (e) => {
    // 🔹 (e) siempre trae información del evento que ocurrió, que depende del tipo de evento: click, teclado, submit, scroll…
    e.preventDefault();
    // 🔹 evita que se ejecute la acción por defecto del evento
    // 🔹 por ejemplo: si el tab es un <a>, así evitas que recargue la página o navegue a otra URL

    let selectedTab = e.target.closest(".tab");
    // 🔹 e.target = el elemento exacto donde hiciste click (ej: una <img> dentro del tab)
    // 🔹 closest = busca hacia arriba en el árbol de HTML
    // 🔹 encuentra el primer ancestro (padre, abuelo, etc.) que tenga la clase "tab"
    // 🔹 Resultado: siempre te devuelve el <div class="tab" data-id="1"> ... </div>, sin importar si el click fue en la imagen, en el texto o en el borde.
    if (selectedTab) {
        // 🔹 Pregunta: ¿hiciste click en un tab válido?
        // 🔹 Si sí → ejecuta el código, si no → no hace nada
        let id = selectedTab.dataset.id;
        // 🔹 selectedTab = el tab clicado
        // 🔹 .dataset = accede a sus atributos "data-"
        // 🔹 .id = recoge el valor de data-id (ej: "2")
        // 🔹 Ese valor se guarda en la variable id

        previews.querySelector(".active").classList.remove("active");
        // 🔹 Dentro de "previews" (contenedor de textos/descripciones), busca el elemento que tenga la clase "active"
        // 🔹 Quita la clase "active" → así el texto/preview que estaba visible deja de mostrarse
        previews.querySelector(`[data-id="${id}"]`).classList.add("active");
        // 🔹 Aquí id tiene el número o nombre que estaba en el data-id del tab que clicaste. Ejemplo: si hiciste click en <div class="tab" data-id="1">, entonces id = "1".
        // 🔹 previews.querySelector(...) Esto busca dentro de previews (el contenedor de todos los textos/descripciones) el elemento que tenga justo ese data-id. Así se conecta el tab que clicaste con su texto correspondiente.
        // 🔹 [data-id="${id}"] Significa: “busca el elemento que tenga data-id="1” (o el número que toque).
        // 🔹 .classList.add("active") Cuando lo encuentra, le añade la clase "active".

        tabs.querySelector(".active").classList.remove("active");
        // 🔹 Dentro de "tabs", quita la clase "active" del tab que estaba seleccionado antes
        tabs.querySelector(`[data-id="${id}"]`).classList.add("active");
        // 🔹 Aquí id tiene el número o nombre que estaba en el data-id del tab que clicaste. Ejemplo: si hiciste click en <div class="tab" data-id="1">, entonces id = "1".
        // 🔹 tabs.querySelector(...) Esto busca dentro de tabs (el contenedor de todos los tabs/imágenes clicables) el elemento que tenga justo ese data-id. Así se conecta con el tab que se clicó.
        // 🔹 [data-id="${id}"] Significa: “busca el elemento que tenga data-id="1” (o el valor que corresponda al tab clicado).
        // 🔹 .classList.add("active") Cuando lo encuentra, le añade la clase "active" → el tab queda marcado como seleccionado.
    npm create vite@latest}
})

/*
    📌 Resumido:
        El usuario hace click en un tab.
        El código mira qué data-id tenía ese tab.
        Busca en los textos cuál coincide con ese mismo data-id.
        A ese texto le añade la clase "active", y entonces aparece.
*/
