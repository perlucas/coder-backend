const { login } = require("./login")

console.log('Testing de login')

const totalTests = 5
let passedTests = 0
let result
let expectedResult


console.log('Test 1: Debe fallar si no se envía el password')
// escribir el test aquí
result = login('coderUser')
// expectedResult = 'No se ha proporcionado un password'
if (result === expectedResult) {
    console.log('\u2713 Test 1 pasado')
} else {
    console.log('\u2715 Test 1 fallido')
}