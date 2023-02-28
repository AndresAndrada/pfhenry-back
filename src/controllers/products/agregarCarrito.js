const { Product } = require("../../db.js");

const agregarCarrito = async (req, res) => {
    const { id } = req.params;
    try {
        const productAdd = await Product.findByPk(id);
        if(productAdd.carrito === false) {
            await Product.update({ carrito: true}, { where: { id: id } });
            res.send({ message: 'Product is already add' })
        }
        if(productAdd.carrito === true) {
            await Product.update({ carrito: false}, { where: { id: id } });
            res.send({ message: 'Product is added' })
        }
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { agregarCarrito };