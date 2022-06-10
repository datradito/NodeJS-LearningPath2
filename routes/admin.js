//Lo que el admin puede ver, handle the creational codes
//These routes are reached in /admin/route
const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const userController = require('../controllers/user');

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);
router.get('/modify-products', productsController.modifyProducts);

router.get('/edit-product/:platilloId', productsController.editProduct);// the : indicates that it shouldn't look for a given route because platilloId may vary
router.post('/edit-product/', productsController.postEditProduct);

router.post('/delete-product/', productsController.postDeleteProduct);
router.get('/orders', userController.getOrders);

module.exports = router;