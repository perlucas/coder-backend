const bcrypt = require('bcrypt')
const { faker } = require('@faker-js/faker')
const User = require('../models/user.model')

module.exports = {
    /**
     * @type {import("express").RequestHandler}
     */
    registerUser: async (req, res) => {
        const { name, age, username, password } = req.body

        if (
            [name, username, password].some(v => !v || typeof v !== 'string') ||
            !age ||
            typeof age !== 'number' ||
            age <= 0 ||
            password.length < 8
        ) {
            return res.status(400).send({ status: 'error', message: 'Invalid user data' })
        }

        const usernameInUse = (await User.countDocuments({ username })) > 0
        if (usernameInUse) {
            return res.status(400).send({ status: 'error', message: 'Username is in use' })
        }

        await User.create({
            name,
            age,
            username,
            password: await bcrypt.hash(password, 10)
        })

        res.send({ status: 'success', user: { username } })
    },

    /**
     * @type {import("express").RequestHandler}
     */
    loginUser: async (req, res) => {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).send({ status: 'error', message: 'Invalid username' })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (isValidPassword) {
            return res.send({ status: 'success', message: 'User logged in' })
        }

        res.send(400).send({ status: 'error', message: 'Invalid credentials' })
    },

    /**
     * @type {import('express').RequestHandler}
     */
    mockUser: (_, res) => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()

        const user = {
            name: `${firstName} ${lastName}`,
            username: faker.internet.userName({ firstName, lastName }),
            age: faker.number.int({ min: 20, max: 45 }),
            password: faker.internet.password({ length: 10 })
        }

        res.send(user)
    }
}