//Rubén Torres
'use strict'

//Variables
let num = prompt('Introduce un número:');

if(isNaN(num))
    document.write('No se ha introducido el dato correcto.');
else if(num%2==0 || num%3==0 || num%5==0 || num%7==0)
        document.write('SÍ es divisible');
    else document.write('NO es divisible');
    