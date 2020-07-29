function tratarErroLancar(erro){
    // throw new Error('Erro...')
    throw 10
}

function imprimeNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroLancar(e)   
    }
    finally{
        console.log('final')
    }
}


const obj = {name: 'Hugo'}
imprimeNome(obj)