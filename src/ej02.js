import {PI, sumar, restar, multiplicar, dividir, numeros} from './modules/matematica.js';

console.clear();
console.log(`La constante PI vale: "${PI}"`);

let total = sumar(numeros[1], numeros[3])
console.log(`sumar(${numeros[1]}, ${numeros[3]}) = ${total}`)