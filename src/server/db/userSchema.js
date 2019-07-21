const Sequelize = require('sequelize')
const sequelize = require('./config')

const User = sequelize.define('users', {
    email: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        defaultValue: 'USER'
    }
});

//creates table
User.sync().then(() => {

})

module.exports = User