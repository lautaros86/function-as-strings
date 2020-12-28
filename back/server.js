var validatorFunctions = require('./functions')
var objects = require('./objects').objects

exports.validators =  Object.keys(validatorFunctions).map(funName => (
    {
        name: funName,
        code: validatorFunctions[funName].toString()
    })
)

exports.objects = objects