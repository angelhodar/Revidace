const socket = io()

socket.on('connect', function () {
    console.log('Mi ID es: ', socket.id)
    socket.on('device-ready', function (engine, name) {
        console.log('Se ha conectado un dispositivo de nombre' + name + ' utilizando ' + engine)
    })
})

