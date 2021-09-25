//Rubén Torres
'use strict'

let a = prompt('Escribe un número:');
let b = prompt('Escribe otro número:');
let c = prompt('Escribe otro número:');

if(a > b && a > c)
    document.write(a);
else if(b > a && b > c)
        document.write(b);
    else document.write(c);