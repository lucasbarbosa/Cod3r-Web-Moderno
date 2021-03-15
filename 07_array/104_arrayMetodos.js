const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
let letPop = pilotos.pop() // Remove a ultima posição
console.log(letPop) /* 'Massa' */
console.log(pilotos) /* ['Vettel', 'Alonso', 'Raikkonen'] */

let letPush = pilotos.push('Verstappen') // Adiciona ao final do array
console.log(letPush) /* 4 */
console.log(pilotos) /* ['Vettel', 'Alonso', 'Raikkonen', 'Verstappen'] */

let letShift = pilotos.shift() // Remove o primeiro
console.log(letShift) /* 'Vettel' */
console.log(pilotos) /* ['Alonso', 'Raikkonen', 'Verstappen'] */

let letUnShift = pilotos.unshift('Hamilton')
console.log(letUnShift) /* 4 */
console.log(pilotos) /* ['Hamilton', 'Alonso', 'Raikkonen', 'Verstappen'] */

// Splice Adicionar
let letSplice1 = pilotos.splice(2, 0, 'Bottas', 'Massa') // Adiciona à partir do 2º índice
console.log(letSplice1) /* [] */
console.log(pilotos) /* [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ] */

// Splice Remover
let letSplice2 = pilotos.splice(3, 1) // Remove 1 item à partir do 3º índice
console.log(letSplice2) /* [ 'Massa' ] */
console.log(pilotos) /* [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ] */

// Slice - Extrair novo array
const algunsPilotos1 = pilotos.slice(2) // Cria um novo array com os itens à partir do 2º índice
console.log(algunsPilotos1) /* [ 'Bottas', 'Raikkonen', 'Verstappen' ] */

const algunsPilotos2 = pilotos.slice(1, 4) // Cria um novo array do 2º até o 4º elemento (índice 1, 2 e 3)
console.log(algunsPilotos2) /* [ 'Alonso', 'Bottas', 'Raikkonen' ] */
