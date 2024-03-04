const socket = io(); // conectarse al servidor

const getCurrentMessage = () => document.querySelector('#inputMessage').value

// cuando el cliente reciba un nuevo mensaje desde el servidor, agregarlo en el div, en un renglón aparte
// esto dará la sensación de chat
socket.on('message', message => {
    const paragraph = document.createElement('p')
    paragraph.innerText =`${message.socketId}: ${message.text}`

    document.querySelector('#chat').appendChild(paragraph)
})

// cuando el usuario haga click en el botón de enviar, entonces enviar el mensaje al servidor con websockets
document.querySelector('#sendMessage').addEventListener('click', () => {
    socket.emit('message', { socketId: socket.id, text: getCurrentMessage() })
})
