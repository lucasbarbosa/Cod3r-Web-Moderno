// Exemplo 1
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI)) /* 6.283185307179586 */

// Exemplo 2
let ola = function () {
    return 'Olá'
}

let olaSemParam = () => 'Olá (Sem Param)'
console.log(olaSemParam()) /* Olá (Sem Param) */

let olaComParam = _ => `Olá (Com Param) | ${_}`
console.log(olaComParam('Teste')) /* Olá (Com Param) | Teste */
