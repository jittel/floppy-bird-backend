// const Student = require('./Student');
// const Course = require('./Course');

// module.exports = { Student, Course };


const User = require('./User');
const Category = require('./Category');
const Chicken = require('./Chicken');
const Accessory = require('./Accessory');

User.hasOne(Chicken);
Chicken.belongsTo(User);



module.exports = { User, Category, Chicken, Accessory };