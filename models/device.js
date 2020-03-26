const mongoose = require('mongoose')
const Patient = require('./patient')
const Result = require('./result')

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
    "patient": {
        type: Patient
    },
    "results": {
        type: [Result]
    }
})

module.exports = mongoose.model('DeviceSession', DeviceSessionSchema)