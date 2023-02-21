const { Product } = require("../../db.js")

const getProduct = async (req, res) => {
    const { name, filters } = req.query;
    // console.log(name, 'NAME');
    try {
        const allProduct = await Product.findAll();
        if(name && !filters) {
            // console.log(productAll, 'PROD');
            const productName = allProduct.filter(pt => pt.name.toLowerCase().match(name.toLowerCase())); 
            if(!productName.length) return res.send({ menssage: 'Product not found' });
            return res.send(productName);
        } if(filters && !name) {
            if(filters === 'az') { 
                const filter = allProduct.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    else return -1;
            });
            return res.send(filter);
            }
            if(filters === 'za') {
                const filter = allProduct.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1; 
                    else return 1;
                });
                return res.send(filter);
            };
            if(filters === 'min') {
                const filterRat1 = allProduct.sort((a, b) => {
                    if(a.rating === b.rating) return 1;
                    else return -1;
                });
                // console.log(filter1, 'FILTER!');
                return res.send(filterRat1);
            };
            if(filters === 'max') {
                const filterRat = allProduct.sort((a, b) => {
                    if(a.rating === b.rating) return -1;
                    else return 1;
                });
                // console.log(filterRat, 'FILTER!');
                return res.send(filterRat);
            };
            // console.log(filter, 'FILTER!');
            return res.send(filter);
        }
        else {
            const productAll = await Product.findAll();
            // console.log(productAll, 'PROD');
            res.send(productAll);
        }
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { getProduct };