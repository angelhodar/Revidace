import os
import socketio

sio = socketio.Client()

exercise = None
difficulty = None

@sio.event
def connect():
    print('Connected to server!')

@sio.event
def message(data):
    print('Message received from server:', data)

@sio.event
def exercise_selected(data):
    exercise = data['exercise']
    difficulty = data['difficulty']
    print(f"Exercise {exercise} with difficulty {difficulty} received from server")

@sio.event
def disconnect():
    print('Disconnected from server')

sio.connect(os.get('SERVER_IP'))
sio.sleep(6)
sio.emit('results', {'exercise': exercise, 'results': {'ice cream' : 4, 'time' : 260}})
sio.disconnect()