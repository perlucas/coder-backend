const { connectToDB, closeConnection } = require('../connection')
const Student = require('./student.model')

const main = async () => {
    await connectToDB('students')

    const results = await Student.paginate({
        gender: 'M'
    }, {
        limit: 5,
        page: 1
    })
    console.log(results)

    await closeConnection()
}

main()