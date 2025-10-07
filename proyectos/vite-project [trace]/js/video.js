let botonVideo = document.getElementById("btn-video");
let overlayVideo = document.getElementById("overlay-video")

botonVideo.addEventListener("click", () => {overlayVideo.classList.add("active")}); //  al hacer click en el botón, muestro el overlay (video)
overlayVideo.addEventListener("click", () => {overlayVideo.classList.remove("active")});  //  al hacer click en el overlay (fuera del video), se cierra el video
    