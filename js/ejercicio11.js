/**
*   @file ejercicio11.js
*   @description Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

//Variables
let frase = prompt(`Introduce una frase:`);
let contador = 0;

frase = frase.toString().toLowerCase();
for(let i=0;i<frase.length;i++)
    if(frase.charAt(i)=='a' || frase.charAt(i)=='e' || frase.charAt(i)=='i' || frase.charAt(i)=='o' || frase.charAt(i)=='u')
        contador++;
document.write(`Hay ${contador} vocales.`);