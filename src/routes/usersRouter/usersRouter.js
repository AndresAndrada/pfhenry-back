const Router = require('express');
const { deleteUser } = require('../../controllers/users/deleteUsers.js');
const { getIdUsers } = require('../../controllers/users/getIdUsers.js');
const { getUsers } = require('../../controllers/users/getUsers.js');
const { postUsers } = require('../../controllers/users/postUsers.js')

const userReouter = Router();

// GET
userReouter.get('/', getUsers);
userReouter.get('/:id', getIdUsers);

// POST
userReouter.post('/', postUsers);

// DELETE
userReouter.delete('/:id', deleteUser)

module.exports = userReouter;