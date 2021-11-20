/**
*   @file ejercicio6.js
*   @description Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
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

if(a > b)
    document.write(a);
else document.write(b);