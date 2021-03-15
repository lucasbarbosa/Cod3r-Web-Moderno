function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do { // Executa ao menos uma vez mesmo que esteja fora da condição
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')

/*
Resultado dinâmico (random)
==================================
Opção escolhida foi 0.
Opção escolhida foi -1.
Até a próxima!
*/