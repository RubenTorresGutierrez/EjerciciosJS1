/**
*   @file ejercicio7.js
*   @description Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let a = prompt('Escribe un número:');
let b = prompt('Escribe otro número:');
let c = prompt('Escribe otro número:');

if(a > b && a > c)
    document.write(a);
else if(b > a && b > c)
        document.write(b);
    else document.write(c);