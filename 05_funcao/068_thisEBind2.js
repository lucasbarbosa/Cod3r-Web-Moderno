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