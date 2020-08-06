const countA = require('./instanciaUnica')
const countB = require('./instanciaUnica')

const countC = require('./instanciaNova')()
const countD = require('./instanciaNova')()

countA.count()
countA.count()
console.log(countA.valor, countB.valor)

countC.count()
countC.count()
console.log(countC.valor, countD.valor)