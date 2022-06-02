const router = require('express').Router();
const {
  getChickens
} = require('../../controllers/chickenController.js');

// /api/chickens
router.route('/').get(getChickens).post(createChicken);

// /api/chickens/:chickenId
router.route('/:chickenId').get(getSingleChicken);