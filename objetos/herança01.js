const Ferrari = {

    modelo: 'F40',
    velocidadeMax: 320

}

const Volvo = {

    modelo: 'V40',
    velocidadeMax: 200

}

console.log(Ferrari.__proto__)
console.log(Volvo.__proto__)
console.log(Ferrari.__proto__ === Object.prototype)