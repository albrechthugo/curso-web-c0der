const Pai = {

    nome: 'Charles',
    corCabelo: 'Castanho'

}

const Filho = Object.create(Pai)

Filho.nome = 'Hugo'

console.log(Filho.nome, Filho.corCabelo)

const Filho2 = Object.create(Pai, { nome: { value: 'Eduardo', writable: true, enumerable: true } })

console.log(Object.keys(Filho2))

