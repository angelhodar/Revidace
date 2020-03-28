require('dotenv').config()

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error to MongoDB!'));
db.once('open', () => console.log("Connected to MongoDB!"));

module.exports = db;