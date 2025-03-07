const _ = require('lodash');
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const resultado=_.uniq(numerosRepetidos)
console.log(resultado)