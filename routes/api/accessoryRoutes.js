const router = require('express').Router();
const {
  getAccessories,
  getSingleAccessory
} = require('../../controllers/accessoryController.js');

// /api/accessories
router.route('/').get(getAccessories)

// /api/accessories/:accessoryId
router.route('/:id').get(getSingleAccessory);

module.exports = router;