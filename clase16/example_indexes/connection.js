const mongoose = require('mongoose')

module.exports = {
    async connectToDB() {
        await mongoose.connect('mongodb://localhost:27017', {
            dbName: 'performance-test'
        })
    },

    async closeConnection() {
        await mongoose.disconnect()
    }
}