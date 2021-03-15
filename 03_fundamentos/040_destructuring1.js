// novo recurso do ES2015
// Retirar algo da estrutura

const pessoa = {
    nome: 'Ana',
    idade: 5,
    apelido: 'Devinha',
    endereco: {
        apelido: 'Casa',
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

const { nome, idade } = pessoa
console.log(nome, idade) /* Ana 5 */

const { nome: n, idade: i } = pessoa
console.log(n, i) /* Ana 5 */

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) /* undefined true */

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) /* Rua ABC 1000 undefined */

var { apelido, endereco: { apelido } } = pessoa
console.log(apelido) /* Casa */

const { conta: { ag, num } } = pessoa
console.log(ag, num) /* TypeError: Cannot destructure property `ag` of 'undefined' or 'null'. */
