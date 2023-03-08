const { Product } = require("../../db.js");

const vaciarCarrito = async (req, res) => {
    const { carrito } = req.body;
    // console.log(carrito, 'VACIAR CARRITO');
    try{
        carrito.map(async p => {
            await Product.update({ carrito: false }, { where: { id: p } });
        })
        const prod = await Product.findAll();
        res.send(prod);
    } catch (error) {
        res.send({ message: error.message });
    };
    // try {
    //     const productAdd = await Product.findByPk(id);
    //     if(productAdd.carrito === false) {
    //         await Product.update({ carrito: true}, { where: { id: id } });
            // res.send({ message: 'Product is already add' })
    //     }
    //     if(productAdd.carrito === true) {
    //         await Product.update({ carrito: false}, { where: { id: id } });
    //         res.send({ message: 'Product is added' })
    //     }
    // } 
};

module.exports = { vaciarCarrito };