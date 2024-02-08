// dividir es una función que devuelve una Promise.
function dividir(a, b) {
    const miDivision = new Promise((notificarExito, notificarFallo) => {
        if (b === 0) {
            notificarFallo('El divisor es 0!')
            return
        }

        const result = a/b
        notificarExito(result)
    })

    return miDivision
}

const mostrarResultado = result => {
    console.log(`Resultado de la división: ${result}`)
}

const mostrarError = message => {
    console.error(`Error: ${message}`)
}

// nota: una función async devuelve una Promise
const funcionAsync = async () => {
    try {
        const result = await dividir(20,10) // podemos hacer un await a cualquier promise dentro de una función async
        // si la tarea de la promise se ejecutó OK, entonces podemos mostrarla
        // si la tarea falló, habrá un error que deberemos tratar en catch
        mostrarResultado(result)
        
        const result2 = await dividir(20, 0)
        mostrarResultado(result2)
    }
    catch (err) {
        mostrarError(err)
    }
}

funcionAsync()