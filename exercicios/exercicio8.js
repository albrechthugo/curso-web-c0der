const gamePoints = '10, 20, 20, 8, 25, 3, 0, 30, 1'

const compareResults = (gamePoints) => {

    let points = gamePoints.split(', ') // split transforma uma string em array com o separador escolhido
    let brokeRecords = 0
    let worstGame = 1
    let bestPontuation = points[0]
    let worstPontuation =  points[0]

    for(let i = 0; i < points.length; i++) {
        if(points[i] > bestPontuation) {
            bestPontuation = points[i]
            brokeRecords++
        } else if(points[i] < worstPontuation) {
            worstPontuation = points[i]
            worstGame = i + 1
        }
    }

    return [brokeRecords, worstGame]
}

 

console.log(compareResults(gamePoints))