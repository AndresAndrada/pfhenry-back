const { Types } = require("../../db.js");

const getTypes = async (req, res) => {
    try {
        const typesAll = await Types.findAll();
        // console.log(typesAll, 'TYPE');
        res.send(typesAll);      
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { getTypes };