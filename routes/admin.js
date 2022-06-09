const path =  require('path');
const express = require('express')
const  adminController =  require('../controllers/admin');
const router =  express.Router();


//admin/add-product => get
router.get('/add-product', adminController.getAddProduct);

//admin/products => get
router.get('/products', adminController.getProducts);

//admin/add-product => post
router.post('/add-product', adminController.postAddProduct);

//admin/edit-product => get por id
router.get('/edit-product/:productId', adminController.getEditProduct)



router.get('/edit-product', adminController.postEditProduct)


/* exports.routes = router;
exports.products =  products; */

module.exports = router;