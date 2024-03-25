import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/wrapper.js';

let res1 = await OMDBSearchByPage("cars", 1);
console.log('resultado', res1)


let res2 = await OMDBSearchComplete("cars");
console.log('resultado', res2)


let res3 = await OMDBGetByImdbID("tt2338096");
console.log('resultado', res3)