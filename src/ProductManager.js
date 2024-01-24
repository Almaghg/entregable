class ProductManager {
    constructor(path) {
        this.path
        this.products = [];
        this.id = 1;
    }

addProduct (product) {
    product.id = ++ProductManager.id;
    this.products.push(product);
}

getProducts(){
    return this.products;
}

}

module.exports = ProductManager;

const newProduct = {
    id:this.id++,
    tittle,
    description,
    price,
    thumbnail,
    code,
    stock
};