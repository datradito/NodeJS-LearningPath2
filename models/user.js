const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Cart = require('./cart');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        alowNull: false,
        isAlpha: true, //only letters
        notEmpty: true
    },
    email: {
        type: Sequelize.STRING ,
        unique: true,
        alowNull: false
    },
    password: {
        type: Sequelize.STRING ,
        alowNull: false
    }
});

module.exports = User;