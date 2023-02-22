const { Product, Types } = require("../../db.js")
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

ORDER_BY = {
    max_price : ['price','DESC'],
    min_price:   ['price','ASC'],
    max_rating:['rating','DESC'],
    default: ['name', 'ASC']

}

const getProduct = async (req, res) => {
    const { name, orderby, types, pricerange } = req.query;
    const myOrderBy = (orderby)?ORDER_BY[orderby]: ORDER_BY['default']
    let whereName = (name)? {
        [Op.and]:[
        Sequelize.where(
            Sequelize.fn('lower', Sequelize.col('name')),
            {
              [Op.like]: name.toLowerCase()
            }
          ),
      ]
    }:null
    const wherePriceRange = (pricerange)?{ 
        price: {
            [Op.between]: pricerange.split(',')
        }
    }:{}
        if(whereName == null){
            whereName = {
                [Op.and]: [
                    wherePriceRange 
                ]
            }
        }else{
            whereName[Op.and].push(wherePriceRange)
        }
    const whereType = (types)?{
        id:{
          [Op.in]: types.split(',')
        }
      }:{}
    try {
            const products = await Product.findAll({
                include: [{
                    model: Types,
                    where: whereType
                }],
                order: [
                    myOrderBy,
                ],
                where: whereName
              });
            if(!products.length) return res.send([]);
            res.send(products);
      
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { getProduct };
