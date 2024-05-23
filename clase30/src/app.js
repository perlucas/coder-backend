require('./config')

const express = require('express')
const transport = require('./transport')
const { sendSMS } = require('./twilio')

const app = express()
app.use(express.json())

app.get('/mail', async (_, res) => {
    await transport.sendMail({
        from: 'Lucas',
        to: 'lucas_pereyra@hotmail.es',
        html: `
        <div>
        Hola Mundo! Prueba en vivo!
        <img src='cid:meme1' />
        </div>
        `,
        subject: 'Prueba en vivo Coder',
        attachments: [
            {
                filename: 'meme.jpg',
                path: `${__dirname}/images/meme.jpg`,
                cid: 'meme1'
            }
        ]
    })

    res.send('Mail enviado!')
})

app.get('/sms', async (_, res) => {
    await sendSMS('Mensaje de prueba! Coder en Vivo!', '+542302513873')
    res.send('Message sent!')
})


app.listen(8080, () => {
    console.log('Servidor listo!')
})