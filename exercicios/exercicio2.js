const triangulo = (a, b, c) => {

    if (a == b && b == c) {
        return 'Equilátero'
    } else if (a == b || a == c || b == c) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulo(1, 2, 3))
console.log(triangulo(2, 0, 2))
console.log(triangulo(2, 2, 2))