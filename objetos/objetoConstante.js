// pessoa aponta p um endereco de memoria
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' // isso é possível pois estou alterando o conteudo do obj e nao o endereco de memoria de pessoa
console.log(pessoa.nome)

//pessoa = { nome: 'Ana' } // isso não pode ser feito pois aqui o que altera é o endereco de memoria.

Object.freeze(pessoa)
pessoa.nome = 'Hugo' // agr apos o freeze nao posso alterar nem um atributo de um objeto

console.log(pessoa.nome)
