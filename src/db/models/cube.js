const mongoose = require('mongoose')
const BaseExercise = require('./exercise')

const CubeSchema = mongoose.Schema({
    "parameters": {
        "cantidad": {type: Number, default: 2},
        "reaparicion": {type: Number, default: 2}
    },
    "params_description": {
        "Cantidad": {type: String, default: "Número de cubos a mostrar"},
        "Reaparición": {type: String, default: "Tiempo de reaparición de los cubos"}
    }
})

module.exports = BaseExercise.discriminator('Cube', CubeSchema)