// rest (junta) spread (espalha)

// usando spread com objeto

const funcionario = { nome: 'Maria', salario: 12283 }
const clone = { ativo: true, ...funcionario }
console.log(clone)


// usando spread com array 

const alunos = ['hugo', 'andreas', 'albrecht']
const alunosEprofessores = [...alunos, 'joao', 'maria']
console.log(alunosEprofessores)


