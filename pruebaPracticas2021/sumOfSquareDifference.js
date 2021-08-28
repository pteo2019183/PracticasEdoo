const prompt = require("prompt-sync")();

let numerosCuadrado = [];
let numeros = [];

for(let i = 0; i <= 9; i++) {
  let numeroBase = i + 1;
   numerosCuadrado.push(Math.pow(numeroBase, 2));
}

const suma = numerosCuadrado.reduce((acum, result) => acum + result);
console.log(suma);

for(let i = 0; i <= 9; i++) {
  numeros.push(i + 1); 
}

let suma2 = numeros.reduce((acum, result) => acum + result);
let sumaCuadrados = Math.pow(suma2, 2);

console.log(sumaCuadrados);

console.log(sumaCuadrados - suma);