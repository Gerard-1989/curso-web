import "./contacto.css";
import { useState } from "react";

const Contacto = () => { 
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [correoDelUsuario, setCorreoDelUsuario] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState(null);

    const regEx = {
        nombreRegEx: /^[a-zA-Z\s-]{2,}$/,
        correoRegEx: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        mensajeRegEx: /^.{1,}$/,
    };

    const handleInput = (e, input) => {
        // e → evento del input (lo que escribe el usuario)
        // nombreDelInput → identifica qué campo estamos cambiando

        if (input === "nombre") {
            setNombreUsuario(e.target.value); //Le decimos: “Pon en la variable nombreUsuario el valor que escribió el usuario en el input”.
        }
        if (input === "correo") {
            setCorreoDelUsuario(e.target.value);
        }
        if (input === "mensaje") {
            setMensaje(e.target.value);
        }
        // Esta función se usa para detectar qué input cambió (nombre, correo o mensaje)
        // y guardar lo que el usuario escribió en la variable correspondiente.
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //usamos preventDefault para prevenir que se envien los datos del formulario sin comprobarlos antes con la funcion de abajo.

        const validarNombreFormulario = regEx.nombreRegEx.test(nombreUsuario);
        const validarCorreoFormulario = regEx.correoRegEx.test(correoDelUsuario);
        const validarMensajeFormulario = regEx.mensajeRegEx.test(mensaje);

        if(!validarNombreFormulario){ // Si el validarNombreFormulario NO es valido, ejecuto nuestro error
            setError("Ingresa un nombre valido.");
            return; // lo que hace el return: Si el nombre no es válido, muestro el error y paro aquí. No sigas comprobando nada más.
        }

        if(!validarCorreoFormulario){
            setError("Ingresa un correo valido.");
            return;

        }
        if(!validarMensajeFormulario){
            setError("Ingresa un mensaje valido.");
            return;
        }

        if(validarNombreFormulario && validarCorreoFormulario && validarMensajeFormulario)
            // Si todas las validaciones son correctas, borro cualquier mensaje de error que haya, y luego envío el formulario
            setError(null); // Como todo está bien, quito el mensaje de error.
            e.target.submit();  //Ahora que todo está correcto, envía el formulario.

        };

    

    return (
        <section className="contacto" id="contacto">
            <div className="encabezado">
                <h3 className="titulo">Hagamos tu idea una realidad</h3>
                <p className="subtitulo">
                    Escríbeme y construyamos el negocio de tus sueños
                </p>
            </div>
            <form action="https://formspree.io/f/mldpppke" method="post" className="formulario" onSubmit={handleSubmit}>
                <div className="grupo-formulario">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Sydney Sweeney"
                        value={nombreUsuario} // Muestra en este input el valor que está guardado en la variable nombreUsuario.
                        onChange={(e) => handleInput(e, "nombre")} // Cada vez que el usuario escribe en el input del nombre, guardo lo que escribió en la variable nombreUsuario usando handleInput
                    />
                </div>
                <div className="grupo-formulario">
                    <label htmlFor="correo">Correo</label>
                    <input
                        type="text"
                        name="Correo"
                        id="Correo"
                        placeholder="Sydney@gmail.com"
                        value={correoDelUsuario}
                        onChange={(e) => handleInput(e, "correo")}
                    />
                </div>
                <div className="grupo-formulario mensaje">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        type="text"
                        name="mensaje"
                        id="mensaje"
                        placeholder="Escribe tu mensaje"
                        value={mensaje}
                        onChange={(e) => handleInput(e, "mensaje")}
                    ></textarea>
                </div>
                {error &&  //  El && aquí le dice a React: ‘Si hay error, muéstralo; si no hay, ignora este bloque’. Es una forma corta de hacer un if solo para renderizar algo.
                     <div className="grupo-formulario error">
                         <p>{error}</p> {/*  Si el usuario escribió algo mal, verá el texto de ERROR correspondiente; si no hay error, no se muestra nada. */}
                    </div>
                }
                <div className="grupo-formulario enviar">
                    <div>
                        <button type="submit" /*Cuando el usuario pulse aquí, ejecuta la función onSubmit del formulario.*/ className="boton">
                            Mandar mensaje
                            <div className="icono">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};



export default Contacto;
