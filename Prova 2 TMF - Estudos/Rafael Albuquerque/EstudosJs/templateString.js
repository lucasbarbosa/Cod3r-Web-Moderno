const nome = 'Rebeca';
const concatenacao = 'olá' + nome + '!';

const template = `
    Olá
    ${nome}
    !`

console.log(concatenacao);
console.log(template);

// expressões
console.log();
console.log(`1 + 1 = ${ 1 + 1 }`);

const up = texto => texto.toUpperCase();
console.log(`Eii... ${up('cuidado')}`);

// retorno de função numérica

const mult = num1 => num1 * 2;
console.log(`Validando uma função numérica dentro de um template string ${mult(10)}`);