const { Product } = require("../../db.js");

const sacarCarrito = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.update({ carrito: false}, { where: { id: id } });
        const productAdd = await Product.findByPk(id);
        res.send(productAdd)

    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { sacarCarrito };