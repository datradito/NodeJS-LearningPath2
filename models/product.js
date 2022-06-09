const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Cart = require('./cart');

const Product = sequelize.define('product', {
    id: {
        type: Sequalize.INTEGER,
        alowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequalize.STRING,
        alowNull: false
    },
    description: {
        type: Sequalize.STRING ,
        alowNull: false
    },
    price: {
        type: Sequalize.DOUBLE ,
        alowNull: false
    },
    img: {
        type: Sequalize.STRING ,
        alowNull: false
    },
    tag: {
        type: Sequalize.STRING ,
        alowNull: false
    }
});

module.exports = Product;