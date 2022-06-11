const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chicken extends Model {}

Chicken.init(
    {
        chicken_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        equip_shoes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        equip_hats: {
            type: DataTypes.STRING,
            allowNull: true
        },
        equip_arms: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
    }
);

module.exports = Chicken;