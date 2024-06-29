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

        it('POST /api/pets => debe fallar si no se envía nombre', async () => {
            const petMock = {
                specie: 'dog',
                birthDate: new Date()
            }

            const { statusCode, ok } = await requester.post('/api/pets').send(petMock)

            expect(ok).to.be.false
            expect(statusCode).to.be.equal(400)
        })

        it('GET /api/pets => debe devolver el formato esperado', async () => {
            const { statusCode, ok, body } = await requester.get('/api/pets')

            expect(ok).to.be.true
            expect(statusCode).to.be.equal(200)
            expect(body.status).to.be.equal('success')
            expect(Array.isArray(body.payload)).to.be.true
        })

        it('PUT /api/pets/:id => debe actualizar una mascota', async () => {
            const petMock = {
                name: 'Tester',
                specie: 'dog',
                birthDate: new Date()
            }

            const createRequestStatus = await requester.post('/api/pets').send(petMock)
            expect(createRequestStatus.ok).to.be.true
            expect(createRequestStatus.statusCode).to.be.equal(200)
            
            const petId = createRequestStatus.body.payload._id
            const updateData = { name: 'Kitty', specie: 'cat' }
            const updateRequestStatus = await requester.put(`/api/pets/${petId}`).send(updateData)
            expect(updateRequestStatus.ok).to.be.true
            expect(updateRequestStatus.statusCode).to.be.equal(200)

            const getAllRequestStatus = await requester.get('/api/pets')
            expect(getAllRequestStatus.ok).to.be.true
            expect(getAllRequestStatus.statusCode).to.be.equal(200)

            const updatedPet = getAllRequestStatus.body.payload.find(p => p._id === petId)
            expect(updatedPet.name).to.be.equal('Kitty')
            expect(updatedPet.specie).to.be.equal('cat')
        })

        it('DELETE /api/pets/:id => debe eliminar una mascota', async () => {
            const petMock = {
                name: 'Tester',
                specie: 'dog',
                birthDate: new Date()
            }

            const createRequestStatus = await requester.post('/api/pets').send(petMock)
            expect(createRequestStatus.ok).to.be.true
            expect(createRequestStatus.statusCode).to.be.equal(200)
            
            const petId = createRequestStatus.body.payload._id
            const deleteRequestStatus = await requester.delete(`/api/pets/${petId}`)
            expect(deleteRequestStatus.ok).to.be.true
            expect(deleteRequestStatus.statusCode).to.be.equal(200)

            const getAllRequestStatus = await requester.get('/api/pets')
            expect(getAllRequestStatus.ok).to.be.true
            expect(getAllRequestStatus.statusCode).to.be.equal(200)

            const deletedPet = getAllRequestStatus.body.payload.find(p => p._id === petId)
            expect(deletedPet).to.not.exist
        })

    })

})