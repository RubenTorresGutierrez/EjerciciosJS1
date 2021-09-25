//Rubén Torres
'use strict'

//Variables
let num = prompt('Introduce un número:');

try{
    parseInt(num);
    if(esDivisible(num,2))
        document.write('SÍ es divisible por 2<br/>');
        else if(esDivisible(num,3))
                document.write('SÍ es divisible por 3<br/>');
            else if(esDivisible(num,5))
                    document.write('SÍ es divisible por 5<br/>');
                else if(esDivisible(num,7))
                        document.write('SÍ es divisible por 7<br/>');
    else document.write('NO es divisible');
    
}catch(e){
    document.write('No se ha introducido el dato correcto.');
}

//Funciones
function esDivisible(num, divisor){
    if(num % divisor == 0)
        return true;
    return false;
}