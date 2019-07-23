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

    User.findByPk(req.body.email)
        .then((user) => {
            if(user) {
                console.log('User exists')
                return res.status(400).send({message: 'User already exists'})
            }
        })

    User.create(user)
        .then(() => {
            var token = jwt.sign({
                email: user.email
            }, SECRET_KEY, {
                expiresIn: 86400 //24hr
            })
    
            return res.status(200).json({auth: true, token: token, name: user.firstname, role: user.role, message: 'Registered successfully'})
        }).catch((err) => {
            return res.status(500).send({message: 'Some internal error'})
        })

}

const getUser = (req, res) => {
    console.log(req)
    var token = req.cookies.sessionToken

    if(!token) {
        return res.status(403).send({auth: false, message: 'No token provided'})
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if(err) {
            return res.status(500).send({auth: false, message: 'Failed to authenticate token'})
        }

        res.status(200).send({auth: true, name: decoded.name, role: decoded.role})
    })
}

const loginUser = (req, res) => {
    User.findByPk(req.body.email)
        .then((user) => {
            if(!user) {
                return res.status(404).send({message: 'No user found'})
            }

            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
            if(!passwordIsValid) {
                return res.status(401).send({auth: false, token: null, message: 'Password invalid'})
            }
    
            var token = jwt.sign({ email: user.email, name: user.firstname, role: user.role }, SECRET_KEY, {
                expiresIn: 86400 //24hr
            })
    
            // res.cookie('sessionToken',token , {
            //     httpOnly: true,
            //     maxAge: 86400
            // })

            res.cookie('sessionToken', token, {
                httpOnly: true,
                maxAge: 4 * 60 * 60 * 1000 // 4 hours
              });

            // res.redirect('/')
            res.status(200).send({auth: true, token, name: user.firstname, role: user.role})
        }).catch((err) => {
            return res.status(500).send({message: 'Some internal error'})
        })
}

const logout = (req, res) => {
    res.clearCookie('sessionToken')
    res.status(200).send({auth: false, token: null})
}

module.exports = {createUser, getUser, loginUser, logout}