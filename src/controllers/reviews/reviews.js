const { Reviews } = require("../../db.js");
const { Product } = require("../../db.js");

const postReviews = async (req, res) => {
    const { puntuation, ProductId, UserId } = req.body;
    try {
        await Reviews.create({ puntuation, ProductId, UserId });
        let reviewProduct = await Product.findByPk(ProductId);
        let prevRating = reviewProduct.rating;
        let prevCount = reviewProduct.count;
        let newCount = prevCount + 1;
        let newRating = (prevRating * prevCount + puntuation) / newCount;
        await Product.update({ 
            rating: newRating, count: newCount 
        }, 
        { 
            where: { 
                id: ProductId 
            } 
        });
        res.send({ message: 'Review create' });      
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { postReviews };