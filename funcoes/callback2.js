const notas = [7.5, 6.0, 8.3, 9.5]

/* sem callback

let notasBaixas = []
    for(let i in notas) {
        if(notas[i] < 7) {
            notasBaixas.push(notas[i])
        }
    }

    console.log(notasBaixas.join(', '))

*/

// com callback

let notasBaixas = notas.filter(function (nota) {
    return nota < 7
})

let notasAcimaMedia = notas.filter(function (nota) {
    return nota >= 7
})

console.log(`Notas baixas => ${notasBaixas.join(', ')}`)
console.log(`Notas acima da média => ${notasAcimaMedia.join(', ')}`)



