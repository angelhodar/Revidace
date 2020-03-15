if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const router = require('./routes/index')

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

// De momento lo dejamos comentado, ya se usará mas tarde
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', function () {
//     console.log('Connected to MongoDB')
// })

let devices = []

io.on('connection', function(socket){
    console.log('Cliente conectado en devices: ' + socket.id) 
    socket.on('device', function(data){
        data['id'] = socket.id
        devices.push(data)
    })
})

app.use('/', router)

server.listen(process.env.PORT || 3000)

app.locals.io = io
app.locals.devices = devices