const fs = require('fs');
const pathJSON = './menu.json';
const menuJson = fs.readFileSync(pathJSON);
const menuItems = JSON.parse(menuJson);

module.exports = class Product {
    constructor(title,description,price,img,tag) {
        this.title = title;
        this.description = description;
        this.price = '$' + price;
        this.img = img;
        this.tag = tag;
    }
    save(){
        this.id = Math.random().toString();
        fs.readFile(pathJSON, (err, fileContent) => {
            let menuItems = []
            if (!err) {
                menuItems = JSON.parse(fileContent);
            } 
            menuItems.push(this);
            fs.writeFile(pathJSON, JSON.stringify(menuItems), (err) =>{
                console.log(err);
            });
        })
    };
    static fetchAll() {
        return menuItems;
    }
    static findById(id){
        const platilloEncontrado = menuItems.find(i => i.id === id);
    }
}
/*this.img = img;
  */