const boletim = (codigo, n1, n2, n3) => {

    let mediaPonderada
 
     if(codigo <= 0){
         return 'Inválido'
     } else {

        if(n1 > n2 && n1 && n3) {
            mediaPonderada = ((n1 * 4) + (n2 * 3) + (n3 * 3)) / 10
        } else if(n2 > n1 && n2 > n3) {
           mediaPonderada = ((n2 * 4) + (n1 * 3) + (n3 * 3)) / 10
        } else if(n3 > n1 && n3 > n2) {
           mediaPonderada = ((n3 * 4) + (n2 * 3) + (n1 * 3)) / 10
        }
   
        if(mediaPonderada >= 5) {
            return `O aluno ${codigo}, com notas ${n1}, ${n2} e ${n3} teve média ${mediaPonderada} e está APROVADO!`
        } else {
           return `O aluno ${codigo}, com notas ${n1}, ${n2} e ${n3} teve média ${mediaPonderada} e está REPROVADO!`
        }
    }
}

console.log(boletim(123, 2.8, 6, 3.5))