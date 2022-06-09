const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateEgg,
  login,
  verifyToken
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/eggs
// router.route('/eggs').put(updateEgg)

// /api/users/login
router.route('/login').post(login)

// /api/users/verifyToken
router.route('/verifyToken').get(verifyToken)

// /api/users/:id
router.route('/:id').get(getSingleUser).put(updateEgg);

module.exports = router;