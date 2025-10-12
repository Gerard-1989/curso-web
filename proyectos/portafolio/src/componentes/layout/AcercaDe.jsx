import './AcercaDe.css';

const AcercaDe = () => {
    return (
        <>
            <section className="acerca-de" id="acerca-de">
                <div className="grid">
                    <div className="col1">
                        <div className="fotos">
                            <img
                                src="./assets/gerard.jpg"
                                className="foto"
                                alt=""
                            />
                            <img
                                src="./assets/acerca-de-2.png"
                                className="foto"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col2">
                        <h4 className="acerca-de-mi">Acerca de mi</h4>
                        <h3 className="titulo">La razón por la que deberias contratarme</h3>
                        <p className="resumen">
                            Soy un intento de developer Front-End con una gran
                            pasión por crear interfaces web limpias, funcionales
                            y visualmente atractivas. Disfruto transformar ideas
                            en experiencias digitales que sean intuitivas y
                            agradables para el usuario.
                        </p>
                        <p className="resumen">
                            Trabajo principalmente con HTML, CSS, JavaScript y
                            React, siempre buscando escribir un código claro,
                            organizado y fácil de mantener. Me gusta seguir
                            aprendiendo nuevas tecnologías y mejorar cada
                            proyecto con pequeños detalles que marcan la
                            diferencia.
                        </p>
                        <a href="#contacto" className="boton">
                            Mandame un mensaje
                            <span className="icono">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AcercaDe;
