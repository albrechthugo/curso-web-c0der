function construtoraFala(name) {

    this.nome = name

    this.retornaNome = () => {

        console.log(`Meu nome é: ${this.nome}`)

    }

}

const resultado = new construtoraFala('Hugo')
resultado.retornaNome()