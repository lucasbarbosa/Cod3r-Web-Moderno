const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = '3'

console.log(peso1, peso2) /* 1 2 */
console.log(Number.isInteger(peso1)) /* true */
console.log(Number.isInteger(peso2)) /* true */
console.log(Number.isInteger(peso3)) /* false */

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media) /* 7.8709999999999996 */
console.log(media.toFixed(2)) /* 7.87 */
console.log(media.toString(2)) /* 111.11011110111110011101101100100010110100001110010101 */ // Em binário
console.log(typeof media) /* number */
console.log(typeof Number) /* function */
