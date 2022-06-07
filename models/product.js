const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.module.filename), 'data', 'products.json');

const getProductsFronFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
             return cb([])
        }else{
           cb(JSON.parse(fileContent))  
        }
        
    })
}

module.exports =  class Product {

    constructor(name) {
        this.name =  name;
    }

     save(){
        getProductsFronFile(products => {
              products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
        fs.readFile(p, (err, fileContent) => {
          
        });

     }

    static fetchAll(cb){
       getProductsFronFile(cb)
    }





}