const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Accessory extends Model {}

Accessory.init(
    {
        accessory_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Accessory;