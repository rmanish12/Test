const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User  = require('./db/userSchema')

const SECRET_KEY = process.env.SECRET_KEY

const createUser = (req, res) => {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8)

    user = {
        username: req.body.username,
        password: hashedPassword
    }

    User.create(user)
        .then(() => {
            var token = jwt.sign({
                username: user.username,
                password: user.password
            }, SECRET_KEY, {
                expiresIn: 86400 //24hr
            })
     
            res.status(200).json({auth: true, token: token})
        }).catch(() => {
            return res.status(500).send('There was a problem registering user')
        })
}

const getUser = (req, res) => {
    User.findOne({where: {username: req.body.username}})
        .then((user) => {
            if(!user) {
                return res.status(404).send('No user found')
            }

            res.status(200).send({auth: true, cookie: req.cookies})
        })
}

const loginUser = (req, res) => {
    // User.findOne({where: {email: req.body.email}})
    console.log(req.body.email)
    User.findByPk(req.body.email)
        .then((user) => {
            if(!user) {
                return res.status(404).send('No user found')
            }

            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
            if(!passwordIsValid) {
                return res.status(401).send({auth: false, token: null, message: 'Password invalid'})
            }
    
            var token = jwt.sign({ username: user.username }, SECRET_KEY, {
                expiresIn: 86400 //24hr
            })
    
            res.cookie('sessionToken',token , {
                httpOnly: true,
                maxAge: 86400
            })

            res.status(200).send({auth: true, token, user})
        }).catch((err) => {
            return res.status(500).send(err)
        })
}

const logout = (req, res) => {
    res.clearCookie('sessionToken')
    res.status(200).send({auth: false, token: null})
}

module.exports = {createUser, getUser, loginUser, logout}