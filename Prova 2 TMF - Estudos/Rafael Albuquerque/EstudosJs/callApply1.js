function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco());

// Código executado com sucesso pois a funcao getPreco pegou os valores (this) da global

// Código executado com sucesso pois a função getPreco pegou os valores (this) do objeto produto
console.log(produto.getPreco());


const carro = {
    preco: 49990,
    desc: 0.20
}

// chamando a função e aplicando o contexto this do objeto passado por parametro
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// chamando a função e aplicando o contexto this do objeto passado por parametro e passado também por parametro os valores que a função recebe além do this
console.log(getPreco.call(carro, 30 , "$"));
console.log(getPreco.apply(carro, [10, "$"]));