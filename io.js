// Models
const DeviceSession = require('./models/device')

function create_io(io){
    io.on('connection', function (socket) {
        console.log(`Client connected: socket.id`)

        socket.on('device', function (data) {
            device = new DeviceSession({
                sid: socket.id,
                engine: data.engine,
                device: data.device,
                account: data.account,
                results: []
            })
            
            device.save(function (err) {
                if (err) return console.error(err);
                console.log(`Device ${socket.id} saved to DB`)
            })

        })

        socket.on('results', function (data, callback) {
            DeviceSession.findOneAndUpdate({sid: socket.sid}, {$push: {results: data}})
            callback('OK')
        })

        socket.on('disconnect', function () {
            console.log(`Client disconnected: ${socket.id}`)
            DeviceSession.deleteOne({sid: socket.id}, function(error){
                if (error) console.log(error)
                console.log(`Client ${socket.id} deleted from DB`)
            })
        })
    })

    return io
}

module.exports = create_io