import "./Header.css";
import DarkMode from "../Darkmode";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2 className="titulo">Gerard España</h2>
          <p className="subtitulo">Intento de desarrollador</p>
        </div>
        <nav className="navbar">
          <a href="#trabajos">Trabajos</a>
          <a href="#acerca-de">Acerca de</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <DarkMode />
      </header>
    </>
  );
};

export default Header;
