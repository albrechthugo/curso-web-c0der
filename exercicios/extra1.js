const PersonalInfo = [

    {
        height: 170,
        sex: 'Male'
    },
    {
        height: 197,
        sex: 'Female'
    },
    {
        height: 128,
        sex: 'Female'
    },
    {
        height: 156,
        sex: 'Male'
    },
    {
        height: 150,
        sex: 'Female'
    },

]

const HeightAndSex = (PersonalInfo) => {

    let countMale = 0
    let countFemale = 0
    let ordered = []
    let lastElement

    ordered = PersonalInfo.sort(function(a, b) {
        return a.height - b.height
    })

    lastElement = PersonalInfo[PersonalInfo.length - 1]
    
    for(let i = 0; i <= PersonalInfo.length - 1; i++) {
        if(PersonalInfo[i].sex.toLowerCase() == 'male') {
            countMale++
        } else {
            countFemale++
        }
    }

    console.log(`${countMale} são do sexo masculino.`)
    console.log(`${countFemale} são do sexo feminino.`)
    console.log(`A maior altura é ${lastElement.height}cm e é do sexo: ${lastElement.sex}.`)

} 

HeightAndSex(PersonalInfo)



