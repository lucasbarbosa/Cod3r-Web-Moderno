const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove a ultima posição
console.log(pilotos) /* ['Vettel', 'Alonso', 'Raikkonen'] */

pilotos.push('Verstappen') // Adiciona ao final do array
console.log(pilotos) /* ['Vettel', 'Alonso', 'Raikkonen', 'Verstappen'] */

pilotos.shift() // remove o primeiro
console.log(pilotos) /* ['Alonso', 'Raikkonen', 'Verstappen'] */

pilotos.unshift('Hamilton')
console.log(pilotos) /* ['Hamilton', 'Alonso', 'Raikkonen', 'Verstappen'] */

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) /* asdasdsad */

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos) /* asdasdsad */

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1) /* asdasdsad */

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2) /* asdasdsad */
