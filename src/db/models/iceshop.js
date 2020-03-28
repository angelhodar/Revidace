const mongoose = require('mongoose')
const BaseExercise = require('./exercise')

const iceCreamSchema = mongoose.Schema({
    "parameters": {
        "sabores": {type: Number, default: 4},
        "clientes": {type: Number, default: 1}
    },
    "params_description": {
        "Sabores": {type: String, default: "Número de sabores de helado disponibles"},
        "Clientes": {type: String, default: "Número de clientes simultáneos a los que atender"}
    }
})

module.exports = BaseExercise.discriminator('IceCreamShop', iceCreamSchema)