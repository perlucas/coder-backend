const { fakerES: faker } = require("@faker-js/faker")

const generateProduct = () => ({
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: faker.number.int({ min: 0, max: 200 }),
    id: faker.database.mongodbObjectId(),
    image: faker.image.url()
})

module.exports = { generateProduct }