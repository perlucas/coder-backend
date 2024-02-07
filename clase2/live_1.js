const numeros = [1, 2, 5, 6, 9, 10]
console.log(numeros)

// el método map me devuelve un nuevo array, producto de aplicar una función a cada elemento del original
const cuadrados = numeros.map(n => n ** 2)
console.log(cuadrados)

console.log(numeros.includes(2)) // true
console.log(numeros.includes(20)) // false