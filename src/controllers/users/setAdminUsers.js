const { Users } = require("../../db.js");

const setAdminUsers = async (req, res) => {
    const { id } = req.params;
    try{
        const userAdmin = await Users.findByPk(id);
        if(userAdmin.admin === false) {
            await Users.update({ admin: true}, { where: {id: id} });
            console.log(userAdmin.dataValues, 'MODIFIC');
            res.send({ admin: userAdmin.dataValues.admin, email: userAdmin.dataValues.email });
        }
        if(userAdmin.admin === true) {
            await Users.update({ admin: false}, { where: {id: id} });
            console.log(userAdmin.dataValues, 'MODIFIC');
            res.send({ admin: userAdmin.dataValues.admin, email: userAdmin.dataValues.email });
        };
    } catch (error) {
        req.send({ message: error.message });
    };
};

module.exports = { setAdminUsers };