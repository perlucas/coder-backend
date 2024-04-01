const mongoose = require('mongoose')

module.exports = {
    async connectToDB() {
        await mongoose.connect('mongodb://localhost:27017', {
            dbName: 'college'
        })
    },

    async closeConnection() {
        await mongoose.disconnect()
    }
}