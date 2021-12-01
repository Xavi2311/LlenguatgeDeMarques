var a =2;
var b =3;
var c =1;
var posicio1,posicio2,posicio3
if (a>b && a>c){
    posicio1 = a;
    if (b>c){
        posicio2 = b;
        posicio3 = c;}
    else {
        posicio2 = b;
        posicio3 = c;}
}
else if (b>a && b>c){
    posicio1 = b;
    if (a>c){
        posicio2 = a;
        posicio3 = c;}
    else {
        posicio2 = c;
        posicio3 = a;}
}
else if (c>a && c>b){
    posicio1 = c;
    if (a>b){
        posicio2 = a;
        posicio3 = b;}
    else {
        posicio2 = b;
        posicio3 = a;}
}

console.log(posicio1,posicio2,posicio3);