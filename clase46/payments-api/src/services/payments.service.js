const { Stripe } = require('stripe')

class PaymentsService {
    constructor() {
        this.stripe = new Stripe(process.env.STRIPE_API_KEY)
    }

    async createPaymentIntent(paymentIntent) {
        const intent = await this.stripe.paymentIntents.create(paymentIntent)
        return intent
    }
}

module.exports = { PaymentsService }