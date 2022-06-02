const { User, Chicken } = require('../models')
const jwt = require("jsonwebtoken");

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.findAll()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body)
            const newChicken = await Chicken.create({
                chicken_name: req.body.chicken_name,
                user_id: newUser.id
            })
            const token = jwt.sign({
                userId: newUser.id
            }, process.env.JWT_SECRET, {
                expiresIn: "6h"
            })
            return res.json({
                user: newUser,
                chicken: newChicken,
                token: token
            })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    //log in to user
    login(req, res) {
        User.findOne({
            where: {
                username: req.body.username
            }
        }).then(foundUser => {
            if (!foundUser) {
                return res.status(401).json({ msg: "invalid login credentials" })
            }
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                const token = jwt.sign({
                    userId: foundUser.id
                }, process.env.JWT_SECRET, {
                    expiresIn: "6h"
                })
                return res.json({
                    user: foundUser,
                    token: token
                })
            }
            return res.status(401).json({ msg: "invalid login credentials" })
        })
    },
    // Delete a user and associated apps
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Application.deleteMany({ _id: { $in: user.applications } })
            )
            .then(() => res.json({ message: 'User and associated apps deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
}