
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
        .then(console.log)
})