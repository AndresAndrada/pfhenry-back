const { Types } = require("../../db.js");

const postType = async (req, res) => {
    const { type } = req.body;
    try {
        const typeAll = await Types.findAll({ where: { type: type } });
        // console.log(typeAll, 'REPETIDO');
        if (typeAll.length) return res.send({ message: 'Type already exists' });
        await Types.create({ type });
        res.send({ message: 'Type created successfully' })
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { postType };