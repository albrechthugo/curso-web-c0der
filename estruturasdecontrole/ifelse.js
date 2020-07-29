const imprimeResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}

imprimeResultado(7)
imprimeResultado(5) 
imprimeResultado('Epa') // vai retornar reprovado pois vai comparar a string cm a condicao e retornar false.
