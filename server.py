import os
import random
import eventlet
import socketio
from flask import Flask, render_template

flask_app = Flask(__name__)
flask_app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

sio = socketio.Server()
app = socketio.WSGIApp(sio, flask_app)

connected_devices = {}

exercises = ['heladeria', 'fruteria', 'puzzles']
difficulties = ['facil', 'intermedia', 'dificil']
usernames = ['Jose', 'Amalia', 'Ana', 'Monica']

def create_random_exercise(username):
    return {
        'usuario': username,
        'ejercicio': random.choice(exercises),
        'dificultad': random.choice(difficulties)
    }


@sio.event
def connect(sid, environ):
    username = random.choice(usernames)
    random_exercise = create_random_exercise(username)
    connected_devices[sid] = random_exercise
    print(f"Cliente {sid} conectado!")
    print(f"Enviando {random_exercise} a {username}")
    sio.emit(
        'exercise_selected',
        data=random_exercise,
        room=sid
    )


@sio.event
def results(sid, data):
    connected_devices[sid] = data
    print(f"Resultados de {sid} recibidos:", data)


@sio.event
def disconnect(sid):
    del connected_devices[sid]
    print(f"Cliente {sid} desconectado")


@flask_app.route("/")
def index():
    return render_template('index.html', devices=connected_devices)


if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('', 5000)), app)