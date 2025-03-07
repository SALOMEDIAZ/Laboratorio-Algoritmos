const _ = require('lodash');
const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];
const resultado = _.filter(valores);
console.log (resultado);