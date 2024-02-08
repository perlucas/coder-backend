const p1 = new Promise((resolve, reject) => {
    resolve(100)
})

const p2 = p1.then(result => result + 10)

const p3 = p2.then(result => result + 100)

const p4 = p3.then(result => result + 1000)

// p1
//     .then(result => result + 10)
//     .then(result => result + 100)
//     .then(result => result + 1000)
//     .then(console.log)


p4.then(console.log)