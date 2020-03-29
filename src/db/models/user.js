const mongoose = require('mongoose')

const PatientSchema = mongoose.Schema({
    "email": {
        type: String,
        require: true
    },
    "password": {
        type: String,
        require: true
    },
    "name": {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Patient', PatientSchema)