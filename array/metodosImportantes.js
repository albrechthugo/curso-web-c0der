const pilotos = ['Vettel', 'Alonso', 'Barrichelo', 'Massa']

pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton') // Esse método adiciona elemento no inicio do array, o oposto do método PUSH..
console.log(pilotos)

pilotos.splice(1, 1)
console.log(pilotos)

pilotos.splice(2, 0, 'Massa')
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3)
console.log(algunsPilotos2)

