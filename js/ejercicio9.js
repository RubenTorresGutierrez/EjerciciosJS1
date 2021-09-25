//Rubén Torres
'use strict'

//Variables
let frase = prompt('Introduce una frase:');
let contador = 0;

frase.toString().toLocaleLowerCase();
for(let i=0;i<frase.length;i++)
    if(frase.charAt(i) == "a")
        contador++;
document.write('Hay ' + contador + ' carácteres "a"');