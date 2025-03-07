const _ =require('lodash');
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const resultado =_.countBy(palabras);
console.log(resultado);