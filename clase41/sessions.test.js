import chai from 'chai'
import supertest from 'supertest'

const expect = chai.expect

const requester = supertest('http://localhost:8080')

describe('Testing de sesiones', () => {

    describe('Flujo de registro/autenticación', () => {

        const mockUser = {
            first_name: 'Tester',
            last_name: 'Tester',
            email: 'tester@gmail.com',
            password: 'tester123'
        }

        before(async () => {
            // garantizar que no existe ningún usuario con ese email de manera previa
            const getAllStatus = await requester.get('/api/users')

            const foundUser = getAllStatus.body.payload.find(u => u.email === mockUser.email)

            if (foundUser) {
                const { body } = await requester.delete(`/api/users/${foundUser._id}`)
            }
        })

        it('flujo de registro + login', async () => {
            // registrar usuario
            const registerUserStatus = await requester.post('/api/sessions/register').send(mockUser)
            expect(registerUserStatus.ok).to.be.true
            expect(registerUserStatus.body.status).to.be.equals('success')

            // login
            const loginUserStatus = await requester.post('/api/sessions/login')
                .send({
                    email: mockUser.email,
                    password: mockUser.password
                })
            expect(loginUserStatus.ok).to.be.true
            expect(loginUserStatus.headers['set-cookie']).to.exist

            // obtener cookie
            const cookieResult = loginUserStatus.headers['set-cookie'][0]
            const [cookieName, cookieValue] = cookieResult.split('=')
            expect(cookieName).to.be.equals('coderCookie')
            expect(cookieValue).to.exist

            // enviar cookie al endpoint /current
            const currentRequestStatus = await requester.get('/api/sessions/current')
                .set('Cookie', [cookieResult])
            expect(currentRequestStatus.ok).to.be.true
            expect(currentRequestStatus.body.payload.email).to.be.equals(mockUser.email)

        })
    })

})