function Carro(velocidadeMaxima = 200, delta = 5) {

    let velocidadeAtual = 0

    this.acelerar = function() {

        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}

const Audi = new Carro(300, 60)
Audi.acelerar()
Audi.acelerar()
console.log(Audi.getVelocidadeAtual())