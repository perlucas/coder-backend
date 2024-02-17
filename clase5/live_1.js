// la función "require", puede recibir como parámetro el path hacia un archivo de Javascript (sin la extensión .js)
// require ejecuta el archivo que le pasamos, y nos devuelve un objeto con lo que estemos exportando desde ese archivo
// más adelante, veremos que require también nos servirá para importar código de librerías nativas de Node o que instalemos.
const validations = require('./myModule1')
// validations es un objeto. Será el objeto que asignemos en module.exports en el archivo myModule.js
// también podemos hacer const { positiveNumber } = require('./myModule')

console.log(validations.positiveNumber(10))

console.log(validations.stringNotEmpty(''))