const { Reviews } = require('../../db.js')


const getReviews = async (req, res) => {
    try {
        const allReviews = await Reviews.findAll()
        res.send(allReviews);
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { getReviews };