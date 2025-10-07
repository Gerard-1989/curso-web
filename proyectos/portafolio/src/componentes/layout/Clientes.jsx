import './Clientes.css';

let Clientes = () => {
    return (
        <>
            <section className="clientes"> 
                <div className="encabezado">
                    <h3 className="titulo">Mis clientes</h3>
                    <p className="subtitulo">Estas son las marcas que han confiado en mis servicios como intento de frontend.</p>
                </div>
                <div className="logos">
                    <img src="./assets/logos/Recharge.svg" alt="" className="logo"/>
                    <img src="./assets/logos/Umbrella.svg" alt="" className="logo"/>
                    <img src="./assets/logos/Vision.svg" alt="" className="logo"/>
                    <img src="./assets/logos/Volume.svg" alt="" className="logo"/>
                    <img src="./assets/logos/Waveless.svg" alt="" className="logo"/>
                </div>
            </section>
        </>
    )
};

export default Clientes;
