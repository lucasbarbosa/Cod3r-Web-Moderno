console.log(typeof Array, typeof new Array, typeof []) /* function object object */

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) /* [ 'Bia', 'Carlos', 'Ana' ] */

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) /* Bia */
console.log(aprovados[1]) /* Carlos */
console.log(aprovados[2]) /* Ana */
console.log(aprovados[3]) /* undefined */

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Adicionar item
console.log(aprovados.length) /* 5 */

aprovados[9] = 'Rafael' // Adicionar item posição
console.log(aprovados.length) /* 10 */
console.log(aprovados[8] === undefined) /* true */

console.log(aprovados) /* [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ] */
aprovados.sort() // Ordenar
console.log(aprovados) /* [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ] */

delete aprovados[1] // Excluir posição - Sem reordenar
console.log(aprovados[1]) /* undefined */
console.log(aprovados[2]) /* Bia */
console.log(aprovados) /* [ 'Abia', <1 empty item>, 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ] */

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Excluir 1 registro à partir da posição 1 - Reordenação
console.log(aprovados) /* [ 'Bia', 'Ana' ] */

aprovados.splice(0, 1, "Carla", "Fernanda", "Maria", "Luciana", 'Patricia') // Excluir 1 registro à partir da posição 0 - Adicionar 2 registros
console.log(aprovados) /* [ 'Carla', 'Fernanda', 'Maria', 'Luciana', 'Patricia', 'Ana' ] */

aprovados.splice(3) // Excluir todos os registros à partir da posição 3
console.log(aprovados) /* [ 'Carla', 'Fernanda', 'Maria' ] */
