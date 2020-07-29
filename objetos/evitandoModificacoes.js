// Object.preventExtensions

const produto = Object.preventExtensions({

    nome: 'Qualquer', preco: 1.99, tag: 'promocao'

})

console.log(Object.isExtensible(produto)) 

produto.nome = 'notebook'
produto.descricao = 'notebook acer'
delete produto.tag

console.log(produto)

// Object.seal = nao consigo criar nem excluir atributos

const pessoa = { nome: 'Hugo', idade: 35 }
Object.seal(pessoa)

pessoa.sobrenome = 'albrecht'
delete pessoa.idade
pessoa.idade = 24

console.log(pessoa)