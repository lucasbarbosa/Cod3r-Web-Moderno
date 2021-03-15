function rand({ min = 0, max = 1000 }) {
    // const valor = Math.random() * (max - min) + min
    const valor = (max - min) + min
    return Math.floor(valor) // Math.floor(x) retorna o menor número inteiro dentre o número "x"
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) /* 50 */
console.log(rand({ min: 955 })) /* 1000 */
console.log(rand({ max: 341 })) /* 341 */
console.log(rand({})) /* 1000 */
console.log(rand()) /* TypeError: Cannot destructure property `min` of 'undefined' or 'null'. */
