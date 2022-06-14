//Cosas que el usuario va a ver
const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/comprar', userController.postComprar);

router.post('/cart', userController.postCart);
router.get('/cart', userController.fetchCart);

router.post('/delete-fromCart', userController.postDeleteFromCart);

router.get('/register', userController.getRegister);

router.get('/', productsController.allProducts);

module.exports = router;