const { config } = require("dotenv");

config()

module.exports = {
    dbConnectionUri: process.env.MONGO_URI,
    dbName: process.env.DB_NAME
}