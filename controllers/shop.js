const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Productos',
      path: '/product-list'
    });
  });
};

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Tienda',
      path: '/'
    });
  });
}