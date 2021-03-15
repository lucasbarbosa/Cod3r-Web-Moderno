for (let letra of "Cod3er") {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// Antigo for devolve o indice do objeto para que você possa acessar o conteúdo do objeto pelo indíce
for (let i in assuntosEcma) {
    console.log(i)
}

// Novo for retorna o valor do objeto sem precisar acessar o indíce
for (let assunto of assuntosEcma) {
    console.log(assunto);
}

// Acessando Map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assunto of assuntosMap){
    console.log(assunto);
}

for (let assunto of assuntosMap.keys()) {
    console.log(assunto);
}

for (let assunto of assuntosMap.values()) {
    console.log(assunto);
}