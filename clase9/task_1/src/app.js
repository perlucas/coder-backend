const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

// configuramos handlebars como nuestro template engine por defecto
// esto nos permitirá poder utilizarlo con el método res.render()
app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

const users = [
    { name: 'Peter', lastname: 'Parker', age: 30, email: 'peterp@gmail.com', phone: '+542354556688' },
    { name: 'Tony', lastname: 'Stark', age: 35, email: 'tonyst4rk@gmail.com', phone: '+542354556689' },
    { name: 'Maria', lastname: 'Becerra', age: 27, email: 'mari_b@gmail.com', phone: '+542354556690' },
    { name: 'Leonardo', lastname: 'Di Caprio', age: 32, email: 'leo_dica@gmail.com', phone: '+542354556610' },
]

app.get('/', (req, res) => {
    const data = {
        firstName: 'Lucas',
        lastName: 'Pereyra',
        title: 'Mi página con handlebars' // este placeholder está en layouts/main
    }

    res.render('index', data)
})

app.get('/user', (req, res) => {

    const user = users[ parseInt(Math.random() * users.length) ]

    const data = {
        ...user,
        title: 'Mi página con handlebars'
    }

    res.render('user', data)
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})