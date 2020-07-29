const numbers = [23, 9, 2, 5, 79, 10, 32]

const menorMaiorDoVetor = ( numbers ) => {

    let menorElemento
    let maiorElemento 
    let ultimoElemento 
    let ordenaVetor
    
    vetorOrdenado = numbers.sort( (a, b) => a - b )

    menorElemento = vetorOrdenado[0]
    ultimoElemento = vetorOrdenado[vetorOrdenado.length - 1]
    maiorElemento = ultimoElemento

    return `Maior elemento = ${maiorElemento}    Menor elemento = ${menorElemento}`

}

console.log( menorMaiorDoVetor(numbers) )


