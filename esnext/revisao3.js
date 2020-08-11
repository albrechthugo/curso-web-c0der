// es8: Object.values / Object.entries

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na notacao literal

const nome = 'Carla'
const pessoa = {
    nome,
    idade: 23,
    ola() {
        return 'olá'
    }
}

console.log(pessoa)
console.log(pessoa.ola())

// Class

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'au au'
    }
}

const qualAnimal = new Cachorro
console.log(qualAnimal.falar())


