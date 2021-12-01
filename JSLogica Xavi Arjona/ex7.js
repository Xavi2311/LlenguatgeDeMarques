var x = prompt("Introdueix un valor");
var y = 1; 
while (y < x){
    if (y%2==0){
        console.log(y+" es parell")
    }
    else {console.log(y+" es imparell")}
    y++;
}