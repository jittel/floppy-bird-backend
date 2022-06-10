const sequelize = require('../config/connection');
const { Accessory, Category, User, Chicken } = require('../models');

const hatSeedData = require('./hatSeedData.json');
const shoeSeedData = require('./shoeSeedData.json');
const armSeedData = require('./armSeedData.json');
const catSeedData = require('./categorySeedData.json');
const userSeedData = require('./userSeedData.json');
const chiSeedData = require('./chickenSeedData.json');

const seedMe = async () => {
    await sequelize.sync({ force: true });

    const categories = await Category.bulkCreate(catSeedData);

    const hats = await Accessory.bulkCreate(hatSeedData);
    const shoes = await Accessory.bulkCreate(shoeSeedData);
    const arms = await Accessory.bulkCreate(armSeedData);
    const users = await User.bulkCreate(userSeedData);
    const chickies = await Chicken.bulkCreate(chiSeedData);

    // const newUser = await User.create({
    //     username: "jeff",
    //     password: "password",
    // })
    // const newChicken = await Chicken.create({
    //     chicken_name:"jeff2"
    // })
    // await users.addAccessory(2)
    
    process.exit(0);
};

seedMe();