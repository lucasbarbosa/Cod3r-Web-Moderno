// 20 => Template String
    // É um recurso do ES que permite executar expressões (interpolação) e quebra de linha na declaração, deixando o código mais limpo.
    console.log(`2 + 3 = ${2 + 3}`) /* 2 + 3 = 5 */

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')}!`) /* Ei... CUIDADO! */

    const nome = 'Fulano'
    console.log(`
        Bom dia
        ${nome}!`
    )
    /*
        Bom dia
        Fulano!
    */


// 40 => Desctructing
// Desestruturar uma estrutura, seja uma string, objeto ou array
    const pessoa = {
        nome: 'Bianca',
        idade: 9,
        endereco: {
            logradouro: 'Rua das Crianças',
            numero: 123,
        }
    }

    const { nome: nomePessoa, endereco: { logradouro, numero }, complemento = 456 } = pessoa
    console.log(`${nomePessoa} - ${logradouro}, ${numero} | ${complemento}`) /* Bianca - Rua das Crianças, 123 | 456 */

    const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
    console.log(nota) /* 6 */


// 50 => Tratamento de Erro
    function tratarErroELancar(erro) {
        // throw new Error('Aconteceu um erro...') /* Error: Aconteceu um erro... */
        // throw 10 /* 10 */
        // throw true /* true */
        // throw 'mensagem' /* mensagem */
        // throw { nome: erro.name, msg: erro.message, stack: erro.stack, date: new Date } /* [object Object] */
        // throw null
        // throw []
        // throw {}
        // throw /* SyntaxError: Illegal newline after throw */
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


// 67 => This e funcao Bind
    // Comportamentos diferentes em cada runtime: Browser e Node
    // window => Contexto global do Browser | module.exports => Contexto local (arquivo JS) do Node

    // "This" pode variar dependendo de como e onde a função declarada e executada
    // Objeto que está sendo chamado naquele contexto de função
    // Em uma Arrow Function o "This" não varia nunca, sempre será considerado o contexto léxico da função.

    const pessoa = {
        saudacao: 'Bom dia!',
        falar() {
            console.log(this.saudacao)
        }
    }

    pessoa.falar() /* Bom dia! */
    const falar = pessoa.falar
    falar() /* undefined */

    const falarDePessoa = pessoa.falar.bind(pessoa)
    falarDePessoa() /* Bom dia! */

    function Pessoa() {
        const self = this
        this.idade = 0
    
        console.log(self) /* Pessoa { idade: 0 } */
    
        setTimeout(function() {
            this.idade++; console.log(`this.idade (Sem Bind): ${this.idade}`) /* this.idade: NaN */
        }, 1000) // Sem o Bind utiliza o this do escopo function dentro do setTimeOut
        
        setTimeout(function() {
            this.idade++; console.log(`this.idade (Com Bind): ${this.idade}`) /* this.idade: 1 */
        }.bind(this), 2000)
    
        setTimeout(function() {
            self.idade++; console.log(`self.idade: ${self.idade}`)
        }, 3000)
    
        setTimeout(() => {
            this.idade++; console.log(`self.idade: ${this.idade}`)
        }, 4000) // Arrow Function utiliza o this do contexto léxico
    }
    new Pessoa

    function teste1(){
        console.log(`teste1: ${this === global}`) /* true */

        function teste2(){
            console.log(`teste2: ${this === global}`) /* true */
        }

        teste2()

        const teste3 = () => console.log(`teste3: ${this === global}`) /* true */

        return teste3()
    }

    const teste4 = () => console.log(`teste4: ${this === module.exports}`) /* true */

    teste1(); teste4();



// 69 => Funcoes Arrow
    let dobro = a => 2 * a // return implícito
    console.log(dobro(4)) /* 4 */

    let olaSemParam = () => 'Olá (Sem Param)'
    console.log(olaSemParam()) /* Olá (Sem Param) */
    
    let olaComParam = _ => `Olá (Com Param) | ${_}`
    console.log(olaComParam('Teste')) /* Olá (Com Param) | Teste */

    setTimeout(() => {
        let valor = 'Arrow => TimeOut'
        console.log(valor) /* Arrow => TimeOut */
    }, 1000)


// 73 => Funcao call
    // Funções callback são chamadas quando um evento acontece
    const fabricantes = ["Mercedes", "Audi", "BMW"]
    const imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`)

    fabricantes.forEach(imprimir)
    /*
    1. Mercedes
    2. Audi
    3. BMW
    */

    fabricantes.forEach(fabricante => console.log(fabricante))


// 79 => Closures
    // Closure é o escopo criado quando uma função é declarada
    // Esse escopo permite a função acessar e manipular variáveis externas à mesma

    const x = 'Global'

    function fora() {
        const x = 'Local'

        function dentro() {
            return x
        }
        
        return dentro
    }

    const minhaFuncao = fora()
    console.log(minhaFuncao()) /* Local */


// 85 => Call & Apply
    function getPreco(imposto = 0, moeda = 'R$') {
        return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
    }

    const produto = {
        nome: 'Notebook', preco: 4589, desc: 0.15,
        getPreco
    }

    global.preco = 20
    global.desc = 0.1
    console.log(getPreco()) /* R$ 18 */
    console.log(produto.getPreco()) /* R$ 3900.65 */

    const carro = { preco: 49990, desc: 0.20 }

    console.log(getPreco.call(carro)) /* R$ 39992 */
    console.log(getPreco.apply(carro)) /* R$ 39992 */

    // A diferença entre Call e Apply é a forma de passar os parametros, que podem ser separados por vírgula ou um array
    console.log(getPreco.call(carro, 0.17, '$')) /* $ 46790.64 */
    console.log(getPreco.apply(global, [0.17, 'U$'])) /* U$ 21.06 */


// 111 => Map/Filter/Reduce
    // Map => À partir de um array informado, cria um novo array com os campos informados na instrução callback.
    // Filter => À partir de um array informado, cria um novo array com os campos filtrados na instrução callback.
    // Reduce => À partir de um array informado, executa uma instrução callback que interage com cada item e retorna um único valor.

    const alunos = [
        { nome: 'João', nota: 7.3, bolsista: false },
        { nome: 'Maria', nota: 9.2, bolsista: true },
        { nome: 'Ana', nota: 9.8, bolsista: false },
        { nome: 'Pedro', nota: 8.7, bolsista: true }
    ]

    const getNome = aluno => aluno.nome
    const getNota = aluno => aluno.nota
    const getBolsista = aluno => aluno.bolsista
    const soma = (total, atual) => total + atual

    console.log(alunos.filter(getBolsista).map(getNome))

    const totalNotaBolsistas = alunos.map(getNota).filter(getBolsista).reduce(soma)
    console.log(totalNotaBolsistas)
    
    console.log(alunos.filter(a => a.bolsista).map(a => a.nome)) /* [ 'Maria', 'Pedro' ] */
    
    const soma = (total, valor) => total + valor
    const numeros = [1, 2, 3, 4, 5, 6]
    console.log(numeros.reduce(soma)) /* 21 */
    console.log(numeros.reduce(soma, 8)) /* 29 */

    let arrPrint = ['1', 2, [3,4], {item: 5}]
    arrPrint.map(item => console.log(item))


// 116 => Imperativo vs Declarativo
    const alunos = [
        { nome: 'João', nota: 7.9 },
        { nome: 'Maria', nota: 9.2 }
    ]

    // Imperativo => Código passo a passo com as instruções que precisam ser realizadas
    // Explicar passo a passo o que e como deve ser feito
    let total1 = 0
    for (let i = 0; i < alunos.length; i++) {
        total1 += alunos[i].nota
    }
    console.log(total1 / alunos.length)

    // Declarativo => Código mais limpo e reutilizável
    // Se preocupa mais com o que deve ser feito
    const getNota = aluno => aluno.nota
    const soma = (total, atual) => total + atual

    const total2 = alunos.map(getNota).reduce(soma)
    console.log(total2 / alunos.length)


// 150 => For In/Of
    let texto = 'numero10'

    const alunos = [
        { nome: 'João', nota: 7.9 },
        { nome: 'Maria', nota: 9.2 }
    ]

    const notas = [10, 15, 20, 30]

    const pessoa = { nome: 'João', nota: 7.9, idade: 31, sexo: 'masculino' }

    // for (let iterator in texto) { // Índices
    // for (let iterator in alunos) { // Índices
    // for (let iterator in pessoa) { // Atributos
    for (let iterator in notas) { // Índices
        console.log(iterator);
    }
    
    for (let iterator of texto) { // Valores
    // for (let iterator of alunos) { // Valores
    // for (let iterator of notas) { // Valores
    // for (let iterator of pessoa) { // TypeError: pessoa is not iterable
        console.log(iterator);
    }


// 151 => Promises
    // REFATORANDO A IMPLEMENTAÇÃO DO ARQUIVO usandoCallback.js
    const http = require('http')

    const getTurma = (letra, callback) => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
        
    }

    let nomes = []

    getTurma('A', alunos => {
        nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
        getTurma('B', alunos => {
            nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
            console.log(nomes);
        })
    })

    function falarDepoisDe(segundos, frase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(frase)
            }, segundos * 1000);
        })
    }
    
    falarDepoisDe(3, "Que legal as promises")
        .then(frase => frase.concat("?!?!"))
        .then(frase => frase.concat("?!?!"))
        .then(frase => frase.concat("?!?!"))
        .then(outraFrase => console.log(outraFrase))
        .catch(e => console.log(e));


// 157 => Protocolo HTTP
    // Métodos
    // O protocolo HTTP define oito métodos que indicam a ação a ser realizada no recurso especificado. Conforme Bastos & Ladeiras (2001), o método determina o que o servidor deve fazer com o URL fornecido no momento da requisição de um recurso.
    // Um servidor HTTP deve implementar ao menos os métodos GET e HEAD.
        // - GET: É o método mais comum: solicita algum recurso como um arquivo ou um script CGI (qualquer dado que estiver identificado pelo URI) por meio do protocolo HTTP. O método GET é reconhecido por todos os servidores.
        // - POST: Envia dados para serem processados (por exemplo, dados de um formulário HTML) para o recurso especificado. Os dados são incluídos no corpo do comando.
        // - PUT: Envia certo recurso.
        // - DELETE: Exclui o recurso.
        // - HEAD: É o mesmo que GET, mas sem que o recurso seja retornado. É usado para obter meta-informações por meio do cabeçalho da resposta, sem ter que recuperar todo o conteúdo.
        // - TRACE: Ecoa o pedido, de maneira que o cliente possa saber o que os servidores intermediários estão mudando em seu pedido.
        // - OPTIONS: Recupera os métodos HTTP que o servidor aceita.
        // - CONNECT: Serve para uso com um proxy que possa se tornar um túnel SSL (um túnel pode ser usado, por exemplo, para criar uma conexão segura).

    // Códigos de retorno
        // 1xx: Informação – requisição foi recebida e está sendo processada;
        // 2xx: Sucesso – requisição do cliente foi bem sucedida;
        // 3xx: Redirecionamento – informa a ação adicional que deve ser tomada para completar a requisição;
        // 4xx: Erro no cliente – avisa que o cliente fez uma requisição que não pode ser atendida;
        // 5xx: Erro no servidor – ocorreu um erro no servidor ao cumprir uma requisição válida.


// Secao 16 => WebPack
    // https://webpack.js.org/
    // https://medium.com/rocketseat/entendendo-e-dominando-o-webpack-4b2e8b3e02da
    // https://tableless.com.br/introducao-ao-webpack/

    // É um empacotador de javascript que auxilia o build do projeto
    // completamente baseado em sistema de módulos
        // commos.js no qual o node é baseado
        // padrão ECMA Script, import e export
    
    const modoDev = process.env.NODE_ENV !== 'production'
    const webpack = require('webpack')
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
    const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

    module.exports = {
        mode: modoDev ? 'development' : 'production',
        entry: './src/principal.js',
        output: {
            filename: 'principal.js',
            path: __dirname + '/public'
        },
        devServer: {
            contentBase: "./public",
            port: 9000
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "estilo.css"
            })
        ],
        module: {
            rules: [{
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', // interpreta @import, url()...
                    'sass-loader',
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }]
        }
    }


// Import / Exports
    // './02.01.mult'
    export default function mult(a, b){
        return a * b;
    }

    // './02.01.funcoes'
    export default function soma(a, b){
        return a + b;
    }
    
    export function sub(a, b){
        return a - b;
    }
    
    export function div(a, b){
        return a / b;
    }
    
    export function mod(a, b){
        return a % b;
    }

    // principal.js
    import multFunction from './02.01.mult';
    import * as funcoes from './02.01.funcoes';
    import soma, {sub as subFunction, mod} from './02.01.funcoes';

    console.log("soma: ", soma(1, 2));
    console.log("subFunction: ", subFunction(4, 2));
    console.log("mod: ", mod(10, 4));
    console.log("multFunction: ", multFunction(3, 2));
    console.log(funcoes);
    console.log("funcoes.div: ", funcoes.div(10, 2));
