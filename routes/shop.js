const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

//router.get('/products/:productId', shopController.getProduct);

router.get('/shop/product-details/:productId', shopController.getProductDetails);

router.get('/cart', shopController.getCart);

// se activa cuando se hace click en añadir al carrito en product details
router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;