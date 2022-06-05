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

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/login
router.route('/login').post(login)

router.route('/verifyToken').get(verifyToken)

module.exports = router;