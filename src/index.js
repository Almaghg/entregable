const ProductManager = require("./ProductManager")

const manager = new ProductManager();

manager.addProduct({description: 'first product'})

console.log(manager.getProducts())