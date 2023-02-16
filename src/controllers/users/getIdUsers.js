const { Users } = require("../../db.js");

const getIdUsers = async (req, res) => {
    const { id } = req.params;
    try {
        const findId = await Users.findByPk(id);
        // console.log(findId, 'USERS ID');
        res.send(findId);
    } catch (error) {
        res.send({ message: error })
    };
};

module.exports = { getIdUsers };
