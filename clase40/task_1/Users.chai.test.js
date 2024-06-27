import mongoose from 'mongoose'
import User from '../../src/dao/Users.dao.js'
import chai from 'chai'

const expect = chai.expect

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

        expect(result).to.be.deep.equal([])
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
        expect(newUser._id.toString()).length.greaterThan(0)
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
        expect(newUser._id.toString()).length.greaterThan(0)
        expect(newUser.pets).to.be.deep.equal([])
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
        expect(user._id.toString()).length.greaterThan(0)
        expect(user.first_name).to.be.equal('Tester')
    })

    it('debe actualizar correctamente un usuario', async function () {
        const mockUser = {
            first_name: 'Tester',
            last_name: 'Tester',
            email: 'tester@gmail.com',
            password: 'tester123',
            role: 'user'
        }

        const newUser = await this.usersDao.save(mockUser)
        
        const updateData = {
            first_name: 'Updated',
            last_name: 'Updated',
            email: 'updated@gmail.com',
            password: 'updated123',
            role: 'admin'
        }

        await this.usersDao.update(newUser._id.toString(), updateData)
        const updatedUser = await this.usersDao.getBy({ _id: newUser._id.toString() })

        expect(updatedUser.first_name).to.be.equal('Updated')
        expect(updatedUser.last_name).to.be.equal('Updated')
        expect(updatedUser.email).to.be.equal('updated@gmail.com')
        expect(updatedUser.password).to.be.equal('updated123')
        expect(updatedUser.role).to.be.equal('admin')
    })

    it('debe eliminar correctamente un usuario', async function () {
        const mockUser = {
            first_name: 'Tester',
            last_name: 'Tester',
            email: 'tester@gmail.com',
            password: 'tester123',
            role: 'user'
        }

        const newUser = await this.usersDao.save(mockUser)

        await this.usersDao.delete(newUser._id.toString())

        const user = await this.usersDao.getBy({ _id: newUser._id.toString() })

        expect(user).to.not.exist
    })

})