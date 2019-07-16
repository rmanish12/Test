const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const db = require('./db/config')

const { createUser } = require('./routeHandler')

app.use(bodyParser.json())

app.post('/user', async (req, res) => {
    user = {
        username: req.body.username,
        password: req.body.password
    }

    const newUser = await db.User.create(user)

    res.send(newUser)
})

app.listen(8000, () => {
    console.log('Server started on port 8000')
})