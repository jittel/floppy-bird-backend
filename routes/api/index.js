const router = require('express').Router();
const userRoutes = require('./userRoutes')
const chickenRoutes = require('./chickenRoutes')
const accessoryRoutes = require('./accessoryRoutes')
const categoryRoutes = require('./categoryRoutes')

router.use('/users', userRoutes);
router.use('/chickens', chickenRoutes);
router.use('/accessories', accessoryRoutes);
router.use('/categories', categoryRoutes);


module.exports = router;
