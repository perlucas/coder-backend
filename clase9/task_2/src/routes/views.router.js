const { Router } = require('express')

const router = Router()

router.get('/', (_, res) => {
    const data = {
        firstName: 'Lucas',
        lastName: 'Pereyra',
        title: 'Home' // este placeholder está en layouts/main
    }
    
    res.render('index', data)
})

const users = [
    { name: 'Peter', lastname: 'Parker', age: 30, email: 'peterp@gmail.com', phone: '+542354556688', role: 'admin' },
    { name: 'Tony', lastname: 'Stark', age: 35, email: 'tonyst4rk@gmail.com', phone: '+542354556689', role: 'user' },
    { name: 'Maria', lastname: 'Becerra', age: 27, email: 'mari_b@gmail.com', phone: '+542354556690', role: 'user' },
    { name: 'Leonardo', lastname: 'Di Caprio', age: 32, email: 'leo_dica@gmail.com', phone: '+542354556610', role: 'admin' },
]

const food = [
    { name: 'Asado 1kg.', price: 5000 },
    { name: 'Ravioles', price: 2500 },
    { name: 'Tomates 1kg.', price: 3055.5 },
    { name: 'Palta', price: 1050.75 },
    { name: 'Canelones', price: 2015.99 },
]

router.get('/user', (_, res) => {

    const user = users[ parseInt(Math.random() * users.length) ]

    const data = {
        ...user,
        isAdmin: user.role === 'admin',
        food,
        title: 'Datos del perfil'
    }

    res.render('user', data)
})

router.get('/validate-integer', (_, res) => {
    res.render('validate-integer', {
        title: 'Validador de enteros',
        scripts: [
            'validate-integer.js' // incluir este archivo, lanzará un GET a /js/validate-integer.js --> middleware 'static'
        ],
        styles: [
            'validate-integer.css'
        ]
    })
})

router.get('/register', (_, res) => {
    res.render('register', {
        title: 'Registrar usuario',
        scripts: [],
        styles: []
    })
})

module.exports = router