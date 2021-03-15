// VAR => Escopo global ou de função
// LET e CONST => Escopo de bloco
{
    var a = 2
    let b = 3
    const c = 4

    console.log(a) /* 2 */
    console.log(b) /* 3 */
    console.log(c) /* 4 */
}
console.log(a) /* 2 */
// console.log(b) /* ReferenceError: b is not defined */
// console.log(c) /* ReferenceError: c is not defined */

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`) /* 'iPad é caro!' */

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) /* C o [ 'd', '3', 'r' ] */

const [x, , y] = [1, 2, 3]
console.log(x, y) /* 1 3 */

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome) /* 9 'Ana' */
