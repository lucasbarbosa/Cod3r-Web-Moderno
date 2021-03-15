const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
/*
1) Agatha
2) Aldo
3) Daniel
4) Raquel
*/

aprovados.forEach(nome => console.log(nome))
/*
Agatha
Aldo
Daniel
Raquel
*/

const exibirAprovados = (aprovado, indice) => console.log(`${indice + 1}) ${aprovado}`)
aprovados.forEach(exibirAprovados)
/*
1) Agatha
2) Aldo
3) Daniel
4) Raquel
*/

for (const key in aprovados) {
    console.log(key)
}
/*
0
1
2
3
*/

for (const iterator of aprovados) {
    console.log(iterator)
}
/*
Agatha
Aldo
Daniel
Raquel
*/