/**
*   @file ejercicio16.js
*   @description Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

//Variables
let num1 = prompt('Introduce un número:');
let num2 = prompt('Introduce otro número:');

if(isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0)
    document.write('No se ha introducido un valor válido.');
else if(num1>num2) recorrerNumeros(num2, num1);
    else recorrerNumeros(num1, num2);    

//Funciones
function recorrerNumeros(menor, mayor){
    for(let i=menor;i>0;i--)
        if(mayor % i == 0 && menor % i == 0)
            document.write(i + '<br/>');
}