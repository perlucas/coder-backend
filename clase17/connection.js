const mongoose = require('mongoose')

module.exports = {
    async connectToDB(dbName) {
        await mongoose.connect('mongodb://localhost:27017', {
            dbName
        })
    },

    async closeConnection() {
        await mongoose.disconnect()
    }
}