// ES 2015 - recurso

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Tire de dentro do objeto os valores realizando assim a desestruturação do objeto {}
const { nome, idade } = pessoa;
console.log(nome, idade);

// Realizando destructuring e renomeando as variáveis
const { nome: n, idade: i } = pessoa
console.log(n, i);

// Realizando destructuring de uma propriedade que não existe dentro do objeto, por padrão o js retornará undefined
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// Realizando destructuring de um objeto aninhado e estabelecendo valor padrão caso não exista a propriedade dentro do objeto
const { endereco: { logradouro, numero, cep = true } } = pessoa
console.log(logradouro, numero, cep)