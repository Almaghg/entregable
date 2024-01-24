class ProductManager {
    constructor(path) {
        this.path
        this.products = [];
        this.id = 1;
    }

addProduct (tittle, description, price, thumbnail, code, stock) {
    if (!tittle || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios")
    }


if (this.products.some(product => product.code === code)){
    console.error("El código ya está en uso. Ingresa un código único");
}

const newProduct = {
    id:this.id++,
    tittle,
    description,
    price,
    thumbnail,
    code,
    stock
};

this.products.push(newProduct);
console.log("Producto agregado correctamente,", newProduct);
}

getProducts(){
    return this.products;
}

getProductById(id){
    const product = this.products.find(product => product.id === id);

    if (product){
        return product;
    } else {
        console.error("Producto no encontrado. ID", id);
        return null;
    }
}
}

const productManager = new productManager();

productManager.addProduct("Producto 1", "Descripción 1", 10, "imagen1.jpg", "A001", 100);
productManager.addProduct("Producto 2", "Descripción 2", 20, "imagen1.jpg", "A001", 50);

const allProducts = productManager.getProducts();
console.log("Todos los productos: ", allProducts);

const productById = productManager.getProductById(1);
console.log("Producto por ID: ", productById);

const undefinedProduct = productManager.getProductById(5);