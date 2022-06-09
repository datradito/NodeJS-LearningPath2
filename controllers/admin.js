const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Agregar Producto',
        path: '/admin/edit-product',
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    Product.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    })
    .then( result =>{
        console.log('Producto creado con éxito');
        res.redirect('/admin/products');
    })
    .catch( err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findByPk( prodId )
    .then( product => {
        if(!product){
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            prods: product,
            pageTitle: 'Editar Producto',
            path: '/admin/edit-product',
            editing: editMode
        });
    })

    
};

exports.getProduct = (req, res, next) => {
    Product.findAll()
    .then(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Administrar producto',
            path: '/admin/products'
        });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescr = req.body.description;
    Product.findByPk(prodId)
    .then( product => {
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.imageUrl = updatedImageUrl;
        product.description = updatedDescr;
        return product.save();
    })
    .then(result => {
        console.log('Producto editado con éxito');
        res.redirect('/admin/products');
    })
    .catch( err => console.log(err));
}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(req.body);
    Product.findByPk(prodId)
    .then( product => product.destroy())
        .then( result => {
            console.log('Producto eliminado con éxito');
            res.redirect('/admin/products');
        })
        .catch( err => console.log(err));

}
