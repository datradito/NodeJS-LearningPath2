const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_shop','root','NyA20286',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;