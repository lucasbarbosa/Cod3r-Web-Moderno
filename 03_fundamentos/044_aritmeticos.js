// Operadores aritiméticos = Operadores binários (que exige dois operandos)

const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2
const exponencial = b ** a

console.log(soma, subtracao, multiplicacao, -divisao, modulo, exponencial) /* 24 10 15 -5 1 125 */

const [a2, b2, c2, d2] = ['2', "4", '1', "15"]

const soma2 = a2 + b2 + c2 + d2
const subtracao2 = d2 - b2
const multiplicacao2 = a2 * b2
const divisao2 = d2 / a2
const modulo2 = a2 % 2
const exponencial2 = b2 ** a2

console.log(soma2, subtracao2, multiplicacao2, -divisao2, modulo2, exponencial2) /* 24115 11 8 -7.5 0 16 */
