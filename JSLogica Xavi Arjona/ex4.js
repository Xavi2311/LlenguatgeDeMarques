var x = prompt("Introdueix el valor de X")
var n = 1
var contador=1
while (n<x){
    n = n+n++
    contador++;
}
console.log(contador)