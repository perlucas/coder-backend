const fs = require('fs')

const task1 = new Promise((resolve) => {
    console.log('--> started task 1')

    fs.readFileSync('./example2.txt')
    fs.readFileSync('./example2.txt')
    fs.readFileSync('./example2.txt')
    fs.readFileSync('./example2.txt')
    fs.readFileSync('./example2.txt')
    fs.readFileSync('./example2.txt')
    fs.readFileSync('./example2.txt')
    fs.readFileSync('./example2.txt')
    // await fs.promises.readFile('./example2.txt')
    // await fs.promises.readFile('./example2.txt')
    // await fs.promises.readFile('./example2.txt')
    // await fs.promises.readFile('./example2.txt')
    // await fs.promises.readFile('./example2.txt')
    // await fs.promises.readFile('./example2.txt')
    // await fs.promises.readFile('./example2.txt')
    // await fs.promises.readFile('./example2.txt')

    console.log('<-- finished task 1')
    resolve()
})

const task2 = new Promise((resolve) => {
    console.log('->> started task 2')
    let result = 0
    for (let i = 0; i < 10000; i++) {
        result += i
    }
    console.log('<-- finished task 2')
    resolve(result)
})


Promise.all([task1, task2])
    .then(() => console.log('finished all tasks'))

// task1
//     .then(() => console.log('Listo, task 1'))

// task2
//     .then(() => console.log('Listo, task 2'))