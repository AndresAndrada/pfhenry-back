const express = require('express');
const Stripe = require('stripe');
require('dotenv').config()
const { KEY_STRIPE } = process.env


// const stripe = new Stripe('sk_test_51MUXsPIUj9w23It91QrfLJPJ5f35bB7vIzqE7jFkXpnNBitVcLcWKFZmzMs9xRaBSh7gAnydGuK0E58HGY0H82oR00nvki5Fxh');
const stripe = new Stripe(KEY_STRIPE);

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
    // console.log(payment);
      return res.send({ message: "Successful Payment" });
    } catch (error) {
      // console.log(error);
      return res.json({ message: error.raw.message });
    }
  };
  
  module.exports={ checkout };