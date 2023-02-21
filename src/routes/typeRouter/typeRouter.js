const Router = require('express');
const { getTypes } = require('../../controllers/types/getTypes');
const { postType } = require('../../controllers/types/postType');

const typesRouter = Router();

// GET
typesRouter.get('/', getTypes);

// POST
typesRouter.post('/', postType);

module.exports = typesRouter;