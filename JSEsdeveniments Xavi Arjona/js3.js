addEventListener('keydown', apretar)
function apretar(){ 
    //Establece una variable que tendra el contenido de h1
var titulo = document.querySelector('h1');
    //Esta variable guardara la tecla que se ha pulsado
var tecla = event.keyCode;
//Aqui cambiara el valor a un string ya que guarda el codigo del caracter en lugar de a string
var caracter = (String.fromCharCode(tecla))
// ahora en la variable cadena se guardara el contenido de titulo y se le iran sumando los valores de caracter
var cadena = (titulo.innerHTML+caracter)
titulo.textContent = (cadena);
    
 }
