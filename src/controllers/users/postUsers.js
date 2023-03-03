const { Users } = require('../../db.js');
const { newUser } = require('../email/emailCreate.js');


const postUsers = async (req, res) => {
    const { name, image, email,  contact, token } = req.body;
    try {
        const userFind = await Users.findAll({ where: { email: email } });
        if(!name || !email) return res.send({ message: "data required" });
        if (userFind.length) return res.send({ message: "User already exists" });
        const user = await Users.create({ name, image, email, contact, token });
        await newUser(name, email);
        // console.log(user, 'USUARIO');
        res.send({ admin: user.dataValues.admin, email: user.dataValues.email });
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { postUsers };