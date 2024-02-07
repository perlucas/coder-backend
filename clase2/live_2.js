const resumen = {
    electricidad: 15000,
    internet: 10000,
    agua: 5000,
    gas: 255.80
}

// mostrar los servicios facturados
const servicios = Object.keys(resumen)
console.log(`Servicios: ${servicios.join(', ')}`)

console.log('\n') // salto de línea

// mostrar el detalle de cada servicios
const detalles = Object.entries(resumen)
console.log('Detalles: ')
// recordar que cada elemento será un array de 2 posiciones, en la forma [clave, valor]
detalles.forEach(d => console.log(`--> ${d[0]}: ${d[1]}`))

console.log('\n') // salto de línea

// mostrar el total a pagar
const total = Object.values(resumen).reduce((total, actual) => total + actual, 0)
console.log(`Total a pagar: ${total}`)