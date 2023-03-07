const express = require('express');
const { where } = require('sequelize');
const Stripe = require('stripe');
const { Product } = require('../../db.js');
require('dotenv').config()
const { KEY_STRIPE } = process.env


const stripe = new Stripe('sk_test_51MgdeaLkh1uY73aUnv45N7gz9cP858XLXShW7OYyU89MqcTTmIl00gZlaL2tNMUIv6aRFJca4ceRF6eF8OwWCHfg00E48PkgU8');
// const stripe = new Stripe(KEY_STRIPE);

// const cors = require('cors');

// const app = express();

// app.use(cors) this is already on server.js

const checkout= async (req, res) => {
    // you can get more data to find in a database, and so on
    const { id, amount } = req.body;
    try {
      await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Product",
      payment_method: id,
      confirm: true,
      });
      await Product.findAll({ quantity: quantity-1 }, { where: { id: id }});
    // console.log(payment);
      return res.send({ message: "Successful Payment" });
    } catch (error) {
      // console.log(error);
      return res.json({ message: error.raw.message });
    }
  };
  
  module.exports={ checkout };