const { Users } = require('../../db.js')


const getUsers = async (req, res) => {
    try {
        const allUsers = await Users.findAll()
        res.send(allUsers);
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { getUsers };