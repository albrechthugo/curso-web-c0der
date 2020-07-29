const numbers = [23, 9, 2, 5, 79, 10]

const calculaMedia = ( numbers ) => {

    let resultado
    let somaNums = 0

    for(let i = 0; i < numbers.length; i++) {
        somaNums += numbers[i]
    }

    resultado = somaNums / numbers.length

    return `Média aritmética dos números do vetor = ${resultado.toFixed(2)}` 

}

console.log(calculaMedia(numbers))


