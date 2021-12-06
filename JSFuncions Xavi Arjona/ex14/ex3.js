var posicio = (x,y) => {
    return (x.length-x.indexOf(y))
}
console.log(posicio('Hola bondia mite','bondia'));
var dividir = (x,y) => {
    return y.substr(x,y.length)
}
console.log(dividir(posicio('Hola bondia mite', 'bondia')))