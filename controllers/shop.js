const Product = require('../models/product');
const CartItem = require('../models/cart-item');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Productos',
      path: '/product-list'
    });
  })
  .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Tienda',
      path: '/'
    });
  })
  .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart( cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for(products of products){
        const cartProductsData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductsData) {
          cartProducts.push({ productsData: produc, qty: cartProductsData.qty});
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Carrito',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req,res, next) => {
  const productId = req.body.productId;
  Product.findByPk(productId, product => {
    Cart.addProduct(productId, product.price);
  });
    res.redirect('/cart');
};

exports.getProductDetail = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then(product =>
    res.render('shop/product-detail', {
      prods: product,
      pageTitle: product.title,
      path: '/product-detail'
    }))
    .catch( err => console.log(err));

}