const Router = require('express');
const { postReviews } = require('../../controllers/reviews/reviews');
const { reviewsVerified } = require('../../controllers/reviews/reviewsVerified');

const reviewsRouter = Router();

// GET
reviewsRouter.get('/:ProductId/:UserId', reviewsVerified);

// POST
reviewsRouter.post('/', postReviews);
 
module.exports = reviewsRouter;