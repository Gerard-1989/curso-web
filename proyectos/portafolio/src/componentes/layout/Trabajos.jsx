import "./Trabajos.css";
import informacion from "../data/baseDeDatos";
import { useState } from "react";

const Trabajos = () => {
    //categoriaSeleccionada = Lee el valor actual del estado
    // setCategoriaSeleccionada(nuevoValor) = Actualiza ese valor dentro de React
    const [categoriaSelecionado, setCategoriaSelecionada] = useState("todos"); // La categoria q estara selecionada por defecto sera TODOS.
    const [trabajosFiltrados, setTrabajosFiltrados] = useState(informacion);

    const handleChange = (e) => {
        const categoria = e.target.id; // e.target.id obtiene el id del radio que acabas de clicar (por ejemplo "diseño-web" o "todos").
        setCategoriaSelecionada(categoria); // (categoria) como antes hemos clikado algun input ya ha quedado guardado y con el set lo q hacemos es que lo use como categoría actual.”

        if (categoria === "todos") {
            setTrabajosFiltrados(informacion);
        } else {
            const nuevosTrabajos = informacion.filter((informacion) => {
                if (informacion.categoria === categoria) {
                    return true;
                }
            });
            setTrabajosFiltrados(nuevosTrabajos);
        }
    };

    return (
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
                        onChange={handleChange}
                        checked={categoriaSelecionado === "todos"}
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
                        checked={categoriaSelecionado === "aplicaciones-moviles"}
                    />
                    <span className="opcion">Aplicaciones moviles</span>
                </label>
                <label htmlFor="desarrollo-software">
                    <input
                        type="radio"
                        name="categoria"
                        id="desarrollo-software"
                        onChange={handleChange}
                        checked={categoriaSelecionado === "desarrollo-software"}
                    />
                    <span className="opcion">Desarrollo de Software</span>
                </label>
            </div>

            <div className="grid">
                {trabajosFiltrados.map((trabajo, index) => {
                    return (
                        <div className="trabajo" key={trabajo.id}>
                            {/*El atributo key={trabajo.id} sirve para que React identifique cada elemento del listado y no se confunda al actualizar. */}
                            <a href="#" className="thumb">
                                <img
                                    loading="lazy" //retrasa la carga de la imagen hasta que esté a punto de verse en pantalla.Ideal para imágenes que están más abajo (no visibles al principio).
                                    src={trabajo.thumb.url} // muestra la dirección de la imagen del objeto actual.
                                    alt={trabajo.thumb.alt} // muestra el texto alternativo de esa imagen. Ambos vienen de los datos del array.
                                />
                            </a>
                            <div className="info">
                                <div className="textos">
                                    <a href="#" className="nombre">
                                        {trabajo.info.nombre}
                                        {/*El valor de trabajo.info.nombre se inserta directamente dentro del enlace. */}
                                    </a>
                                    <p className="categoria">
                                        {trabajo.info.categoria}
                                    </p>
                                </div>
                                <a href="#" className="btn-ir">
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
    );
};
export default Trabajos;
