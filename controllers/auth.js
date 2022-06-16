exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req.get('Cookie').split(';')[0].trim().split('=')[1];
    // console.log(isLoggedIn);
    console.log('AAAAAAAAAAAAA');
    console.log(req.session.isLoggedIn);
    res.render('log-in'), {
        isLoggedIn: req.session.isLoggedIn,
    };
};
exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true;
    res.redirect('/');
};