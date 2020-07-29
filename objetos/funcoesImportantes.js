const pessoa = {
    
    nome: 'Hugo',
    idade: 20,
    peso: 62

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // par chave valor

Object.entries(pessoa).forEach(element => {
    console.log(`${element}`)  
})

Object.defineProperty(pessoa, 'bornDate', {
    enumerable: true,
    writable: true,
    value: '06/04/2020'
})

console.log(pessoa.bornDate)

// object assign ecs6

const dest = { a: 1 }
const o1 =  { b: 2 }
const o2 = { c: 3 }
const obj = Object.assign(dest, o1, o2)

console.log(obj)