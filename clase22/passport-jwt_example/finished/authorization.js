module.exports = role => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).send({ error: 'Need credentials' })
        }

        if (!req.user.role || req.user.role !== role) {
            return res.status(403).send({ error: 'Unauthorized, wrong permissions' })
        }

        next()
    }
}