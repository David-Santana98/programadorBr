// entendendo o .reduce()
function valorTotal(total, valor, index, array){
    return total + valor;
}

let numeros = [99, 42, 10, 26, 27, 51, 89];

let numeros2 = numeros.reduce(valorTotal);

console.log(numeros2); // soma de todos elementos: 344