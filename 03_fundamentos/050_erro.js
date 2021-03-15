// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error

function tratarErroELancar(erro) {
    // throw new Error('Aconteceu um erro...') /* Error: Aconteceu um erro... */
    // throw 10 /* 10 */
    // throw true /* true */
    // throw 'mensagem' /* mensagem */
    // throw { nome: erro.name, msg: erro.message, stack: erro.stack, date: new Date } /* [object Object] */
    // throw null
    // throw []
    // throw {}
    console.log(`${erro.name} | ${erro.message} | ${new Date}`);
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
