const usuarios = [
    {
        nome: 'Hugo',
        idade: 20
    },
    {
        nome: 'Sofia',
        idade: 19
    },
    {
        nome: 'Charles',
        idade: 40
    },
    {
        nome: 'Dani',
        idade: 40
    },
    {
        nome: 'Eduardo',
        idade: 40
    }
]

for (const user of usuarios) {
    const { nome, idade } = user
    console.log(`O usuário ${nome} tem ${idade} anos.`)
}

