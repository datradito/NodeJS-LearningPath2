const path =  require('path');

const express = require('express');

// const rootDir =  require(../until/path)

//const adminData =  require('./admin.js');

const productsController  = require('../controllers/products');

const router =  express.Router();

router.get('/',productsController.getProducts);

/* router.get('/',(req, res, next) => {
    console.log('shop.js', adminData.products);
    const products =  adminData.products
    //res.sendFile(path.join(__dirname,'..', 'views', 'shop.html'));
    res.render('shop', {prods:products, docTitle:'Shop'});
}) */

module.exports  = router;
