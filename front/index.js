var validators = require('../back/server').validators
var objects = require('../back/server').objects

function getObjectValue(param) {
    switch(param) {
        case 'customBetween':
            return 7;
            break;
        case 'customMax':
            return 9;
            break;
        case 'customMatch':
            return 'jamon';
            break;
    }
}

objects.map(obj => {
    console.log('validando al objeto: ', obj.name)

    validators.map(validator => {
        if(Object.keys(obj.validators).includes(validator.name)){
            console.log('validoador: ', validator.name)
            console.log('validoador Params: ', obj.validators[validator.name])
            const variableParams = {};
            obj.validators[validator.name].variable.forEach(key => {
               variableParams[key] = getObjectValue(validator.name) 
            });
            const params = {
                ...obj.validators[validator.name].static,
                ...variableParams
            }

            var funcionObjeto = new Function('param', 'return ' + validator.code)

            // ejecuto la funcion
            console.log(funcionObjeto()(params))        
        }
    })
})
