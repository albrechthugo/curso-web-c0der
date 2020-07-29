const vendeCarro = (modelo) => {

    switch(modelo) {

        case 'Hatch':
            return console.log('Compra efetuada com sucesso')
            break
        
        case 'Sedan':
        case 'Moto':
        case 'Caminhonete':
             return console.log('Tem certeza que não prefere esse modelo?')
             break

        default:
            return console.log('Não trabalhamos com este tipo de automóvel aqui')
        
    }
}

vendeCarro('Jet')
vendeCarro('Hatch')
vendeCarro('Moto')
vendeCarro('Sedan')
vendeCarro('Caminhonete')