
// 1) Ejemplo de uso de trim
const saludo = "   Hola   "
console.log(`-${saludo.trim()}-`)

// 2) Ejemplo de uso de flat
const numeros = [1, 2, 3, [4, 5, 6], [7, 8], 9]
console.log(numeros.flat())
// el método flat (aplanar), extrae cada elemento que sea un array hacia el array "padre"