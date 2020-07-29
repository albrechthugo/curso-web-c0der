const bhaskaraFunction = (ax2, bx, c) => {

    let resultado = []
   
    let deltaValue = (Math.pow(bx, 2) - (4 * ax2 * c))
    
        if(deltaValue < 0) {
            
            return 'Delta é negativo'
        
        }


    let Value1 = (-bx + Math.sqrt(deltaValue)) / 2 * ax2
    
    let Value2 = (-bx - Math.sqrt(deltaValue)) / 2 * ax2

        resultado.push(Value1, Value2)

        return resultado

    
}

console.log(bhaskaraFunction(3, 1, 2))
console.log(bhaskaraFunction(2, 6, 3))
