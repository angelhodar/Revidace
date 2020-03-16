const mongoose = require('mongoose')

const iceCreamSchema = mongoose.Schema({
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
        "sabores": {type: Number, default: 4},
        "clientes": {type: Number, default: 1},
        "duracion": {type: Number, default: 60} 
    },
    "params_description": {
        "Sabores": {type: String, default: "Número de sabores de helado disponibles"},
        "Clientes": {type: String, default: "Número de clientes simultáneos a los que atender"},
        "Duración": {type: String, default: "Duración del ejercicio en segundos"},
    }
})

module.exports = mongoose.model('IceCreamShop', iceCreamSchema)