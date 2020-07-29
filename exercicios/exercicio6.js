const jurosSimples = (i, taxa, tempo) => {

    let montante = i * taxa * tempo

    return montante
}

const jurosComposto = (i, taxa, tempo) => {

    let montante = i * Math.pow((1 + taxa), tempo)

    return montante
    
}

console.log(jurosSimples(1000, 2.5, 30))
console.log(jurosComposto(1000, 2.5, 30))