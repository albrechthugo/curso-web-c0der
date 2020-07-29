const onlyInteger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const number = 2

const multiplica = ( onlyInteger, number ) => {

    let resultado = []

    for(let i = 0; i < onlyInteger.length; i++) {
        resultado.push(onlyInteger[i] * number)
    }

    console.log(resultado)

}

const multiplicaMaiorQue5 = ( onlyInteger, number ) => {

    let resultado = []

    for(let i = 0; i < onlyInteger.length; i++) {
        if( onlyInteger[i] > 5 ) {
            resultado.push(onlyInteger[i] * number)
        }
    }

    console.log(resultado)

}

multiplica(onlyInteger, number)
multiplicaMaiorQue5(onlyInteger, number)
