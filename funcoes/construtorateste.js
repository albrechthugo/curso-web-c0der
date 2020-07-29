class Carro {
    constructor(velocidadeMax = 200, delta = 20) {

        this.velocidadeAtual = 0
        this.acelerar(velocidadeMax, delta)
        this.velAtual

    }

        acelerar(velocidadeMax, delta) {
            if (this.velocidadeAtual + delta <= velocidadeMax) {
                this.velocidadeAtual += delta
            } else {
                this.velocidadeAtual = velocidadeMax
            }
        }

        get velAtual() {
            return this.velocidadeAtual
        }
}

const Audi = new Carro
Audi.acelerar()
console.log(Audi.velAtual)
