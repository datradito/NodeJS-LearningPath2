//Lo que el admin puede ver, handle the creational codes
//These routes are reached in /admin/route
const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);
router.get('/edit-product', productsController.editProduct);
router.get('/modify-products', productsController.modifyProducts);

module.exports = router;