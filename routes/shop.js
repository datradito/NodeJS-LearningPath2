//Cosas que el usuario va a ver
const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/edit-product/:platilloId', productsController.editProduct);// : this indicates that it shouldn't look for a given route because platilloId may vary
router.get('/comprar', userController.getCheckout);
router.get('/cart', userController.getCart);
router.get('/register', userController.getRegister);
router.get('/log-in', userController.getLogIn);
router.get('/', productsController.allProducts);

module.exports = router;