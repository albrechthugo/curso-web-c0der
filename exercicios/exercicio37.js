/*
   Imprimir no console todos os termos 
   e a soma dos elementos

*/

const progressaoAritmetica = ( razao, a1, n ) => {

    let termo
    let somaDosTermos
    let enesimoTermo

    for(let i = 1; i <= n; i++) {
        termo = a1 + ( i - 1 ) * razao
        console.log(`Termo(${i}) = ${termo}`)
    }     

    enesimoTermo = a1 + ( n - 1 ) * razao
    
    somaDosTermos = (n * (a1 + enesimoTermo)) / 2
        console.log(`Soma dos termos da PA = ${somaDosTermos}`)
    
}



const progressaoGeometrica = ( razao, a1, n ) => {

    let termo
    let somaDosTermos
    let enesimoTermo

    for(let i = 1; i <= n; i++) {
        termo = a1 * (Math.pow(razao, (i - 1)))
        console.log(`Termo(${i}) = ${termo}`)
    }

    enesimoTermo = a1 * (Math.pow(razao, (n - 1)))

    somaDosTermos =  enesimoTermo / razao - 1
        console.log(`Soma dos termos da PG = ${somaDosTermos}`)

}

progressaoAritmetica(2, 5, 6)
console.log()
progressaoGeometrica(2, 5, 6)