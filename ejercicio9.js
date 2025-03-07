const _ = require('lodash')
const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
const resultado=_.mapValues(persona, valor => typeof valor=== "string" ? valor.toUpperCase():valor );
console.log(resultado);