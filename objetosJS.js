/* entendendo métodos em JavaScript
 */
function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2;
}


var aluno = {
    nome: "David",
    notas: [7, 8],

    media: calcMedia

}

var aluno1 = {
    nome: "Willian",
    notas: [8, 9],

    media: calcMedia

}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))
console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))