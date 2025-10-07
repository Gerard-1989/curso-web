import "./DarkMode.css";
import { useState, useEffect } from "react"; // Importo useState para crear variables que React recuerda y actualizan la vista al cambiar.

const DarkMode = () => {
     // true → oscuro activo | false → claro activo
    const [DarkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
      // localStorage.getItem("darkMode") devuelve un string, por ejemplo "true" o "false".
      // Como localStorage solo guarda texto, comparamos con "=== 'true'" para convertirlo a booleano.
      // Si el valor guardado es "true" → DarkMode empieza siendo true.
      // Si no existe o es diferente → DarkMode empieza siendo false.

    let toggleDarkMode = () => {
        setDarkMode(!DarkMode);
        localStorage.setItem("darkMode", !DarkMode);
         //  Invierte el estado de DarkMode y guarda el nuevo valor en localStorage
        //  → sirve como interruptor que cambia y recuerda el modo oscuro/claro.
        //  Guardamos el nuevo valor (true o false) en localStorage.
        // Así, cuando el usuario recargue la página, se recordará su preferencia.
    };
 
    useEffect(() => {
        // useEffect = observa algo y haz un efecto cuando cambie o cuando se dibuje el componente
        if (DarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [DarkMode]); // [DarkMode] = Ejecuta este código solo cuando cambie DarkMode

    return (
        <label className="dark-mode">
            <input
                type="checkbox"
                name="dark-mode"
                id="dark-mode"
                onChange={toggleDarkMode}
            />
            {/* onChange = Es un evento que se usa en inputs, selects o checkboxes.Se dispara cada vez que el valor del elemento cambia. */}
            <span className={`icono sol ${DarkMode ? "" : "active"}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
            </span>
            <span className={`icono luna ${DarkMode ? "active" : ""}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
            </span>
        </label>
    );
};

export default DarkMode;
