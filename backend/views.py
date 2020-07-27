from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__, static_folder='../frontend/static/source_file', template_folder="../frontend/static")
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('message', namespace='/test')
def handle_my_custom_namespace_event(json):
    print('received json: ' + str(json))


@socketio.on('message')
def handle():
    print('received')


@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my response', {'data': 'Connected'})


if __name__ == '__main__':
    socketio.run(app)
