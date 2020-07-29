const convert = (value) => {

    let number = Number.parseFloat(value).toFixed(2)
    
    return `R$${number.toString().replace(".", ",")}`
}

console.log(convert(0.30000000000000004))

