const Product =  require('../models/product')

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'..', 'views', 'add-product.html'))
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('admin/add-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/add-product', 
      formsCSS: true, 
      productCSS: true, 
      activeAddProduct: true
    });
}
exports.postAddProduct =  (req, res, next) => {
  /*   console.log(req.body);
    products.push({name: req.body.name}); */

    const product =  new Product(req.body.name);
    product.save();
    res.redirect('/');
}

exports.getProducts =  (req, res, next) => {
  Product.fetchAll((products) => {
        res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
        
      });
  });
   
}


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};



exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
      res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });

} 


exports.getCart =  (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your cart',

  });

}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout',{
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your orders',

  });
}