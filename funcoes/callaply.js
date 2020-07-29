function getPreco(imposto = 0, moeda = 'R$') {

    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const product = {
    nome: 'Notebook',
    preco: 2000,
    desc: 0.10,
    getPreco
}

console.log(product.getPreco())

const car = { preco: 35000, desc: 0.20 }
console.log(getPreco.call(car, 2, '$'))
console.log(getPreco.apply(car, [2, '$']))