// Comportamentos diferentes em cada runtime: Browser e Node
// window => Contexto global do Browser | module.exports => contexto local (arquivo JS) do Node
// This (Node) => module.exports

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a) /* 3 */
console.log(this.a) /* undefined */
console.log(global.a) /* undefined */
console.log(global.b) /* 123 */
console.log(this.c) /* 456 */
console.log(module.exports.c) /* 456 */
console.log(module.exports === this) /* true */
console.log(module.exports) /* { c: 456, d: false, e: 'teste' } */

// Variável sem identificador => Vai para o escopo global
abc = 3 // nao faça isso em casa!!!
console.log(global.abc) /* 3 */

module.exports = { e: 456, f: false, g: 'teste' }

console.log(module.exports) /* { e: 456, f: false, g: 'teste' } */
