const { where } = require("sequelize");
const { Users } = require("../../db.js");

const patchUser = async (req, res) => {
    const { id } = req.params;
    const { admin } = req.body;
    try {
        return await Users.update({ admin: admin }, { where: id });
    } catch (error) {
        res.send({ message: error.message });
    }
}

module.exports = { patchUser };