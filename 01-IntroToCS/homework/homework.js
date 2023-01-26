'use strict';

function BinarioADecimal(num) {
   var binario = num.split("").reverse();

   var acumulador = 0;
   for (let i=0; i<binario.length; i++){
      console.log(binario[i]);
      var result = binario[i] * 2 ** i;
      acumulador += result;
   }
   console.log(acumulador);
   return acumulador;
// acumulador
//10110
//43210
// muy probablemente tenga que hacer un FOR
//
}
// estructura repetitiva definida => FOR
// estructura repetitiva indefinida => WHILE
function DecimalABinario(num) {
   var binario = [];

while (num > 0) {
      var mod = num % 2;
      num = Math.floor(num / 2);
      console.log(mod);
      binario.unshift(mod);
      console.log(binario);
}
binario = binario.join("");
return binario;

}
// a medida que dividimos nos quedamos con el resto
// yo voy a dividir mi numero hasta que no se pueda mas
//MIENTRAS (pueda dividir) , divido


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
