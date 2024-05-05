const process = require('process')

process.on('exit', code => {
    if (code === -4) {
        console.log('Process finished due to invalid parameters for listNumbers')
    }
})

const listNumbers = (...numbers) => {
    const dataTypes = numbers.map(n => typeof n)
    const hasNonNumeric = dataTypes.find(t => t !== 'number')

    if (hasNonNumeric) {
        console.error('Invalid parameters: ' + dataTypes.join(', '))
        process.exit(-4)
    }

    numbers.forEach(n => console.log(n))
}

listNumbers(1, 2, true)