const dotenv = require('dotenv')

dotenv.config()
// Warning! el archivo .env debe estar en la carpeta donde ejecutamos el comando de node

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    ENV: process.env.ENV,
    SECRET: process.env.SECRET,
    PORT: process.env.PORT,
}