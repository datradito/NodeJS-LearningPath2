exports.get404 = (req, res, next) => {
    res.render('pageNotFound'), {
        isAuth: req.session.isLoggedIn
    };
};