const impares = ( intervalo ) => {

    for(let i = intervalo.inicio; i <= intervalo.fim; i++) {
        if( i % 2 != 0 ) {
            console.log(i)
        }
    }
} 

const intervalo = { inicio: 2, fim: 3 }

impares(intervalo)