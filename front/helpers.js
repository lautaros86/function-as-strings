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

function execValidation(obj, validator) {

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
exports.execValidation = execValidation;