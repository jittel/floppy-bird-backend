const User = require('./User');
const Category = require('./Category');
const Chicken = require('./Chicken');
const Accessory = require('./Accessory');

User.hasOne(Chicken);
Chicken.belongsTo(User);

User.belongsToMany(Accessory,
    {
        through: "UserAccessory"
    }
);
Accessory.belongsToMany(User,
    {
        through: "UserAccessory"
    }
);

Category.hasMany(Accessory);
Accessory.belongsTo(Category);

Chicken.hasMany(Accessory);
Accessory.hasMany(Chicken);

module.exports = { User, Category, Chicken, Accessory};
