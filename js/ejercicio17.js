/**
*   @file ejercicio17.js
*   @description Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad).
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
let contador = 0;

if(isNaN(num) || num <=0)
    document.write('No se ha introducido un valor válido.');
else{
    for(let i=num;i>0;i--)
        if(num % i == 0)
            contador++;
    if(contador > 2)
        document.write('NO es primo.')
    else document.write('SÍ es primo.');
}