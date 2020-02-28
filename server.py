import random
import socketio
import asyncio
from aiohttp import web

sio = socketio.AsyncServer(async_mode='aiohttp')
app = web.Application()
sio.attach(app)

exercises = ['heladeria', 'fruteria', 'puzzles']
difficulties = ['facil', 'intermedia', 'dificil']
usernames = ['Jose', 'Amalia']

def create_random_exercise():
    return {
        'ejercicio': random.choice(exercises),
        'dificultad': random.choice(difficulties)
    }

@sio.event
async def connect(sid, environ):
    await sio.save_session(sid, {'username': random.choice(usernames)})
    random_exercise = create_random_exercise()
    async with sio.session(sid) as session:
        print(f"Cliente {session['username']} conectado!")
        print(f"Enviando {random_exercise} a {session['username']}")
        await sio.emit(
            'exercise_selected',
            data=random_exercise,
            room=sid
        )

@sio.event
async def results(sid, data):
    async with sio.session(sid) as session:
        print(f"Resultados de {session['username']} recibidos:", data)

@sio.event
async def disconnect(sid):
    async with sio.session(sid) as session:
        print(f"Cliente {session['username']} desconectado")


if __name__ == '__main__':
    web.run_app(app)