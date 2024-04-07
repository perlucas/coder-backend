const getCookieBtn = document.getElementById('getCookie')

getCookieBtn.addEventListener('click', function () {
    fetch('/cookies/getCookie')
        .then(d => d.json())
        .then(console.log)
})

const submitCookieBtn = document.getElementById('submitCookie')

submitCookieBtn.addEventListener('click', function () {
    fetch('/cookies/setCookie', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: document.getElementById('user').value,
            email: document.getElementById('userEmail').value
        })
    })
        .then(d => d.json())
        .then(console.log)
})