// JS del lado del cliente (browser)

const socket = io()

const messageLogs = document.getElementById('messageLogs')
const chatBox = document.getElementById('chatBox')
let user

// autenticar usuario
Swal.fire({
    title: "Identifícate para continuar",
    input: "text",
    text: "Ingresa tu username para identificarte en el chat",
    inputValidator: (value) => {
        if (!value) {
            return "¡Necesitas un nombre de usuario para continuar!"
        }
        return false
    },
    allowOutsideClick: false
})
    .then(input => {
        user = input.value
        console.log(user)
    })

// enviar mensajes cuando presione Enter
chatBox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const message = chatBox.value

        if (message.trim().length > 0) {
            socket.emit('message', { user, message })
            chatBox.value = ''
        }
    }
})

// mostrar los mensajes nuevos en la vista
socket.on('message', (data) => {
    const { user, message } = data

    let content = messageLogs.innerHTML
    content += `${user} dice: ${message}</br>`

    messageLogs.innerHTML = content
})