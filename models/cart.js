const fs = require('fs');
const pathJSON = './data/cart.json';
//Cart JSON clean version should be {"products":[],"totalPrice":0}

module.exports = class Cart {    
    static addProduct(id, productPrice){
        fs.readFile(pathJSON, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            //Ver si ya tengo un producto guardado para saber si agregarlo al carrito o si incrementar su cantidad
            const savedProductIndex = cart.products.findIndex(prod => prod.id === id);
            const savedProduct = cart.products[savedProductIndex];
            let updatedProduct;
            if (savedProduct) {
                updatedProduct = {...savedProduct}; //Copy the saved product properties
                updatedProduct.quantity = updatedProduct.quantity + 1;
                cart.products = [...cart.products];
                cart.products[savedProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, quantity: 1};
                cart.products = [...cart.products, updatedProduct];
            };
            cart.totalPrice = cart.totalPrice + +productPrice;//the + before productPrice converts it to a number
            fs.writeFile(pathJSON, JSON.stringify(cart), err => {
            });
        });
    };
}