const path= require('path');


const productsController = require('../controllers/products');
//const rootDir = require('../util/path');

const express= require('express');
const { title } = require('process');

const router = express.Router();

//const products = [];

//admin/add-product =>GET
router.get('/add-product', productsController.getAddProduct);

//(req, res, next) => {
  //  res.render('add-product',{ pageTitle:'Add Product', path:'/admin/add-product'});
//});  


//admin/add/add-product => POST
router.post('/add-product',productsController.postAddProduct);

//(req, res, next) => {
  //  console.log(req.body);
   //products.push({title: req.body.title});
    //res.redirect('/');
//
//exports.routes = router;
//exports.products =products;

module.exports=router;



