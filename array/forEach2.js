Array.prototype.forEach2 = function(callback) {

    for(let i = 0; i < this.length; i++) {

        callback(this[i], i, this)

    }

} 

const aprovados = ['Hugo', 'Andreas', 'Albrecht']

aprovados.forEach(function(element, index) { 

    console.log(`${index + 1}) ${element}`)

})