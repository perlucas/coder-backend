const { faker } = require('@faker-js/faker')
const { connectToDB, closeConnection } = require('./connection')
const UserModel = require('./user.model')

// const numUsers = 5000
const numUsers = 100000

const main = async () => {
    await connectToDB()

    let count = 0
    while (count < numUsers) {
        try {
            await UserModel.create({
                email: faker.internet.email(),
                name: faker.person.firstName(),
                lastName: faker.person.lastName(),
                age: faker.number.int({ min: 20, max: 80 })
            })
            count++
        }
        catch (err) { 
            // console.error(err)
        }
    }

    await closeConnection()
}

main()