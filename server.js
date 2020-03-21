require('dotenv').config()

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const indexRouter = require('./routes/index')
const devicesRouter = require('./routes/devices')
const exercisesRouter = require('./routes/exercises')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

mongoose.connect(process.env.MONGO_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function() {
  console.log('Connected to MongoDB!')
});

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

let devices = []

io.on('connection', function(socket){
    console.log('Cliente conectado: ' + socket.id)

    socket.on('device', function(data){
        data.id = socket.id
        data.results = []
        devices.push(data)
    })

    socket.on('results', function(data, callback){
        let device = devices.find(elem => elem.id == socket.id);
        device.results.push(JSON.stringify(data))
        callback('OK')
    })

    socket.on('disconnect', function(){
        console.log('Cliente desconectado: ' + socket.id) 
        devices = devices.filter(elem => elem.id != socket.id);
    })
})

app.use('/', indexRouter)
app.use('/devices', devicesRouter)
app.use('/exercises', exercisesRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)

server.listen(process.env.PORT || 3000)

app.locals.io = io
app.locals.devices = devices