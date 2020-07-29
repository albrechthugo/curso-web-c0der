const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprime(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprime)