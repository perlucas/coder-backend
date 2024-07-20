const { Router } = require('express')
const { PaymentsService } = require('../services/payments.service')

const router = Router()

const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
]

router.post('/payment-intents', async (req, res) => {
    const productRequestedId = +req.query.id
    const productRequested = products.find(p => p.id === productRequestedId)
    if (!productRequested) {
        return res.status(400).json({ error: 'invalid product' })
    }

    const paymentIntent = {
        amount: productRequested.price,
        currency: 'usd'
    }

    const service = new PaymentsService()
    const result = await service.createPaymentIntent(paymentIntent)
    console.log(result)
    res.send({ status: 'success', payload: result })
})

module.exports = router