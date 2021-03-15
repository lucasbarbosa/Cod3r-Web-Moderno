// Valores por referência (memória)
const a = {produto: 'Geladeira'}
const b = a;
b.produto = "Televisão"
console.log(a, b)

// Valores primitivos (literal)
let c = 3
let d = c
d++
console.log(c, d)



let valor // não inicializada
console.log(valor) /* undefined */
// console.log(valor2) /* ReferenceError: valor2 is not defined */

valor = null // ausência de valor
console.log(valor) /* null */
// console.log(valor.toString()) /* TypeError: Cannot read property 'toString' of null */

const produto = {}
console.log(produto.preco) /* undefined */
console.log(produto) /* {} */

produto.preco = 3.50
console.log(produto) /* { preco: 3.5 } */

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)