const downloadFile = () => {
    console.log('Downloading file...')

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('File'), 8000) // usa el event loop
    })
}

const main = () => {


    console.log(`Doing task 1...`)
    console.log(`Done task 1`)
    console.log(`Doing task 2...`)
    console.log(`Done task 2`)
    console.log(`Doing task 3...`)
    console.log(`Done task 3`)

    // no bloqueante!
    downloadFile()
        .then(file => console.log(`Downloaded file ${file}`))
        .catch(err => console.log(`Error downloading file: ${err}`))

    console.log(`Doing task 4...`)
    console.log(`Done task 4`)
    console.log(`Doing task 5...`)
    console.log(`Done task 5`)
    console.log(`Doing task 6...`)
    console.log(`Done task 6`)

}

main()