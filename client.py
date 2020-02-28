import os
import socketio

sio = socketio.Client()

exercises_results = {
    'heladeria' : {'helados servidos' : 10, 'clientes servidos' : 5, 'tiempo' : 25},
    'fruteria' : {'frutas vendidas' : 10, 'clientes servidos' : 3, 'tiempo' : 18},
    'puzzles' : {'puzzles resueltos' : 7, 'puzzles incorrectos' : 2, 'tiempo' : 25}
}

exercise = None
difficulty = None

@sio.event
def connect():
    print('Cliente conectado al servidor!')

@sio.event
def exercise_selected(data):
    global exercise 
    global difficulty
    exercise = data['ejercicio']
    difficulty = data['dificultad']
    print(f"Recibido ejercicio {exercise} con dificultad {difficulty}")

@sio.event
def disconnect():
    print('Desconectado del servidor')

def main():
    sio.connect(os.getenv('SERVER_IP'))
    sio.sleep(5)
    sio.emit('results', {'ejercicio': exercise, 'resultados': exercises_results[exercise]})
    sio.wait()

if __name__ == '__main__':
    main()