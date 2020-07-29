const criancas = [
    {
        altura: 160,
        taxa: 5
    },
    {
        altura: 142,
        taxa: 6
    },
    {
        altura: 168,
        taxa: 1
    },
    {
        altura: 134,
        taxa: 6
    },
    {
        altura: 130,
        taxa: 5
    },
    {
        altura: 120,
        taxa: 2
    }
]

function calculaDemora(criancas) {
    
    let criancaMenor
    let criancaMaior
    let ultimoElemento
    let contaAnos = 0
   
    const criancaOrdenado = criancas.sort(function(a, b) {
            return a.altura - b.altura
    })
       // console.log(criancaOrdenado)

    criancaMenor = criancaOrdenado[0]
    ultimoElemento = criancaOrdenado[criancaOrdenado.length - 1]
    criancaMaior = ultimoElemento
    
    while(criancaMenor.altura < criancaMaior.altura) {
        criancaMenor.altura += criancaMenor.taxa
        criancaMaior.altura += criancaMaior.taxa
        contaAnos++
    }

    console.log(`A criança menor vai levar ${contaAnos} anos pra chegar na altura da maior!`)

}

calculaDemora(criancas) // chamada da funçao principal
