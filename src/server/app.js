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

app.get('/setcookie', function(req, res){
    // setting cookies
    res.cookie('username', 'john doe', { maxAge: 900000, httpOnly: true });
    return res.send('Cookie has been set');
});

app.get('/getcookie', function(req, res) {
    var username = req.cookies['username'];
    if (username) {
        return res.send(username);        
    }

    return res.send('No cookie found');
});

app.post('/api/user', createUser)

// app.get('/api/user', verifyToken, getUser)
app.get('/api/user', getUser)

app.post('/api/login', loginUser)

app.post('/api/logout', logout)

module.exports = app