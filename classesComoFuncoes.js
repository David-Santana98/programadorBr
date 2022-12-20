class Pessoa {
  constructor(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
  }
}

let cliente1 = new Pessoa("David", "32", "60kg");

console.log(cliente1.nome);
console.log(cliente1.peso);

function Pessoa2(nome, idade, peso) {
  const dados = {};
  dados.nome = nome;
  dados.idade = idade;
  dados.peso = peso;
  return dados;
}

let cliente2 = Pessoa2("Fellipe", "15", "52kg");

console.log(cliente2.nome);
console.log(cliente2.peso);
