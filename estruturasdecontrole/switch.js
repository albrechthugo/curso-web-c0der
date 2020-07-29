const imprimeResultado = function(nota){
    switch(Math.floor(nota)) {
        case 10: 
        case 9:
            console.log('Quadro de Honra')
        break
            case 8: 
            case 7:
            console.log('Aprovado')
        break
            case 6:
            console.log('Exame')
        break
            default:
            console.log('Reprovado')
        }
}

imprimeResultado(6.9)
 