const { fakerES: faker } = require('@faker-js/faker')
const { generateProduct } = require("./generateProduct")

const generateUser = () => {
    const numProducts = parseInt(Math.random() * 10)
    const products = []
    for (let i = 0; i < numProducts; i++) {
        products.push(generateProduct())
    }

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        products,
        image: faker.image.url(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email()
    }
}

module.exports = { generateUser }