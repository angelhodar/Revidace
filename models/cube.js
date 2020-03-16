const mongoose = require('mongoose')

const cubeSchema = mongoose.Schema({
    "name" : {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "img": {
        type: String,
        required: true
    },
    "parameters": {
        "cantidad": {type: Number, default: 2},
        "reaparicion": {type: Number, default: 2},
        "duracion": {type: Number, default: 60} 
    },
    "params_description": {
        "Cantidad": {type: String, default: "Número de cubos a mostrar"},
        "Reaparición": {type: String, default: "Tiempo de reaparición de los cubos"},
        "Duración": {type: String, default: "Duración del ejercicio en segundos"},
    }
})

module.exports = mongoose.model('Cube', cubeSchema)