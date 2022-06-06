const sequelize = require('../config/connection');
const { Accessory } = require('../models');

const hatSeedData = require('./hatSeedData.json');
const shoeSeedData = require('./shoeSeedData.json');
const armSeedData = require('./armSeedData.json');

const seedMe = async () => {
    await sequelize.sync({ force: true });

    const hats = await Accessory.bulkCreate(hatSeedData);
    const shoes = await Accessory.bulkCreate(shoeSeedData);
    const arms = await Accessory.bulkCreate(armSeedData);

    process.exit(0);
};

seedMe();