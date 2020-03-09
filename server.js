if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose')

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

let devices = {}

io.on('connection', function(socket){
    console.log('Cliente conectado en devices: ' + socket.id) 
    socket.on('device', function(data){
        console.log(data)
        devices[socket.id] = data
    })
})

// Rutas movidas aqui temporalmente hasta entender mejor el 
// module.exports para hacer el emit desde index.js en routes
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.pug', {devices : devices})
})

router.post('/', (req, res) => {
    io.emit('exercise', req.body.exercise)
})

app.use('/', router)

server.listen(process.env.PORT || 3000)