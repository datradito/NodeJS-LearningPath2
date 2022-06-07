const Product =  require('../models/product')

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(__dirname,'..', 'views', 'add-product.html'))
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
}
exports.postAddProduct =  (req, res, next) => {
  /*   console.log(req.body);
    products.push({name: req.body.name}); */

    const product =  new Product(req.body.name);
    product.save();
    res.redirect('/');
}

exports.getProducts =  (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
   
}