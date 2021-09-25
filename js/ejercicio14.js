//Rubén Torres
'use strict'

//Variables
let num = prompt('Introduce un número:');

if(isNaN(num))
    document.write('No se ha introducido el dato correcto.');
else if(esDivisible(num,2))
        document.write('SÍ es divisible por 2<br/>');
        else if(esDivisible(num,3))
                document.write('SÍ es divisible por 3<br/>');
            else if(esDivisible(num,5))
                    document.write('SÍ es divisible por 5<br/>');
                else if(esDivisible(num,7))
                        document.write('SÍ es divisible por 7<br/>');
    else document.write('NO es divisible');

//Funciones
function esDivisible(num, divisor){
    if(num % divisor == 0)
        return true;
    return false;
}