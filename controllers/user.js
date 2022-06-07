const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getRegister = (req, res, next) => {
    res.render('register');
};
exports.getLogIn = (req, res, next) => {
    res.render('log-in');
};
exports.postCart = (req, res, next) => {
    const platilloId = req.body.productId;
    const platilloEncontrado = Product.findById(platilloId);
    Cart.addProduct(platilloEncontrado.id, platilloEncontrado.price);
    res.redirect('/cart');
};
exports.getCart = (req, res, next) => {
    res.render('cart');
};
exports.getCheckout = (req, res, next) => {
    res.render('comprar');
};