const criarProduto = ( name, value ) => {

    return {

        nome: name,
        preço: value,
        desconto: 10
    
    } 
}

console.log(criarProduto('Robô Clean', 200))