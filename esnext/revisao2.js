// arrow function 

const soma = (a, b) => { return a + b }
console.log(soma(1, 2))

// arrow function (this)

const lexico1 = () => { return console.log(this === exports) }
lexico1()

// parametros default

function log(texto = 'node') {
    console.log(texto)
}

log()
log('hugo')

// operador rest = "agrupa os valores em um array"

function total(...numeros) {
    let total = 0
    
    numeros.forEach(num => total += num)
    return total
}

console.log(total(1, 2, 3, 4))

