/* entendendo sobre o .filter()
* cria uma nova array e podem ter alguma 
estrutura condicional ou validação
* de modo que os que atingirem os critérios 
estabelecidos serão filtrados e inseridos na 
nova array
* os demais elementos serão descartados.*/
function maiorQue50(valor, index, array) {
  return valor > 50;
}

let numeros = [99, 42, 10, 26, 27, 51, 89];

let numeros2 = numeros.filter(maiorQue50);

console.log(numeros2); // 51, 89, 99
