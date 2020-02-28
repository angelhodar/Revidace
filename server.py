import eventlet
import socketio
import random

sio = socketio.Server()
app = socketio.WSGIApp(sio)

exercises = ['Heladeria', 'Tienda', 'Ferreteria']
difficulties = ['Easy', 'Medium', 'Hard']

@sio.event
def connect(sid, environ):
    print(f"Client {sid} connected!")
    sio.sleep(2)
    sio.emit(
        'exercise_selected',
        data={'exercise': random.choice(exercises), 'difficulty': random.choice(difficulties)},
        room=sid
    )

@sio.event
def results(sid, data):
    print(f"Results data from {sid} received:", data)

@sio.event
def disconnect(sid):
    print(f"Client {sid} disconnected")

if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('', 5000)), app)