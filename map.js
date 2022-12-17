// entendendo sobre o método .map()

function elevaAoCubo(valor, index, array) {
  return valor ** 3;
}

let numeros = [99, 42, 10, 26, 27, 51, 89]; // cada um dos números de origem tem seu valor elevado ao cubo
let numeros2 = numeros.map(elevaAoCubo);

console.log(numeros2)

/**
 * o map retorna uma nova array, onde é possível 
 * aplicar funções sobre cada elemento de uma array 
 * independente do seu tipo
 */