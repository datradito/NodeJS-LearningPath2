const path = require('path');
const express = require('express');
/* const rootDir = require('../util/path');
const adminData = require('./admin') */
// 1) const productsController = require('../controllers/shop');
const shopController = require('../controllers/shop');
const router = express.Router();

// /admin/add-product => GET
// router.get('/', productsController.getProducts);
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);
/* router.get('/', (req, res, next) => {
    console.log('shop.js',adminData.products);
    1) res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    2) res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    3) PUG no hace falta aclarar porque esta por defecto
    const products = adminData.products;
    4) res.render('shop', {prods: products, docTitle: 'Shop'});
    5) res.render('shop', { prods: products, pageTitle: 'Shop', path:'/' })
     ) const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}); */

module.exports = router;