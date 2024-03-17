// Javascript desde el browser

const socket = io()
let username
const chatBox = document.getElementById('chatBox')
const messageLogs = document.getElementById('messageLogs')

// bloquear pantalla del usuario y pedirle un username
Swal.fire({
    title: 'Ingresa un username',
    input: 'text',
    text: 'Debes identificarte primero!',
    inputValidator: (value) => {
        return !value && '¡Debes escribir un username válido!'
    },
    allowOutsideClick: false
})
    .then(result => {
        username = result.value
        console.log(`Usuario identificado como: ${username}`)

        // notificamos al server que se conectó
        socket.emit('user-connected', username)
    })


// escuchar el evento "Enter" y enviar el mensaje al chat
chatBox.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        const text = chatBox.value

        if (text.trim().length > 0) { // el mensaje no es vacio
            socket.emit('message', { username, text })
            chatBox.value = ''
        }

    }
})

// escuchar los mensajes desde el servidor (y mostrarlos)
socket.on('message', (data) => {
    const { username, text } = data

    messageLogs.innerHTML += `${username} dice: ${text}</br>`
})

socket.on('user-joined-chat', (username) => {
    Swal.fire({
        text: `Nuevo usuario conectado: ${username}`,
        toast: true,
        position: 'top-right'
    })
})

