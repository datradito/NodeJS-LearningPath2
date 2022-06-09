const Cart = require('./cart');
const db = require('../util/database');

module.exports = class Product {
    constructor(title,description,price,img,tag,id) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.tag = tag;
        this.id = id;
    }
    save(){
        return db.execute('INSERT INTO products (title, description, price, img, tag) VALUES (?, ?, ?, ?, ?)',
        [this.title,
         this.description,
         this.price,
         this.img,
         this.tag]
        );

    }
    static delete(id){
    }
    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }
    static findById(id){
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
}