const UserModel = require('./models/user.model')

class UserDAO {

    async getUsers() {
        try {
            const users = await UserModel.find()
            return users.map(u => u.toObject())
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async getUserById(id) {
        try {
            const user = await UserModel.findById(id)
            return user?.toObject() ?? false
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async saveUser(user) {
        try {
            const savedUser = await UserModel.create(user)
            return savedUser.toObject()
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async updateUser(id, userData) {
        try {
            const result = await UserModel.updateOne({ _id: id }, { $set: userdata })
            return result
        }
        catch (err) {
            console.error(err)
            return null
        }
    }
}

module.exports = { UserDAO }