// importar el módulo o librería fs
const fs = require('fs')

// leer A
fs.readFile('./A.txt', 'utf-8', (err, fileA) => {
    if (err) {
        console.log('Error reading A')
        return
    }

    console.log(fileA)
    
    // leer B
    fs.readFile('./B.txt', 'utf-8', (err, fileB) => {
        if (err) {
            console.log('Error reading B')
            return
        }
    
        console.log(fileB)

        // escribir C
        fs.writeFile('./C.txt', fileA + '\n' + fileB, 'utf-8', (err) => {
            if (err) {
                console.log('Error writing C')
                return
            }

            // eliminar A
            fs.unlink('./A.txt', (err) => {
                if (err) {
                    console.log('Error deleting A')
                    return
                }

                // eliminar B
                fs.unlink('./B.txt', (err) => {
                    if (err) {
                        console.log('Error deleting B')
                        return
                    }
                }) // CALLBACK HELL!
            })

        })
    })
})