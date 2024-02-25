const { Router } = require('express')

// Router es una función, por eso no hacemos "new". Puede ser confuso al iniciar con mayúsculas
const router = Router()

const users = [
    { id: 100, name: 'Peter', lastname: 'Parker', gender: 'M' },
    { id: 200, name: 'John', lastname: 'Wick', gender: 'M' },
    { id: 300, name: 'Susana', lastname: 'Giménez', gender: 'F' }
]

router.get('/', (_, res) => {
    res.status(200).json(users)
})

router.post('/', (req, res) => {
    const user = req.body
    user.id = Number.parseInt(Math.random() * 1000)

    users.push(user)

    res.status(201).json(user)
})

// podemos probar habilitando la siguiente ruta, y veremos que, como estamos usando este router en el path base /api/users,
// podremos verla en acción entrando a /api/users/test. Aquí vemos cómo express concatena las rutas definidas en el router con la
// enviada por parámetro en app.use(...)
// router.get('/test', (_, res) => {
//     res.end('Test!')
// })

module.exports = router