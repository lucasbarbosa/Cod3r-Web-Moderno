// Funções callback: são chamadas quando um evento acontece
const fabricantes = ["Mercedes", "Audi", "BMW"]

const imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`)

fabricantes.forEach(imprimir)
/*
1. Mercedes
2. Audi
3. BMW
*/

fabricantes.forEach(fabricante => console.log(fabricante))
/*
Mercedes
Audi
BMW
*/