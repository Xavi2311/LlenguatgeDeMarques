var x = "*";
var y;
for (y=1;y<=5;y++){
    console.log(x.repeat(y))
    if (y%2==0)
        continue;
        y++;
    }
