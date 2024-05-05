// el listener se ejecutará cuando el proceso padre llame a child.send()
process.on('message', () => {
    let result = 0
    for (let i = 0; i < 5e9; i++) {
        result += i
    }

    // si estamos en un child process, éste enviará un mensaje al proceso que lo creó (padre)
    process.send(result)
    // process.exit() // podemos finalizarlos para evitar acumularlos
})