const { Users } = require("../../db.js");

const setAdminUsers = async (req, res) => {
    const { id } = req.params;
    try{
        const userAdmin = await Users.findByPk(id);
        console.log(userAdmin, "ADMIN")
        if(userAdmin.admin === false) {
            await Users.update({ admin: true}, { where: {id: id} });
            res.send({ message: 'User is already Admin'});
        }
        if(userAdmin.admin === true) {
            await Users.update({ admin: false}, { where: {id: id} });
            res.send({ message: 'User is Admin'});
        };
    } catch (error) {
        req.send({ message: error });
    };
};

module.exports = { setAdminUsers };