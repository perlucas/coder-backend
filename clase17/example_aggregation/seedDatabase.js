const { connectToDB, closeConnection } = require('../connection')
const { faker } = require('@faker-js/faker')
const Order = require('./order.model')

const pickRandom = arr => arr[parseInt(Math.random() * arr.length)]

const randomName = () => pickRandom(["Vegan", "Pepperoni", "Cheese"])

const randomSize = () => pickRandom(["small", "medium", "large"])

const main = async () => {
    await connectToDB('aggregations')

    const NUM = 20

    for (let i = 0; i < NUM; i++) {
        await Order.create({
            name: randomName(),
            size: randomSize(),
            price: faker.commerce.price({ max: 20000 }),
            quantity: parseInt(Math.random() * 15),
            date: faker.date.between({
                from: '2022-03-03',
                to: Date.now()
            })
        })
    }

    console.log('Database has been seeded!')

    await closeConnection()
}

main()