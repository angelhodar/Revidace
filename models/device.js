const mongoose = require('mongoose')

const deviceSchema = mongoose.Schema({
    "sid" : {
        type : String,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "engine": {
        type : String
    }
})

module.exports = mongoose.model('Device', deviceSchema)