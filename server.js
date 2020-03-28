require('dotenv').config()

const express = require('express')
var session = require('express-session')
var MongoDBStore = require('connect-mongo')(session)
const app = express()
const server = require('http').Server(app)
const socketio = require('socket.io')(server)
const io = require('./io')(socketio)
const db = require('./db')

// Routes
const indexRouter = require('./routes/index')
const devicesRouter = require('./routes/devices')
const exercisesRouter = require('./routes/exercises')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

var store = new MongoDBStore({
    mongooseConnection: db,
    collection: 'Sessions'
});

// Catch session errors
store.on('error', function (error) {
    console.log(error);
});

app.use(session({
    secret: process.env.SECRET,
    store: store,
    resave: false,
    saveUninitialized: false
}));

app.use('/', indexRouter)
app.use('/devices', devicesRouter)
app.use('/exercises', exercisesRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)

server.listen(process.env.PORT || 3000)

app.locals.io = io