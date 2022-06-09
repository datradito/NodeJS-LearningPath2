const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Cart = require('./cart');

const User = sequelize.define('user', {
    id: {
        type: Sequalize.INTEGER,
        alowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequalize.TEXT,
        alowNull: false,
        isAlpha: true, //only letters
        notEmpty: true
    },
    email: {
        type: Sequalize.STRING ,
        unique: true,
        alowNull: false
    },
    password: {
        type: Sequalize.STRING ,
        alowNull: false
    }
});

module.exports = User;