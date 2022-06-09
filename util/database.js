const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_complete', 'root', '458910', {dialect: 'mysql', host: 'localhost'}); //db, user, pass, optional object. replaces pool

module.exports = sequelize;