const anuidadeAssoc = (mes, valor) => {

    let numeroMes 
    let inicial = valor
    let resultado

    switch(mes) {

        case 'Janeiro':
            numeroMes = 1
            break

        case 'Fevereiro':
            numeroMes = 2
            break

        case 'Março':
            numeroMes = 3
            break

        case 'Abril':
            numeroMes = 4
            break

        case 'Maio':
            numeroMes = 5
            break

        case 'Junho':
            numeroMes = 6
            break

        case 'Julho':
            numeroMes = 7
            break

        case 'Agosto':
            numeroMes = 8
            break

        case 'Setembro':
            numeroMes = 9
            break

        case 'Outubro':
            numeroMes = 10
            break

        case 'Novembro':
            numeroMes = 11
            break

        case 'Dezembro':
            numeroMes = 12
            break
    }

    if(numeroMes != 1) {
         
        numeroMes -= 1
        resultado = inicial * Math.pow((1 + 0.05), numeroMes)
        return resultado.toFixed(2)

    } else {
        return 'Valor pago na data correta..'
    }
}

console.log(anuidadeAssoc('Fevereiro', 1000))