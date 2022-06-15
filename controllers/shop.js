const res = require('express/lib/response');
const Product = require('../models/product');
const Cart = require('../models/cart');

// Lista de productos
exports.getProducts =(req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/products-list', {
        prods: rows,
        pageTitle: 'shop',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

// Producto individual
exports.getProductDetails = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([rows, fieldData]) => {
      console.log(rows[0]);
      res.render('shop/product-details', {
        pageTitle: 'shop',
        product: rows[0],
        price: rows[0].precio,
        pageTitle: rows[0].nombre,
        path: 'shop/product-details'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      console.log("got products");
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.precio);
  });
  res.redirect('/cart');
};


exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

//borrar el producto del carrito
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/products-list', {
        prods: rows,
        pageTitle: 'shop',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};


