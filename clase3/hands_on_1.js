const suma = (a, b) => new Promise((resolve, reject) => {
    if (a * b === 0) {
        reject('Operación innecesaria')
        return
    }

    const result = a+b
    if (result <= 0) {
        reject('La calculadora sólo debe devolver valores positivos')
        return
    }

    resolve(result)
})

const resta = (a, b) => new Promise((resolve, reject) => {
    if (a * b === 0) {
        reject('Operación inválida')
        return
    }

    const result = a-b
    if (result <= 0) {
        reject('La calculadora sólo debe devolver valores positivos')
        return
    }

    resolve(result)
})

const multiplicar = (a, b) => new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
        reject('Operación inválida')
        return
    }

    const result = a * b
    if (result <= 0) {
        reject('La calculadora sólo debe devolver valores positivos')
        return
    }

    resolve(result)
})

const dividir = (a, b) => new Promise((resolve, reject) => {
    if (a < 0 || b <= 0) {
        reject('Operación inválida')
        return
    }

    const result = a / b
    if (result <= 0) {
        reject('La calculadora sólo debe devolver valores positivos')
        return
    }

    resolve(result)
})

const calculos = async () => {
    try {
        console.log(await suma(4, 5))
        console.log(await resta(40, 5))
        console.log(await multiplicar(10, 5))
        console.log(await dividir(10, -5))
    }
    catch(err) {
        console.log(err)
    }
}

calculos()