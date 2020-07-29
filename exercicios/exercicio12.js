const fatorial = (value) => {

    if(value == 0) {
        return 1
    } else {
        return value * fatorial(value - 1)
    }

}

console.log(fatorial(5))