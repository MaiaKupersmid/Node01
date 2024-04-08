import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/wrapper.js';

/*
let res1 = await OMDBSearchByPage("cars", 2);
console.log('resultado', res1)

let res2 = await OMDBSearchComplete("cars");
console.log('resultado', res2)
*/

let res3 = await OMDBGetByImdbID("tt1216475");
console.log('resultado', res3)
