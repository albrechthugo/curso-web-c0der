function soma() {
    let soma = 0
    for(i in arguments) { // arguments eh uma variavel local com todos os argumentos q serao passados p funcao
        soma += arguments[i]
    }
    return soma
}


console.log(soma(4, 5, 6, 7))

