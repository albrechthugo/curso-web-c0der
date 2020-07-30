const numbers = [1, 2, 3, 4, 5]

let result = numbers.map(item => item * 2)
console.log(result)

const sum10 = item => item + 10
const triple = item => item * 3
const brl = item => `R$${parseFloat(item).toFixed(2).replace('.', ',')}`

result = numbers.map(sum10).map(triple).map(brl)
console.log(result)
