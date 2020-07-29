const calculadora = (x, operador, y) => {

    switch(operador) {

        case '+':
            return x + y
            break
        
        case '-':
            return x - y
            break

        case '*':
            return x * y
            break

        case '/':
            return x / y
            break

        default:
            return 'Operação inválida'
        
    }

} 

console.log(calculadora(2, '+', 2))
console.log(calculadora(2, '-', 2))
console.log(calculadora(2, '*', 2))
console.log(calculadora(2, '/', 2))
console.log(calculadora(2, 'erro', 2))


