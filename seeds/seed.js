const sequelize = require('../config/connection');
const { Accessory, Category, User, Chicken } = require('../models');

const hatSeedData = require('./hatSeedData.json');
const shoeSeedData = require('./shoeSeedData.json');
const armSeedData = require('./armSeedData.json');
const catSeedData = require('./categorySeedData.json');
// const userSeedData = require('./userSeedData.json');
// const chiSeedData = require('./chickenSeedData.json');

const seedMe = async () => {
    await sequelize.sync({ force: true });

    const categories = await Category.bulkCreate(catSeedData);

    const hats = await Accessory.bulkCreate(hatSeedData);
    const shoes = await Accessory.bulkCreate(shoeSeedData);
    const arms = await Accessory.bulkCreate(armSeedData);
    // const users = await User.bulkCreate(userSeedData);
    // const chickies = await Chicken.bulkCreate(chiSeedData);

    const newJeff = await User.create({
        username: "jeff",
        password: "password",
    })
    const newChickenJeff = await Chicken.create({
        chicken_name:"joof",
        UserId: 1
    })
    await newJeff.addAccessory(1);

    const newNate = await User.create({
        username: "nate",
        password: "password",
    })
    const newChickenNate = await Chicken.create({
        chicken_name:"chimken",
        UserId: 2
    })
    await newNate.addAccessory(1);

    const newLola = await User.create({
        username: "lola",
        password: "password",
    })
    const newChickenLola = await Chicken.create({
        chicken_name:"yicken",
        UserId: 3
    })
    await newLola.addAccessory(1);

    const newStef = await User.create({
        username: "stefan",
        password: "password",
    })
    const newChickenStef = await Chicken.create({
        chicken_name:"fleep",
        UserId: 4
    })
    await newStef.addAccessory(1);
    
    process.exit(0);
};

seedMe();