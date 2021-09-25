//Rubén Torres
'use strict'

//Variables
let frase = prompt('Introduce una frase, a ver cuántas vocales puedes introducir con sentido:');
let a, e, i, o, u;

frase = frase.toString().toLowerCase();
for(let j=0;j<frase.length;j++){
    if(frase.charAt(j)=='a')
        a=true;
    if(frase.charAt(j)=='e')
        e=true;
    if(frase.charAt(j)=='i')
        i=true;
    if(frase.charAt(j)=='o')
        o=true;
    if(frase.charAt(j)=='u')
        u=true;
}

if(a)
    document.write(`a<br/>`);
if(e)
    document.write(`e<br/>`);
if(i)
    document.write(`i<br/>`);
if(o)
    document.write(`o<br/>`);
if(u)
    document.write(`u<br/>`);