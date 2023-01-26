'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const divisores = [1];
   
  let div = 2;
  while (num > 1){
    if(num % div === 0) {
      divisores.push(div);
    num = num / div;
  }else{
    div++;
  }

}
   return divisores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //
  //Tengo una lista de numeros=> array
  //Recorrer los numeros de la lista uno por uno => for
  //Formo burbujas de un numero con el siguiente, y me pregunto si estan ordenados.
  //Si estan ordenados,re bien. Si no estan ordenados re mal(los doy vuelta)
  // Hago esto hasta llegar al final
  //Me fijo si la lista esta ordenada del todo, sino sigo ordenando hasta que este ordenada totalmente.
  let desordenado = true;

  while (desordenado) {
    desordenado = false;
    //
  for(let i = 0;i<array.length;i++){
     if(array[i]<array[i+1]) {
      let aux = array[i];
      array[i+1]  = aux;
      desordenado = true;

       } 

     }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //Tengo una lista de numeros=> array
  //Recorro la lista y tengo que sacar un numero y compararlo con los de atras
  //Si el de atras es mayor lo empujo hacia adelante 
  //Y lo soltas cuando llegas  a la posicion 0 o el valor anterior es mas chico
  //Llegar al principio => posicion 0
  //Lo voy tirando hacia atras mientrras no este en el principio ni tenga uno menor atras
  //Quiero hacer esto una vez por cada elemento de la lista 
  // El primer numero no me interesa que viaje 
  //Me fijo si la lista esta ordenada del todo, sino sigo ordenando hasta que este ordenada totalmente.

  
  for(let i = 1;i < array.length; i++) {
    let aux = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
   return array;
}


function selectionSort(array) {

  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let mininum = i; // Me guardo LA POSICION DONDE SE ENCUENTRA el minimo
    for (let x = i + 1; x < array.length; x++) {
      if (array[x] < array[mininum]) {
        mininum = x;
      }
    }
​
    // Cambiar las posiciones con el minimo
    if (i !== mininum) {
      let aux = array[i]; // 10
      array[i] = array[mininum];
      array[mininum] = aux;
    }
  }
​
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
