const sequelize = require('../config/connection');
const { Accessory, Category } = require('../models');

const hatSeedData = require('./hatSeedData.json');
const shoeSeedData = require('./shoeSeedData.json');
const armSeedData = require('./armSeedData.json');

const catSeedData = require('./categorySeedData.json');

const seedMe = async () => {
    await sequelize.sync({ force: true });

    const categories = await Category.bulkCreate(catSeedData);

    const hats = await Accessory.bulkCreate(hatSeedData);
    const shoes = await Accessory.bulkCreate(shoeSeedData);
    const arms = await Accessory.bulkCreate(armSeedData);

    process.exit(0);
};

seedMe();