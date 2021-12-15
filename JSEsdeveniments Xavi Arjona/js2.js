addEventListener('keydown', apretar)

function apretar(){ 
    //Establece una variable que tendra el contenido de h1
var titulo = document.querySelector('h1');
    //Esta variable guardara la tecla que se ha pulsado
var tecla = event.keyCode;
    //Aqui cambiara el valor a un string ya que guarda el codigo del caracter en lugar de a string
titulo.textContent = String.fromCharCode(tecla); }

addEventListener('keyup', soltar)
function soltar(){
    var titulo = document.querySelector('h1');
    var tecla = event.keyCode;
    titulo.textContent = '';
}



