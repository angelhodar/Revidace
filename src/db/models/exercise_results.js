const mongoose = require('mongoose')

const ResultSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "difficulty": {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Result', ResultSchema)