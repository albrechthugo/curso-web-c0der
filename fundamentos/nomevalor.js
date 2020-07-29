// par nome valor

const saudacao = 'Opa' // contexto léxico 1 

function exec(){
    const saudacao = 'faala' // contexto lexico 2
    return saudacao
}

// objetos sao grupos alinhados de pares nome valor

const cliente = [
   { nome: 'Hugo',
    idade: 20,
    peso: 60,
    endereco: {
        rua: 'Rua simao kruger',
        numero: 679,
        bairro: 'floresta'
    }
   }
]

console.log(saudacao)
console.log(exec())
console.log(cliente)
