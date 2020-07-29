const numbers = [8, 10, 43, 11, 23, 12, 17, 59, 23, 44]

const inInterval = (numbers) => {

    let x = 10
    let y = 20
    let dentro = 0
    let fora = 0 

    for(let i = 0; i <= numbers.length - 1; i++) {
        if(numbers[i] >= x && numbers[i] <= y) {
            dentro++
        } else {
            fora++
        }
    }

    console.log(`Dentro: ${dentro}    Fora: ${fora}`)

}

inInterval(numbers)

