const db = require('../util/database');

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
    static deleteProduct(id, productPrice){
        fs.readFile(pathJSON, (err, fileContent) => {
            if (err) {
                return;
            }
            const updatedCart ={...JSON.parse(fileContent)};
            const product = updatedCart.products.findIndex(prod => prod.id === id);
            const productQuantity = product.quantity;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id)
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQuantity;

            fs.writeFile(pathJSON, JSON.stringify(updatedCart), err => {
                console.log(err);
            });
        });
    };
    static fetchCart() {
        return db.execute('SELECT * FROM cart WHERE');
    }
}