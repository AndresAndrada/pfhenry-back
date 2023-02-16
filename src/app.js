const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const router = require('./routes/index.js');
const { sequelize } = require('./db.js');
// const { Users } = require('./db.js')

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());

server.use(router);

const { Users, Product, Types } = sequelize.models;
console.log(sequelize.models, 'MODELOS app');

Users.belongsToMany(Product, { through: 'product_user' });
Product.belongsToMany(Users, { through: 'product_user' });

Types.hasMany(Product);
Product.belongsTo(Types);

module.exports = server;