const crypto = require('crypto')

const SECRET_KEY = '8h2sd8271s12n1o2s'

module.exports = {
    createHashedValue: value => crypto
        .createHmac('sha256', SECRET_KEY)
        .update(value)
        .digest('base64')
}