var a = 3
let b = 4

var a = 30
// let b = 35 /* SyntaxError: Identifier 'b' has already been declared */

if(1 === 1){
    // Escopo diferente
    let b = 35
    console.log(b) /* 35 */
}

b = 40

console.log(a, b) /* 30 40 */

a = 300
b = 400

console.log(a, b) /* 300 400 */

const c = 5
// c = 50 /* TypeError: Assignment to constant variable. */
console.log(c) /* 5 */
