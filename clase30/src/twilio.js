const twilio = require("twilio")

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

const sendSMS = (message, to) => client.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to
})

module.exports = { sendSMS }