const prompt = require("prompt-sync")();

let palabra1 = "4of Fo1r pe6ople g3ood th5e the2";
let arrayPalabra = palabra1.split(" ");
let nuevaPalabra =[];

if(palabra1 !== "") {
  for(var i = 0; i < arrayPalabra.length; i++){
    for(var j = 0; j < arrayPalabra[i].length; j++){
        if(arrayPalabra[i][j] <= '9' && arrayPalabra[i][j] >= '0'){
            nuevaPalabra[arrayPalabra[i][j]] = arrayPalabra[i];
        }
    }
  }
  result = nuevaPalabra.join(" ");
  console.log(result);
 } else {
  console.log(palabra1);
}