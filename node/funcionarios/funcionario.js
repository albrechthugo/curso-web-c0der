const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
import axios from 'axios'

const chineses = (func) => { return func.pais === 'China' }
const mulheres = (func) => { return func.genero === 'F' } 
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const resultado = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(resultado)
})



