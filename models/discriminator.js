const mongoose = require('mongoose')
const BaseExercise = require('./exercise')

const discriminatorSchema = mongoose.Schema({
    "parameters": {
        "subjects": {type: Number, default: 5},
        "words": {type: Number, default: 20},
        "colored": {type: Boolean, default: true},
    },
    "params_description": {
        "Temáticas": {type: String, default: "Número de las distintas temáticas en las que discriminar"},
        "Palabras": {type: String, default: "Cantidad de palabras a discriminar"},
        "Colorear": {type: String, default: "Si se quiere especificar un color único a cada temática"}
    }
})

module.exports = BaseExercise.discriminator('Discriminator', discriminatorSchema)