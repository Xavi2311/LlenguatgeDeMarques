var contador = 0;
function ex5(String){
    if(String.includes('a')){ 
        contador++; 
    }
    if(String.includes('e')){ 
        contador++; 
    }
    if(String.includes('i')){ 
        contador++; 
    }
    if(String.includes('o')){ 
        contador++; 
    }
    if(String.includes('u')){ 
        contador++; 
    }
    console.log(contador);
    
}
ex5 ('horari');