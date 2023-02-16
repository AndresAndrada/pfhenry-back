const { Product } = require("../../db.js")

const getIdProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const productId = await Product.findByPk(id)
        // console.log(productId, 'PROD');
        if(productId.delete === true) return res.send({ message: 'Product no found' });
        res.send(productId);
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { getIdProduct };