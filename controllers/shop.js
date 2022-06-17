const res = require('express/lib/response');
const Product = require('../models/product');
const Cart = require('../models/cart');



// Lista de productos
exports.getProducts = (req, res, next) => {
  const prodId = req.query.productId;
  Product.findAll()
    .then(products => {
      res.render('shop/products-list', {
        prods: products,
        pageTitle: "Lista de productos",
        path: '/products'
      });
    })
};

// Lista de productos
/*exports.getProducts = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(products => {
      res.render('shop/product-detail', {
        product: products,
        pageTitle: product.title,
        path: '/products'
      });
    })
  .catch(err=> console.log(err));
};*/

exports.getProductDetails = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((row) => {
      res.render('shop/product-details', {
        pageTitle: 'shop',
        product: row,
        price: row.precio,
        pageTitle: row.nombre,
        path: 'shop/product-details'
      });
    })
    .catch(err => console.log(err));
};



// Producto individual
/*exports.getProductDetails = (req, res, next) => {
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
*/
exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
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
  Product.deleteByPk(prodId);
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


