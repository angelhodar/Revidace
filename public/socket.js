const socketio = io()

socketio.on('connect', function (socket) {
    console.log("Mi ID es: ", socketio.id)
})

socketio.on('device-ready', function (data) {
    console.log('Se ha conectado un dispositivo: ' + data)
})