const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

// configuramos handlebars como nuestro template engine por defecto
// esto nos permitirá poder utilizarlo con el método res.render()
app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

const users = [
    { name: 'Peter', lastname: 'Parker', age: 30, email: 'peterp@gmail.com', phone: '+542354556688', role: 'admin' },
    { name: 'Tony', lastname: 'Stark', age: 35, email: 'tonyst4rk@gmail.com', phone: '+542354556689', role: 'user' },
    { name: 'Maria', lastname: 'Becerra', age: 27, email: 'mari_b@gmail.com', phone: '+542354556690', role: 'user' },
    { name: 'Leonardo', lastname: 'Di Caprio', age: 32, email: 'leo_dica@gmail.com', phone: '+542354556610', role: 'admin' },
]

app.get('/', (req, res) => {
    const data = {
        firstName: 'Lucas',
        lastName: 'Pereyra',
        title: 'Home' // este placeholder está en layouts/main
    }

    res.render('index', data)
})

const food = [
    { name: 'Asado 1kg.', price: 5000 },
    { name: 'Ravioles', price: 2500 },
    { name: 'Tomates 1kg.', price: 3055.5 },
    { name: 'Palta', price: 1050.75 },
    { name: 'Canelones', price: 2015.99 },
]

app.get('/user', (req, res) => {

    const user = users[ parseInt(Math.random() * users.length) ]

    const data = {
        ...user,
        isAdmin: user.role === 'admin',
        food,
        title: 'Datos del perfil'
    }

    res.render('user', data)
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})