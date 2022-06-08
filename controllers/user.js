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
    res.redirect('/');
};
exports.getCart = (req, res, next) => {
    const cartItems = Cart.fetchCart();
    const menuItems = Product.fetchAll(); 
    const cartProducts = [];
    for (item of menuItems) {
        const cartProductData = cartItems.products.find(i => i.id === item.id);
        if(cartProductData){
            cartProducts.push({itemData: item, quantity: cartProductData.quantity});
        }
    }
    res.render('cart',{ cartProducts: cartProducts });
};

exports.postDeleteFromCart = (req, res, next) => {
    const productId = req.body.productId;
    const product = Product.findById(productId);
    console.log(product.price);
    Cart.deleteProduct(productId, product.price);
    res.redirect('/cart');
};

exports.getCheckout = (req, res, next) => {
    res.render('comprar');
};