const mongoose = require('mongoose')

const matcherSchema = mongoose.Schema({
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
        "velocidad": {type: Number, default: 3},
        "reaparicion": {type: Number, default: 2},
        "duracion": {type: Number, default: 60} 
    },
    "params_description": {
        "Velocidad": {type: String, default: "Velocidad a la que los patrones se acercan al paciente"},
        "Reaparición": {type: String, default: "Tiempo de reaparición de los patrones"},
        "Duración": {type: String, default: "Duración del ejercicio en segundos"},
    }
})

module.exports = mongoose.model('Matcher', matcherSchema)