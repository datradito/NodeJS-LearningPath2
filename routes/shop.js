const path = require('path');

//const rootDir = require('../util/path');
//const adminData = require('./admin');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

    //(req, res, next) => {
    
    //const products = adminData.products;
    //res.render('shop', {prods: products, pageTitle:'Shop', path:'/'});
    
    
    
    //console.log('shop.js', adminData.products);

    //res.sendFile(path.join(rootDir, 'views','shop.html'));
    // res.sendFile(path.join(__dirname, '../', 'views','shop.html'));
//});

module.exports = router;