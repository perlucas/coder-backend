// 1. enviar request a /api/users/current, incluir el accessToken
// si no obtuve un HTTP 200, redirigir a /login
// si obtuve un HTTP 200, mostrar los datos del usuario

const accessToken = localStorage.getItem('accessToken')

const main = async () => {

    try {
        // TODO: incluir el accessToken
        const res = await fetch('/api/users/current')

        if (res.status !== 200) {
            // TODO: redireccionar a /login
            return
        }

        // TODO: mostrar datos del usuario
        const { user } = await res.json()
        document.getElementById('content').innerHTML = '???'
    }
    catch (err) {
        throw err
    }
}

main()