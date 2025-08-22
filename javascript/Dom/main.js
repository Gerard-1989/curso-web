let ramon = document.getElementsByTagName('div'); 
/*accede al documento y obten todos los elementos por TAGNAME (tagname = nombre de etiquetas) 
(es tenen q guardar dintre de una variable en aquest cas RAMON)
ara aniriam a la web, inspecionar i a consola si escribim ramon i surtirien els divs, 
si volem accedir al primer div desde consola seria escribin ramon[0]
si cambiar el texte desde la consola seria: ramon[0].textContent = 'Hola Mundo' 
(si recargem el codi no quedaria guardat, xq no ho estem guardan en una base de datos)
si volem q cargi amb el texte de Hola Mundo seria fen-ho desde aqui amb el seguent codi:*/


//                              -----ramon[0].textContent = 'hola mundo';
//                              -----ramon[0].innerHTML = '<h1>Hola</h1>';

//lo q ens permet innerHTML es obtindre tot el contigut dintre pero incluint el codi HTML, desde aqui podem crear codi tmb.




//let ramon = document.getElementsByClassName('caja') //accedeix a las CLASES
let firstbox = document.getElementById('primeraCaja') //accedeix als ID's




//                          ---------------- CREAR NODOS - 5 PASOS ---------------

//1º crear el elemento
let caixa = document.createElement('div'); 
 //dintre dels parentesis fiquem quina etiqueta volem crear, fa falta guarda-ho dintre de una variable.


//2º crear un nodo de texto
let texte = document.createTextNode('Holi Mundi'); //tambe es te q guardar dintr de una variable en aquest cas texte.


//3º ara volem q el texte es guardi dintre del div ( añadir el nodo de texto al elemento)
caixa.appendChild(texte);
//aqui selecionem caixa (el div q em creat al pas 1) i amb appendChild li incrustem dintre el texte


//4º agregarli atributs
caixa.setAttribute('class', 'caja naranja'); 
/*quins atributs tenen les nostres caixes? tenen una CLASS q es diu CAJA, 
li diem tenen una 'class' li fiquem el valor de 'caja'
setAttritubte = agregar un atribut nou*/


//5º posicionarlo al nostre document (hi han varies formes)
let contingut = document.getElementById('contingut');
contingut.appendChild(caixa);
//aqui ho agreguem al final.




//            ---------------------- MODIFICANDO LA CLASE/ID DE UN ELEMENTO ----------------------


caixa.id = 'primera' // li diem q la caixa tingui una ID q es digui 'primera'
caixa.className = 'caixa tronja' // lo mateix q adalt pero amb class xd




//            ---------------------- CONOCIENDO EL ELEMENTO [PADRE] ----------------------



let padre = ramon[0].parentNode;
/*per saber quin es el element padre de 'primeraCaja' desde la consola tenim q ficar el nom de la variable q tingui
el getElementsbyTagName (ramon en aquest cas), escribim: ramon / ramon[0] / ramon[0].parentNode = sabrem el elemento padre 
que en aquest cas seria el <section>*/

padre.insertBefore(caixa, primeraCaja);
/*aqui dintre van 2 parametros: 1º el element q volem afegir (en aquest cas la nova caixa q em creat tronja)
2º: ara li diem ABANS de quin element ho volem ficar
EXPLICACIO: la variable PADRE que agafa tota la etiqueta <SECTION> i li estem dien amb 'INSERTBEFORE'
 volem insertar la caixa ABANS de 'primeraCaja'*/

 padre.insertBefore(caixa, ramon[2]);
 //aqui estem fican la caixa entre el 2.-LOREM IPSUM i el 3.-LOREM IPSUM llavors 'Holi Mundi' estaria entre la nº2 i nº3



 //            ---------------------- REEMPLAZAR NODO ----------------------

 padre.replaceChild(caixa, ramon[3]);
 //aqui van 2 coses: 1º- quin element li volem insertar i 2º quin element volem reemplaçar
 //el 4.-LOREM IPSUM ja no estaria i en el seu lloc estaria la de Holi Mundi de color tronja


 //            ---------------------- ELIMINAR NODOS ----------------------

 padre.removeChild(ramon[0]);
 //simplement estem eliminan la caixa de: 1.- LOREM IPSUM.  tambe es pot ser desde la consola aixi:
 //consola: padre - padre.removeChild(ramon[2]); i ja estaria borrat desde la consola.





