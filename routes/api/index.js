const router = require('express').Router();
const userRoutes = require('./userRoutes')
const chickenRoutes = require('./chickenRoutes')

router.use('/users', userRoutes);
router.use('/chickens', chickenRoutes);

module.exports = router;
