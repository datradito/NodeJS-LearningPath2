/* const mysql =  require('mysql2');

const pool  = mysql.createPool({

    host: 'localhost',
    username: 'root',
    password: 'root_paloma_1234',
    database: 'node-complete'

})


module.exports =  pool.promise(); 
 */

const Sequelize =  require('sequelize');

const sequelize =  new Sequelize('node-complete', 'root', 'root_paloma_1234',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;