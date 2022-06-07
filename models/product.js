const fs = require('fs');
const pathJSON = './data/menu.json';
const menuJson = fs.readFileSync(pathJSON);
const menuItems = JSON.parse(menuJson);

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
        fs.readFile(pathJSON, (err, fileContent) => {
            let menuItems = []
            if (!err) {
                menuItems = JSON.parse(fileContent);
            }
            if (this.id) {
                const existingProductIndex = menuItems.findIndex( prod => prod.id === this.id );
                const updatedProduct = [...menuItems];
                updatedProduct[existingProductIndex] = this;
                fs.writeFile(pathJSON, JSON.stringify(updatedProduct), (err) =>{
                    console.log(err);
                });
                console.log('tuki'+ this.id);

            } else {
                console.log('else'+ this.id);
                this.id = Math.random().toString();
                menuItems.push(this);
                fs.writeFile(pathJSON, JSON.stringify(menuItems), (err) =>{
                    console.log(err);
                });
            }
        })
    };
    static fetchAll() {
        return menuItems;
    }
    static findById(id){
        const platilloEncontrado = menuItems.find(i => i.id === id);
        return platilloEncontrado //return so that it can be used as object
    }
}