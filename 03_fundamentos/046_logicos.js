function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32BW = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    
    return { comprarSorvete, comprarTv50, comprarTv32, comprarTv32BW, manterSaudavel }
}

console.log(compras(true, true)) /* { comprarSorvete: true, comprarTv50: true, comprarTv32: false, comprarTv32BW: false, manterSaudavel: false } */
console.log(compras(true, false)) /* { comprarSorvete: true, comprarTv50: false, comprarTv32: true, comprarTv32BW: true, manterSaudavel: false } */
console.log(compras(false, true)) /* { comprarSorvete: true, comprarTv50: false, comprarTv32: true, comprarTv32BW: true, manterSaudavel: false } */
console.log(compras(false, false)) /* { comprarSorvete: false, comprarTv50: false, comprarTv32: false, comprarTv32BW: false, manterSaudavel: true } */

// Bit a bit | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_bit_a_bit
console.log(15 & 9) /* 9 | 1111 & 1001 = 1001 */
console.log(15 | 9) /* 15 | 1111 | 1001 = 1111 */
console.log(15 ^ 9) /* 6 | asdas1111 ^ 1001 = 0110dsadsadas */
console.log(~15) /* -16 | ~00000000...00001111 = 11111111...11110000 */
console.log(~9) /* -10 | ~00000000...00001001 = 11111111...11110110 */

console.log(true || true) /* true | t || t */
console.log(false || true) /* true | f || t */
console.log(true || false) /* true | t || f */
console.log(false || (3 == 4)) /* false | f || f */
console.log("Gato" || "Cão") /* Gato | t || t */
console.log(false || "Gato") /* Gato | f || t */
console.log("Gato" || false) /* Gato | t || f */
