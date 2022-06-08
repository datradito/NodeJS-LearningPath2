
// cargando librerias
const path = require ('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController= require('./controllers/error');

const app = express();

app.set('view engine', 'pug');
app.set('views','views')

//const adminData = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static( path.join(__dirname,'./', 'public')));


//app.use('/admin', adminData.routes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// mensajes de error 404, pagina no encontrada
app.use(errorController.get404);
//((req,res,next) =>{
  // res.status(404).render('404', {pageTitle: 'Sorry, Page Not Found'});
    // res.status(404).send('<h2>Pagina no encontrada</h2>');
//});

app.listen(3000);