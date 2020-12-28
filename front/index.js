var validators = require('../back/server').validators
var objects = require('../back/server').objects

// Logica para obtener el valor asociado al objeto para una determinada funcion de validacion
function getObjectValue(param, obj) {
    switch(param) {
        case 'customBetween':
            return (() => obj.cant)();
            break;
        case 'customMax':
            return (() => obj.price)();
            break;
        case 'checkAllowPayemntType':
            return (() => obj.paymentMethod)();
            break;
    }
}

objects.map(obj => {
    console.log('validando al objeto: ', obj.name)
    validators.map(validator => {
        if(Object.keys(obj.validators).includes(validator.name)){
            
            console.log('Funcion a ejecutar: ', validator.name)

            const variableParams = {};
            
            console.log('Parametros conocidos: ', obj.validators[validator.name])

            obj.validators[validator.name].variable.forEach(key => {
               variableParams[key] = getObjectValue(validator.name, obj) 
            });
            
            const params = {
                ...obj.validators[validator.name].static,
                ...variableParams
            }

            var funcionObjeto = new Function('param', 'return ' + validator.code)

            // ejecuto la funcion
            console.log('Parametros a enviar: ', params)
            console.log(funcionObjeto()(params))        
        }
    })
})
