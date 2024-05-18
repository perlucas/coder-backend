module.exports = {

    getUsers: async (_, res) => {
        res.send({ status: 'success', payload: 'getUsers' })
    },

    getUserById: async (_, res) => {
        res.send({ status: 'success', payload: 'getUserById' })
    },

    saveUser: async (_, res) => {
        res.send({ status: 'success', payload: 'saveUser' })
    }
}