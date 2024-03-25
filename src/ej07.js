import { getCountry  } from 'currency-map-country';
let monedaDelPais, codigoPais; 
// const lookup = require('country-code-lookup');

function obtenerMoneda(cod){
   let moneda = getCountry(cod) ;
   let retornar = null;
   //console.log('moneda', moneda);
   if (moneda!=null){
        retornar = moneda.cur
   }
   return retornar;
}

codigoPais ='USA'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`); 

codigoPais='UZA'; 
monedaDelPais = obtenerMoneda(codigoPais); 
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
