 const funcs = []

for(let i=0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
 
// LEMBRANDO SOBRE PUSH

 /* const nomes = ['hugo', 'sofia']
 nomes.push('albrecht', 'vilela')
 console.log(nomes)

 const tamanho = nomes.push()
 console.log(tamanho)

 console.log(nomes[2])

 */