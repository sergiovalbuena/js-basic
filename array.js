var frutas = ["manzanas", "narnajas", "fresa", "mora"];

console.log(frutas); //output: (4) ["manzanas", "narnajas", "fresa", "mora"]
console.log(frutas.length) //output: 4

console.log(frutas[2]); //output: fresa

//methods: mutar el array. 
var masFrutas = frutas.push("uvas");
frutas //output: (5) ["manzanas", "narnajas", "fresa", "mora", "uvas"];

var borrarUltimo = frutas.pop("uvas");
frutas //output: ["manzanas", "narnajas", "fresa", "mora"];

var nuevaFrutaAlInicio = frutas.unshift("mangos");
frutas //output: ["mangos","manzanas", "narnajas", "fresa", "mora"];

var borrarFrutaAlInicio = frutas.shift("mangos");
frutas //output: ["manzanas", "narnajas", "fresa", "mora"];

var posicion = frutas.indexOf("fresa");
posicion //output: 2

