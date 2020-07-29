// novo recurso do ecs2015

const pessoa = {
    nome: 'hugo',
    idade: 20,
    endereco: {
        rua: 'simao kruger',
        numero: 1000
    }
}

const {nome, idade} = pessoa // "tire de dentro do objeto pessoa nome e idade"
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // mesma coisa porem criando variaveis com nome diferente.
console.log(n, i)

const {sobrenome, teste = true} = pessoa // teste com elementos q n estao no objeto 
console.log(sobrenome, teste)

const {endereco: {rua, numero}} = pessoa
console.log(rua, numero)


