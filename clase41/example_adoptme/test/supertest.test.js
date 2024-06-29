import chai from 'chai'
import supertest from 'supertest'

const expect = chai.expect

const requester = supertest('http://localhost:8080')

describe('Testing de API', () => {

    describe('Tests /api/pets', () => {

        it('POST /api/pets => debe crear una mascota', async () => {
            const petMock = {
                name: 'Tester',
                specie: 'dog',
                birthDate: new Date()
            }

            const { statusCode, ok, body } = await requester.post('/api/pets').send(petMock)

            expect(ok).to.be.true
            expect(statusCode).to.be.equal(200)
            expect(body.status).to.be.equal('success')
            expect(body.payload).to.have.property('_id')
            expect(body.payload.name).to.be.equal('Tester')
            expect(body.payload.specie).to.be.equal('dog')
            expect(body.payload.adopted).to.be.false
            expect(body.payload.image).to.be.equal('')
        })


    })

})