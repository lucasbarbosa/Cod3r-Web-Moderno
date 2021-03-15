// "This" pode variar dependendo de como a função for chamada
// Objeto que está sendo chamado naquele contexto de função
// Em uma Arrow Function o "This" não varia nunca

function f1(){ console.log(this === window)}

f1()
	VM119:1 true

document.getElementsByTagName('body')[0].onclick = f1

Click Body
	VM119:1 false

function f2(){ console.log(this === document)}

f2()
	VM287:1 false

document.getElementsByTagName('body')[0].onclick = f2
	VM287:1 false

cons body = document.getElementsByTagName('body')[0]
VM336:1 Uncaught SyntaxError: Unexpected identifier

const body = document.getElementsByTagName('body')[0]

function f2(){ console.log(this === body)}

Click Body
	VM287:1 false

document.getElementsByTagName('body')[0].onclick = f2

Click Body
	VM367:1 true

f2()
	VM367:1 false

const f4 = () => console.log(this === window)

f4()
	VM462:1 true

document.getElementsByTagName('body')[0].onclick = f4

Click Body
	VM462:1 true
