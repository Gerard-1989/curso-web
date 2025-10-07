let Section = (props) => {
  // sirve para acceder a esos datos: al array q tenemos en App.jsx
  //  props = la "cajita" donde React mete todo lo que le pasamos desde App.jsx

  return (
    <section className="lista">
      <h3 className="titulo">{props.titulo}</h3> {/* en App.jsx hemos creado una propidad (titulo) y aqui simplemente se la pasamos xd*/}
      {props.lista.map((amigo, index) => {
        // props.lista 👉 la lista de amigos que viene del padre
        // .map 👉 recorre la lista uno por uno
        // (amigo, index) 👉 cada vuelta nos da:
        //   - amigo = el amigo actual
        //   - index = el número de posición (0,1,2...)

        return (
          /* Importante: cada elemento de una lista debe tener "key" Mejor usar un id único si lo tienes. Aquí usamos el index como último recurso. */
          <li key={index}>
            <span className="nombre">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="icono"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              {amigo.nombre} {/* 🔹 Mostramos el nombre de cada amigo */}
            </span>
            <span className="telefono">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="icono"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              {amigo.telefono} {/* 🔹 Mostramos el teléfono */}
            </span>
          </li>
        );
      })}
    </section>
  );
};

export default Section;
