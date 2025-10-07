/*
1️⃣ El nombre del componente empieza con mayúscula
2️⃣Un componente debe devolver un solo elemento padre. Todo lo que devuelva debe estar envuelto en un contenedor.
3️⃣JS dentro de JSX siempre con llaves {}
4️⃣className en lugar de class
5️⃣Las listas siempre con key=""
6️⃣Los atributos en JSX se escriben en camelCase || onClick y maxLength en lugar de onclick o maxlength.
7️⃣Todo elemento debe estar cerrado <img src="foto.png" alt="Foto" />
*/




//    Un componente (el Header) es como una "pieza" reutilizable de interfaz.
//    Puede recibir "props" (propiedades), que son datos que vienen de fuera.
let  Header = (props) => {
    return (
         <header className="header">
        <h1>Hola {props.miNombre}!</h1> {/* props.nombre viene del padre (App). Aquí lo insertamos con llaves {} */}
        <p>El dia y la hora es: {new Date().toLocaleString()}</p> {/* 🔹 new Date().toLocaleString() devuelve fecha y hora actual en tu idioma */}
      </header>
    )
}

export default Header;
// 🔹 Exportamos para poder usarlo en otros archivos
