import UserDTO from "../../src/dto/User.dto.js"
import chai from 'chai'

const expect = chai.expect

describe('UserDTO tests', () => {

    it('debe remover los campos innecesarios y crear el campo name', () => {
        const mockUser = {
            _id: '667d558d58a7fafcf3f7eb8d',
            first_name: 'Tester',
            last_name: 'Tester',
            email: 'tester@gmail.com',
            password: 'tester123',
            role: 'user'
        }

        const result = UserDTO.getUserTokenFrom(mockUser)
        expect(result).to.deep.equal({
            name: `Tester Tester`,
            role: 'user',
            email: 'tester@gmail.com'
        })
    })

})