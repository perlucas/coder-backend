const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

// configuramos handlebars como nuestro template engine por defecto
// esto nos permitirá poder utilizarlo con el método res.render()
app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {

    // datos de prueba, se utilizarán para reemplazar los placeholders
    const data = {
        firstName: 'Lucas',
        lastName: 'Pereyra',
        title: 'Mi página con handlebars' // este placeholder está en layouts/main
    }

    // el 1er parámetro es el nombre de la vista en la carpeta views
    // el 2do parámetro es un objeto con valores para cada placeholder
    res.render('index', data)
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})