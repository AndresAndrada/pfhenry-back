const Router = require("express");
const { checkout } = require("../../controllers/metodoPagoStripe/stripe");

const pagoRouter = Router();

pagoRouter.post("/", checkout);

module.exports = pagoRouter;