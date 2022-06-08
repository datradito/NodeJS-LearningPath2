const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const port = 3000

// ejs (motor de plantilla HTML)
app.set('view engine', 'ejs');
app.set ('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// styles
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/admin', adminRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// error 404
app.use(errorController.get404);
/* 2) app.use((req, res, next) => { 
    1) res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: '404' }); 
}); */

app.listen(port);