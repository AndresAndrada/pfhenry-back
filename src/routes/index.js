const { Router } = require('express');
const pagoRouter = require('./pagoRouter/pagoRouter');
const productsRouter = require('./productsRouter/productsRouter');
const reviewsRouter = require('./reviewsRouter/reviewsRouter');
const typesRouter = require('./typeRouter/typeRouter');
const userReouter = require('./usersRouter/usersRouter');
const router = Router();

// GET
router.use('/users', userReouter);
router.use('/products', productsRouter);
router.use('/types', typesRouter);
router.use('/reviews', reviewsRouter);
router.use('/checkout', pagoRouter);

module.exports = router;