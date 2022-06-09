const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product');
};

exports.postAddProduct = (req, res, next) => {
    const platillo = new Product(
        req.body.title,
        req.body.description, 
        req.body.price, 
        req.body.img, 
        req.body.tag,
        null
    );
    platillo.save()
        .then(() => {
            res.redirect('add-product');
        })
        .catch(err => console.log(err)); 
};

exports.allProducts = (req, res, next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('index', {productos: rows});
        })
        .catch(err => console.log(err)); 
}
exports.modifyProducts = (req, res, next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('modify-products', {productos: rows});
        })
        .catch(err => console.log(err)); 
}
exports.editProduct = (req, res, next) => {
    const isEditEnabled = req.query.edit;
    if (!isEditEnabled) {
        return res.redirect('/');
    }
    const platilloId = req.params.platilloId;//Extraigo el Id desde la url de edit-product    
    Product.findById(platilloId)
        .then(([platilloEncontrado]) => {
            res.render('modify-products', {
                platilloEncontrado: platilloEncontrado[0],//Paso index 0 porque se espera un array
                editing: isEditEnabled
            });
        })
        .catch(err => console.log(err));
}
exports.postEditProduct = (req, res, next) => {
    const platilloId = req.body.input_platilloId;
    //updated values obtained in edit-product
    const updatedTitle = req.body.title;
    const updatedDescription = req.body.description;
    const updatedPrice = req.body.price;
    const updatedImage = req.body.img;
    const updatedTag = req.body.tag;
    const updatedPlatillo = new Product(updatedTitle, updatedDescription, updatedPrice, updatedImage, updatedTag, platilloId);
    updatedPlatillo.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
}
exports.postDeleteProduct = (req, res, next) => {
    const platilloId = req.body.productId;
    const deleteProductById = Product.delete(platilloId);
    res.redirect('/admin/modify-products');
}