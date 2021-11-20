/**
*   @file ejercicio9.js
*   @description Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

//Variables
let frase = prompt('Introduce una frase:');
let contador = 0;

frase.toString().toLocaleLowerCase();
for(let i=0;i<frase.length;i++)
    if(frase.charAt(i) == "a")
        contador++;
document.write('Hay ' + contador + ' carácteres "a"');