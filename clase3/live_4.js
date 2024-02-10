// dividir es una función que devuelve una Promise.
// recordar que una Promise representa una tarea que se va intentar realizar en algún momento
// tenemos que crear una instancia de Promise, indicando como argumento un callback que espera 2 parámetros
// notificarExito es un callback que vamos a llamar cuando la tarea finalice OK. Éste parámetro se suele llamar "resolve"
// notificarFallo es un callback que vamos a llamar cuando la tarea falle. Éste parámetro se suele llamar "reject"
// el callback que le indicamos al constructor de la Promise, especifica qué tarea debe intentar hacer.
// En este caso es dividir a por b
function dividir(a, b) {
    const miDivision = new Promise((resolve, reject) => {
        if (b === 0) {
            reject('El divisor es 0!')
            return
        }

        const result = a/b
        resolve(result)
    })

    return miDivision
}

const mostrarResultado = result => {
    console.log(`Resultado de la división: ${result}`)
}

const mostrarError = message => {
    console.error(`Error: ${message}`)
}

// una instancia de Promise, nos provee los métodos then y catch
// "then" nos permite indicar un callback para que se llame cuando la tarea finalizó ok
// "catch" nos permite indicar un callback para que se llame cuando la tarea falló
dividir(20, 10)
    .then(mostrarResultado)
    .catch(mostrarError)

dividir(20, 0)
    .then(mostrarResultado)
    .catch(mostrarError)