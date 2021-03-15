// promises - Explique o que é uma promises:

// Promise é uma promessa você usa a mesma quando quer utilizar algum processamento assíncrono, sendo que ela tem dois principais destinos, ser resolvida ou rejeitada
// Digamos que você tenha uma função que deve abrir um arquivo em outro servidor, você chama a promise de abrirarquivo e caso a mesma seja resolvida ela chamará a callback de sucesso
// senão ela chamará a callback de erro previamente escrita

// this e funcao bind - Em qual contexto o this pode variar ? O que é a função bind ? Em qual contexto o this não varia ?

// closures - Explique o que são o closures ?



// Qual a saída?



const x = 'Global';



function fora() {

    const x = 'Local';

    function dentro() {

        return x;

    }

    return dentro;

}



const minhaFuncao = fora();



console.log(minhaFuncao());



// For of    - Explique a diferença entre a o for in e o for of

// O for of faz a iteração sobre valor não sobre índice
// for in faz iteração sobre indice e pelo indice você consegue acessar o valor                                

// HTTP - Explique em qual contexto de web api os códigos HTTP poderiam ser usados para retornos ao usuário
// Os status code HTTP podem ser usados para comunicação com o usuário através das chamadas que o mesmo realizar na API, ex: um retorno informativo http 100
// um retorno de alguma operação com sucesso o http 200

// WebPack - Qual a função do WebPack ?
// Ajudar na automatização do build do projeto
// - Quais os sistemas de módulo que o WebPack utiliza?
// Commos.js do node.js e o do ECMA Script

// Funcao Call





// Funcao Arrow

// 1) Transforme as funções em função arrow:



function Soma(a, b) {

    return a + b

}

const somar = (a, b) => a + b;
console.log(somar(23,45));

console.log(Soma(2, 2))



function ImprimirTeste() {

    console.log(this === module.exports)

}
const imprimir = () => console.log(this === module.exports)

ImprimirTeste()



function ImprimeNovaPessoa(nome, idade, sexo) {

    var pessoa = {

        nome,

        idade,

        sexo

    }

    console.log(pessoa)

}

ImprimeNovaPessoa('Lucas', 23, 'Masculino')



// Destructuring

// 1) Aplique Destructuring nos seguintes objetos:



const pessoa = {

    nome: 'Lucas',

    idade: 23,

    departamento: {

        nome: 'TI - Dev',

        descricao: 'Desenvolvimento',

        lider: {

            nome: 'Cassio',

            idade: 35

        }

    }

}



// 2) Pegue o valor 6 utilizando Destructuring

const numeros = [[, 8, 8], [9, 6, 8]]



// 3) Explique a diferença entre os dois Destructuring

const pessoa = {

    nome: 'Lucas',

    idade: 23,

    sexo: 'Masculino'

}



const { nome, ...rest } = pessoa

const { ...rest, nome } = pessoa



// Imperativo x Declarativo

// 1) Explique qual a diferença de imperativo x declarativo.





// HTTP

// 1) O que é HTTP e cite os protocolos que ele necessita.



// 2) Explique as seguinte categorias de Status HTTP:

// 1XX: informação

// 2XX: sucesso

// 3XX: redirecionamento

// 4XX: erro no cliente

// 5XX: erro no servidor



// 3) Cite 4 métodos HTTP e explique para que serve.



// 4) Explique o significado dos Status HTTP seguintes:

// 100:

// 200:

// 201:

// 204:

// 302:

// 400:

// 401:

// 403:

// 404:

// 500:

// 502:





// WebPack

// 1) Defina WebPack.



// Map - Qual o resultado da saída abaixo:

// ------------------------------------------------



const nums = [2, 4, 5, 8, 13]



const soma9 = e => e + 9

const triplo = e => e * 3

