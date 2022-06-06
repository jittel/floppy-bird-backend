const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Accessory extends Model {}

Accessory.init(
    {
        accessory_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accessory_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        accessory_img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Accessory;