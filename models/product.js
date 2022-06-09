const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Cart = require('./cart');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        alowNull: false
    },
    description: {
        type: Sequelize.STRING ,
        alowNull: false
    },
    price: {
        type: Sequelize.DOUBLE ,
        alowNull: false
    },
    img: {
        type: Sequelize.STRING ,
        alowNull: false
    },
    tag: {
        type: Sequelize.STRING ,
        alowNull: false
    }
});

module.exports = Product;