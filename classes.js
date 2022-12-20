class Carros {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

class Carro1 extends Carros {
  valor(valor) {
    this.valor = valor;
  }
  descricao() {
    console.log(`Veículo Marca: ${marca}`);
    console.log(`Veículo Modelo: ${modelo}`);
    console.log(`Valor: ${valor}`);
  }
}

let corsa1 = new Carro1(
  (marca = "Chevrolet"),
  (modelo = "Corsa"),
  (valor = "R$ 17.000")
);

console.log(corsa1.descricao());
