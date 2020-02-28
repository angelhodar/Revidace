import eventlet
import socketio

sio = socketio.Server()
app = socketio.WSGIApp(sio)

@sio.event
def connect(sid, environ):
    print(f"Client {sid} connected")
    print(environ)

@sio.event
def message(sid, data):
    print(f"Message data from {sid}:", data)

@sio.event
def disconnect(sid):
    print(f"Client {sid} disconnected")

if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('', 5000)), app)