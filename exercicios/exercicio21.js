const planoDeSaude = (idade) => {

    let custoFixo = 100

    if(idade < 10) {
        custoFixo += 80
    } else if(idade >= 10 && idade <= 30) {
        custoFixo += 50
    } else if(idade > 30 && idade <= 60) {
        custoFixo += 95
    } else if(idade > 60) {
        custoFixo += 130
    }

    return custoFixo

}

console.log(planoDeSaude(9))
console.log(planoDeSaude(20))
console.log(planoDeSaude(40))
console.log(planoDeSaude(61))

