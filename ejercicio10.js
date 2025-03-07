const _ = require ('lodash')
const anidado = [1, [2, [3, [4, 5]]], 6];
const resultado=_.flattenDeep(anidado);
console.log(resultado);