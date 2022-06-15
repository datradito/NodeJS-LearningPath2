const Product = require('../models/product');

// Agregar producto
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/edit-product',
    formsCSS: true,
    productCSS: true,
    editing:false,
    product:[],
    activeAddProduct: true
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.query.productId;
  Product.findById(prodId)
    .then(([rows, fieldData]) => {
      console.log(rows[0]);
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        product: rows[0],
        pageTitle: rows[0].nombre,
        editing: editMode,
        path: '/admin/edit-product'
      });
    })
    .catch(err => console.log(err));
};

// funcion que carga en json el producto que viene de 
// add-product
exports.postAddProduct = (req, res, next) => {
  const nombre = req.body.nombre;
  const imagen = req.body.imagen;
  const precio = req.body.precio;
  const descripcion = req.body.descripcion;
  const edad = req.body.edad;
  const product = new Product(null, nombre, edad, descripcion, imagen, precio);
  product
  .save()
  .then(()=>{
    res.redirect('/');
  })
  .catch(err=> console.log(err));
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/products'
    });
  });
};


exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/products');
};
