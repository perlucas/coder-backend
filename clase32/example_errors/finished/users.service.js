const { CustomError } = require("../errors/CustomError")
const { ErrorCodes } = require("../errors/errorCodes")
const { generateInvalidUserDataError } = require("./errors")

const users = []

class UsersService {

    createUser(name, email, age) {
        const hasInvalidNameOrEmail = [name, email].some(v => !v || typeof v !== 'string')
        const hasInvalidAge = !age || typeof age !== 'number' || age <= 0
        if (hasInvalidNameOrEmail || hasInvalidAge) {
            throw CustomError.createError({
                name: 'InvalidUserData',
                cause: generateInvalidUserDataError({ name, email, age }),
                message: 'Error trying to create a new user',
                code: ErrorCodes.INVALID_TYPES_ERROR
            })
        }

        const user = { name, email, age, id: parseInt(Math.random() * 10000) }
        users.push(user)
        return user
    }

}

module.exports = { UsersService }