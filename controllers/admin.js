const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Agregar Producto',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.imageUrl, req.body.price, req.body.description);
    product.save();
    res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('admin/edit-product', {
            prods: products,
            pageTitle: 'Editar Producto',
            path: '/admin/edit-product'
        });
    })
};

exports.getProduct = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Producto',
            path: '/admin/products'
        });
    });
};

