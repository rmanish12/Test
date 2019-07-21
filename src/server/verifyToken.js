const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY

const verifyToken = (req, res, next) => {
    // var token = req.headers['x-access-token']
    var token = req.cookie.sessionToken

    if(!token) {
        return res.status(403).send({auth: false, message: 'No token provided'})
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if(err) {
            return res.status(500).send({auth: false, message: 'Failed to authenticate token'})
        }

        next()
    })
}

module.exports = verifyToken