const { config } = require('dotenv')

config()

module.exports = {
    mongoUri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME
}