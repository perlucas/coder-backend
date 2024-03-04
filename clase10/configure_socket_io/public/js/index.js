const socket = io(); // conectarse al servidor

// enviar un mensaje en el canal 'message'
socket.emit('message', {
    text: 'Hola mundo!'
})

// escuchar los mensajes que vienen en distintos canales
socket.on('individual', data => {
    console.log(`Mensaje individual: ${data}`)
})

socket.on('all', data => {
    console.log(`Mensaje para todos: ${data}`)
})

socket.on('group', data => {
    console.log(`Mensaje para broadcast: ${data}`)
})