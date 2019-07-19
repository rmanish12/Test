const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const verifyToken = require('./verifyToken')

const { createUser, getUser, loginUser, logout} = require('./routeHandler')

app.use(bodyParser.json())
app.use(cookieParser())

//enable cross origin request
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/api/user', createUser)

app.get('/api/user', verifyToken, getUser)

app.post('/api/login', loginUser)

app.get('/api/logout', logout)

module.exports = app