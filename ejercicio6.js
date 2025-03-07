const _ =require('lodash');
const personas = [
    {nombre: "Ana", edad: 25 },
    {nombre: "Luis", edad: 22 },
    {nombre: "Juan", edad: 30 }
    ];
const resultado=_.sortBy(personas, 'edad');
console.log(resultado);