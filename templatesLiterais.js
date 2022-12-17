const book = {
    name : 'Learning JavaScript DataStructures and Algorithms'
};

console.log('You are reading ' + book.name + '..\n and this is a new line\n and so is this,');

// podemos melhoras a saída do console.log anterior com o código a seguir:

// template string(literais)
console.log(`You are reading ' ${book.name}., 
and this is a new line 
and so is this.`);