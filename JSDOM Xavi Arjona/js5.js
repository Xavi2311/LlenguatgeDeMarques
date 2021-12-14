export function changeSize(){ 
var listOl = document.getElementsByClassName("llista")
var list = listOl[0].children
for (let i = 0; i < list.lenght; ++i){
    var text = list[i].innerHTML.slice(i);
    list[i].innerHTML = list[i].innerHTML.charAt(0).fontsize(22)+
text;
}}