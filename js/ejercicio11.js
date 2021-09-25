//Rubén Torres
'use strict'

//Variables
let frase = prompt(`Introduce una frase:`);
let contador = 0;

frase = frase.toString().toLowerCase();
for(let i=0;i<frase.length;i++)
    if(frase.charAt(i)=='a' || frase.charAt(i)=='e' || frase.charAt(i)=='i' || frase.charAt(i)=='o' || frase.charAt(i)=='u')
        contador++;
document.write(`Hay ${contador} vocales.`);