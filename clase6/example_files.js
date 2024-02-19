const fs = require('fs')
const express = require('express')

const app = express()

// ejemplo usando async/await. El callback que colocamos para manejar una ruta puede ser async
// ésto nos permite utilizar await dentro del mismo. Express automáticamente hará todo lo necesario para poder
// utilizar el callback async
app.get('/file', async (req, res) => {
    try {
        // la constante __dirname automáticamente contiene el path del directorio que contiene a éste archivo .js
        const fileContents = await fs.promises.readFile(__dirname + '/../saludo.txt')
        res.setHeader('Content-Type', 'text/html') // esto es para que no descargue el contenido como binario
        res.send(fileContents)
    }
    catch (err) {
        res.send('Error!')
    }
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})