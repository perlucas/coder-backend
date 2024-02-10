const downloadFile = () => {
    console.log('Downloading file...')
    
    // simulamos un proceso que tarda mucho tiempo iterando en un for
    let sum = 0
    for (let i = 0; i < 130000; i++) {
        for (let j = 0; j < i; j++) {
            sum += 1
        }
    }

    return "File"
}

const main = () => {

    console.log(`Doing task 1...`)
    console.log(`Done task 1`)
    console.log(`Doing task 2...`)
    console.log(`Done task 2`)
    console.log(`Doing task 3...`)
    console.log(`Done task 3`)
    
    downloadFile() // bloqueante!
    
    console.log(`Doing task 4...`)
    console.log(`Done task 4`)
    console.log(`Doing task 5...`)
    console.log(`Done task 5`)
    console.log(`Doing task 6...`)
    console.log(`Done task 6`)

}

main()