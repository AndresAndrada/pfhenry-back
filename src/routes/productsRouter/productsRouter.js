const Router = require('express');
const { agregarCarrito } = require('../../controllers/products/agregarCarrito');
const { deleteProduct } = require('../../controllers/products/deleteProduct');
const { getIdProduct } = require('../../controllers/products/getIdProduct');
const { getProduct } = require('../../controllers/products/getProducts');
const { postProducts } = require('../../controllers/products/postProducts');
const { vaciarCarrito } = require('../../controllers/products/vaciarCarrito');

const productsRouter = Router();

// GET
productsRouter.get('/', getProduct);
productsRouter.get('/:id', getIdProduct);

// POST
productsRouter.post('/', postProducts);

// Patch
productsRouter.patch('/carrito', vaciarCarrito);

// DELETE
productsRouter.delete('/:id', deleteProduct);
productsRouter.delete('/carrito/:id', agregarCarrito);


module.exports = productsRouter;