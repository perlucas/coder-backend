const { UsersService } = require("../services/users/users.service")

const usersService = new UsersService()

module.exports = {
    /**
     * 
     * @type {import("express").RequestHandler}
     */
    createUser: async (req, res) => {
        const { name, email, age } = req.body

        const newUser =  usersService.createUser(name, email, age)
        res.json({ status: 'success', payload: newUser })
    }
}