console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Hugo', 'Andreas', 'Albrecht')
console.log(aprovados)

aprovados = [ 'Hugo', 'Andreas', 'Albrecht' ]
console.log(aprovados[0])

aprovados.push('Sofia')
console.log(aprovados)

console.log(aprovados.length)

aprovados.pop()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)