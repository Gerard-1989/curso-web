import "./Trabajos.css";
import informacion from "../data/baseDeDatos";
import Modal from "../Modal";
import { useState } from "react";

const Trabajos = () => {
    const [categoriaSelecionado, setCategoriaSelecionada] = useState("todos"); // La categoria q estara selecionada por defecto sera TODOS.
    const [trabajosFiltrados, setTrabajosFiltrados] = useState(informacion);
    const [estadoModal, setEstadoModal] = useState(false);
    const [workSelected, setSelectedWork] = useState(informacion[0]);

    const handleChange = (e) => {  // handleChange: detecta la categoría que clicó el usuario y muestra solo los trabajos de esa categoría. 
         const categoriaSeleccionadaPorUsuario = e.target.id; // Obtiene el id del radio clicado (ej: "diseño-web" o "todos").
         setCategoriaSelecionada(categoriaSeleccionadaPorUsuario);
          // categoriaSeleccionadaPorUsuario → es la categoría que el usuario acaba de clicar (por ejemplo "diseño-web" o "todos").
         // setCategoriaSelecionada(...) → le dice a React: "guarda esta categoría como la actual".
        if (categoriaSeleccionadaPorUsuario === "todos") {
               setTrabajosFiltrados(informacion); // Si el usuario selecciona "todos", muestra todos los trabajos.
        } else {
             const nuevosTrabajos = informacion.filter((proyecto) => {
                //.filter(...) -> es un método que crea un nuevo array con solo los elementos que cumplan la condición que le damos.
                // proyecto -> es cada objeto del array mientras .filter() recorre todos los elementos.
                  if (proyecto.categoria === categoriaSeleccionadaPorUsuario) { // compara la categoría de ese proyecto con la categoría que eligió el usuario.
                        return true; //return true significa: "este proyecto cumple la condición, inclúyelo en el nuevo array".
            }
        });
        setTrabajosFiltrados(nuevosTrabajos); // nuevosTrabajos guarda solo los proyectos de la categoría que eligió el usuario.
    }
};


    const openModal = (e, id) => {
        e.preventDefault(); // Si el clic está dentro de un <a href="#">, evita que se recargue o navegue.
        setEstadoModal(true);

        const trabajoEncontrado = informacion.find((item) => {
            // Busca dentro de "informacion" el proyecto que tenga el mismo id que el que hemos clicado
            if (item.id === id) {
                return true;
            }
        });

        setSelectedWork(trabajoEncontrado); /* Guarda el proyecto encontrado dentro del estado "selectedWork" para mostrarlo en el modal */
    };

    const closeModal = () => {
        setEstadoModal(false);
    };

    return (
        <>
            <section className="trabajos" id="trabajos">
                <div className="encabezado">
                    <h3 className="titulo">Mis Trabajos</h3>
                    <p className="subtitulo">
                        Estos son mis trabajos como intento de desarrolador.
                    </p>
                </div>
                <div className="filtros">
                    <label htmlFor="todos">
                        <input
                            type="radio"
                            name="categoria"
                            id="todos"
                            onChange={handleChange} // Cuando el usuario hace clic, cambia la categoría y muestra solo los trabajos de esa categoría.   
                            checked={categoriaSelecionado === "todos"} // Marca este radio como seleccionado si la categoría actual es "todos".
                        />
                        <span className="opcion">Todos</span>
                    </label>
                    <label htmlFor="diseño-web">
                        <input
                            type="radio"
                            name="categoria"
                            id="diseño-web"
                            onChange={handleChange}
                            checked={categoriaSelecionado === "diseño-web"}
                        />
                        <span className="opcion">Diseño Web</span>
                    </label>
                    <label htmlFor="desarrollo-web">
                        <input
                            type="radio"
                            name="categoria"
                            id="desarrollo-web"
                            onChange={handleChange}
                            checked={categoriaSelecionado === "desarrollo-web"}
                        />
                        <span className="opcion">Desarrollo web</span>
                    </label>
                    <label htmlFor="aplicaciones-moviles">
                        <input
                            type="radio"
                            name="categoria"
                            id="aplicaciones-moviles"
                            onChange={handleChange}
                            checked={
                                categoriaSelecionado === "aplicaciones-moviles"
                            }
                        />
                        <span className="opcion">Aplicaciones moviles</span>
                    </label>
                    <label htmlFor="desarrollo-software">
                        <input
                            type="radio"
                            name="categoria"
                            id="desarrollo-software"
                            onChange={handleChange}
                            checked={
                                categoriaSelecionado === "desarrollo-software"
                            }
                        />
                        <span className="opcion">Desarrollo de Software</span>
                    </label>
                </div>

                <div className="grid">
                    {trabajosFiltrados.map((trabajo, index) => {
                    // trabajosFiltrados → el array completo que hay dentro de baseDeDatos.
                    // trabajo → representa cada objeto dentro de baseDeDatos mientras .map() recorre todos los objetosque hay dentro de baseDeDatos uno por uno.
                        return (
                            <div className="trabajo" key={trabajo.id}>
                                {/*"key" ayuda a React a identificar cada elemento del listado y actualizar solo el que cambie*/}
                                {/*El atributo key={trabajo.id} sirve para que React identifique cada elemento del listado y no se confunda al actualizar. */}
                                <a
                                    href="#"
                                    className="thumb"
                                    onClick={(e) => openModal(e, trabajo.id)}
                                >

                                    {/*crea una función que, al hacer clic, pasa el evento del clic (e) y el id del trabajo a la función openModal. */}
                                    <img
                                        loading="lazy" //retrasa la carga de la imagen hasta que esté a punto de verse en pantalla.Ideal para imágenes que están más abajo (no visibles al principio).
                                        src={trabajo.thumb.url} // Muestra la imagen en miniatura del proyecto usando la ruta guardada en "thumb.url"
                                        alt={trabajo.thumb.alt} // muestra el texto alternativo de esa imagen. Ambos vienen de los datos del array.
                                    />
                                </a>
                                <div className="info">
                                    <div className="textos">
                                        <a
                                            href="#"
                                            className="nombre"
                                            onClick={(e) =>
                                                openModal(e, trabajo.id)}
                                        >
                                            {/*Cuando haces clic en este elemento, se llama a la función openModal, pasando el evento del clic (e) y el id del trabajo para mostrar su información en el modal.*/}
                                            {trabajo.info.nombre}
                                            {/*Muestra el nombre del trabajo y al hacer clic abre el modal con los detalles de ese trabajo.*/}
                                        </a>
                                        <p className="categoria">
                                            {trabajo.info.categoria}
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="btn-ir"
                                        onClick={(e) => openModal(e, trabajo.id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            {estadoModal && (<Modal closeModal={closeModal} buscarTrabajo={workSelected} />)}
            {/* 
            · Si estadoModal es true, entonces muestra el componente <Modal> con las props closeModal y buscarTrabajo.
            · closeModal → la función que cierra el modal.
            · buscarTrabajo → el trabajo que queremos mostrar dentro del modal. */}
        </>
    );
};
export default Trabajos;
