//Rubén Torres
'use strict'

//Variables
let num = prompt('Introduce un número:');

try{
    parseInt(num);
    if(num%2==0 || num%3==0 || num%5==0 || num%7==0)
        document.write('SÍ es divisible');
    else document.write('NO es divisible');
}catch(e){
    document.write('No se ha introducido el dato correcto.');
}