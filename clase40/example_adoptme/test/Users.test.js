import mongoose from 'mongoose'
import User from '../src/dao/Users.dao.js'
import Assert from 'assert'

const assert = Assert.strict

describe('Testing Users DAO', () => {

    before(async function () {
        this.usersDao = new User()
        await mongoose.connect('mongodb://localhost:27017', { dbName: 'testing' })
        this.connection = mongoose.connection
    })

    after(async function () {
        await this.connection.db.dropDatabase()
        await this.connection.close()
    })

    beforeEach(async function () {
        await this.connection.db.collection('users').deleteMany({})
        this.timeout(5000)
    })

    it('debe devolver un array de users', async function () {
        const result = await this.usersDao.get()
        assert.strictEqual(Array.isArray(result), true)
    })

    it('debe agregar correctamente un usuario nuevo', async function () {
        const mockUser = {
            first_name: 'Tester',
            last_name: 'Tester',
            email: 'tester@gmail.com',
            password: 'tester123',
            role: 'user'
        }

        const newUser = await this.usersDao.save(mockUser)
        assert.ok(newUser._id)
    })

    it('debe agregar un usuario con un array vacío de mascotas por defecto', async function () {
        const mockUser = {
            first_name: 'Tester',
            last_name: 'Tester',
            email: 'tester@gmail.com',
            password: 'tester123',
            role: 'user'
        }

        const newUser = await this.usersDao.save(mockUser)
        assert.ok(newUser._id)
        assert.deepStrictEqual(newUser.pets, [])
    })

    it('debe poder devolver un usuario por email', async function () {
        const mockUser = {
            first_name: 'Tester',
            last_name: 'Tester',
            email: 'tester@gmail.com',
            password: 'tester123',
            role: 'user'
        }

        await this.usersDao.save(mockUser)

        const user = await this.usersDao.getBy({ email: 'tester@gmail.com' })
        assert.ok(user._id)
        assert.strictEqual(user.first_name, 'Tester')
    })

})