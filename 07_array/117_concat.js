const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos) /* ['Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei'] */
console.log(filhas) /* ['Ualeskah', 'Cibalena'] */
console.log(filhos) /* ['Uoxiton', 'Uesclei'] */

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) /* [ 1, 2, 3, 4, 5, [ 6, 7 ] ] */
