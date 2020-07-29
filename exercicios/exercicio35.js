const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

const concat = ( vetorPilha, vetorAdiciona ) => {

    for(let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }

    return vetorPilha.join(', ')
    
}

console.log(concat(vetorPilha, vetorAdiciona))