const { connectToDB, closeConnection } = require('../connection')
const { faker } = require('@faker-js/faker')
const Student = require('./student.model')

const pickRandom = arr => arr[parseInt(Math.random() * arr.length)]

const randomGender = () => pickRandom(["M", "F"])

const randomGroup = () => pickRandom(["1A", "1B", "1C"])

const main = async () => {
    await connectToDB('students')

    const NUM = 20
    for (let i = 0; i < NUM; i++) {
        await Student.create({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            gender: randomGender(),
            group: randomGroup(),
            grade: parseInt(Math.random() * 10) + 1
        })
    }

    console.log('Students created!')

    await closeConnection()
}

main()