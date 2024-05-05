const process = require('process')

const arguments = process.argv
// Por defecto, siempre tenemos 2 argumentos: el path hacia el ejecutable de node 
// y el path hacia el archivo .js ejecutado

console.log('Argumentos: ', arguments)

const userArguments = arguments.slice(2)
// Node automáticamente nos devuelve un array de strings, cada uno es una opción/argumento enviado desde la CLI

console.log('Argumentos del usuario: ', userArguments)