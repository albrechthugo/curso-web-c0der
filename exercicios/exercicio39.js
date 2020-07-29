const vetor1 = [1, 2, 3, 4, 5]
const vetor2 = [6, 7, 8, 9, 10]

const inverteVetor = ( a, b ) => {

    for(let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i] 
        vetor1[i] = vetor1[i] - vetor2[i] 
    }

    console.log(`${vetor1}, ${vetor2}`)

}

inverteVetor(vetor1, vetor2)