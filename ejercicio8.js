const _ =require('lodash');
const n = 3; const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];
const resultado=_.chunk(elementos,n);
console.log(resultado)