const notas = [7.2, 6.7, 4.5, 9.6, 7.8, 6.5].sort((a, b) => a - b)

const conceitos = ( notas ) => {

    for(let i = 0; i <= notas.length - 1; i++) {
        if( notas[i] >= 0.0 && notas[i] <= 4.9 ) {
            console.log(`Nota ${notas[i]} = Conceito D`)  
        } else if ( notas[i] >= 5.0 && notas[i] <= 6.9 ) {
            console.log(`Nota ${notas[i]} = Conceito C`)
        } else if( notas[i] >= 7.0 && notas[i] <= 8.9 ) {
            console.log(`Nota ${notas[i]} = Conceito B`) 
        } else if( notas[i] >= 9.0 && notas[i] <= 10.0) {
            console.log(`Nota ${notas[i]} = Conceito A`)
        } else {
            console.log('Nota inválida')
        }
    }
}

conceitos(notas)