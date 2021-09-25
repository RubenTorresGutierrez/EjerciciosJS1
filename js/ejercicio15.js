//Rubén Torres
'use strict'

//Variables
let num = prompt('Introduce un número:');

if(isNaN(num) || num <= 0)
    document.write('No se ha introducido un valor válido.');
else
    for(let i=num;i>0;i--)
        if(num % i == 0)
            document.write(i + '<br/>');