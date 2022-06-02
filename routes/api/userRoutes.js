const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  login
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/login
router.route('/login').post(login)

module.exports = router;