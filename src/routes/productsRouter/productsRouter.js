const Router = require('express');
const { getIdProduct } = require('../../controllers/products/getIdProduct');
const { getProduct } = require('../../controllers/products/getProducts');
const { postProducts } = require('../../controllers/products/postProducts');

const productsRouter = Router();

// GET
productsRouter.get('/', getProduct);
productsRouter.get('/:id', getIdProduct);

// POST
productsRouter.post('/', postProducts);

module.exports = productsRouter;