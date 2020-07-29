function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (min, max) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Valor gerado -> ${opcao}.`)
} while(opcao != -1)

console.log('Saindo do loop...')
