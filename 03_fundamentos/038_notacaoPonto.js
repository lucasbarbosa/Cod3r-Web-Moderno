console.log('typeof console:', typeof console) /* typeof console:  object */
console.log('Math.ceil(6.1):', Math.ceil(6.1)) /*  Math.ceil(6.1):  7 */ // Math.floor(x) retorna o maior número inteiro maior ou igual a "x"

const obj1 = {}
obj1.nome = 'Bola'
console.log('obj1.nome:', obj1.nome) /* obj1.nome: Bola */ // Cria dinamicamente o atributo obj1['nome']

obj1['nome'] = 'Bola2'
console.log('obj1.nome:', obj1.nome) /* obj1.nome: Bola2 */

const obj2 = {}
obj2['nome'] = 'Bicicleta'
console.log('obj2.nome:', obj2.nome) /* obj2.nome: Bicicleta */
console.log("obj2['nome']:", obj2['nome']) /* obj2['nome']: Bicicleta */

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj3 = new Obj('Cadeira')
const obj4 = new Obj('Mesa')
console.log('obj3.nome:', obj3.nome) /* obj3.nome: Cadeira */
console.log('obj4.nome:', obj4.nome) /* obj4.nome: Mesa */
obj4.exec() /* Exec... */
