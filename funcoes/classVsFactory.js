class Pessoa {

    constructor(nome) {

        this.nome = nome

    }

    falar() {

        console.log(`Meu nome é: ${this.nome}`)

    }

}

const usuario = new Pessoa('Hugo')
 usuario.falar()


    // Criando com factory.............


const criarPessoa = (name) => {

    return {

        falar: () => {console.log(`Meu nome é: ${name}`)}

    }
}

const imprime = criarPessoa('hugo')
imprime.falar()