const router = require('express').Router();
const {
  getCategories,
  getSingleCategory
} = require('../../controllers/categoryController.js');

// /api/categories
router.route('/').get(getCategories)

// /api/categories/:categoryId
router.route('/:id').get(getSingleCategory);

module.exports = router;