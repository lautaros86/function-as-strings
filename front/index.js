var validators = require('../back/server').validators
var objects = require('../back/server').objects


objects.map(obj => {
    console.log('validando al objeto: ', obj.name)
    validators.map(validator => {
        if(Object.keys(obj.validators).includes(validator.name)){
            console.log('validoador: ', validator.name)
            var funcionObjeto = new Function('a', 'b', 'c', 'return ' + validator.code)
            // console.log(funcionObjeto.toString())
            // ejecuto la funcion
            console.log(funcionObjeto()(5, 10, 1))        }
    })
})
