const { Users } = require('../../db.js');
const { newUser } = require('../email/emailCreate.js');


const postUsers = async (req, res) => {
    const { name, email, contact, token } = req.body;
    try {
        const userFind = await Users.findAll({ where: { email: email } });
        if(!name || !email) return res.send({ message: "data required" });
        if (userFind.length) return res.send({ message: "User already exists" });
        await Users.create({ name, email, contact, token });
        await newUser(name, email);
        res.send({ message: 'User created successfully'});
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { postUsers };