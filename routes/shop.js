const path =  require('path');

const express = require('express');

// const rootDir =  require(../until/path)

//const adminData =  require('./admin.js');

const shopController  = require('../controllers/shop');

const router =  express.Router();

router.get('/',shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart',shopController.getCart);

router.post('/cart/:productId', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

router.get('/orders',shopController.getOrders);


module.exports  = router;


/* router.get('/',(req, res, next) => {
    console.log('shop.js', adminData.products);
    const products =  adminData.products
    //res.sendFile(path.join(__dirname,'..', 'views', 'shop.html'));
    res.render('shop', {prods:products, docTitle:'Shop'});
}) */