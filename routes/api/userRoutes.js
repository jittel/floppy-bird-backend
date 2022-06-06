const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  login,
  verifyToken
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/login
router.route('/login').post(login)

// /api/users/verifyToken
router.route('/verifyToken').get(verifyToken)

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;