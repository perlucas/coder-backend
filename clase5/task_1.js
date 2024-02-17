const moment = require('moment')

const now = moment()

const birthdate = moment(new Date(1995, 9, 8))

if (!birthdate.isValid()) {
    throw new Error('Invalid date')
}

const diffInDays = now.diff(birthdate, 'days')

console.log(diffInDays)
// console.log(Number.parseInt(diffInDays/365))