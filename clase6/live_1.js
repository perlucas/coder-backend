const http = require('http')

// ésta función permite crear un servidor web
// debemos pasarle un callback que acepte los argumentos req y res.
// Estos argumentos nos permitirán interactuar con los datos de las requests
// y construir nuestras responses para cada una
const server = http.createServer((req, res) => {
    res.end('Hola desde mi servidor! Bienvenido/a, que disfrutes!')
})

// éste método nos permite poner a escuchar el servidor. Pensemos que entra en una especie
// de bucle en el que estará permanentemente escuchando por requests que lleguen, para construir sus responses
server.listen(8080, () => {
    console.log("Escuchando requests")
})