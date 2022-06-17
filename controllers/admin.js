const Product = require('../models/product');

// Agregar producto
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.editar;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  console.log("findByPk: ", prodId);
  Product.findByPk(prodId)
    .then(product => {
      if (!product) {
        console.log("saliendo");
        return res.redirect('/')
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      })
    })

    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/products');
    })
    .catch(err => console.log(err));
};




// funcion que carga en json el producto que viene de 
// add-product
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
  .then(result => {
    console.log(result);
    res.redirect('/admin/products')
  })
    .catch(err => {
      console.log(err);
    })
}



//redirige a shop/product-lis para no duplicar vistas
exports.getProducts = (req, res, next) => {
  res.redirect('/products');
};


exports.postDeleteProduct = (req, res, next) => {
  console.log("borrando producto");
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then(product=>{
  return product.destroy();
  })
  .then(result => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/products');
  })
  .catch(err => console.log(err));
};

  