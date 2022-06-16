const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getRegister = (req, res, next) => {
    res.render('register'), {
        isLoggedIn: req.session.isLoggedIn
    };
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
exports.fetchCart = (req, res, next) => {
    req.user.getCart()
        .then(cart => {
            return cart.getProducts() //cart is associated to products through sequelize
            .then(cartProducts => {
                res.render('cart', { cartProducts: cartProducts, 
                    isLoggedIn: req.session.isLoggedIn
                })
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
    ;
};

exports.postDeleteFromCart = (req, res, next) => {
    const productId = req.body.productId;
    
    req.user
    .getCart()
        .then(cart => {
            console.log(req.user);

            return cart.getProducts({ where: { id: productId } })
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

exports.postComprar = (req, res, next) => {
    let fetchedCart;
    req.user.getCart()
        .then( cart => {
            fetchedCart = cart;
            return cart.getProducts()
        })
        .then( products => {
            console.log(products);
            return req.user.createOrder()
                .then( order => {
                    return order.addProducts(products.map(product => {
                        product.orderItem = { quantity: product.cartItem.quantity };
                        return product
                    }))
                })
                .catch(err => console.log(err))
            ;
        })
        .then( result => {
            return fetchedCart.setProducts(null)
        })
        .then( result => {
            res.redirect('/cart');
        })
        .catch(err => console.log(err))
    ;
};

exports.getOrders = (req, res, next) => {
    req.user.getOrders( {include: ['products']})
        .then( result => {
            res.render('orders', {orders: result,
                isLoggedIn: req.session.isLoggedIn
            });
        })
        .catch(err => console.log(err))
    ;
};