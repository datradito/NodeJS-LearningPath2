const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Cart = sequelize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    }
});
module.exports = Cart