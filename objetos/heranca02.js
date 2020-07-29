// Prototype Chain

const Grandpa = { attr1: 'A' }
const Dad = { __proto__: Grandpa, attr2: 'B' }
const Son = { __proto__: Dad, attr3: 'C' }

console.log(Son.attr1, Son.attr2, Son.attr3)

// Another example

const Velocity = {

    currentSpeed: 0,
    maxSpeed: 200,
    SpeedUp( delta ) {
        
        if(this.currentSpeed + delta <= this.maxSpeed) {
            this.currentSpeed += delta
        } else {
            this.currentSpeed = this.maxSpeed
        }
    },
    Status() {

        return `Velocidade Atual = ${this.currentSpeed} km/h`

    }
}

const Ferrari = {

    model: 'F40',
    maxSpeed: 320,
    Status() {

        return `${this.model}: ${super.Status()}`

    }

}

const Volvo = {

    model: 'V40',
    Status() {

        return `${this.model}: ${super.Status()}`

    } 

}

Object.setPrototypeOf(Ferrari, Velocity)
Object.setPrototypeOf(Volvo, Velocity)

Ferrari.SpeedUp(40)
console.log(Ferrari.Status())

Volvo.SpeedUp(230)
console.log(Volvo.Status())
 