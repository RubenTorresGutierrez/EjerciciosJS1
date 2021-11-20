/**
*   @file ejercicio15.js
*   @description Escribir un programa que escriba en pantalla los divisores de un número dado.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

//Variables
let num = prompt('Introduce un número:');

if(isNaN(num) || num <= 0)
    document.write('No se ha introducido un valor válido.');
else
    for(let i=num;i>0;i--)
        if(num % i == 0)
            document.write(i + '<br/>');