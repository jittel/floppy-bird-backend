const User = require('./User');
const Category = require('./Category');
const Chicken = require('./Chicken');
const Accessory = require('./Accessory');

User.hasOne(Chicken);
Chicken.belongsTo(User);

User.hasMany(Accessory);
Accessory.hasMany(User);

Category.hasMany(Accessory);
Accessory.belongsTo(Category);

module.exports = { User, Category, Chicken, Accessory };
