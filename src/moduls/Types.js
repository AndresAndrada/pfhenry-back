const { DataTypes } = require("sequelize");

const Types = (sequelize) => {
    sequelize.define('Types', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    });
};

module.exports = Types;