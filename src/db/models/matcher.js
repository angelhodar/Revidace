const mongoose = require('mongoose')
const BaseExercise = require('./exercise')

const matcherSchema = mongoose.Schema({
    "parameters": {
        "velocidad": {type: Number, default: 3},
        "reaparicion": {type: Number, default: 2}
    },
    "params_description": {
        "Velocidad": {type: String, default: "Velocidad a la que los patrones se acercan al paciente"},
        "Reaparición": {type: String, default: "Tiempo de reaparición de los patrones"}
    }
})

module.exports = BaseExercise.discriminator('Matcher', matcherSchema)