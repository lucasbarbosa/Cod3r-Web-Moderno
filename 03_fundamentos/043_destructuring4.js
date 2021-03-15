function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    // const valor = Math.random() * (max - min) + min
    const valor = (max - min) + min
    return Math.floor(valor) // Math.floor(x) retorna o menor número inteiro dentre o número "x"
}

console.log(rand([50, 40])) /* 50 */
console.log(rand([992])) /* 1000 */
console.log(rand([, 10])) /* 10 */
console.log(rand([])) /* 1000 */
console.log(rand()) /* TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined */
