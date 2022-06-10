const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chicken extends Model {}

Chicken.init(
    {
        chicken_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Chicken;