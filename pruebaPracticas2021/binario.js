const prompt = require("prompt-sync")();
let binario;

binario = prompt("Inserte el binario:");
let binarioADecimal = parseInt(binario, 2);
console.log("El numero binario %s en decimal es %s", binario, binarioADecimal);