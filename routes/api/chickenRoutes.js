const router = require('express').Router();
const {
  getChickens,
  getSingleChicken
} = require('../../controllers/chickenController.js');

// /api/chickens
router.route('/').get(getChickens)

// /api/chickens/:chickenId
router.route('/:id').get(getSingleChicken);

module.exports = router;
