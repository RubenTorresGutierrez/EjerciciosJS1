/**
*   @file ejercicio8.js
*   @description Escribe un programa que pida un número y diga si es divisible por 2.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let a = prompt('Introduce un número:');

if(a % 2 == 0)
    document.write('Es divisible por dos');
else document.write('NO es divisible por dos');