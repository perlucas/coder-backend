// 1. al hacer click en el submit, enviar los datos a /api/login mediante fetch
// 2. al obtener el accessToken, guardarlo en localStorage y redirigir a /

const form = document.getElementById('loginForm')

form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const formData = new FormData(form)

    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    fetch('/api/login', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => {
            // TODO: guardar el token en localStorage
            // TODO: redirigir a /
        })
})