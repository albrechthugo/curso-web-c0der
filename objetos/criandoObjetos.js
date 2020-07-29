// usando notação literal

const obj1 = {  } 
console.log(obj1)

// object em js

const obj2 = new Object
console.log(obj2)

// funcoes construtoras

function Produto(nome, preco, desconto) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto
}

const obj3 = new Produto('Notebook', 2800, 30)
console.log(obj3)

// funcao factory

function criarFuncionario(nome, salario, faltas) {
    return {
        nome, 
        salario,
        faltas,
        getSalario() {
            return (salario /  30) * (30 - faltas)
        } 
    }
}

const obj4 = criarFuncionario('Hugo', 4000, 1)
console.log(obj4.getSalario())

// object.create

const filha = Object.create(null)
filha.nome = 'Ana'

console.log(filha.nome)

