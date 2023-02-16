const { Users } = require("../../db.js");

const deleteUser = async (req, res) => {
    const { id } = req.params;
    console.log(id, 'ID');
    try {
        const userDelete = await Users.findByPk(id);
        console.log(userDelete, 'DELETE');
        if(userDelete.deleted === false) {
            await Users.update({ deleted: true }, { where: { id: id } });
            res.send({ message: 'User is already deleted' });
        }
        if(userDelete.deleted === true) {
            await Users.update({ deleted: false }, { where: { id: id } });
            res.send({ message: 'User is active' });
        };
    } catch (error) {
        res.send({ message: error });
    };
};

module.exports = { deleteUser };