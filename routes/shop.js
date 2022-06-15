const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

//router.get('/products/:productId', shopController.getProduct);

router.get('/shop/product-details/:productId', shopController.getProductDetails);

router.get('/admin/edit', adminController.getEditProduct);

router.get('/cart', shopController.getCart);

// se activa cuando se hace click en añadir al carrito en product details
router.post('/cart', shopController.postCart);

router.post('/shop/delete/:productId', shopController.postCartDeleteProduct);

module.exports = router;