const aumentoSalarial = (plano, salario) => {

    let salarioFinal

    switch(plano) {

        case 'a':
            salarioFinal = (salario + (salario * 0.10))
            break

        case 'b':
            salarioFinal = (salario + (salario * 0.15))
            break

        case 'c':
            salarioFinal = (salario + (salario * 0.20))
             break
        
        default:
            return 'Error..'

    }

    return salarioFinal

}

console.log(aumentoSalarial('a', 2000))
console.log(aumentoSalarial('b', 2000))
console.log(aumentoSalarial('c', 2000))