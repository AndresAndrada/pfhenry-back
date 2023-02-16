const Router = require('express');
const { postType } = require('../../controllers/types/postType');

const typesRouter = Router();

// POST
typesRouter.post('/', postType);

module.exports = typesRouter;