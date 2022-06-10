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
    let fetchedCart;
    req.user.getCart()
        .then(cart => {
            fetchedCart = cart;
            return cart.getProducts({where: {id: platilloId}});
        })
        .then(cartProducts => {
            let platillo;
            if(cartProducts.length > 0){
                platillo = cartProducts[0];
            }
            let newQuantity = 1;
            if(platillo){
                const oldQuantity = platillo.cartItem.quantity;
                newQuantity = oldQuantity + 1;
                return fetchedCart.addProduct(platillo, { through: {quantity: newQuantity} })
            }
            return Product.findByPk(platilloId)
                .then(platillo => {
                    return fetchedCart.addProduct(platillo, { through: {quantity: newQuantity} })
                })
                .catch(err => console.log(err))
            ;
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err))
    ;
};
exports.getCart = (req, res, next) => {
    req.user.getCart()
        .then(cart => {
            return cart.getProducts() //cart is associated to products through sequelize
            .then(cartProducts => {
                res.render('cart', { cartProducts: cartProducts })
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
    ;
};

exports.postDeleteFromCart = (req, res, next) => {
    const productId = req.body.productId;
    res.user.getCart()
        .then(cart => {
            return cart.getProducts({where: { id: productId }})
        })
        .then(products => {
            const product = products[0];
            return product.cartItem.destroy();
        })
        .then(results => {
            res.redirect('/cart');
        })
        .catch(err => console.log(err))
    ;
};

exports.getCheckout = (req, res, next) => {
    res.render('comprar');
};