import os
import random
import socketio
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates

fast_app = FastAPI(debug=True)
templates = Jinja2Templates(directory="templates")

sio = socketio.AsyncServer(
    async_mode='asgi',
    cors_allowed_origins='*'
)

app = socketio.ASGIApp(
    socketio_server=sio,
    other_asgi_app=fast_app
)

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
async def connect(sid, environ):
    username = random.choice(usernames)
    random_exercise = create_random_exercise(username)
    connected_devices[sid] = random_exercise
    print(f"Cliente {sid} conectado!")
    print(f"Enviando {random_exercise} a {username}")
    await sio.emit(
        'exercise_selected',
        data=random_exercise,
        room=sid
    )


@sio.event
async def results(sid, data):
    connected_devices[sid] = data
    print(f"Resultados de {sid} recibidos:", data)


@sio.event
async def disconnect(sid):
    del connected_devices[sid]
    print(f"Cliente {sid} desconectado")


@fast_app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "devices": connected_devices})