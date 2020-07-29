// Funcão em JS é first class object (citizens)
// Alta ordem

// criar de forma literal

function fun1() { }

// armazenar em uma variavel

const fun2 = function() { }

// armazenar em um array 

const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um atributo de objeto

const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// passar como parametro

function run(fun){
    fun()
}

// uma funcao pode retornar/conter uma func

function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(5)
const resultado = soma(2,3) // da p fazer assim tbm... 
resultado(5)


