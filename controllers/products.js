const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        isLoggedIn: req.session.isLoggedIn
    });
};

exports.postAddProduct = (req, res, next) => {
    Product.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price, 
        img: req.body.img,
        tag: req.body.tag
    })
    .then(result => {
        //console.log(result);
        res.redirect('/admin/modify-products');
    })
    .catch(error => {
        console.log(error);
    });
};

exports.allProducts = (req, res, next) => {
    Product.findAll()
        .then(menuItems => {
            res.render('index', {productos: menuItems,
                isLoggedIn: req.session.isLoggedIn
        });
        })
        .catch(err => console.log(err)); 
}
exports.modifyProducts = (req, res, next) => {
    Product.findAll()
        .then(menuItems => {
            res.render('modify-products', {productos: menuItems,
                isLoggedIn: req.session.isLoggedIn
        });
        })
        .catch(err => console.log(err)); 
}
exports.editProduct = (req, res, next) => {
    const isEditEnabled = req.query.edit;
    if (!isEditEnabled) {
        return res.redirect('/');
    }
    const platilloId = req.params.platilloId;//Extraigo el Id desde la url de edit-product    
    
    Product.findByPk(platilloId)
        .then( platilloEncontrado => {
            res.render('edit-product', {
                platilloEncontrado: platilloEncontrado,
                editing: isEditEnabled,
                isLoggedIn: req.session.isLoggedIn
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
    Product.findByPk(platilloId)
        .then(platillo => {
            platillo.title = updatedTitle;
            platillo.description = updatedDescription;
            platillo.price = updatedPrice;
            platillo.img = updatedImage;
            platillo.tag = updatedTag;
            return platillo.save();
        })
        .then( result => {
            res.redirect('/admin/modify-products');
        })
        .catch(err => console.log(err))
}
exports.postDeleteProduct = (req, res, next) => {
    const platilloId = req.body.productId;
    Product.findByPk(platilloId)
        .then(platillo => {
            return platillo.destroy();
        })
        .then( result => {
            res.redirect('/admin/modify-products');
        })
        .catch(err => console.log(err))
}