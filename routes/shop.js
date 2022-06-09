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

router.post('/cart', shopController.postCart);

router.get('/orders',shopController.getOrders);


router.get('/checkout',shopController.getCheckout );



module.exports  = router;




/* router.get('/',(req, res, next) => {
    console.log('shop.js', adminData.products);
    const products =  adminData.products
    //res.sendFile(path.join(__dirname,'..', 'views', 'shop.html'));
    res.render('shop', {prods:products, docTitle:'Shop'});
}) */