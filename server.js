if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
//const mongoose = require('mongoose')

const index_mod = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', function () {
//     console.log('Connected to MongoDB')
// })

app.use('/', index_mod.router)

io.on('connection', function (socket) {
    console.log('Cliente conectado: ' + socket.id) 
    socket.on('device-connected', function(msg){
        index_mod.devices[socket.id] = msg
        io.emit('device-ready', msg.engine, msg.name)
        console.log(index_mod.devices)
    })
})

server.listen(process.env.PORT || 3000)