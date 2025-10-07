import { useState } from "react";

  //🔑 Qué significa “handle”: "En JavaScript y React, handle significa “manejar” o “gestionar”."
  // Se usa como convención de nombres para funciones que manejan eventos.



let Login = ({ setSesionIniciada }) => {
  // 🔹 Desestructuramos la prop setSesionIniciada
  // 🔹 Para poder usarla directamente sin escribir props.setSesionIniciada

  const [usuario, setUsuario] = useState(""); // useState = "Oye, guarda lo que el usuario escriba en usuario y actualízalo con setUsuario"
  const [password, setPassword] = useState("");
  // usuario = la cajita donde guardo lo que escribe el usuario.
  // setUsuario = la llave que me da React para poder cambiar lo que hay en esa cajita.
  // useState('') = creo la cajita vacía al inicio.


  let handleUsuario = (e) => {
    //  Esta función se activa cada vez que alguien escribe en el input de "usuario".
    setUsuario(e.target.value);
    // Coge lo que escribiste (e.target.value).
    // Lo guarda en la “cajita” USUARIO usando setUsuario.
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    //  Esta función se ejecuta cuando el formulario se envía. Eso significa: cuando el usuario pulse el botón de enviar o Enter, ejecuta esta función.
    e.preventDefault();
    // e.preventDefault() = “No recargues la página, React se encarga.”

    if (usuario === "Gerard" && password === "1234") {
      // === compara si dos cosas son EXACTAMENTE iguales (valor y tipo).
      // &&significa "y además", las dos condiciones deben cumplirse a la vez.
      setSesionIniciada(true);
    } else {
      alert("Usuario y Contraseña incorrectos");
    }
    //⚠️⚠️⚠️⚠️ NO USAR ESTA FORMA PARA VALIDAR FORMULARIOS: las credenciales quedan escritas en el código y cualquiera puede verlas⚠️⚠️⚠️⚠️
  };

  return (
    <div className="contenedor">
      <form className="login" onSubmit={handleSubmit}>{/*Oye, cuando este formulario se envíe (ya sea con el botón o con Enter en un campo), ejecuta mi función handleSubmit*/}
        <h3>Inicia Sesion</h3>
        <input
          type="text"
          placeholder="Usuario"
          onChange={handleUsuario} // cada letra que escribes dispara la función y actualiza el estado.
          value={usuario} // mantiene el input sincronizado con el valor que está guardado en React.
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handlePassword}
          value={password}
        />
        <button>Inicia Sesion</button>
      </form>
    </div>
  );
};

export default Login;
