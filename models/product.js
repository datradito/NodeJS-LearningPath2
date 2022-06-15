const db = require('../util/database');


//const fs = require('fs');
//const path = require('path');

const Cart = require('./cart');

/* deprecated unidad 9
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'77
);*/

/*/const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};*/

module.exports = class Product {
  constructor(id, nombre, edad, descripcion, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.edad = edad;
    this.precio = precio;
    this.imagen = imagen;
  }

  save() {
    return db.execute(
      'INSERT INTO gatos (nombre, edad, descripcion, imagen, precio) VALUES(?,?,?,?,?)',
      [ this.nombre, this.edad,  this.descripcion,this.imagen,this.precio]
    );
  }

  static fetchAll(cb) {
    return db.execute('SELECT * FROM gatos');
    /*getProductsFromFile(cb);*/
  };

  static findById(id, cd) {
    return db.execute('SELECT * FROM gatos WHERE id = ' + id + ';');
  }

  static deleteById(id) {
    return db.execute('DELETE FROM gatos WHERE id = ' + id + ';');
  }

  static updateById(updatedProduct) {
    var id = updatedProduct.id;
    var nombre = updatedProduct.nombre;
    var precio = updatedProduct.precio;
    var imagen = updatedProduct.imagen;
    var edad = updatedProduct.edad;
    var descripcion = updatedProduct.descripcion;
    return db.execute('UPDATE gatos SET nombre = "' + nombre + '", imagen = "' + imagen + '", precio = "'+precio + '", edad = "'+edad + '", descripcion = "' + descripcion + '" WHERE id = ' + id + ';');
  }

}
