// ¿cómo quedaría la función map si quisiéramos recrearla?
const myMap = (arr, callback) => {
    const resultArr = [] // map genera un array como resultado, no olvidar!

    for (const element of arr) {
        const newElement = callback(element) // cada elemento del array resultado, es el output que nos dé el callback
        // al llamarlo sobre el elemento original
        resultArr.push(newElement)
    }

    return resultArr
}

const numbers = [1, 2, 3, 4]
console.log(numbers.map(n => n ** 2))
console.log(myMap(numbers, n => n ** 2)) // equivalente!