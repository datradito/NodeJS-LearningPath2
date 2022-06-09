console.log('pagina actualizada');
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorsController = require('./controllers/errors');

const db = require('./util/database');
db.execute('SELECT * FROM products')
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });//Execute in case of error

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); //Añade /admin además de la ruta establecida
app.use(shopRoutes);

app.use(errorsController.get404);
    
app.listen(3000);