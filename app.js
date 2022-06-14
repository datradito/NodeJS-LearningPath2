console.log('pagina actualizada');

const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop');
const errorsController = require('./controllers/errors');

const sequelize = require('./util/database');
const Cart = require('./models/cart');
const User = require('./models/user');
const CartItem = require('./models/cart-items');
const Product = require('./models/product');
const Order = require('./models/order');
const OrderItem = require('./models/order-items');

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user; //user was undefined before this statement
        next();
    })
    .catch(error => {
        console.log(error);
    });
});

app.use('/admin', adminRoutes); //Añade /admin además de la ruta establecida
app.use(shopRoutes);
app.use('/auth', authRoutes);

app.use(errorsController.get404);


Cart.belongsTo(User);
User.hasOne(Cart);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});

Order.belongsTo(User);
Order.belongsToMany(Product, {through: OrderItem});
User.hasMany(Order);

sequelize.sync()//dentro de sync puede ir {force: true}  para eliminar todas las tablas y volverlas a crear
    .then( results => {
        return User.findByPk(1);
    })
    .then( user => {
        if(!user){
            return User.create({
                name: 'Martina',
                email: 'martina@mail.com',
                password: '12345'
            });
        }
        return user;
    })
    .then( user => {
        return user.createCart();
    })
    .then( cart => {
        app.listen(3000);
    })
    .catch( error => {
        console.log(error);

    })
;//syncs the model to the database creating tables and relations if not exists
