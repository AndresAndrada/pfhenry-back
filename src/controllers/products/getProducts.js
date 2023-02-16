const { Product } = require("../../db.js")

const getProduct = async (req, res) => {
    try {
        const productId = await Product.findAll();
        // console.log(productId, 'PROD');
        res.send(productId);
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { getProduct };