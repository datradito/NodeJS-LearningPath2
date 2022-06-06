//Lo que el admin puede ver, handle the creational codes
//Routes are reached in /admin/route
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

module.exports = router;