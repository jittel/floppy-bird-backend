const sequelize = require('../config/connection');
const { Accessory } = require('../models');

const hatSeedData = require('./hatSeedData.json');

const seedMe = async () => {
    await sequelize.sync({ force: true });

    const hats = await Accessory.bulkCreate(hatSeedData);
    process.exit(0);
};

seedMe();