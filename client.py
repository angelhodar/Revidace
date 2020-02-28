import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('Connected')

@sio.event
def message(data):
    print('message received with ', data)
    sio.emit('my response', {'response': 'my response'})

@sio.event
def disconnect():
    print('Disconnected')

sio.connect('http://localhost:5000')
sio.sleep(3)
sio.send({'prueba': 'hola'})
sio.wait()