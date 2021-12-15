var x = 0;

function apretar() {
    contador(++x);
}

function reset() {
    x = 0;
    contador(x);
}

function contador(x) {
    var titulo = document.querySelector('h1');
    titulo.innerHTML = (x);
}

