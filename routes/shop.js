//Cosas que el usuario va a ver
const path = require('path');
const express = require('express');
const menuItems = require('../menu.json');
const router = express.Router();

router.use('/', (req, res, next) => {
    console.log('<p>Hola soy un navbar</p>');
    next();
});
router.get('/comprar', (req, res, next) => {
    res.send('<h1>Terminar la compra</h1>');
});
router.get('/all-products', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'all-products.html'));
});
router.get('/', (req, res, next) => {
    console.log(menuItems[0][1]);
    res.sendFile(path.join(__dirname, '../', 'views', 'all-products.html'));//dirname has the absolute path to the folder in which this project is located. path.join will put the slash according to the operating system
});

module.exports = router;