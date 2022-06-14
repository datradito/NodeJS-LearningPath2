const Product = require('../models/product');

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
  let editMode = req.query.edit;
  if(editMode == null)
  {editMode=false;}
  req.user
  .getCart()
  .then( cart => {
    return cart
    .getProducts()
    .then( products => {
      res.render('shop/cart',{
        path: '/shop/cart',
        product: products,
        pageTitle: 'Tu carrito',
        edit: editMode
      });
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
};

exports.postCart = (req,res, next) => {
  const productId = req.body.productId;
  let fetchedCart;
  let newQty = 1;
  req.user
  .getCart()
  .then(cart => {
    fetchedCart = cart;
    return cart.getProducts({where: {id: productId}});
  })
  .then(products => {
    let product;
    if( products.length > 0){
      product = products[0];
    }
    if( product) {
      const oldQty = product.cartItem.qty;
      newQty = oldQty +1;
      return product;
    }
    return Product.findByPk(productId);
  })
  .then( product => {
    return fetchedCart.addProduct(product, { through: { qty : newQty}});
  })
  .then( ()=> {
    res.redirect('/cart');
  })
  .catch ( err => console.log(err));
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

exports.postDeleteCartItem = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
  .getCart()
  .then( cart => {
    return cart.getProducts( { where: { id: prodId}});
  })
  .then( products => {
    const product = products[0];
    return product.cartItem.destroy();
  })
  .then( result => {
    console.log('Producto eliminado con éxito');
    res.redirect('/cart');
})
  .catch( err => console.log(err));
}

// exports.getEditCart = (req, res, next) => {
//   const editMode = req.query.edit;
//     if(!editMode){
//         return res.redirect('/');
//     }
//     const prodId = req.params.productId;
//   Product.findByPk(prodId)
//   .then(product => {
//     if(!product){
//       return res.redirect('/');
//   }
//     res.render('shop/cart', {
//       p: product,
//       edit: editMode,
//       pageTitle: 'Edición',
//       path: '/cart'
//     })
//   })
//   .catch( err => console.log(err));
// }

exports.postEditCart = (req, res, next) => {
  const prodId = req.body.productId;
  const newQty = req.body.newQty;
  req.user
  .getCart()
  .then( cart => {
    fetchedCart = cart;
    return cart.getProducts( { where: { id: prodId}});
  })
  .then( products => {
    const product = products[0];
    return product;
  })
  .then( product => {
    return fetchedCart.addProduct(product, { through: { qty : newQty}});
  })
  .then( result => {
    res.redirect('/cart')
  })
  .catch( err => console.log(err));
}