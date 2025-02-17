let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0

/**
 * Función para vaciar la variable products y resetear la variable id
 */
const resetProducts = () => {
    products = [];
    id = 0;
}

/**
 * Función para obtener la lista de productos
 * Devuelve la variable products
 */
const getProducts = () => {
    return products;
}

/**
 * Función para añadir un producto a la variable products
 * Si el producto ya existe, lanza un error
 * Si falta algún dato, lanza un error
 */
const addProduct = (name, price) => {
    if (!name || !price) throw new Error('Datos incorrectos');
    if (products.find((product) => product.name === name)) {
        throw new Error('Ya existe este producto');
    }
    const product = { name, price, id: id++ };
    products.push(product);
    return products;
}

/**
 * Función para eliminar un producto de la variable products
 * Si el producto no existe, lanza un error
 */
const removeProduct = (id) => {
    const product = products.find((product) => product.id === id);
    if (!product) {
        throw new Error('No existe este producto');
    }
    products = products.filter((product) => product.id !== id);
    return products;
}

/**
 * Función para obtener un producto de la variable products por su id
 * Si el producto no existe, lanza un error
 * Si el producto existe, devuelve el producto
 */
const getProduct = (id) => {
    const product = products.find((product) => product.id === id);
    if (!product) {
        throw new Error('No existe este producto');
    }
    return product;
}

/**
 * Función para actualizar un producto de la variable products por su id
 * Si el producto no existe, lanza un error
 * Si el producto existe, actualiza el producto
 * Si solo se le pasa un parámetro, actualiza ese parámetro
 */
const updateProduct = (id, name, price) => {
    const product = products.find((product) => product.id === id);
    if (!product) {
        throw new Error('No existe este producto');
    }
    if (name) {
        product.name = name;
    }
    if (price) {
        product.price = price;
    }
    return product;
}

module.exports = {
    resetProducts,
    getProducts,
    addProduct,
    removeProduct,
    getProduct,
    updateProduct,
};
