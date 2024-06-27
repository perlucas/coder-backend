import { createHash, passwordValidation } from '../../src/utils/index.js'
import chai from 'chai'

const expect = chai.expect

describe('Hashing utilities', () => {

    const password = 'Testing1234'

    it('debe hashear correctamente', async () => {
        const hashedPassword = await createHash(password)

        expect(hashedPassword).length.to.be.greaterThan(5)
        expect(hashedPassword).to.not.be.equal(password)
    })

    it('debe validar correctamente un hash', async () => {
        const hashedPassword = await createHash(password)
        const result = await passwordValidation({ password: hashedPassword }, password)
        expect(result).to.be.true
    })

    it('debe devolver false si la contraseña no matchea', async () => {
        const hashedPassword = await createHash(password)
        const result = await passwordValidation({ password: hashedPassword }, 'unknown123')
        expect(result).to.be.false
    })
})