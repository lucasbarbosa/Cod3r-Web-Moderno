function tratarErroELancar(error) {
    throw new Error('... Erro');
    //throw 10
    //throw true
    //throw 'mensagem'
    //throw{

    //}
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase());
    } catch (error) {
        tratarErroELancar(error);
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Rafael' };

console.log(imprimirNomeGritando(obj));