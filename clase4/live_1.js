// importar el módulo o librería fs
const fs = require('fs')

// leer A
const fileA = fs.readFileSync('A.txt', 'utf-8')
console.log(fileA)

// leer B
const fileB = fs.readFileSync('./B.txt', 'utf-8')
console.log(fileB)

// escribir C
fs.writeFileSync('./C.txt', fileA + '\n' + fileB)

// eliminar A
fs.unlinkSync('./A.txt')

// eliminar B
fs.unlinkSync('./B.txt')