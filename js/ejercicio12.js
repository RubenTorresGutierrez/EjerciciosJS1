//Rubén Torres
'use strict'

//Variables
let frase = prompt('Introduce una frase, a ver cuántas vocales puedes introducir con sentido:');
let a, contadora = 0;
let e, contadore = 0;
let i, contadori = 0;
let o, contadoro = 0;
let u, contadoru = 0;

frase = frase.toString().toLowerCase();
for(let j=0;j<frase.length;j++){
    if(frase.charAt(j)=='a'){
        a=true;
        contadora++;
    }
    if(frase.charAt(j)=='e'){
        e=true;
        contadore++;
    }
    if(frase.charAt(j)=='i'){
        i=true;
        contadori++;
    }
    if(frase.charAt(j)=='o'){
        o=true;
        contadoro++;
    }
    if(frase.charAt(j)=='u'){
        u=true;
        contadoru++;
    }
}

if(a)
    document.write(`a: ${contadora} veces<br/>`);
if(e)
    document.write(`e: ${contadore} veces<br/>`);
if(i)
    document.write(`i: ${contadori} veces<br/>`);
if(o)
    document.write(`o: ${contadoro} veces<br/>`);
if(u)
    document.write(`u: ${contadoru} veces<br/>`);