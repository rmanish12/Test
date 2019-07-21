const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User  = require('./db/userSchema')

const SECRET_KEY = process.env.SECRET_KEY

const createUser = (req, res) => {

    console.log(req.body)

    var hashedPassword = bcrypt.hashSync(req.body.password, 8)

    user = {
        email: req.body.email,
        password: hashedPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        role: req.body.role || 'USER'
    }

    console.log('user: ', user)

    User.findByPk(req.body.email)
        .then((user) => {
            if(user) {
                console.log('User exists')
                res.status(400).send({err: 'User already exists'})
            }
        })

    User.create(user)
        .then(() => {
            var token = jwt.sign({
                username: user.username
            }, SECRET_KEY, {
                expiresIn: 86400 //24hr
            })
    
            res.status(200).json({auth: true, token: token, msg: 'Registered successfully'})
        }).catch((err) => {
            return res.status(500).send({err: 'Some internal error', e: err})
        })

}

const getUser = (req, res) => {
    res.status(200).send({auth: true, cookie: req.cookies})
}

const loginUser = (req, res) => {
    User.findByPk(req.body.email)
        .then((user) => {
            if(!user) {
                return res.status(404).send('No user found')
            }

            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
            if(!passwordIsValid) {
                return res.status(401).send({auth: false, token: null, message: 'Password invalid'})
            }
    
            var token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, {
                expiresIn: 86400 //24hr
            })
    
            res.cookie('sessionToken',token , {
                httpOnly: true,
                maxAge: 86400
            })

            res.status(200).send({auth: true, token})
        }).catch((err) => {
            return res.status(500).send(err)
        })
}

const logout = (req, res) => {
    res.clearCookie('sessionToken')
    res.status(200).send({auth: false, token: null})
}

module.exports = {createUser, getUser, loginUser, logout}