// importar el módulo o librería fs
const fs = require('fs')

const main = async () => {
    try {
        // leer A y B en paralelo
        const [fileA, fileB] = await Promise.all([
            fs.promises.readFile('./A.txt', 'utf-8'),
            fs.promises.readFile('./B.txt', 'utf-8'),
        ])
    
        console.log(fileA, fileB)
    
        // escribir C
        await fs.promises.writeFile('./C.txt', fileA + '\n' + fileB, 'utf-8')
    
        // eliminar A y B en paralelo
        await Promise.all([
            fs.promises.unlink('./A.txt'),
            fs.promises.unlink('./B.txt')
        ])

    }
    catch (err) {
        console.log(err)
    }
}

main()