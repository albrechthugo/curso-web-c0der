function sameStrings( stringA, stringB ) {

    let estaContido = true
    let caractereStringA
    let caractereStringB

    for(let i = 0; i < stringA.length; i++) {
        caractereStringA = stringA.charAt(i).toLowerCase()
        for(let j = 0; j < stringB.length; j++) {
            caractereStringB = stringB.charAt(j).toLowerCase()
            if(caractereStringA == caractereStringB) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        } 
        
        if(!estaContido) {
            return estaContido
        }
    }

    return estaContido

}

console.log(sameStrings('huxgow', 'wgohux'))