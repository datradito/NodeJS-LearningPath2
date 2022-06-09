const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        alowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    quantity:  {
        type: Sequelize.INTEGER
    },
});
module.exports = Order