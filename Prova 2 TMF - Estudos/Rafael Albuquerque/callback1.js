const fabricantes = ['Mercedez', 'BMW', 'VW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome} `);
}

// primeiro parametro o valor do for e segundo o indice do método forEach
fabricantes.forEach(imprimir)

fabricantes.forEach(function (fabricante) {
    console.log(fabricante);
})