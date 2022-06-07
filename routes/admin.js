const path =  require('path');
const express = require('express')

//const rootDir =  require('../util/path')
const  productsController =  require('../controllers/products');



const router =  express.Router();
const products = [];

//admin/add-product => get
router.get('/add-product', productsController.getAddProduct);


//admin/add-product => post
router.post('/add-product', productsController.postAddProduct);


/* exports.routes = router;
exports.products =  products; */

module.exports = router;