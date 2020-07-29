const verificafruta = (fruta) => {

    switch(fruta) {

        case 'Maçã':
            return console.log('Não vendemos essa fruta aqui')
            break
        
        case 'Kiwi':
            return console.log('Estamos com escassez de kiwis')
            break

        case 'Melancia':
            return console.log('Aqui está, são 3 reais o quilo.')
            break

        default:
            return console.log('Erro..')
    }
}

verificafruta('Maçã')
verificafruta('Kiwi')
verificafruta('Melancia')
verificafruta('Goiaba')
