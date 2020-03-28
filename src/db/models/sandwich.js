const mongoose = require('mongoose')
const BaseExercise = require('./exercise')

const sandwichSchema = mongoose.Schema({
    "parameters": {
        "ingredientes": {type: Number, default: 2},
        "pisos": {type: Number, default: 2}
    },
    "params_description": {
        "Ingredientes": {type: String, default: "Número de ingredientes totales"},
        "Pisos": {type: String, default: "Numero de pisos de sandwich necesarios"}
    }
})

module.exports = BaseExercise.discriminator('Sandwich', sandwichSchema)