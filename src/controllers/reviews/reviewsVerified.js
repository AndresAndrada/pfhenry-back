// const { Product } = require("../../db.js");
// const { Users } = require("../../db.js");
// const { Reviews } = require("../../db.js");

// const reviewsVerified = async (req, res) => {
//     const { ProductId, UserId } = req.params;
//     try {
//         // res.send('ESTO EN VERIFIC');
//         const firstFilters = await Product.findAll({
//             where: { id: ProductId },
//             inclide: {
//                 model: Users,
//                 through: { where: { UserId: UserId } }
//             }
//         });
//         console.log(firstFilters[0].dataValues, 'PRIMERO');
//         if(!firstFilters[0].dataValues) return res.send(false);
//         const secondFilters = await Reviews.findAll({ where: { ProductId, UserId } });
//         if(secondFilters.length == 0) return res.send(true);
//         else return res.send(false);
//     } catch (error) {
//         res.send({ message: error.message });
//     };
// };

// module.exports = { reviewsVerified };