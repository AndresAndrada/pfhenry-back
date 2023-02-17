const { Product } = require("../../db.js");

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const productDelte = await Product.findByPk(id);
        if(productDelte.deleted === false) {
            await Product.update({ deleted: true}, { where: { id: id } });
            res.send({ message: 'Product is already deleted' })
        }
        if(productDelte.deleted === true) {
            await Product.update({ deleted: false}, { where: { id: id } });
            res.send({ message: 'Product is active' })
        }
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { deleteProduct };