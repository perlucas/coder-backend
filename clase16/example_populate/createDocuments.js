const { faker } = require('@faker-js/faker')
const { connectToDB, closeConnection } = require('./connection')
const StudentModel = require('./student.model')
const CourseModel = require('./course.model')
const ReportModel = require('./report.model')

const main = async () => {
    await connectToDB()

    await CourseModel.insertMany([
        {
            title: 'Álgebra',
            topics: ['Números imaginarios', 'Vectores', 'Factoriales'],
            professor: faker.person.fullName()
        },
        {
            title: 'Historia',
            topics: ['Introducción a la historia', 'Paleolítico', 'revolución Industrial'],
            professor: faker.person.fullName()
        },
        {
            title: 'Informática',
            topics: ['Office avanzado', 'Sistemas Operativos', 'Fundamentos de Hardware'],
            professor: faker.person.fullName()
        }
    ])

    for (let i = 0; i < 5; i++) {
        await StudentModel.create({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email()
        })
    }


    await ReportModel.insertMany([
        {
            grades: [{ course: 'Álgebra', rank: 5 }, { course: 'Historia', rank: 8 }]
        },
        {
            grades: [{ course: 'Literatura', rank: 6.5 }, { course: 'Química', rank: 7 }]
        }
    ])

    await closeConnection()
}

main()