/**
 * Hoisting: Jogar a declaração do var para o topo do escopo do contexto
 * A declaração sobre mas a atribuição continua no mesmo lugar
 */
console.log('a =', a) /* a = undefined */
var a = 2
console.log('a =', a) /* a = 2 */

function qualquer(){
    console.log('a =', a) /* a = undefined */
    var a = 3
    console.log('a =', 3) /* a = 3 */
    
}
qualquer()

/* Mesma coisa que a instrução abaixo dentro do contexto
var a
console.log('a =', a)
a = X
console.log('a =', a)
*/

// ------------------------------------------------------------------------------------

function getValor(){
    function retornaValor(){
        return 1;
    }

    return retornaValor()

    function retornaValor(){
        return 2;
    }
}

function getValorVar(){
    var retornaValor = function (){
        return 1;
    }

    return retornaValor();

    var retornaValor = function (){
        return 2;
    }
}

const resultado1 = getValor()
const resultado2 = getValorVar()
console.log('resultado1 =', resultado1) /* resultado1 = 2 */
console.log('resultado2 =', resultado2) /* resultado2 = 1 */

// ------------------------------------------------------------------------------------

console.log('b =', b) /* ReferenceError: b is not defined */
let b = 2
console.log('b =', b) /* b = 2 */
