const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Order = sequelize.define('order', {
    id: {
        type: Sequalize.INTEGER,
        alowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    quantity:  {
        type: Sequalize.INTEGER
    },
});
module.exports = Order