const { DataTypes } = require("sequelize")

const Reviews = (sequelize) => {
    sequelize.define('Reviews', {
        id: {
            type: DataTypes.UUID, // este tipo de dato es para que no se repita con el de la API (234T324R23T)
            defaultValue: DataTypes.UUIDV4, // y se genera de independencia
            allowNull: false,
            primaryKey: true,
        },
        puntuation: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        coment: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    },
    {
        timestamps: false
    }    
)};

module.exports = Reviews;