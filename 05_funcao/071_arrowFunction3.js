this.local = 'globalFunction'

let comparaComThis = function (param) { this.local = 'localFunction'; console.log(this.local, this === param) }

comparaComThis(global) /* localFunction true */

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) /* localFunction false */
comparaComThis(obj) /* localFunction true */

let comparaComThisArrow = param => console.log(this.local, this === param)
comparaComThisArrow(global) /* globalFunction false */
comparaComThisArrow(module.exports) /* globalFunction true */

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) /* globalFunction false */
comparaComThisArrow(module.exports) /* globalFunction true */
