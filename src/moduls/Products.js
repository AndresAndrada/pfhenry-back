const { DataTypes } = require("sequelize");

const Product = (sequelize) => {
    sequelize.define('Product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            //allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(3, 2), // hasta un maximo de 9999.99
            //allowNull: false
        },
        type: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        carrito: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rating: {
            type: DataTypes.DECIMAL(3, 2),
            defaultValue: 5.0,
        },
        count: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        timestamps: false
    }
)}

module.exports = Product;