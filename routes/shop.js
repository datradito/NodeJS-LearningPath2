//Cosas que el usuario va a ver
const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/comprar', userController.getCheckout);

router.post('/cart', userController.postCart);
router.get('/cart', userController.getCart);

router.get('/register', userController.getRegister);

router.get('/log-in', userController.getLogIn);

router.get('/', productsController.allProducts);

module.exports = router;