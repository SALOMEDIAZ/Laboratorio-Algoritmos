const _ = require('lodash');
const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];
const resultado=_.groupBy(estudiantes,"curso");
console.log(resultado);
