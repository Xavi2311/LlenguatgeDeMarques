function boton() {
//Recibe informacion del boton y la escribe en la variable     
var boton = document.getElementById("boto")

//Escucha los eventos de la variable boton y dependiendo de ellos llama a una funcion o a otra
//Cuando la variable boton recibe el valor de que se esta pulsando llama a apretar
boton.addEventListener('mousedown', apretar)

//Cuando la variable boton recibe el valor de que se esta soltando llama a soltar
boton.addEventListener('mouseup', soltar)}

function apretar() {
    //Se va al documento y en el apartado body cambia el background del style
    document.body.style.background = "blue";
    console.log("Va")
}
function soltar() {
    document.body.style.background = "orange";
}