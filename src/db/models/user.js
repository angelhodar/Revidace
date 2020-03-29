const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    "email": {
        type: String,
        require: true
    },
    "password": {
        type: String,
        require: true
    },
    "username": {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)