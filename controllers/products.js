const Product = require('../models/product');
const menu = Product.fetchAll();
exports.getAddProduct = (req, res, next) => {
    const menuItems = Product.fetchAll();
    res.render('add-product');
};

exports.postAddProduct = (req, res, next) => {
    const platillo = new Product(
        req.body.title,
        req.body.description, 
        req.body.price, 
        req.body.img, 
        req.body.tag
    );
    platillo.save();
    res.render('add-product');
};

exports.allProducts = (req, res, next) => {
    res.render('index', {productos: menu});
}
exports.modifyProducts = (req, res, next) => {
    res.render('modify-products', {productos: menu});
}
exports.editProduct = (req, res, next) => {
    res.render('edit-product');
}