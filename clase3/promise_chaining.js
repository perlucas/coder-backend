const p1 = new Promise(resolve => {
    resolve(100)
})

// si el callback que recibe then, termina con un return, entonces se convierte en una nueva Promise
const p2 = p1.then(result => { return result + 10 })

const p3 = p2.then(result => result + 100)

const p4 = p3.then(result => result + 1000)

p1
    .then(result => result + 10)
    .then(result => result + 100)
    .then(result => {
        return result + 1000
    })
    .then(console.log)
    .catch(err => console.error(err))


p4.then(console.log)