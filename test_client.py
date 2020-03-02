import os
import socketio

sio = socketio.Client()

exercises_results = {
    'heladeria' : {'helados servidos' : 10, 'clientes servidos' : 5, 'tiempo' : 25},
    'fruteria' : {'frutas vendidas' : 10, 'clientes servidos' : 3, 'tiempo' : 18},
    'puzzles' : {'puzzles resueltos' : 7, 'puzzles incorrectos' : 2, 'tiempo' : 25}
}

exercise_data = None

@sio.event
def connect():
    print('Cliente conectado al servidor!')


@sio.event
def exercise_selected(data):
    global exercise_data 
    exercise_data = data
    print(f"Datos del ejercicio recibidos: {exercise_data}")


@sio.event
def disconnect():
    print('Desconectado del servidor')


def main():
    sio.connect(os.getenv('LOCAL'))
    sio.sleep(10)
    exercise_data['resultados'] = exercises_results[exercise_data['ejercicio']]
    print(f"Enviando resultados: {exercise_data}")
    sio.emit('results', exercise_data)
    sio.wait()

if __name__ == '__main__':
    main()