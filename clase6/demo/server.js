const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hola mundo! Soy Lucas')
})

server.listen(8080, () => {
    console.log('Servidor listo y preparado!')
})