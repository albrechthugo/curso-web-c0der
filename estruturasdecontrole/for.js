// Usando while 

let contador = 1

while(contador <= 10) {
    console.log(`Contador -> ${contador}`)
    contador++
} 

// Usando FOR

for(let i=0; i <= 10; i++) {
    console.log(`I -> ${i}`)
}

const notas = [7.7, 5.6, 7.3, 8.7, 9.0, 2.4]

for(i=0; i < notas.length; i++) {
    console.log(`Nota ${i} -> ${notas[i]}`)
}