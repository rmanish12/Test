const Sequelize = require('sequelize')
const sequelize = require('./config')

const User = sequelize.define('users', {
    email: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

module.exports = User