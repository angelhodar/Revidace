const mongoose = require('mongoose')
const BaseExercise = require('./exercise')

const recycleSchema = mongoose.Schema({
    "parameters": {
        "materials": {type: Number, default: 3},
        "objects": {type: Number, default: 9}
    },
    "params_description": {
        "Materiales": {type: String, default: "Número de distintos materiales a reciclar"},
        "Objetos": {type: String, default: "Cantidad de objetos distintos a reciclar"}
    }
})

module.exports = BaseExercise.discriminator('Recycle', recycleSchema)