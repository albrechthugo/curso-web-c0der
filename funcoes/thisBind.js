const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // o this chama o objeto DONO da do atributo saudacao nesse caso.
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas funcional e oO.

const falarDePessoa = pessoa.falar.bind(pessoa) // bind amarra o this com o objeto passado dentro dos ()
falarDePessoa()
