const bodyParser = require('body-parser')

const { User } = require('./db/config')

const createUser = async (req, res) => {
    user = {
        username: req.body.username,
        password: req.body.password
    }

    const newUser = await User.create(user)

    res.send(newUser)
}