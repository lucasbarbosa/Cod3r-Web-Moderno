// uma função arrow é sempre uma função anonima, para usa-la você sempre precisa armazenar ela em uma outra variável

// sem arrow
let dobro = function (a) {
    return 2 * a
}

// com arrow, o return só é usado porque a função utiliza {}
dobro = (a) => {
    return 2 * a
}

console.log(dobro(22));

// com arrow 2
dobro = a => a * 2

console.log(dobro(Math.PI));

// arrow sem parametro

let ola = function () {
    return 'Olá';
}

ola = () => 'Olá';
console.log(ola());

// com underline
ola = _ => 'Olá';
console.log(ola());