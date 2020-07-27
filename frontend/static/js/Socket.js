import React from "react";

class Socket extends React.Component {

    // instance of websocket connection as a class property
    ws = new WebSocket('ws://127.0.0.1:5000/test/ ')
    ws_1 = new WebSocket('ws://127.0.0.1:5000/ ')
    componentDidMount() {
        this.ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
        }

        this.ws.onmessage = evt => {
        // listen to data sent from the websocket server
        const message = JSON.parse(evt.data)
        this.setState({dataFromServer: message})
        console.log(message)
        }

        this.ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss

        }

    }

    render(){
        return (
        <div class="test">
            <h1>Test socket!</h1>
        </div>  
        )
    }
}

export default Socket;