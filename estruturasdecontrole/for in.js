const notas = [7.7, 5.6, 7.3, 8.7, 9.0, 2.4]

for(let i in notas) { // a primeira palavra antes do in eh smp o indice do obj ou array
     console.log(i, notas[i])
}

const pessoa = {
    nome: 'Hugo',
    sobrenome: 'Albrecht',
    idade: 20,
    peso: 62
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}.`)
}

