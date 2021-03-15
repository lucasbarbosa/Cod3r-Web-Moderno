let num1 = 1
let num2 = 2

num1++
console.log(num1) /* 2 */
--num1
console.log(num1) /* 1 */

console.log(++num1 === num2--) /* true */
console.log(num1 === num2) /* false */

let n1 = !true;
let n2 = !false;
let n3 = !"Gato";
let n4 = !'';

console.log(n1, n2, n3, n4) // false true false true
