// nao aceita repeticao e n eh indexado

const times = new Set()
times.add('Palmeiras')
times.add('São Paulo').add('Vasco')
times.add('Palmeiras')

console.log(times)
console.log(times.size)
console.log(times.has('Palmeiras'))
times.delete('São Paulo')
console.log(times)

const nomes = ['Hugo', 'Andreas', 'Albrecht']
const usuarios = new Set(nomes)

console.log(usuarios)