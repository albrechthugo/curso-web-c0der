function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min // random gera um numero aleatorio
    return Math.floor(valor) // floor arredonda pra baixo, ceil pra cima

}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))

