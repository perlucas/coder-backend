const UserModel = require('../models/user.model')

class UserManager {

    constructor() { }

    async prepare() {
        // No hacer nada. 
        // Podríamos chequear que la conexión existe y está funcionando
        if (UserModel.db.readyState !== 1) {
            throw new Error('must connect to mongodb!')
        }
    }

    async getAll(filters = null) {
        const { genre, name } = { genre: null, name: null, ...filters }

        const queryConditions = []

        if (genre) {
            queryConditions.push({ genre })
        }

        if (name) {
            queryConditions.push({
                name: {
                    $regex: `^${name}`,
                    $options: 'i'
                }
            })
        }

        const users = queryConditions.length
            ? await UserModel.find({ $and: queryConditions })
            : await UserModel.find()

        return users.map(d => d.toObject({ virtuals: true }))
    }

    async deleteById(id) {
        await UserModel.deleteOne({ _id: id })
    }

    async addUser(user) {
        const { name, lastName, email, age, genre } = user
        const invalidAge = isNaN(+age) || +age <= 0

        if (!name || !lastName || !email || invalidAge) {
            throw new Error('invalid user data')
        }

        await UserModel.create({
            name,
            lastName,
            email,
            age: +age,
            genre,
            role: 'user'
        })
    }

    async getByEmail(email) {
        return await UserModel.findOne({ email })
    }
}

module.exports = UserManager