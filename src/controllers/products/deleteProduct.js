const { Product } = require("../../db.js");

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const productDelte = await Product.findByPk(id);
        console.log(productDelte, 'PRODELTE');
        if(productDelte.deleted === false) {
            await Product.update({ deleted: true}, { where: { id: id } });
            const productAll = await Product.findAll();
            res.send(productAll);
        }
        if(productDelte.deleted === true) {
            await Product.update({ deleted: false}, { where: { id: id } });
            const productAll = await Product.findAll();
            res.send(productAll);
        }
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { deleteProduct };