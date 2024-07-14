class MailingService {

    notifyProvidersOutOfStock(products) {
        const description = products.map(p => `* ${p._id} ${p.name}`).join('\n')

        console.log(`
        The following products have run out of stock:
        ${description}
        `)
    }

}

module.exports = { MailingService }