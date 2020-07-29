const pedidos = (codigo, qtd) => { 

    let valor
    let nome

    switch(codigo) {

        case 100:
            valor = 3.00 * qtd
            nome = 'Cachorro quente'
            break

        case 200:
            valor = 4.00 * qtd
            nome = 'Hambúrguer simples'
            break

        case 300:
            valor = 5.50 * qtd
            nome = 'Cheeseburger'
            break

        case 400:
            valor = 7.50 * qtd
            nome = 'Bauru'
            break

        case 500:
            valor = 3.50 * qtd
            nome = 'Refrigerante'
            break

        case 600:
            valor = 2.80 * qtd
            nome = 'Suco'
            break
    }

    return console.log(`Pedido: ${nome}, Quantidade: ${qtd}, Total: ${valor.toFixed(2)}`)
    
}

pedidos(100, 2)
pedidos(600, 3)