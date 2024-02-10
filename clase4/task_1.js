// Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual.
// Posteriormente leer el archivo y mostrar el contenido por consola. 
// Utilizar el módulo fs y sus operaciones de tipo callback.

const fs = require('fs')

const now = new Date()

const filename = './fechaHora.txt'

fs.writeFile(filename, now.toDateString(), (err) => {
    if (err) {
        console.log('Error writing date')
        return
    }

    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading date')
            return
        }

        console.log(`File content is: ${data}`)
    })
})