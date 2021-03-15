// sem o bind o this fica com a associação da function que chamou, sendo assim ele nunca acessa o this.Idade do objeto pessoa
// Só com o bind ele vai referenciar o this com o objeto pessoa

function Pessoa(){
    this.idade = 0;
    setInterval(function (){
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000);
}

new Pessoa