const valorMonetario = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`



resultado = nums.map(soma9).map(triplo).map(valorMonetario)

console.log(resultado)





// Filter - Qual o resultado da saída abaixo:

// ------------------------------------------------



const produtos = [

    { nome: 'Notebook', preco: 2499, fragil: true },

    { nome: 'iPad Pro', preco: 4199, fragil: true },

    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },

    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }

]



const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil



console.log(produtos.filter(caro).filter(fragil))





// Reduce - Qual o resultado da saída abaixo:

// ------------------------------------------------



const soma = (total, valor) => total + valor

const nums = [3, 7, 9, 13]

console.log(nums.reduce(soma, 21))





// Defina o que é template strings.

// ------------------------------------------------





// Template Strings - Qual o resultado das saídas abaixo:

// ------------------------------------------------



const nome = 'Fulano'

const concatenacao = 'Olá ' + nome + '!'

const template = `

    Olá

    ${nome}!`

console.log(concatenacao, template)


var a = '10'

var b = 5

console.log(`Soma: ${a + b}`)

console.log(`Divisão: $(a / b)`)



// Respostas informativasSeção
// 100 Continue
// Essa resposta provisória indica que tudo ocorreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se já concluiu o que gostaria.

// 101 Switching Protocol
// Esse código é enviado em resposta a um cabeçalho de solicitação Upgrade pelo cliente, e indica o protocolo a que o servidor está alternando.

// 102 Processing (WebDAV)
// Este código indica que o servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.
// Respostas de sucessoSeção

// 200 OK
// Estas requisição foi bem sucedida. O significado do sucesso varia de acordo com o método HTTP:
// GET: O recurso foi buscado e transmitido no corpo da mensagem.
// HEAD: Os cabeçalhos da entidade estão no corpo da mensagem.
// POST: O recurso descrevendo o resultado da ação e trasmitido no corpo da mensagem.
// TRACE: O corpo da mensagem contem a mensagem de requisição recebida pelo servidor

// 201 Created
// A requisição foi bem sucessida e um novo recurso foi criado como resultado. Esta é uma tipica resposta enviada após uma requisição POST.

// 202 Accepted
// A requisição foi recebida mas nenhuma ação foi tomada sobre ela. Isto é uma requisição não-comprometedora, o que significa que não há nenhuma maneira no HTTP para enviar uma resposta assíncrona indicando o resultado do processamento da solicitação. Isto é indicado para casos onde outro processo ou servidor lida com a requisição, ou para processamento em lote.

// 203 Non-Authoritative Information
// Esse código de resposta significa que o conjunto de meta-informações retornadas não é o conjunto exato disponível no servidor de origem, mas coletado de uma cópia local ou de terceiros. Exceto essa condição, a resposta de 200 OK deve ser preferida em vez dessa resposta.

// 204 No Content
// Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. O user-agent pode atualizar seus cabeçalhos em cache para este recurso com os novos.

// 205 Reset Content
// Esta requisição é enviada após realizanda a solicitação para informar ao user agent redefinir a visualização do documento que enviou essa solicitação.

// 206 Partial Content
// Esta resposta é usada por causa do cabeçalho de intervalo enviado pelo cliente para separar o download em vários fluxos.

// 207 Multi-Status (WebDAV)
// Uma resposta Multi-Status transmite informações sobre vários recursos em situações em que vários códigos de status podem ser apropriados.

// 208 Multi-Status (WebDAV)
// Usado dentro de um DAV: elemento de resposta propstat para evitar enumerar os membros internos de várias ligações à mesma coleção repetidamente.

// 226 IM Used (HTTP Delta encoding)
// O servidor cumpriu uma solicitação GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual.
// Mensagens de redirecionamentoSeção

// 300 Multiple Choice
// A requisição tem mais de uma resposta possível. User-agent ou o user deve escolher uma delas. Não há maneira padrão para escolher uma das respostas.

// 301 Moved Permanently
// Esse código de resposta significa que a URI do recurso requerido mudou. Provavelmente, a nova URI será especificada na resposta.

// 302 Found
// Esse código de resposta significa que a URI do recurso requerido foi mudada temporariamente. Novas mudanças na URI poderão ser feitas no futuro. Portanto, a mesma URI deve ser usada pelo cliente em requisições futuras.

// 303 See Other
// O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET.

// 304 Not Modified
// Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.

// 305 Use Proxy 
// Foi definida em uma versão anterior da especificação HTTP para indicar que uma resposta deve ser acessada por um proxy. Foi depreciada por questões de segurança em respeito a configuração em banda de um proxy.

// 306 unused 
// Esse código de resposta não é mais utilizado, encontra-se reservado. Foi usado numa versão anterior da especificação HTTP 1.1.

// 307 Temporary Redirect
// O servidor mandou essa resposta direcionando o cliente a buscar o recurso requisitado em outra URI com o mesmo método que foi utilizado na requisição original. Tem a mesma semântica do código 302 Found, com a exceção de que o user-agent não deve mudar o método HTTP utilizado: se um POST foi utilizado na primeira requisição, um POST deve ser utilizado na segunda.

// 308 Permanent Redirect
// Esse código significa que o recurso agora está permanentemente localizado em outra URI, especificada pelo cabeçalho de resposta Location. Tem a mesma semântica do código de resposta HTTP 301 Moved Permanently  com a exceção de que o user-agent não deve mudar o método HTTP utilizado: se um POST foi utilizado na primeira requisição, um POST deve ser utilizado na segunda.
// Respostas de erro do ClienteSeção

// 400 Bad Request
// Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

// 401 Unauthorized
// Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.

// 402 Payment Required
// Este código de resposta está reservado para uso futuro. O objetivo inicial da criação deste código era usá-lo para sistemas digitais de pagamento porém ele não está sendo usado atualmente.

// 403 Forbidden
// O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.

// 404 Not Found
// O servidor não pode encontrar o recurso solicitado. Este código de resposta talvez seja o mais famoso devido à frequência com que acontece na web.

// 405 Method Not Allowed
// O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado. Os dois métodos obrigatórios, GET e HEAD, nunca devem ser desabilitados e não devem retornar este código de erro.

// 406 Not Acceptable
// Essa resposta é enviada quando o servidor da Web após realizar a negociação de conteúdo orientada pelo servidor, não encontra nenhum conteúdo seguindo os critérios fornecidos pelo agente do usuário.

// 407 Proxy Authentication Required
// Semelhante ao 401 porem é necessário que a autenticação seja feita por um proxy.

// 408 Request Timeout
// Esta resposta é enviada por alguns servidores em uma conexão ociosa, mesmo sem qualquer requisição prévia pelo cliente. Ela significa que o servidor gostaria de derrubar esta conexão em desuso. Esta resposta é muito usada já que alguns navegadores, como Chrome, Firefox 27+, ou IE9, usam mecanismos HTTP de pré-conexão para acelerar a navegação. Note também que alguns servidores meramente derrubam a conexão sem enviar esta mensagem.

// 409 Conflict
// Esta resposta será enviada quando uma requisição conflitar com o estado corrente do servidor.

// 410 Gone
// Esta resposta será enviada quando o conteúdo requisitado foi deletado do servidor.

// 411 Length Required
// O servidor rejeitou a requisição porque o campo Content-Length do cabeçalho não está definido e o servidor o requer.

// 412 Precondition Failed
// O cliente indicou nos seus cabeçalhos pré-condições que o servidor não atende.

// 413 Payload Too Large
// A entidade requisição é maior do que os limites definidos pelo servidor; o servidor pode fechar a conexão ou retornar um campo de cabeçalho Retry-After.

// 414 URI Too Long
// A URI requisitada pelo cliente é maior do que o servidor aceita para interpretar.

// 415 Unsupported Media Type
// O formato de mídia dos dados requisitados não é suportado pelo servidor, então o servidor rejeita a requisição.

// 416 Requested Range Not Satisfiable
// O trecho especificado pelo campo Range do cabeçalho na requisição não pode ser preenchido; é possível que o trecho esteja fora do tamanho dos dados da URI alvo.

// 417 Expectation Failed
// Este código de resposta significa que a expectativa indicada pelo campo Expect do cabeçalho da requisição não pode ser satisfeita pelo servidor.

// 418 I'm a teapot
// O servidor recusa a tentativa de coar café num bule de chá.

// 421 Misdirected Request
// A requisição foi direcionada a um servidor inapto a produzir a resposta. Pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema ("scheme") e autoridade inclusas na URI da requisição.

// 422 Unprocessable Entity (WebDAV)
// A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.

// 423 Locked (WebDAV)
// O recurso sendo acessado está chaveado.

// 424 Failed Dependency (WebDAV)
// A requisição falhou devido a falha em requisição prévia.

// 426 Upgrade Required
// O servidor se recusa a executar a requisição usando o protocolo corrente mas estará pronto a fazê-lo após o cliente atualizar para um protocolo diferente. O servidor envia um cabeçalho Upgrade numa resposta 426 para indicar o(s) protocolo(s) requeridos.

// 428 Precondition Required
// O servidor de origem requer que a resposta seja condicional. Feito para prevenir o problema da 'atualização perdida', onde um cliente pega o estado de um recurso (GET) , modifica-o, e o põe de volta no servidor (PUT), enquanto um terceiro modificou o estado no servidor, levando a um conflito.

// 429 Too Many Requests
// O usuário enviou muitas requisições num dado tempo ("limitação de frequência").

// 431 Request Header Fields Too Large
// O servidor não quer processar a requisição porque os campos de cabeçalho são muito grandes. A requisição PODE ser resubmetida depois de reduzir o tamanho dos campos de cabeçalho.

// 451 Unavailable For Legal Reasons
// O usuário requisitou um recurso ilegal, tal como uma página censurada por um governo.
// Respostas de erro do ServidorSeção

// 500 Internal Server Error
// O servidor encontrou uma situação com a qual não sabe lidar.

// 501 Not Implemented
// O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos exigidos que servidores suportem (e portanto não devem retornar este código) são GET e HEAD.

// 502 Bad Gateway
// Esta resposta de erro significa que o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida.

// 503 Service Unavailable
// O servidor não está pronto para manipular a requisição. Causas comuns são um servidor em manutenção ou sobrecarregado. Note que junto a esta resposta, uma página amigável explicando o problema deveria ser enviada. Estas respostas devem ser usadas para condições temporárias e o cabeçalho HTTP Retry-After: deverá, se posível, conter o tempo estimado para recuperação do serviço. O webmaster deve também tomar cuidado com os cabaçalhos relacionados com o cache que são enviados com esta resposta, já que estas respostas de condições temporárias normalmente não deveriam ser postas em cache.

// 504 Gateway Timeout
// Esta resposta de erro é dada quando o servidor está atuando como um gateway e não obtém uma resposta à tempo.

// 505 HTTP Version Not Supported
// A versão HTTP usada na requisição não é suportada pelo servidor.

// 506 Variant Also Negotiates
// O servidor tem um erro de configuração interno: a negociação transparente de conteúdo para a requisição resulta em uma referência circular.

// 507 Insufficient Storage
// O servidor tem um erro interno de configuração: o recurso variante escolhido está configurado para entrar em negociação transparente de conteúdo com ele mesmo, e portanto não é uma ponta válida no processo de negociação.

// 508 Loop Detected (WebDAV)
// O servidor detectou um looping infinito ao processar a requisição.

// 510 Not Extended
// Exigem-se extenções posteriores à requisição para o servidor atendê-la.

// 511 Network Authentication Required
// O código de status 511 indica que o cliente precisa se autenticar para ganhar acesso à red