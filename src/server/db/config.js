const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:abcd@1234@localhost:5432/postgres')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

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

module.exports = { sequelize, User }