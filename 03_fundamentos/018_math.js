// Math => Constante com atributos e métodos para realizar operações aritmética
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area) /* 98.5203456165759 */
console.log(typeof Math) /* object */

// Atributos
console.log('Math.E:', Math.E) // Math.E: 2.718281828459045 | Constante de Euler e base dos logaritmos naturais
console.log('Math.LN2:', Math.LN2) // Math.LN2: 0.6931471805599453 | Logaritmo natural de 2
console.log('Math.LN10:', Math.LN10) // Math.LN10: 2.302585092994046 | Logaritmo natural de 10
console.log('Math.LOG2E:', Math.LOG2E) // Math.LOG2E: 1.4426950408889634 | Logaritmo de E na base 2
console.log('Math.LOG10E:', Math.LOG10E) // Math.LOG10E: 0.4342944819032518 | Logaritmo de E na base 10
console.log('Math.PI:', Math.PI) // Math.PI: 3.141592653589793 | Relação entre a circunferência de um círculo e o seu diâmetro
console.log('Math.SQRT1_2:', Math.SQRT1_2) // Math.SQRT1_2: 0.7071067811865476 | Raiz quadrada de 1/2; Equivale a 1 dividido pela raiz quadrada de 2
console.log('Math.SQRT2:', Math.SQRT2) // Math.SQRT2: 1.4142135623730951 | Raiz quadrada de 2

// Alguns métodos
console.log('Math.abs(-16):', Math.abs(-16)) // Math.abs(-16): 16 | Retorna o módulo, ou valor absoluto, de um número (x).
console.log('Math.ceil(7.4):', Math.ceil(7.4)) // Math.ceil(7.4): 7 | Retorna o menor inteiro que é maior ou igual a um número (x).
console.log('Math.floor(7.4):', Math.floor(7.4)) // Math.floor(7.4): 8 | Retorna o maior inteiro que é menor ou igual a um número (x).
console.log('Math.max(-10, 5, 30):', Math.max(-10, 5, 30)) // Math.max(-10, 5, 30): 30 | Retorna o maior dentre os parâmetros recebidos.
console.log('Math.min(-10, 5, 30):', Math.min(-10, 5, 30)) // Math.min(-10, 5, 30): -10 | Retorna o menor dentre os parâmetros recebidos.
console.log('Math.pow(2,4):', Math.pow(2,4)) // Math.pow(2,4): 16 | Retorna a base x elevada à potência y do expoente
console.log('Math.random():', Math.random()) // Math.random(): 0.4709259143010931 | Retorna um número pseudo-aleatório entre 0 e 1.
console.log('Math.round(6.3):', Math.round(6.3)) // Math.round(6.3): 6 | Retorna o valor arrendodado de x, para o valor inteiro mais próximo.
console.log('Math.round(6.8):', Math.round(6.8)) // Math.round(6.8): 7 | Retorna o valor arrendodado de x, para o valor inteiro mais próximo.
console.log('Math.sqrt(9):', Math.sqrt(9)) // Math.sqrt(9): 3 | Retorna a raiz quadrada positiva de um número (x).
