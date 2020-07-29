const aprovados = ['Hugo', 'Andreas', 'Albrecht']

// No forEach, os parametros padroes são: elemento, indice, array.

aprovados.forEach(function(element, index) { 

    console.log(`${index + 1} ${element}`)

})

aprovados.forEach((element, index) => {

    console.log(`${index + 1} = ${element}`)

})

const exibirAprovados = (aprovados) => { console.log(`${aprovados}`) }
aprovados.forEach(exibirAprovados)