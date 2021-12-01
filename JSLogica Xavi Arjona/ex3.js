var nota=10;
switch (true){
    case nota<=4.99:
        console.log("Suspès");
        break;
    case nota >=5 && nota < 6:
        console.log("Suficient");
        break;
    case nota >=6 && nota < 7:
        console.log("Bé");
        break;
    case nota >=7 && nota < 8:
        console.log("Notable");
        break;
    case nota >=8 && nota <= 10:
        console.log("Excelent");
        break;
    default:
        console.log("Nota incorrecta")
    }