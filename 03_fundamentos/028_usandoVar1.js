{ 
    { 
        { 
            { 
                var var_contexto = 'Será???'
                console.log("var_contexto: ", var_contexto) /* var_contexto:  Será??? */
            }
        }
    }
}

console.log("var_contexto: ", var_contexto) /* var_contexto:  Será??? */

if(1 === 0) {
    var var_if = 456
    console.log("var_if: ", var_if)
}

console.log("var_if: ", var_if) /* var_if:  undefined */

function teste() {
    var var_function = 123
    console.log("var_function: ", var_function) /* var_function:  123 */
}

teste()
console.log("var_function: ", var_function) /* ReferenceError: var_function is not defined */
