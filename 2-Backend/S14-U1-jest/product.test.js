const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product'); // importamos las funciones que vamos a testear


/**
 * Para poder testear las funciones, necesitamos que la variable products esté vacía antes de cada test. 
*/
beforeEach(() => {
    resetProducts();
});

/**
 * También podemos vaciar la variable products después de cada test
 * afterEach(() => {
 *  resetProducts();
 * });
 */

/**
 * Para testear la función addProduct, necesitamos comprobar que:
 * 1. No lance un error al añadir un producto con nombre y precio
 * 2. Devuelva un array con un objeto con los datos del producto
 * 3. Lance un error al añadir un producto cuyo nombre ya existe
 * 4. Lance un error al añadir un producto con nombre null
 * 5. Lance un error al añadir un producto con precio null
 */
describe('Adding Products', () => {
    
    it('should add a product', () => {
        expect(()=>addProduct('apple', 1)).not.toThrow(); // esperamos que no lance un error al añadir un producto con nombre y precio
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 1}]); // esperamos que nos devuelva un array con un objeto con los datos del producto
        addProduct('banana',3); // añadimos un producto para comprobar que se añade correctamente y que el id se incrementa correctamente
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 1},{id:1,name: 'banana', price: 3}]); // comprobamos que se ha añadido correctamente
    });
    it('should fail when adding a repeated product', () => {
        addProduct('apple', 1); // añadimos un producto para poder comprobar que no se añade un producto repetido
        expect(()=>addProduct('apple', 1)).toThrow(); // esperamos que lance un error al añadir un producto cuyo nombre ya existe
    });
    it('should fail when adding a product with no name', () => {
        expect(()=>addProduct(null,3)).toThrow(); // esperamos que lance un error al añadir un producto con nombre null
    });
    it('should fail when adding a product with no price', () => {
        expect(()=>addProduct('fish',null)).toThrow(); // esperamos que lance un error al añadir un producto con precio null
    });
    
});
/**
 * Una vez testeada la función addProduct, podemos usarla para testear las siguientes funciones sin necesidad de probar su funcionamiento interno.
 * Para testear la función removeProduct, necesitamos comprobar que:
 * 1. Lance un error al intentar eliminar un producto que no existe
 * 2. No lance un error al eliminar un producto que existe
 * 3. Elimine el producto
 */
describe('Removing Products', () => {
    it('should remove a product', () => {
        addProduct('banana', 2); // añadimos un producto para poder eliminarlo
        expect(getProducts()).toEqual([{id:0,name: 'banana', price: 2}]); // comprobamos que se ha añadido correctamente
        expect(()=>removeProduct('apple')).toThrow(); // esperamos que lance un error al intentar eliminar un producto que no existe
        expect(getProducts()).toEqual([{id:0,name: 'banana', price: 2}]); // comprobamos que no se ha eliminado ningún producto
        expect(()=>removeProduct(0)).not.toThrow(); // esperamos que no lance un error al eliminar un producto que existe
        expect(getProducts()).toEqual([]); // comprobamos que se ha eliminado correctamente
    });
});

/**
 * Para testear la función getProduct, necesitamos comprobar que:
 * 1. Devuelva un producto si existe
 * 2. Lance un error si el producto no existe
 */ 
describe('Getting a single product', () => {
    it('should get a product', () => {
        addProduct('banana', 2); // añadimos un producto para poder obtenerlo
        expect(getProducts()).toEqual([{id:0,name: 'banana', price: 2}]); // comprobamos que se ha añadido correctamente
        expect(()=>getProduct('apple')).toThrow(); // esperamos que lance un error al intentar obtener un producto que no existe
        expect(()=>getProduct(0)).not.toThrow(); // esperamos que no lance un error al obtener un producto que existe
        addProduct('apple', 3); // añadimos un producto para poder obtenerlo
        expect(()=>getProduct(1)).not.toThrow(); // esperamos que no lance un error al obtener un producto que existe
        expect(getProduct(1)).toEqual({id:1,name: 'apple', price: 3}); // comprobamos que se ha obtenido correctamente
    });
});

/**
 * Para testear la función updateProduct, necesitamos comprobar que:
 * 1. Lance un error si el producto no existe
 * 2. Actualice el producto
 * 3. Actualice solo el nombre
 * 4. Actualice solo el precio
 */
describe('Updating Products', () => {
    it('should update a product', () => {
        addProduct('banana', 2); // añadimos un producto para poder actualizarlo
        expect(getProducts()).toEqual([{id:0,name: 'banana', price: 2}]); // comprobamos que se ha añadido correctamente
        updateProduct(0,'apple', 3); // actualizamos el producto
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 3}]); // comprobamos que se ha actualizado correctamente
    });
    it('should fail when updating a product that does not exist', () => {
        expect(()=>updateProduct(0,'apple', 3)).toThrow(); // esperamos que lance un error al intentar actualizar un producto que no existe
    });
    it('should only update the price', () => {
        addProduct('banana', 2); // añadimos un producto para poder actualizarlo
        expect(getProducts()).toEqual([{id:0,name: 'banana', price: 2}]); // comprobamos que se ha añadido correctamente
        updateProduct(0,null, 3); // actualizamos el producto
        expect(getProducts()).toEqual([{id:0,name: 'banana', price: 3}]); // comprobamos que se ha actualizado correctamente
    });
    it('should only update the name', () => {
        addProduct('banana', 2); // añadimos un producto para poder actualizarlo
        expect(getProducts()).toEqual([{id:0,name: 'banana', price: 2}]); // comprobamos que se ha añadido correctamente
        updateProduct(0,'apple', null); // actualizamos el producto
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 2}]); // comprobamos que se ha actualizado correctamente     
    });
});




//! test 3 --- removeProduct
// describe('remove product', () => {
//     test('should remove a product', () => {
//         addProduct('teclado', 150)
//         removeProduct(1)
//         expect(getProducts()).toEqual([]) // test producto eliminado correctamente
//     })

//     test('should throw an error if the product does not exists', () => {
//         expect(() => removeProduct(999)).toThrow('product does not exists') // test producto no existe
//     })

//     test('should not remove a product', () => {
//         addProduct('teclado', 150)
//         removeProduct(1)
//         expect(getProducts()).toEqual({ id: 1, name : 'teclado', price : 150 }) // test producto no eliminado
//     })
// })







//! test 2 --- removeProduct
        // describe('Removing Products', () => {
        //     test('should remove a product', () => {
        //         addProduct('Laptop', 1000);
        //         expect(getProducts()).toHaveLength(1);
                
        //         removeProduct(1);
        //         expect(getProducts()).toHaveLength(0);
        //     });
        //     test('should throw an error if the product does not exist', () => {
        //         expect(() => removeProduct(1)).toThrow('product does not exists');
        //     });
        // })




//! test 2 --- addProduct
// describe('addProduct', () => {
//     it('Should add product', () => {
//         const product = addProduct('macbook', 1200);
//         expect(product).toEqual({
//             id: 1,
//             name : 'macbook',
//             price : 1200
//         })
//     })
// })

//! test 3 --- addProduct -- con 'test'
// describe('addProduct', () => {
//     test('Should add product', () => {
//         addProduct('laptop', 1000);
//         expect(getProducts()).toEqual([{
//             id: 1,
//             name : 'laptop',
//             price : 1000
//         }])
//     })
// })

