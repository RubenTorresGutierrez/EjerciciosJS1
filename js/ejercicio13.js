/**
*   @file ejercicio13.js
*   @description Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).
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

if(isNaN(num))
    document.write('No se ha introducido el dato correcto.');
else if(num%2==0 || num%3==0 || num%5==0 || num%7==0)
        document.write('SÍ es divisible');
    else document.write('NO es divisible');
    