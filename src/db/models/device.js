const mongoose = require('mongoose')
const Patient = require('./patient')
const Result = require('./exercise_results')

const DeviceSessionSchema = mongoose.Schema({
    "sid": {
        type: String,
        required: true
    },
    "engine": {
        type: String,
        required: true
    },
    "device": {
        type: String,
        required: true
    },
    "account": {
        type: String,
        required: true
    },
    "patient": {
        type: Patient.schema
    },
    "results": {
        type: [Result.schema]
    }
})

module.exports = mongoose.model('DeviceSession', DeviceSessionSchema)