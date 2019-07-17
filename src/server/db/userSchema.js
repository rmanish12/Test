const Sequelize = require('sequelize')
const sequelize = require('./config')

const User = sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    }
});

User.sync().then(() => {
    // Table created    
});

module.exports = User