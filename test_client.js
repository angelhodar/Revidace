var io = require('socket.io-client')('http://localhost:5000')

io.on('connect', function(){
    console.log('Connected to server')

    var data = {
        "engine": "Python",
        "manufacturer": "Oculus",
        "device": "Quest",
        "account": "angel"
    }

    console.log('Emitting data: ' + JSON.stringify(data))
    io.emit('device', data);
    
    io.on('exercise', function(data){
        console.log('Exercise received: ' + data)
    })
})