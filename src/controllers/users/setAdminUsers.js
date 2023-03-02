const { Users } = require("../../db.js");

const setAdminUsers = async (req, res) => {
    const { id } = req.params;
    try{
        const userAdmin = await Users.findByPk(id);
        if(userAdmin.admin === false) {
            await Users.update({ admin: true}, { where: {id: id} });
            res.send({ message: 'User is already Admin'});
        }
        if(userAdmin.admin === true) {
            await Users.update({ admin: false}, { where: {id: id} });
            res.send({ message: 'User is Admin'});
        };
    } catch (error) {
        req.send({ message: error.message });
    };
};

module.exports = { setAdminUsers };