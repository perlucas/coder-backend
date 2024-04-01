const { connectToDB, closeConnection } = require('./connection')
const UserModel = require('./user.model')

const main = async () => {
    await connectToDB()

    let queryCount = 1
    const logQuery = async (query) => {
        const stats = await query().explain()
        console.log(`Query ${queryCount}, tiempo en MS: ${stats.executionStats.executionTimeMillis}, examinados ${stats.executionStats.totalDocsExamined} documentos`)
        queryCount++
    }

    await logQuery(() => UserModel.find())

    await logQuery(() => UserModel.find({ age: { $lt: 27 } }))

    await logQuery(() => UserModel.find({ $and: [{ age: { $lt: 35 } }, { age: { $gt: 30 } }] }))

    await logQuery(() => UserModel.find({ name: 'Clemens' }))

    await closeConnection()
}

main()
