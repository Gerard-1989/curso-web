/*
                                                            ¿ Que es JSX ?
                    JSX (JavaScript XML) es una forma de escribir código que parece HTML dentro de JavaScript.
                    React lo usa para que puedas crear interfaces de manera más clara y parecida al HTML, pero con la potencia de JavaScript.
                    Aunque parece HTML, en realidad JSX se convierte a JavaScript puro cuando React lo procesa
*/

import Header from "./componentes/Header";
import Section from "./componentes/Section";
import Ramon from "./componentes/Ramon";
import Login from "./componentes/Login";
import { useState } from "react";
// { useState } es un "hook" que nos permite crear y manejar variables con estado.
//  💡💡💡 Un HOOK es simplemente una herramienta que le dice a React: “oye, guarda esta información y recuérdala aunque el componente se vuelva a dibujar”.
// Un "estado" es una variable que React controla y que, cuando cambia,
// hace que el componente (function App()) se vuelva a renderizar automáticamente (se actualice en pantalla).

function App() {
  let nombre = "Gerard";
  let familia = [
    { nombre: "Gerard", telefono: "123-456-789" }, //importante: recordar poner la , en cada objeto (en el ultimo no hace falta.)
    { nombre: "Ramon", telefono: "123-456-789" },
    { nombre: "Aran", telefono: "123-456-789" },
    { nombre: "Nuria", telefono: "123-456-789" },
  ];
  let amigos = [
    { nombre: "Lidia", telefono: "123-456-789" },
    { nombre: "Mario", telefono: "123-456-789" },
    { nombre: "Sergi", telefono: "123-456-789" },
    { nombre: "Betty", telefono: "123-456-789" },
  ];

  let [sesionIniciada, setSesionIniciada] = useState(false);
  // 🔹 Se usan [] porque useState devuelve un array [valor, funcion].
  // useState(true) inicia la variable con el valor true.
  // sesionIniciada es esa variable que React va a recordar y actualizar cuando cambie.
  // setSesionIniciada es la función que usas para cambiar sesionIniciada, y cuando la usas, React vuelve a dibujar el componente con el nuevo valor.
  // - sesionIniciada → es la "variable de estado" que guarda el valor actual (empieza en true)
  // - setSesionIniciada → es la función que sirve para cambiar ese valor
  //   ⚡ Importante: cuando la usamos, React vuelve a renderizar (repinta) el componente con el nuevo valor

  let cerrarSesion = () => {
    // 🔹 Creamos una función y la guardamos en la variable "cerrarSesion"
    setSesionIniciada(false);
    // 🔹 Le decimos a React: cambia la variable de estado "sesionIniciada" a false
    // 🔹 Cambiar el estado hace que React vuelva a pintar la pantalla
    // 🔹 Como ahora sesionIniciada = false, en vez de mostrar la app,
    //    se mostrará el componente <Login />
  };

  return (
    <>
      {/* 🔹 Operador ternario -> ?
        - Si sesionIniciada es true 👉 se muestra el contenido principal
        - Si sesionIniciada es false 👉 se muestra el <Login /> */}
      {sesionIniciada ? (
        <div className="contenedor">
          <Header miNombre={nombre} />
          {/*Usamos la variable nombre creada arriba despues de function App() tambien podriamos poner un string en vez de la variable.*/}
          {/*    🔹 Aquí usamos el componente <Header /> como si fuera una etiqueta <div> o <p>.
             🔹 Le estamos pasando un dato llamado "miNombre".
             🔹 React mete este dato en un "paquete" (props) y se lo pasa a Header.
             🔹 Dentro de Header, ese paquete se llama "props".
                   → props.miNombre = "Gerard"
          */}
          <Section titulo="Lista de familia" lista={familia} />
          <Section titulo="Lista de contactos" lista={amigos} />
          <button className="btnCerrarSesion" onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        // Si la sesión no está iniciada, mostramos el formulario de Login
        <Login setSesionIniciada={setSesionIniciada} />
        // No entenc gens aquesta part de setsesioniniciada.

        // “Estamos usando <Login setSesionIniciada={setSesionIniciada} />. Lo que estamos haciendo es darle a Login un botón mágico llamado setSesionIniciada.
        // Cuando Login lo usa, ese botón cambia el estado de la sesión. Login no necesita saber nada más, solo aprieta el botón y React se encarga de actualizar todo.
        // 💡 Imagen mental: es como darle a alguien un mando a distancia: no tiene que abrir la caja, solo aprieta un botón y la luz (la sesión) se enciende o se apaga.”
      )}
    </>
  );
}

export default App;
// exportado en main.jsx

// 📌 Idea clave:
// Lo que pongas dentro de <Header ... /> <Section ... /> como prop=valor llega a props en el hijo.
// En el hijo puedes usarlo en cualquier sitio: en un <h3>, en un <p>, en un <button>, incluso en lógica de JavaScript.
