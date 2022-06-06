exports.getRegister = (req, res, next) => {
    res.render('register');
};
exports.getLogIn = (req, res, next) => {
    res.render('log-in');
};
exports.getCart = (req, res, next) => {
    res.render('cart');
};
exports.getCheckout = (req, res, next) => {
    res.render('comprar');
};