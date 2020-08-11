// let e const 

{
    var a = 1
    let b = 2
    
    console.log(b)
}

console.log(a)

// template string

const produto = 'iphone'
console.log(`${produto} é caro.`)

// destructuring

const [l, e, ...tras] = 'Cod3r' // string
console.log(l, e, tras)

const [x, y] =  [1, 2] // array
console.log(x, y)

const produtos = { celular: "iphone", notebook: "macbook" } // objetos
const { celular, notebook } = produtos
console.log(celular, notebook)
