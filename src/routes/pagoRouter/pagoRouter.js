const {Checkout} = require ('../controllers/Payment');
const Router = require("express");

const pagoRouter = Router();

pagoRouter.post("/", Checkout)

module.exports = pagoRouter;