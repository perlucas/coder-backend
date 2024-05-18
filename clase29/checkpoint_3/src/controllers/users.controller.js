const { User } = require('../dao')

const userDAO = new User()

module.exports = {

    getUsers: async (_, res) => {
        const users = await userDAO.getUsers()
        if (!users) {
            return res.sendError({ message: 'Something went wrong!' })
        }

        res.sendSuccess(users)
    },

    getUserById: async (req, res) => {
        const id = req.params.id
        const user = await userDAO.getUserById(id)
        if (!user) {
            return user === false
                ? res.sendError({ message: 'Not found!' }, 404)
                : res.sendError({ message: 'Something went wrong!' })
        }

        res.sendSuccess(user)
    },

    saveUser: async (req, res) => {
        const userData = req.body
        const user = await userDAO.saveUser(userData)
        if (!user) {
            return res.sendError({ message: 'Something went wrong!' })
        }

        res.sendSuccess(user)
    }
}