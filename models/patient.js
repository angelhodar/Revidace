const mongoose = require('mongoose')

const PatientSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Patient', PatientSchema)