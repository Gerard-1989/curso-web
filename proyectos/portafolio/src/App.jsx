import Header from "./componentes/layout/Header";
import Hero from "./componentes/layout/Hero";
import Clientes from "./componentes/layout/Clientes";
import Trabajos from "./componentes/layout/Trabajos";

function App() {
    return (
        <div className="contenedor">
            <Header />
            <Hero />
            <Clientes />
            <Trabajos />
        </div>
    );
}

export default App;
