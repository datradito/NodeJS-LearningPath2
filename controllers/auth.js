exports.getLogin = (req, res, next) => {
    const isLoggedIn = req.get('Cookie').split(';')[1].trim().split('=')[1];
    res.render('log-in'), {
        isAuth: isLoggedIn
    };
};
exports.postLogin = (req, res, next) => {
    res.setHeader('Set-Cookie', 'isLoggedIn = true');
    res.redirect('/');
};