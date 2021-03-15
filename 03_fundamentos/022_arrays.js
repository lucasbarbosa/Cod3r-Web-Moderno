const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) /* 7.7 9.2 */
console.log(valores[4]) /* undefined */

valores[4] = 10
console.log(valores) /* [ 7.7, 8.9, 6.3, 9.2, 10 ] */
console.log(valores.length) /* 5 */

valores.push({id: 3}, false, null, 'teste') // Adicionar novos elementos
console.log(valores) /* [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste' ] */

console.log(valores.pop()) /* teste */ // Remove a última posição do array
delete valores[0] // Remove do array a posição informada no índice
console.log(valores) /* [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ] */

console.log(typeof valores) /* object */
