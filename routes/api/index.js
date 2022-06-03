const router = require('express').Router();
const userRoutes = require('./userRoutes')
const chickenRoutes = require('./chickenRoutes')
const accessoryRoutes = require('./accessoryRoutes')

router.use('/users', userRoutes);
router.use('/chickens', chickenRoutes);
router.use('/accessories', accessoryRoutes);

module.exports = router;
