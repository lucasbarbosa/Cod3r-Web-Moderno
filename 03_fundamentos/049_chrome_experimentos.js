// Resultado das execuções abaixo no Chrome
window
    Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

this
    Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

var a = "teste"

console.log(a)
VM145:1 teste

var a = 123

console.log(a)
VM164:1 123

window.a
    123

let b = 456

b
    456

window.b
    undefined

let b = 789
VM231:1 Uncaught SyntaxError: Identifier 'b' has already been declared
    at <anonymous>:1:1
    (anonymous) @ VM231:1

const c = 456

window.c
    undefined

function f1() { return this === window }

f1()
    true

window.f1()
    true

this.f1()
    true

const f2 = () => console.log(this === window)

this.f2()
VM447:1 Uncaught TypeError: this.f2 is not a function
    at <anonymous>:1:6
    (anonymous) @ VM447:1

window.f2()
VM465:1 Uncaught TypeError: window.f2 is not a function
    at <anonymous>:1:8
    (anonymous) @ VM465:1

f2()
VM427:1 true

f2 = 123
VM487:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:4
    (anonymous) @ VM487:1

let pessoa = {nome: 'Ana', falar: function(){ return `Eu sou ${this.nome}`}}

pessoa.falar()
    "Eu sou Ana"

this.nome
    undefined

pessoa.verificarEscopo = function() { return this === window }
    ƒ () { return this === window }

pessoa.verificarEscopo()
    false
