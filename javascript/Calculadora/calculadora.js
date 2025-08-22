function suma() {
    var numero1 = parseFloat(document.getElementById('casilla1').value);  //numero1 valdra a lo q tingui el input de casilla1 en el seu valor (solament fins q el usuari premi el boto de resultado no abans)
    var numero2 = parseFloat(document.getElementById('casilla2').value);
    var resultado = numero1 + numero2;
    //sense la funcio pasrseFloat la calculadora no faria la suma, nomes copiaria la primera casilla i la segona i las ficaria juntas a resultado (tambe es te q ficar entre parentesis desde document a value)

    document.getElementById('resultado').value = resultado;
}
