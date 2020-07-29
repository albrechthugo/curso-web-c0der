const numbers = [23, 9, 2, 5, 79, 10, 32, -1, -2, -3, -4]

const soNegativos = ( numbers ) => {

    let cont = 0

    for(let i = 0; i < numbers.length; i++) {
        if( numbers[i] < 0 ) {
            cont++
        }
    }

    return cont
}

console.log(soNegativos(numbers))