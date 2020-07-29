const paresImpares = (inteiros) => {

    let pares = 0
    let impares = 0 

    for(let i = 0; i < inteiros.length; i++) {
        if(inteiros[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }

    console.log(`${pares} são pares.... ${impares} são ímpares`)

}

const inteiros = [2, 35, 4, 3, 8, 10, 92, 65, 67]

paresImpares(inteiros)



// for each chama uma funcao callback para cada elemento de um array q for invocado