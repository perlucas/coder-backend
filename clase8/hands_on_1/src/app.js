const usersRouter = require('./routes/users.router')
const petsRouter = require('./routes/pets.router')
const express = require('express') // importamos el módulo de terceros, express
const multer = require('multer')

// configuramos multer. Usamos diskStorage para almacenar los archivos en el disco
// destination debe ser una función que recibe req (request), file (archivo luego de ser procesado por multer) y cb (callback que debe llamarse para indicar el directorio del archivo)
// filename, debe ser una función similar a la anterior, pero nos permitirá indicar el nombre del archivo cuando se haya cargado
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/../files`)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '__test') // simplemente para mostrar cómo se agrega __test al nombre de los archivos
    }
})

// instanciamos el uploader. Idealmente, esto deberíamos tenerlo en un archivo separado, para poder
// reutilizarlo en distintos routers
const uploader = multer({ storage })

const app = express() // creamos una instancia

app.use(express.static(`${__dirname}/../public`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

// es muy importante que el parámetro del método single, coincida con el atributo "name" del input file donde vendrá en archivo
app.post('/pets/file', uploader.single('image'), (req, res) => {
    console.log(req.body)
    console.log(req.file)

    res.end('Success!')
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})