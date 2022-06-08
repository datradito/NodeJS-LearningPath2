const Product = require('../models/product');
const menu = Product.fetchAll();
exports.getAddProduct = (req, res, next) => {
    const menuItems = Product.fetchAll();
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
    platillo.save();
    res.render('add-product');
};

exports.allProducts = (req, res, next) => {
    res.render('index', {productos: menu});
}
exports.modifyProducts = (req, res, next) => {
    res.render('modify-products', {productos: menu});
}
exports.editProduct = (req, res, next) => {
    const isEditEnabled = req.query.edit;
    if (!isEditEnabled) {
        return res.redirect('/');
    }
    const platilloId = req.params.platilloId;//Extraigo el Id desde la url de edit-product    
    const platilloEncontrado = Product.findById(platilloId);
    res.render('edit-product', {
        platilloEncontrado: platilloEncontrado,
        editing: isEditEnabled
    });
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
    updatedPlatillo.save();
    res.redirect('/');
}
exports.postDeleteProduct = (req, res, next) => {
    const platilloId = req.body.productId;
    const deleteProductById = Product.delete(platilloId);
    res.redirect('/admin/modify-products');
}