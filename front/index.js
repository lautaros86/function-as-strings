var validators = require('../back/server').validators
var objects = require('../back/server').objects
var execValidation = require('./helpers').execValidation

objects.map(obj => {
    console.log('validando al objeto: ', obj.name)
    validators.map(validator => {
        if(Object.keys(obj.validators).includes(validator.name)){
            execValidation(obj, validator);
        }
    })
})
