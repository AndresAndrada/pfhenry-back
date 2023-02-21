const { Product } = require("../../db.js");

const postProducts = async (req, res) => {
    const { name, quantity, description, image, price, type, rating, TypeId } = req.body;
    try {
        const repetido = await Product.findAll({ where: { name: name } });
        if(!name) return res.send({ message: "data required" });
        if(repetido.length) return res.send({ message: "Product already exists" })
        await Product.create({ name, quantity, description, image, price, type, rating, TypeId });
        res.send({ message: "Product created successfully" })
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { postProducts };