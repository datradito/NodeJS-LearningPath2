const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/product-list', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.post('/product-to-cart', shopController.postCart);

router.get('/product-detail/:productId', shopController.getProductDetail);

router.post('/delete-cart-product', shopController.postDeleteCartItem);

module.exports = router;
